import Home from "./Components/Home/Home";
import JoinNow from "./Components/Join-now/JoinNow";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = ()=>{
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/join-now' element={<JoinNow />} />

            </Routes>

            

        </Router>
        
    )
}

export default App;