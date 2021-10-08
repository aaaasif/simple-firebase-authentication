import {GoogleAuthProvider} from 'firebase/auth';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';


initializeAuthentication();

const provider = new GoogleAuthProvider();

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
