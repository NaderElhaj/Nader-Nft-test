import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'store';
import FadeModal from 'components/UI/FadeModal';
import FilterModal from './FilterModal';


const Modals = () => {
  const { modals } = useStore('modalsStore');
  return (
    <div>
      <FadeModal isOpen={modals.has('filterModal')}>
        <FilterModal />
      </FadeModal>
    </div>
  );
};

export default observer(Modals);
