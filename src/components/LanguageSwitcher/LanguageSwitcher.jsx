import { Dropdown } from 'react-bootstrap';
import styles from './LanguageSwitcher.scss';

const LanguageSwitcher = ({ i18n }) => {
  return (
    <div className={styles.language__switcher}>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Select Language
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => i18n.changeLanguage('en')}>
            ENG
          </Dropdown.Item>
          <Dropdown.Item onClick={() => i18n.changeLanguage('bn')}>
            BAN
          </Dropdown.Item>
          <Dropdown.Item onClick={() => i18n.changeLanguage('ch')}>
            CH
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;
