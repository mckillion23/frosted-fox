import logo from './logo.png';
import facebook from './facebook.png';
import './App.css';

function App() {
  return (
<div className="App">
   <header className="App-header">
      <img src={logo} class="App-logo" alt="logo" />
      <br></br>
      <br></br>
      <p>
         Website under construction, to contact us please use our facebook page!
      </p>
      <p>
        <a href="https://www.facebook.com/The-Frosted-Fox-104827951525639">
         <img border="0" alt="Facebook" src={facebook} width="60" height="60"></img>
         </a>
      </p>
      <br></br>
      <br></br>
   </header>
</div>
  );
}

export default App;
