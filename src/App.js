import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import NavbarSecond from './component/NavbarSecond';
import Carousel from './component/Carousel';
import Home from './component/Home';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom"

import Login from './component/Login';
import Addproduct from './component/Addproduct.jsx';
import Productdetails from './component/Productdetails';
import Admin from './component/Admin';
import Update from './component/Update';
import Cart from './component/Cart';

function App() {
  return (
   <Router>
     
     <div className="App">
   


     <Switch>
     <Route exact path="/">
     <Login/>    
     </Route>

     <Route exact path="/user">
     <Home/>    
     </Route>

     <Route  path="/cart">
     <Cart/>
     </Route>

     <Route  path="/admin">
     <Admin/>
     </Route>

     <Route  path="/addnewproduct">
     <Addproduct/>
     </Route>
     
     <Route path="/productsDetails:id">
      <Productdetails/>
     </Route>

     <Route path="/update:id">
      <Update/>
     </Route>

     </Switch>
    </div>
   </Router>
  );
}

export default App;
