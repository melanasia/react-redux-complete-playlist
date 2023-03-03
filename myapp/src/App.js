
import Ninjas from './Ninjas';

function App() {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'blue', id: 3 }
    ]
  }
  return (
    <div className="App">
      <h1>My React App</h1>
      <p>Welcome</p>
      {/* ninjas is referencing the array above and passing it down as a prop */}
      <Ninjas ninjas={this.state.ninjas}/> 
    </div>
  );
}

export default App;
