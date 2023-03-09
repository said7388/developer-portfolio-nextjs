import React, { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeContext } from '../../contexts/theme-context';
import styles from '../../styles/changeTheme.module.css';

const ChangeTheme = () => {
  const { theme, changeTheme, isDark } = useContext(ThemeContext);

  return (
    <div
      className={styles.changeTheme}
    >
      <button
        onClick={changeTheme}
        aria-label='Back to top'>
        {isDark ?
          <BsFillSunFill
            className="text-2xl text-[#8B98A5] 
          hover:text-[#EFF3F4] hover:scale-75" />
          :
          <BsFillMoonFill
            className="text-2xl text-[#8B98A5] 
          hover:text-[#EFF3F4] hover:scale-75" />
        }
      </button>
    </div>
  );
};

export default ChangeTheme;