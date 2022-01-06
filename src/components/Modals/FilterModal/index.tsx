import React from 'react';
import Modal from 'components/UI/Modal';
import View from 'components/UI/View';
import { useStore } from 'store';
import useStyle from "./style"
import CloseIcon from '@mui/icons-material/Close';
import exchanges from "../assets/exchanges.svg"
import games from "../assets/games.svg"
import lock from "../assets/lock.svg"
import cube from "../assets/cube.svg"
import collectible from "../assets/collectible.svg"
import other from "../assets/others.svg"
const FilterModal = () => {
  const classes = useStyle()
  const { closeModal } = useStore('modalsStore');
  const onClose = () => closeModal('filterModal');
  return (
    <Modal onClose={onClose}>
      <View column>
        <div className={classes.modalHeader} >
          <div className={classes.filterSection} >
            <span className={classes.FilterTitle} >Filter</span>
            <span className={classes.filterNumber}>2</span>
          </div>
          <CloseIcon style={{ fill: "#6F6E73", width: "20px", height: "20px" }} onClick={onClose} />
        </div>
        <div className={classes.filters} >
          <div className={classes.checkbox}>
            <input type="checkbox" />
            <span>All Experiences</span>
          </div>
          <div className={classes.checkbox}>
            <input type="checkbox" />
            <img src={exchanges} alt="Exchanges icon" className={classes.icon} />
            <span>Exchanges</span>
          </div>
          <div className={classes.checkbox}>
            <input type="checkbox" />
            <img src={games} alt="Exchanges icon" className={classes.icon} />
            <span>Games</span>
          </div>
          <div className={classes.checkbox}>
            <input type="checkbox" />
            <img src={lock} alt="Exchanges icon" className={classes.icon} />
            <span>Marketplace</span>
          </div>
          <div className={classes.checkbox}>
            <input type="checkbox" />
            <img src={cube} alt="Exchanges icon" className={classes.icon} />
            <span>Defi</span>
          </div>
          <div className={classes.checkbox}>
            <input type="checkbox" />
            <img src={collectible} alt="Exchanges icon" className={classes.icon} />
            <span>Collectibles</span>
          </div>
          <div className={classes.checkbox}>
            <input type="checkbox" />
            <img src={other} alt="others icon" className={classes.icon} />
            <span>Others</span>
          </div>

        </div>

      </View>
    </Modal>
  );
};

export default FilterModal;
