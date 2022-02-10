import React from "react";
import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
import './App.css';

// import firebaseApp from "./services/firebase";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";

// const auth = getAuth(firebaseApp);

function App() {
  // const [user, setUser] = useState(null);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setUser(user);
  //   } else {
  //     setUser(null);
  //   }
  // });

  return (
    <>
      <Header />
      <div className="main">
        <Link to="/dias" className="google__button">Ingresar</Link>
      </div>
    </>
  );
}

export default App;
