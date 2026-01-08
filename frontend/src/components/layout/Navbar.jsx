import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Icons } from '../ui/Icons';
import Button from '../ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Trainers', path: '/trainers' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Membership', path: '/membership' },
        { name: 'Booking', path: '/booking' },
        { name: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>
            <div className="container-padding">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <Icons.Dumbbell className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                        <span className="text-2xl font-display font-bold tracking-wider text-white">
                            IRON<span className="text-primary">GYM</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {isAuthenticated ? (
                            <>
                                <Link
                                    to="/profile"
                                    className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <Icons.User size={18} />
                                    {user?.name?.split(' ')[0]}
                                </Link>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        logout();
                                        navigate('/');
                                    }}
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button to="/login" variant="secondary">
                                    Login
                                </Button>
                                <Button to="/membership" variant="primary">
                                    Join Now
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white hover:text-primary transition-colors"
                    >
                        {isOpen ? <Icons.Close size={28} /> : <Icons.Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden absolute top-20 left-0 w-full bg-surface border-b border-white/10 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="container-padding py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-lg font-display tracking-wide ${location.pathname === link.path ? 'text-primary' : 'text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    {isAuthenticated ? (
                        <>
                            <Link
                                to="/profile"
                                className="text-lg font-display tracking-wide text-white flex items-center gap-2"
                            >
                                <Icons.User size={20} />
                                Profile
                            </Link>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    logout();
                                    navigate('/');
                                    setIsOpen(false);
                                }}
                                className="w-full"
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button to="/login" variant="secondary" className="w-full">
                                Login
                            </Button>
                            <Button to="/membership" variant="primary" className="w-full">
                                Join Now
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
