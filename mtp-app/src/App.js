import './App.css';
import Aside from './components/Aside/Aside';
import Content from './components/Content/Content';
import { BrowserRouter} from "react-router-dom";

function App() {  /*h*/
  return (
    <BrowserRouter>
      <div className="App m-0 p-0 flex">
        <Aside />
        <Content />        
      </div>
    </BrowserRouter>
  );
}

export default App;
