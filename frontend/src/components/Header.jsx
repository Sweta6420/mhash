import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { IconName } from "react-icons/fa";

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)


  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
        {/* <div id="mobile"> */}
        {/* <IconName name="FaOutdent" /> */}
          <Link to='/'>
            <div>
              <h1 className='ecofusion-heading'>
              EcoFusion
              </h1>
              <div>
              <span>Together for a </span>
              <span className="greener">greener</span>
              <span> world</span>
              </div>
            </div>
          </Link>
          
        {/* </div> */}
      <ul className="navbar">
        <li>
          <Link to='/share'>Share</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/leaderboard'>Leaderboard</Link>
        </li>
        <li>
          <Link to='/impact'>Impact</Link>
        </li>
        <li>
          <Link to='/games'>Games</Link>
        </li>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
      
    </header>
  )
}

export default Header
