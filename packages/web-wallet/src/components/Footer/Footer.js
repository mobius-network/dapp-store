import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Grid from 'components/shared/Grid';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import LanguageDropdown from './LanguageDropdown';
import {
  CopyrightText,
  MainRow,
  MainRowContent,
  MainRowLogo,
  SecondaryRow,
} from './styles';

class Footer extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <Fragment>
        <MainRow>
          <Grid>
            <Grid.Row alignItems={['flex-start', 'center']} flexWrap="wrap">
              <Grid.Col width={[1, 1, 3 / 4]}>
                <MainRowContent>
                  <MainRowLogo />
                  <NavLinks />
                </MainRowContent>
              </Grid.Col>
              <Grid.Col width={[1, 1, 1 / 4]}>
                <LanguageDropdown />
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </MainRow>
        <SecondaryRow>
          <Grid>
            <Grid.Row
              alignItems={['flex-start', 'center']}
              flexWrap="wrap"
              mb={10}
            >
              <Grid.Col width={[1, 1, 1 / 2]}>
                <CopyrightText>{t('footer.copyright')}</CopyrightText>
              </Grid.Col>
              <Grid.Col width={[1, 1, 1 / 2]}>
                <SocialLinks />
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col width={1}>
                <CopyrightText>{t('footer.trademarks')}</CopyrightText>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </SecondaryRow>
      </Fragment>
    );
  }
}

export default translate()(Footer);
