import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "routes/Home"
import Profile from "routes/Profile"
import Auth from "routes/Auth"


const AppRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/auth" element={<Auth />}/>
      </Routes>
    </Router>
  )
}

export default AppRouter