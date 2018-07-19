import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Grid from 'components/shared/Grid';
import FormRow from 'components/shared/FormRow';
import TextInput from 'components/shared/TextInput';
import Textarea from 'components/shared/Textarea';
import Button from 'components/shared/Button';
import ConfirmationModal from 'components/shared/ConfirmationModal';

class DetailsForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    isDataUploadingToIpfs: PropTypes.bool,
    isSubmitting: PropTypes.bool,
    isUserAccountFunding: PropTypes.bool,
    isUserAccountLoading: PropTypes.bool,
    isUserAccountMerging: PropTypes.bool,
    mergeUserAccount: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isDataUploadingToIpfs: false,
    isSubmitting: false,
    isUserAccountFunding: false,
    isUserAccountLoading: false,
    isUserAccountMerging: false,
  };

  state = {
    submitConfirmationVisible: false,
    cancelConfirmationVisible: false,
  };

  toggleSubmitConfirmation = () => {
    this.setState({
      submitConfirmationVisible: !this.state.submitConfirmationVisible,
    });
  };

  toggleCancelConfirmation = () =>
    this.setState({
      cancelConfirmationVisible: !this.state.cancelConfirmationVisible,
    });

  render() {
    const {
      handleSubmit,
      isDataUploadingToIpfs,
      isSubmitting,
      isUserAccountFunding,
      isUserAccountLoading,
      isUserAccountMerging,
      mergeUserAccount,
      submit,
      t,
    } = this.props;
    const isSubmissionBusy =
      isDataUploadingToIpfs ||
      isUserAccountFunding ||
      isUserAccountLoading ||
      isSubmitting;
    const { submitConfirmationVisible, cancelConfirmationVisible } = this.state;

    return (
      <Fragment>
        <Pane theme="narrow">
          <Pane.Header title={t('submitDapp.detailsForm.title')} />
          <form onSubmit={handleSubmit(this.toggleSubmitConfirmation)}>
            <Pane.Section>
              <Grid>
                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.detailsForm.nameFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.detailsForm.nameFieldLabel')}
                      name="name"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.detailsForm.taglineFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.detailsForm.taglineFieldLabel')}
                      name="tagline"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.detailsForm.descriptionFieldCaption')}
                      component={Textarea}
                      label={t('submitDapp.detailsForm.descriptionFieldLabel')}
                      name="description"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.detailsForm.imageUrlFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.detailsForm.imageUrlFieldLabel')}
                      name="image_url"
                      placeholder="https://"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.detailsForm.websiteUrlFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.detailsForm.websiteUrlFieldLabel')}
                      name="website_url"
                      placeholder="https://"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1}>
                    <FormRow
                      caption={t('submitDapp.detailsForm.supportUrlFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.detailsForm.supportUrlFieldLabel')}
                      name="support_url"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </Pane.Section>

            <Pane.Section>
              <Grid>
                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.detailsForm.urlFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.detailsForm.urlFieldLabel')}
                      name="url"
                      placeholder="https://"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.detailsForm.authUrlFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.detailsForm.authUrlFieldLabel')}
                      name="auth_url"
                      placeholder="https://"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </Pane.Section>

            <Pane.Footer>
              <Button
                disabled={isSubmissionBusy}
                onClick={handleSubmit(this.toggleSubmitConfirmation)}
                type="submit"
                wide
              >
                {t('submitDapp.detailsForm.submitButton')}
              </Button>
              <Button
                onClick={this.toggleCancelConfirmation}
                type="button"
                theme="text"
                wide
              >
                {t('shared.cancel')}
              </Button>
            </Pane.Footer>
          </form>
        </Pane>

        <ConfirmationModal
          isConfirming={isSubmissionBusy}
          isOpen={submitConfirmationVisible}
          onCancel={this.toggleSubmitConfirmation}
          onConfirm={submit}
          title={t('submitDapp.detailsForm.submitConfirmationTitle')}
        >
          {t('submitDapp.detailsForm.submitConfirmationText')}
        </ConfirmationModal>

        <ConfirmationModal
          isConfirming={isUserAccountMerging}
          isOpen={cancelConfirmationVisible}
          onCancel={this.toggleCancelConfirmation}
          onConfirm={mergeUserAccount}
          title={t('submitDapp.detailsForm.cancelConfirmationTitle')}
        >
          {t('submitDapp.detailsForm.cancelConfirmationText')}
        </ConfirmationModal>
      </Fragment>
    );
  }
}

export default DetailsForm;
