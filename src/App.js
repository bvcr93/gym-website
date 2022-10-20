import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Shop from "./components/Shop";

import Checkout from "./components/Checkout";

import { CartProvider } from "./components/CartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
        
            <Route path="/checkout" component={Checkout} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
