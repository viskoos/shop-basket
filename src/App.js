import React from 'react';
import StorePage from './components/StorePage/StorePage';
import Header from './components/Header'
import BasketPage from './components/BasketPage/BasketPage';
import { Switch, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/store" component={StorePage} exact />
        <Route path="/basket" component={BasketPage} exact />
        <Route path="/addproduct" component={AddProduct} exact />
      </Switch>
      {/* <StorePage />
      <BasketPage /> */}
    </div>
  );
}

export default App;
