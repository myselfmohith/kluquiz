import React, { useContext } from 'react'
import { signIn, signOut } from '../Firebase'
import { USER } from '../App'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const user = useContext(USER);
    return (
        <nav>
            <Link to="/"><h1>ONLINE EXAM</h1></Link>
            {user ? <button>
                <div id="userIcon" style={{ backgroundImage: `url('${user.photoURL}')` }}></div>
                <div id="userData">
                    <h3>Hello {user.displayName}</h3>
                    <pre onClick={signOut}>LOGOUT</pre>
                </div>
            </button>
                : <pre onClick={signIn}>GLogin</pre>}
        </nav>
    )
}
