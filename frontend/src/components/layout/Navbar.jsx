import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, user, logout } = useAuth();
    const links = [{ name: 'Programs', path: '/programs' }, { name: 'Trainers', path: '/trainers' }, { name: 'Membership', path: '/membership' }, { name: 'About', path: '/about' }];
    useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
    useEffect(() => setOpen(false), [location.pathname]);
    return <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}><div className="nav-inner container-padding"><Link to="/" className="brand"><span className="brand-mark">I</span><span>IRON<span className="brand-lime">GYM</span></span></Link><nav className="desktop-nav">{links.map((link) => <Link key={link.path} className={location.pathname.startsWith(link.path) ? 'active' : ''} to={link.path}>{link.name}</Link>)}</nav><div className="nav-actions"><Link className="nav-login" to={isAuthenticated ? '/profile' : '/login'}>{isAuthenticated ? user?.name?.split(' ')[0] || 'Profile' : 'Log in'}</Link><Link className="nav-cta" to="/booking">Book a session <ArrowUpRight size={16} /></Link></div><button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-nav"><div className="container-padding">{links.map((link) => <Link key={link.path} to={link.path}>{link.name}<ArrowUpRight size={17} /></Link>)}<Link to="/booking">Book a session <ArrowUpRight size={17} /></Link>{isAuthenticated && <button onClick={() => { logout(); navigate('/'); }}>Log out</button>}</div></div>}</header>;
};
export default Navbar;
