import Add from './components/Add.jsx';
import Greet from './components/Greet.jsx'
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import MainContent from "./components/MainContent.jsx"
import WelcomeMessage from "./components/WelcomeMessage.jsx"
import JSXRules from './components/JSXRules.jsx';
import Greeting from './components/Greeting.jsx';
import ProductInfo from './components/ProductInfo.jsx';
import UserList from './components/UserList.jsx';
import ProductList from './components/ProductList.jsx';
import Person from './components/Person.jsx';
import Product from './components/Product.jsx';
import Card from './components/Card.jsx';
import Weather from './components/Weather.jsx';
import UserStatus from './components/UserStatus.jsx';
import GreetingCondition from './components/GreetingCondition.jsx';
import "./index.css"
import { FaCartArrowDown } from "react-icons/fa";
import StyledCard from './components/StyledCard.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import IconComponent from './components/IconComponent.jsx';
import { useState } from "react";
import ComponentOne from './components/ComponentOne.jsx';
import ComponentTwo from './components/ComponentTwo.jsx';
import Counter from './components/Counter.jsx';
import TodoList from './components/TodoList.jsx';
import Profile from './components/Profile.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import CopyInput from './components/CopyInput.jsx';
import Switcher from './components/Switcher.jsx';
import { useEffect } from "react";
import BasicEffect from './components/BasicEffect.jsx'
import CounterEffect from './components/CounterEffect.jsx'
import FetchDataEffect from './components/FetchDataEffect.jsx'
/* import ComponentA from './components/ComponentA.jsx'
 * import ComponentB from './components/ComponentB.jsx'
 * import ComponentC from './components/ComponentC.jsx' */
import { createContext } from "react";
import {UserProvider} from './components/UserContext.jsx';
import UpdateUser from './components/UpdateUser.jsx'
import UserProfile from './components/UserProfile.jsx';

const App = () => {
    return (
      <UserProvider>
	<UserProfile/>
	<UpdateUser/>
      </UserProvider>
    )
}

export default App;
