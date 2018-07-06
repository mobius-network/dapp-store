import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pane from 'components/shared/Pane';
import Grid from 'components/shared/Grid';
import FormRow from 'components/shared/FormRow';
import TextInput from 'components/shared/TextInput';
import Textarea from 'components/shared/Textarea';
import Button from 'components/shared/Button';

class SubmitDapp extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit, t } = this.props;

    return (
      <Pane theme="narrow">
        <Pane.Header title={t('submitDapp.title')} />
        <form onSubmit={handleSubmit}>
          <Pane.Section>
            <Grid>
              <Grid.Row>
                <Grid.Col width={1} mb={20}>
                  <FormRow
                    caption={t('submitDapp.nameFieldCaption')}
                    component={TextInput}
                    label={t('submitDapp.nameFieldLabel')}
                    name="name"
                  />
                </Grid.Col>
              </Grid.Row>
              <Grid.Row flexWrap="wrap">
                <Grid.Col width={[1, 1, 1 / 2]} mb={20}>
                  <FormRow
                    caption={t('submitDapp.urlFieldCaption')}
                    component={TextInput}
                    label={t('submitDapp.urlFieldLabel')}
                    name="url"
                  />
                </Grid.Col>
                <Grid.Col width={[1, 1, 1 / 2]} mb={20}>
                  <FormRow
                    caption={t('submitDapp.websiteUrlFieldCaption')}
                    component={TextInput}
                    label={t('submitDapp.websiteUrlFieldLabel')}
                    name="websiteUrl"
                  />
                </Grid.Col>
              </Grid.Row>
              <Grid.Row>
                <Grid.Col width={1} mb={20}>
                  <FormRow
                    caption={t('submitDapp.taglineFieldCaption')}
                    component={TextInput}
                    label={t('submitDapp.taglineFieldLabel')}
                    name="tagline"
                  />
                </Grid.Col>
              </Grid.Row>
              <Grid.Row>
                <Grid.Col width={1}>
                  <FormRow
                    caption={t('submitDapp.descriptionFieldCaption')}
                    component={Textarea}
                    label={t('submitDapp.descriptionFieldLabel')}
                    name="description"
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
                    caption={t('submitDapp.imageUrlFieldCaption')}
                    component={TextInput}
                    label={t('submitDapp.imageUrlFieldLabel')}
                    name="imageUrl"
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
                    caption={t('submitDapp.supportUrlFieldCaption')}
                    component={TextInput}
                    label={t('submitDapp.supportUrlFieldLabel')}
                    name="supportUrl"
                  />
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Pane.Section>
          <Pane.Section>
            <Button onClick={handleSubmit} type="submit" wide>
              {t('submitDapp.submitButton')}
            </Button>
          </Pane.Section>
        </form>
      </Pane>
    );
  }
}

export default SubmitDapp;
