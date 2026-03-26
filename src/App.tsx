import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import ScrollToTop from './components/utils/ScrollToTop';

import Home from './components/home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Vacancies from './components/vacancies/Vacancies';
import Donations from './components/donations/Donations';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Public Routes with Header/Footer */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/vacancies" element={<Vacancies />} />
                    <Route path="/donate" element={<Donations />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
