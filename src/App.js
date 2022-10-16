// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import './App.css';
import {Message} from "./Components/Message";
import {useState} from "react";
export const App = () => {
    const [text] = useState('message from parent');

    return (
        <div className="App">
            <h3 style={{ color: 'cornflowerblue'}}>React project</h3>
            <Message message={ text }/>
        </div>
    );
}