import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="flex flex-col min-h-screen bg-background text-text font-sans selection:bg-primary selection:text-white">
                    <Navbar />
                    <main className="flex-grow">
                        <AppRoutes />
                    </main>
                    <Footer />
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
