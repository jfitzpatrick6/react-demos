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

const App = () => {
  
  return (
    <div>
      <UserList/>
      <ProductList/>
    </div>
  )
}

export default App;