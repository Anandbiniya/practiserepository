import logo from './logo.svg';
import './App.css';
import Join from './joinus';
import Setting from './settings';
import Login from './Login';
import Contact from './contactus';
import Search from './search';
import Help from './help';
import Home from './home';
import Download from './download';
import Button from './Button';
import List from './List';
function App() {
  return (
    <div className="App">
      <div className='btn'>
        {/* <List/> */}
      <Join/>
      <Setting/>
      <Login/>
      <Contact/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>
      <Button/>
      </div>
      
    </div>
  );
}

export default App;
