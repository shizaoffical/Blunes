import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import AnimatedPath from './AnimatedPath';
import '../src/css/AnimsitionMin.css';
import '../src/css/BootstrapGridMin.css';
import '../src/css/OwlCarouselMin.css';
import '../src/css/Style.css';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ScrollToTop/>
     <AnimatedPath/>
    </BrowserRouter>
    </div>
  );
}

export default App;
