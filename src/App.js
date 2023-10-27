import logo from "./logo.svg";
import Content from "./components/Content";
import Top from './components/Top';
import Bottom from "./components/Bottom";

function App() {
  return (
    <div className="min-h-screen bg-custom-color">
      <Top />
      <Content />
      <Bottom />
    </div>
  );
}

export default App;
