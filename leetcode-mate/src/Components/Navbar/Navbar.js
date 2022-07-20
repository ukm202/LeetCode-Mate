import { NavLink, Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (  
        <navbar className="nav-menu">
            <nav>
                <NavLink to="/">
                    <div className='logo'>
                        <div>
                            LeetCode
                        </div>
                        <div>
                            Mate
                        </div>
                    </div>
                </NavLink>

            </nav>

            
            <nav>
                <NavLink to="/login" className="login">Login</NavLink>

            </nav>

            

            
        </navbar>
    );
}
 
export default Navbar;