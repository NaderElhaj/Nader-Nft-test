import React from 'react';
import { useToggle } from 'react-use';
import { observer } from 'mobx-react-lite';
import ProfilePopup from 'components/Header/ProfileBlock/ProfilePopup';
import useStyle from './style';
import rainbow from '../assets/rainbow.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProfileBlock = () => {
  const classes = useStyle();

  const myData = {
  balance:"899",
  id:1,
  address:"0xx5dd",
  user: {
    username: "username",
    name: "string",
    customUrl: "string",
    coverUrl: "",
    bio: "Biooo",
  },
  profileImgUrl: "",
}

  const [isOpen, toggle] = useToggle(false);

      return (
        <div className={classes.navDropdown}>
        <img
          style={{
            verticalAlign: 'middle',
            height: "100%",
            width: "100%",
          }}
          src={rainbow}
          alt="Rainbow"
        />
        <h1 className={classes.dropdownText}>Johndoe.near</h1>
        <KeyboardArrowDownIcon onClick={toggle} />
        <ProfilePopup isOpen={isOpen} onClose={toggle} data={myData} />

      </div>

      
      );
    }

export default observer(ProfileBlock);
