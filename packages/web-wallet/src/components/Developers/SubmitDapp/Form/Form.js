import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Grid from 'components/shared/Grid';
import FormRow from 'components/shared/FormRow';
import TextInput from 'components/shared/TextInput';
import Textarea from 'components/shared/Textarea';
import Button from 'components/shared/Button';

class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    isDataUploadingToIpfs: PropTypes.bool,
    isSubmitting: PropTypes.bool,
    isUserAccountFunding: PropTypes.bool,
    isUserAccountLoading: PropTypes.bool,
    t: PropTypes.func.isRequired,
    watchStoreAccount: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isDataUploadingToIpfs: false,
  };

  componentDidMount() {
    this.props.watchStoreAccount();
  }

  render() {
    const {
      handleSubmit,
      t,
      isDataUploadingToIpfs,
      isSubmitting,
      isUserAccountFunding,
      isUserAccountLoading,
    } = this.props;
    const isBusy =
      isDataUploadingToIpfs ||
      isUserAccountFunding ||
      isUserAccountLoading ||
      isSubmitting;

    return (
      <Pane theme="narrow">
        <Pane.Header title={t('submitDapp.form.title')} />
        <form onSubmit={handleSubmit}>
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
              <Grid.Row flexWrap="wrap">
                <Grid.Col width={[1, 1, 1 / 2]} mb={20}>
                  <FormRow
                    caption={t('submitDapp.form.urlFieldCaption')}
                    component={TextInput}
                    label={t('submitDapp.form.urlFieldLabel')}
                    name="url"
                    placeholder="https://"
                    required
                  />
                </Grid.Col>
                <Grid.Col width={[1, 1, 1 / 2]} mb={20}>
                  <FormRow
                    caption={t('submitDapp.form.websiteUrlFieldCaption')}
                    component={TextInput}
                    label={t('submitDapp.form.websiteUrlFieldLabel')}
                    name="websiteUrl"
                    placeholder="https://"
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
                <Grid.Col width={1}>
                  <FormRow
                    caption={t('submitDapp.form.descriptionFieldCaption')}
                    component={Textarea}
                    label={t('submitDapp.form.descriptionFieldLabel')}
                    name="description"
                    required
                  />
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Pane.Section>
          <Pane.Section>
            <Grid>
              <Grid.Row>
                <Grid.Col width={1}>
                  <FormRow
                    caption={t('submitDapp.form.imageUrlFieldCaption')}
                    component={TextInput}
                    label={t('submitDapp.form.imageUrlFieldLabel')}
                    name="imageUrl"
                    placeholder="https://"
                    required
                  />
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Pane.Section>
          <Pane.Section>
            <Grid>
              <Grid.Row>
                <Grid.Col width={1}>
                  <FormRow
                    caption={t('submitDapp.form.supportUrlFieldCaption')}
                    component={TextInput}
                    label={t('submitDapp.form.supportUrlFieldLabel')}
                    name="supportUrl"
                    placeholder="https://"
                  />
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Pane.Section>
          <Pane.Section>
            <Button
              disabled={isBusy}
              isLoading={isBusy}
              onClick={handleSubmit}
              type="submit"
              wide
            >
              {t('submitDapp.form.submitButton')}
            </Button>
          </Pane.Section>
        </form>
      </Pane>
    );
  }
}

export default Form;
