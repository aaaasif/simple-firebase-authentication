import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const provider = new GithubAuthProvider();

const handleGoogleSignIn = () => {
  const auth = getAuth();
  signInWithPopup (auth, googleProvider)
  .then(result => {
  const user = result.user;
  console.log(user);
  })
}

function App() {
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
