import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './components/home/Home';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
