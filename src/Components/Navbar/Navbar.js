import React, { useContext } from 'react';
import { useHistory, Link } from "react-router-dom"
import "./Navbar.css"
import { FcUpload } from "react-icons/fc"
import { RiFileSearchLine } from 'react-icons/ri'
import { AuthContext, UserContext } from '../../Contexts/context';

function Navbar() {

  const { isAuth } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  const history = useHistory();

  const JoinNow = () => {
    return (
      <div className="join-btn">
        <Link to="/LoginSignup">Join now</Link>
      </div>
    );
  }

  const ProfileMenu = () => {
    return (
      <div className="Profile-Button" onClick={() => history.push("/Dashboard")}>
        <div className="Name">
          {user.user.name}
        </div>
        <img className="Profile-Pic" src="https://lh3.googleusercontent.com/ogw/ADGmqu_zu--WffN4JlWGzZ0pulY4v67ZMm7FTfhJIYJhiTA=s64-c-mo"></img>
      </div>
    );
  }

  return (
    <nav className='Navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>Naive Baker</Link>

        <div className="Nav-Right-parent">
          <div className="Nav-Right">
            <div className="Filters" onClick={() => history.push("/SearchPage")}>
              <RiFileSearchLine /> Search Page
            </div>
            {isAuth &&
              <Link className="upload-btn" to='/Upload'>
                   &#8593;Upload
              </Link>
            }
            {isAuth === true ?
              <ProfileMenu /> :
              <JoinNow />
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;