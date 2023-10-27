import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Routes/HomePage';
import Login from './Routes/LoginPage';
import Signup from './Routes/Signup';
import PostPage from './Routes/PostPage';
import Pricing from './Components/Pricing';
function App() {
    return (
        <Router>
            <div className='post'>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/post' element={<PostPage />} />
                    <Route path='/plans' element={<Pricing />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;