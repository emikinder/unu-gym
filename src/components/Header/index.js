import React from 'react'
// import firebaseApp from "../../services/firebase";
// import { useState } from 'react/cjs/react.development';
// import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import './styles.css';

// const auth = getAuth(firebaseApp);

function Header() {
    //const [showLogOut, setShow] = useState(false);

    // const logOut = () => {
    //     signOut(auth);
    //     setShow(false);
    // }

    return (
        <div className="header">
            <div className="title">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>unu-gym</Link>
            </div>
            {/* <div className="header__user">
                <div className="header__profile">
                    {showLogOut ? (
                        <button className="header__logout" onClick={() => logOut()}>
                            LogOut
                        </button>
                    ) : null}
                    {user ? <img
                        className="header__userImg"
                        src={user.photoURL}
                        alt={user.displayName}
                        onClick={() => setShow(!showLogOut)}
                    /> : null}
                </div>
            </div> */}
        </div>
    )
}

export default Header