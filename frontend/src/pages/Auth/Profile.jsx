import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { bookingsAPI } from '../../api/bookings';
import { membershipsAPI } from '../../api/memberships';
import Button from '../../components/ui/Button';
import Loading from '../../components/common/Loading/Loading';
import { Icons } from '../../components/ui/Icons';
import { formatDate, formatDateTime } from '../../utils/formatters';

const Profile = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [membership, setMembership] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        fetchData();
    }, [isAuthenticated, user]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [bookingsData, membershipData] = await Promise.all([
                bookingsAPI.getAll(),
                user?._id ? membershipsAPI.getUserMembership(user._id) : null,
            ]);
            setBookings(bookingsData);
            if (membershipData) {
                setMembership(membershipData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return (
            <div className="pt-20 min-h-screen flex items-center justify-center">
                <Loading size="lg" />
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen bg-background">
            <div className="container-padding py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h1 className="text-5xl font-display uppercase italic text-white mb-2">
                                My Profile
                            </h1>
                            <p className="text-gray-400">Welcome back, {user?.name}</p>
                        </div>
                        <Button variant="outline" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Profile Info */}
                        <div className="lg:col-span-1">
                            <div className="bg-surface border border-white/10 rounded-lg p-6 mb-6">
                                <h2 className="text-2xl font-display uppercase text-white mb-4">
                                    Account Info
                                </h2>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-gray-400 text-sm">Name</p>
                                        <p className="text-white font-bold">{user?.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <p className="text-white font-bold">{user?.email}</p>
                                    </div>
                                    {user?.phone && (
                                        <div>
                                            <p className="text-gray-400 text-sm">Phone</p>
                                            <p className="text-white font-bold">{user.phone}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Membership Status */}
                            <div className="bg-surface border border-white/10 rounded-lg p-6">
                                <h2 className="text-2xl font-display uppercase text-white mb-4">
                                    Membership
                                </h2>
                                {membership?.membership ? (
                                    <div>
                                        <p className="text-primary font-bold text-xl mb-2">
                                            {membership.membership.name}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            Status: <span className="text-white capitalize">{membership.status}</span>
                                        </p>
                                        {membership.expiry && (
                                            <p className="text-gray-400 text-sm mt-2">
                                                Expires: {formatDate(membership.expiry)}
                                            </p>
                                        )}
                                        <Button
                                            to="/membership"
                                            variant="secondary"
                                            className="w-full mt-4"
                                        >
                                            Manage Membership
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-gray-400 mb-4">No active membership</p>
                                        <Button to="/membership" variant="primary" className="w-full">
                                            Get Membership
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bookings */}
                        <div className="lg:col-span-2">
                            <div className="bg-surface border border-white/10 rounded-lg p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-display uppercase text-white">
                                        My Bookings
                                    </h2>
                                    <Button to="/booking" variant="primary">
                                        Book Now
                                    </Button>
                                </div>

                                {bookings.length === 0 ? (
                                    <div className="text-center py-12">
                                        <Icons.Calendar className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                                        <p className="text-gray-400 mb-4">No bookings yet</p>
                                        <Button to="/booking" variant="primary">
                                            Book Your First Class
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {bookings.map((booking) => (
                                            <div
                                                key={booking._id}
                                                className="bg-background border border-white/5 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                                            >
                                                <div>
                                                    <h3 className="text-white font-bold text-lg mb-1">
                                                        {booking.program?.title}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm">
                                                        {formatDateTime(booking.bookingDate, booking.bookingTime)}
                                                    </p>
                                                    <p className="text-gray-400 text-sm">
                                                        Trainer: {booking.trainer?.name}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span
                                                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                                                            booking.status === 'confirmed'
                                                                ? 'bg-green-500/20 text-green-400'
                                                                : booking.status === 'cancelled'
                                                                ? 'bg-red-500/20 text-red-400'
                                                                : 'bg-yellow-500/20 text-yellow-400'
                                                        }`}
                                                    >
                                                        {booking.status}
                                                    </span>
                                                    {booking.status !== 'cancelled' && (
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={async () => {
                                                                if (window.confirm('Cancel this booking?')) {
                                                                    try {
                                                                        await bookingsAPI.cancel(booking._id);
                                                                        fetchData();
                                                                    } catch (error) {
                                                                        alert('Failed to cancel booking');
                                                                    }
                                                                }
                                                            }}
                                                        >
                                                            Cancel
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
