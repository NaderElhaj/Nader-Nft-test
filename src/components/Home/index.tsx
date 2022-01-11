import React from 'react';
import data from "api/mock/Asset.json"
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import filter from './assets/filter.svg'
import IconWrapper from 'components/Header/IconWrapper';
import defi from "./assets/defi.svg"
import docu from "./assets/docu.svg"
import Experience from './Experience'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import exchange from "./assets/exchange.svg"
import game from "./assets/game.svg"
import marketplace from "./assets/marketplace.svg"
import def from "./assets/def.svg"
import Category from './Category';
import { useStore } from 'store';

const useStyles = makeStyles({
  experience: {
    display: "flex",
    flexDirection: "column",
    marginTop: "25px"
  },
  experienceTitle: {

    "fontFamily": "Manrope",
    "fontStyle": "normal",
    "fontWeight": 600,
    "fontSize": "16px",
    "letterSpacing": "-0.154px",
    lineHeight: '22px',
    "color": "#414047",
    marginBottom: "25px",
    paddingLeft: "17px"

  },
  home: {
    paddingLeft: "16px",
    paddingRight:"30px"
  },
  search: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "20px",
    alignItems: "center"
  },
  input: {
    display: "flex",
    "background": "#F5F5F5 ",
    "borderRadius": "8px !important",
    position: "relative",
    width: "275px",
    height: "40px",
    alignItems: "center",
    paddingLeft: "10px",
    '& input': {
      height: "100%",
      width: "100%",
      background: "none",
      border: "none",
      outline: "none",
      marginLeft: "15px",
      '&::placeholder': {
        "fontFamily": "Manrope",
        "fontStyle": "normal",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#BEBEC2"
      },


    }
  },
  categories: {
    paddingRight: "10px",
    paddingLeft: "10px",
    display: "flex",
    flexDirection: "column"
  },
  categoriesHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  categoriesTitle: {
    "fontFamily": "Manrope",
    "fontStyle": "normal",
    "fontWeight": 600,
    "fontSize": "16px",
    "lineHeight": "22px",
    "textAlign": "center",
    "letterSpacing": "-0.154px",
    "color": "#414047"
  },
  seeAll: {
    '& span': {
      "fontFamily": "Manrope",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": "14px",
      "lineHeight": "22px",
      "letterSpacing": "-0.408px",
      "color": "#885FFF",
      marginRight: "10px"

    },

    display: "flex",
    alignItems: "center",

  },
  categoriesGrid: {
    "display": "flex",
    marginTop: "15px",
    marginBottom: "100px",
    flexFlow: "row wrap",
    width: "100vw"

  }

},{index: 1});
const Home = () => {
  const classes = useStyles();
  const experiences = [
    {
      name: "DeFi Swap",
      desc: "Swap your digital assets",
      users: "+200 users",
      icon: `${defi}`
    },
    {
      name: "Docu sign",
      desc: "sign smart contracts seamlessly",
      users: "+1K users",
      icon: `${docu}`
    },


  ]

  const categories = [
    {
      icon: `${exchange}`,
      title: "Exchanges",
      backgroundColor: "#EAEFFF"
    },
    {
      icon: `${game}`,
      title: "Games",
      backgroundColor: "#F5F5F5"

    },
    {
      icon: `${marketplace}`,
      title: "Marketplaces",
      backgroundColor: "#E2F9F3"

    },
    {
      icon: `${def}`,
      title: "Defi",
      backgroundColor: "#FFF3EC"

    },
  ]
  const { openModal } = useStore('modalsStore');
  if (!data || data.length === 0) return null;
  const openFilterModal = () =>{
    openModal('filterModal');
  }
  return (
    <div className={classes.home}>
      <div className={classes.search}>
        <form>
          <div className={classes.input}>
            <SearchIcon style={{ fill: "#6F6E73" }} />
            <input type="text" placeholder='Search Experiences' />
          </div>
        </form>
        <IconWrapper src={filter} width={24} height={24} onClick={openFilterModal} />
      </div>
      <div className={classes.experience}>
        <h1 className={classes.experienceTitle}>Recent Experience</h1>
        {experiences.map(({ name, desc, users, icon }) => (
          <Experience
            name={name}
            desc={desc}
            key={name}
            users={users}
            icon={icon}
          />
        ))}

      </div>
      <div className={classes.categories}>
        <div className={classes.categoriesHeader} >
          <h1 className={classes.categoriesTitle}>Popular Categories</h1>
          <span className={classes.seeAll}>
            <span>See All</span>
            <ArrowForwardIosIcon style={{ fill: "#885FFF" }} />

          </span>

        </div>
        <div className={classes.categoriesGrid} >
          {categories.map(({ icon, title, backgroundColor }) => (
            <Category
              icon={icon}
              title={title}
              key={title}
              backgroundColor={backgroundColor}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
