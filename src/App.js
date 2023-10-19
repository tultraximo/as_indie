import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Contact from './components/contact';
import About from './components/about';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content-container">
      <Home></Home>
      <About></About>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
