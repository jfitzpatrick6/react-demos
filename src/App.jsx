import Add from './components/Add.jsx';
import Greet from './components/Greet.jsx'
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import MainContent from "./components/MainContent.jsx"
import WelcomeMessage from "./components/WelcomeMessage.jsx"
import JSXRules from './components/JSXRules.jsx';
import Greeting from './components/Greeting.jsx';
import ProductInfo from './components/ProductInfo.jsx';

const App = () => {
  const numbers = [1,2,3,4,5]
  return (
    <div>
      {numbers.map((number => (
        <ul>
          <li>{number}</li>
        </ul>
      )))
      }
    </div>
  )
}

export default App;