
import Ninjas from './Ninjas';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <p>Welcome</p>
      <Ninjas name='Ryu' age='25' belt='Black'/>
      <Ninjas name='Yoshi' age='30' belt='Green'/>
    </div>
  );
}

export default App;
