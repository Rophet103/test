import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="app_body">
      <Sidebar/>
      <Chat/>
    </div>
    </div>  

  );
}

export default App;
