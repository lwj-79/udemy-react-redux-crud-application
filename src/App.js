//import React, {Component} from 'react';
import React from 'react';

// function App() {
//   return <div>Hello, world!!</div>
// }

// class App extends Component{
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor='bar'>bar</label>
//         <input type='text' id='bar' onChange={() => {console.log('I am clicked');}}/>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>);
}

const Cat = () => {
  return <div>Meow!</div>;
}

export default App;
