import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import ScrollToTop from './components/utils/ScrollToTop';

import Home from './components/home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Vacancies from './components/vacancies/Vacancies';
import Donations from './components/donations/Donations';

import Overview from './components/dashboard/Overview';
import Research from './components/dashboard/Research';
import Events from './components/dashboard/Events';
import Mentorship from './components/dashboard/Mentorship';
import Resources from './components/dashboard/Resources';
import UserManagement from './components/dashboard/UserManagement';
import Settings from './components/dashboard/Settings';

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

                {/* Dashboard Routes with Sidebar (No Public Header/Footer) */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Overview />} />
                    <Route path="research" element={<Research />} />
                    <Route path="events" element={<Events />} />
                    <Route path="mentorship" element={<Mentorship />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
