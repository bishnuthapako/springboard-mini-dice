import './App.css';
import Dice from './Dice';

function App() {
  return (
    <div className="App mt-5 d-flex justify-content-center">
     <Dice numDice={5} title="Mini Dice" maxVal={20} />
    </div>
  );
}

export default App;
