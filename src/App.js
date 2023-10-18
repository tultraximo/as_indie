import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Contact></Contact>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
