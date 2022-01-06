import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';
import useStyle from './style';
import * as S from './styles';
import logo from './assets/home.svg';
import settings from './assets/settings.svg';
import notification from './assets/notification.svg';
import logo2x from './assets/home.svg';
import NavBar from './NavBar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import clsx from 'clsx';
import IconWrapper from './IconWrapper';
import ProfileBlock from './ProfileBlock';

type Props = {
  color:
  | 'title'
  | 'flex'
  | 'transparent'
  | 'white'
  | 'dark'
  | 'absolute'
  | 'tooltip'
  | 'appBar'
  | 'black';
  fixed: boolean;
  changeColorOnScroll: {
    height: number;
    color:
    | 'title'
    | 'flex'
    | 'transparent'
    | 'white'
    | 'dark'
    | 'absolute'
    | 'tooltip'
    | 'appBar'
    | 'black';
  };
  absolute?: boolean;
};
const Header: React.FC<Props> = ({
  color,
  fixed,
  absolute,
}) => {
  const classes = useStyle();


  const HomeLogo = (
    <Link to="/">
      <S.Logo>
        <img
          style={{
            maxHeight: '30px',
            maxWidth: '210px',
            verticalAlign: 'middle',
            height: "17px",
          }}
          src={logo}
          srcSet={`${logo2x} 2x`}
          alt="Octa NFT"
        />
      </S.Logo>
    </Link>
  );

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
    [classes.unset]: true,
  });
  return (
    <AppBar className={clsx(appBarClasses,classes.header)}>
      <Toolbar className={classes.container}>
        <div className={classes.flex} style={{ justifyContent: "space-evenly", width: "100%" }}>
          <Hidden mdUp>

            <>
              <ArrowBackIcon />
              {HomeLogo}
              <ProfileBlock />              
              <div>

                <IconWrapper src={notification} width={26} height={26} />
                <IconWrapper src={settings} width={26} height={26} />

              </div>
            </>
          </Hidden>
        </div>

        <Hidden mdDown implementation="css">
          <div className={classes.flex}>
            <NavBar />
          </div>
        </Hidden>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
