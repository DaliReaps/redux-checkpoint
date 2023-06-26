import logo from './logo.svg';
import './App.css';
import Listtask from './Components/Listtask';
import Addtask from './Components/Addtask';
function App() {
  return (
    <div className="maincontainer">
      
      <Addtask/>
      <Listtask/>
      
    </div>
  );
}

export default App;
