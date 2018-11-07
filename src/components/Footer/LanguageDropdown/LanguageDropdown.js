import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { faGlobe } from '@fortawesome/fontawesome-free-solid';

import Dropdown from 'components/shared/Dropdown';
import { LangDropdownToggle, LangDropdownIcon } from './styles';

const availableLangs = {
  en: 'English',
  ch: '繁體中文',
};

class LanguageDropdown extends Component {
  static propTypes = {
    i18n: PropTypes.shape({
      changeLanguage: PropTypes.func.isRequired,
    }).isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { i18n } = this.props;
    const currentLanguage = i18n.language;

    return (
      <Dropdown theme="secondary">
        <LangDropdownToggle fluid>
          <LangDropdownIcon icon={faGlobe} />
          {availableLangs[currentLanguage] || availableLangs.en}
        </LangDropdownToggle>
        <Dropdown.Menu align="right" placement="top">
          {Object.keys(availableLangs).map(lang => (
            <Dropdown.Item
              key={lang}
              disabled={currentLanguage.indexOf(lang) > -1}
              onClick={() => i18n.changeLanguage(lang)}
            >
              {availableLangs[lang]}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default LanguageDropdown;
