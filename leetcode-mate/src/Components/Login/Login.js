import './Login.css';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
const Login = () => {
    return (  
        <div className="wrapper">
            <h1>Welcome Mate!</h1>
            <form action="">
                <input type="email" name="" id="" placeholder='Email' required />
                <input type="password" name="" id="" placeholder='Password' required />
                <input type="submit" value="LOGIN" />
            </form>
            <div className="bottom-text">
                <label><input id="rememberme" name="rememberme" value="remember" type="checkbox" /> &nbsp;Remember me</label>
                
                <a href="#">Forgot password ?</a>
            </div>
            <div className="socials">
                <a href="#">
                    <BsFacebook size={22} />
                </a>
                <a href="#">
                    <BsTwitter size={22} />
                </a>
                <a href="#">
                    <BsLinkedin size={22} />
                </a>
            </div>
            <div className="overlay-area">

            </div>
        </div>
    );
}
 
export default Login;