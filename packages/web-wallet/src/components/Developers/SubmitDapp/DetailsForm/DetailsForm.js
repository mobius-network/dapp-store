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
    submit: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    watchStoreAccount: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isDataUploadingToIpfs: false,
  };

  state = {
    submitConfirmationVisible: false,
  };

  componentDidMount() {
    this.props.watchStoreAccount();
  }

  toggleSubmitConfirmation = () => {
    this.setState({
      submitConfirmationVisible: !this.state.submitConfirmationVisible,
    });
  };

  render() {
    const {
      handleSubmit,
      t,
      isDataUploadingToIpfs,
      isSubmitting,
      isUserAccountFunding,
      isUserAccountLoading,
      submit,
    } = this.props;
    const isSubmissionBusy =
      isDataUploadingToIpfs ||
      isUserAccountFunding ||
      isUserAccountLoading ||
      isSubmitting;
    const { submitConfirmationVisible } = this.state;

    return (
      <Fragment>
        <Pane theme="narrow">
          <Pane.Header title={t('submitDapp.form.title')} />
          <form onSubmit={handleSubmit(this.toggleSubmitConfirmation)}>
            <Pane.Section>
              <Grid>
                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.form.nameFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.form.nameFieldLabel')}
                      name="name"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.form.taglineFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.form.taglineFieldLabel')}
                      name="tagline"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.form.descriptionFieldCaption')}
                      component={Textarea}
                      label={t('submitDapp.form.descriptionFieldLabel')}
                      name="description"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.form.imageUrlFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.form.imageUrlFieldLabel')}
                      name="image_url"
                      placeholder="https://"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.form.websiteUrlFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.form.websiteUrlFieldLabel')}
                      name="website_url"
                      placeholder="https://"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1}>
                    <FormRow
                      caption={t('submitDapp.form.supportUrlFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.form.supportUrlFieldLabel')}
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
                      caption={t('submitDapp.form.urlFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.form.urlFieldLabel')}
                      name="url"
                      placeholder="https://"
                      required
                    />
                  </Grid.Col>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Col width={1} mb={20}>
                    <FormRow
                      caption={t('submitDapp.form.authUrlFieldCaption')}
                      component={TextInput}
                      label={t('submitDapp.form.authUrlFieldLabel')}
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
                {t('submitDapp.form.submitButton')}
              </Button>
            </Pane.Footer>
          </form>
        </Pane>

        <ConfirmationModal
          isConfirming={isSubmissionBusy}
          isOpen={submitConfirmationVisible}
          onCancel={this.toggleSubmitConfirmation}
          onConfirm={submit}
          title="Submit confirm"
        >
          Are you sure?
        </ConfirmationModal>
      </Fragment>
    );
  }
}

export default DetailsForm;
