import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router';

import Pane from 'components/shared/Pane';
import Grid from 'components/shared/Grid';
import FormRow from 'components/shared/FormRow';
import TextInput from 'components/shared/TextInput';
import Textarea from 'components/shared/Textarea';
import Button from 'components/shared/Button';

class DappForm extends Component {
  static propTypes = {
    dirty: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    isBusy: PropTypes.bool,
    onBeforeSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isBusy: false,
  };

  render() {
    const {
      handleSubmit,
      dirty,
      isBusy,
      onBeforeSubmit,
      onCancel,
      t,
    } = this.props;

    return (
      <Fragment>
        <Prompt message={t('dappForm.promptMessage')} when={dirty} />

        <form onSubmit={handleSubmit(onBeforeSubmit)}>
          <Pane.Section>
            <Grid>
              <Grid.Row>
                <Grid.Col mb={20} width={1}>
                  <FormRow
                    caption={t('dappForm.nameFieldCaption')}
                    component={TextInput}
                    label={t('dappForm.nameFieldLabel')}
                    name="name"
                    required
                  />
                </Grid.Col>
              </Grid.Row>

              <Grid.Row>
                <Grid.Col mb={20} width={1}>
                  <FormRow
                    caption={t('dappForm.taglineFieldCaption')}
                    component={TextInput}
                    label={t('dappForm.taglineFieldLabel')}
                    name="tagline"
                    required
                  />
                </Grid.Col>
              </Grid.Row>

              <Grid.Row>
                <Grid.Col mb={20} width={1}>
                  <FormRow
                    caption={t('dappForm.descriptionFieldCaption')}
                    component={Textarea}
                    label={t('dappForm.descriptionFieldLabel')}
                    name="description"
                    required
                  />
                </Grid.Col>
              </Grid.Row>

              <Grid.Row>
                <Grid.Col mb={20} width={1}>
                  <FormRow
                    caption={t('dappForm.imageUrlFieldCaption')}
                    component={TextInput}
                    label={t('dappForm.imageUrlFieldLabel')}
                    name="image_url"
                    placeholder="https://"
                    required
                  />
                </Grid.Col>
              </Grid.Row>

              <Grid.Row>
                <Grid.Col mb={20} width={1}>
                  <FormRow
                    caption={t('dappForm.websiteUrlFieldCaption')}
                    component={TextInput}
                    label={t('dappForm.websiteUrlFieldLabel')}
                    name="website_url"
                    placeholder="https://"
                    required
                  />
                </Grid.Col>
              </Grid.Row>

              <Grid.Row>
                <Grid.Col width={1}>
                  <FormRow
                    caption={t('dappForm.supportUrlFieldCaption')}
                    component={TextInput}
                    label={t('dappForm.supportUrlFieldLabel')}
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
                <Grid.Col mb={20} width={1}>
                  <FormRow
                    caption={t('dappForm.urlFieldCaption')}
                    component={TextInput}
                    label={t('dappForm.urlFieldLabel')}
                    name="url"
                    placeholder="https://"
                    required
                  />
                </Grid.Col>
              </Grid.Row>

              <Grid.Row>
                <Grid.Col mb={20} width={1}>
                  <FormRow
                    caption={t('dappForm.authUrlFieldCaption')}
                    component={TextInput}
                    label={t('dappForm.authUrlFieldLabel')}
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
              disabled={isBusy}
              onClick={handleSubmit(onBeforeSubmit)}
              type="submit"
              wide
            >
              {t('dappForm.submitButton')}
            </Button>
            <Button onClick={onCancel} theme="text" type="button" wide>
              {t('shared.cancel')}
            </Button>
          </Pane.Footer>
        </form>
      </Fragment>
    );
  }
}

export default DappForm;
