import {getAuth, signInWithProvider, GoogleAuthProvider} from 'firebase/auth';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';


initializeAuthentication();

const provider = new GoogleAuthProvider();

const handleGoogleSignIn = () => {
  const auth = Getauth();
  signInWithProvider (auth, provider)
}

function App() {
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
