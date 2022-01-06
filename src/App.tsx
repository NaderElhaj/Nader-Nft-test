import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'components/Home';
import Header from './components/Header/Header';
import { GlobalStyles } from 'globalStyles';
import Footer from 'components/Footer';
import routes from './routes';
import ScrollToTop from 'components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import { RootStore, StoreContext } from 'store';
import Modals from 'components/Modals';
export const store = new RootStore();

function App() {

  return (
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <GlobalStyles />
        <ScrollToTop />
        <Header
          fixed={true}
          color={'white'}
          changeColorOnScroll={{ height: 20, color: 'white' }}
        />
        <Routes>
          <Route path={routes.home} element={<Home />} />
        </Routes>
        <Footer />
        <Modals />
        <ToastContainer position="bottom-left" />
      </StoreContext.Provider>
    </BrowserRouter>
  );
}

export default App;
