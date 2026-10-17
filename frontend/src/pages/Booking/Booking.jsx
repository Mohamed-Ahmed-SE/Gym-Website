import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { programsAPI } from '../../api/programs';
import { trainersAPI } from '../../api/trainers';
import { bookingsAPI } from '../../api/bookings';
import Button from '../../components/ui/Button';
import Input from '../../components/common/Input/Input';
import Loading from '../../components/common/Loading/Loading';
import Modal from '../../components/common/Modal/Modal';
import { Icons } from '../../components/ui/Icons';
import { programs as fallbackPrograms } from '../../data/programs';
import { trainers as fallbackTrainers } from '../../data/trainers';

const Booking = () => {
    const { isAuthenticated } = useAuth();
    const [programs, setPrograms] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [formData, setFormData] = useState({
        programId: '',
        trainerId: '',
        bookingDate: '',
        bookingTime: '',
        notes: '',
    });
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [programsData, trainersData, bookingsData] = await Promise.all([
                programsAPI.getAll().catch(() => []),
                trainersAPI.getAll().catch(() => []),
                isAuthenticated ? bookingsAPI.getAll().catch(() => []) : Promise.resolve([]),
            ]);
            setPrograms(programsData.length ? programsData : fallbackPrograms);
            setTrainers(trainersData.length ? trainersData : fallbackTrainers);
            setBookings(bookingsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleProgramSelect = (program) => {
        setSelectedProgram(program);
        const programId = program._id || program.id;
        const trainerId = program.instructorId?._id || program.instructorId || '';
        setFormData({
            ...formData,
            programId,
            trainerId,
        });
        setShowBookingModal(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!isAuthenticated) {
            setError('Please login to book a class');
            return;
        }

        if (!formData.programId || !formData.bookingDate || !formData.bookingTime) {
            setError('Please fill in all required fields');
            return;
        }

        setSubmitting(true);
        try {
            await bookingsAPI.create(formData);
            setShowBookingModal(false);
            setFormData({
                programId: '',
                trainerId: '',
                bookingDate: '',
                bookingTime: '',
                notes: '',
            });
            fetchData();
            alert('Booking confirmed!');
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to create booking');
        } finally {
            setSubmitting(false);
        }
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

    const availableTimes = selectedProgram?.schedule?.map((s) => {
        if (typeof s === 'string') {
            // Handle old format: "Mon 06:00"
            const parts = s.split(' ');
            return parts[parts.length - 1]; // Extract time part
        }
        return s.time;
    }).filter((time, index, self) => self.indexOf(time) === index) || [];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className="bg-secondary py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
                        alt="Booking Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                <div className="container-padding relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-display uppercase italic text-white mb-4">
                        Book Your <span className="text-primary">Class</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Reserve your spot in our world-class training programs.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-background">
                <div className="container-padding">
                    {/* Programs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {programs.map((program) => (
                            <div
                                key={program._id || program.id}
                                className="bg-surface border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                            >
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-display uppercase text-white mb-2">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">{program.description}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Icons.Timer size={16} />
                                            {program.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Icons.Zap size={16} />
                                            {program.intensity}
                                        </span>
                                    </div>
                                    <Button
                                        variant="primary"
                                        className="w-full"
                                        onClick={() => handleProgramSelect(program)}
                                    >
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* My Bookings */}
                    {isAuthenticated && bookings.length > 0 && (
                        <div className="mt-12">
                            <h2 className="text-4xl font-display uppercase italic text-white mb-8">
                                My Bookings
                            </h2>
                            <div className="space-y-4">
                                {bookings.map((booking) => (
                                    <div
                                        key={booking._id}
                                        className="bg-surface border border-white/10 rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                                    >
                                        <div>
                                            <h3 className="text-xl font-display uppercase text-white mb-2">
                                                {booking.program?.title}
                                            </h3>
                                            <p className="text-gray-400">
                                                {new Date(booking.bookingDate).toLocaleDateString()} at{' '}
                                                {booking.bookingTime}
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
                        </div>
                    )}
                </div>
            </section>

            {/* Booking Modal */}
            <Modal
                isOpen={showBookingModal}
                onClose={() => {
                    setShowBookingModal(false);
                    setSelectedProgram(null);
                }}
                title="Book Your Class"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="p-4 bg-primary/20 border border-primary rounded text-primary text-sm">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2">
                            Program
                        </label>
                        <div className="bg-background border border-white/10 p-4 rounded">
                            <p className="text-white font-bold">{selectedProgram?.title}</p>
                            <p className="text-gray-400 text-sm">{selectedProgram?.description}</p>
                        </div>
                    </div>

                    <Input
                        type="date"
                        name="bookingDate"
                        label="Date"
                        value={formData.bookingDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                    />

                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2">
                            Time
                        </label>
                        <select
                            name="bookingTime"
                            value={formData.bookingTime}
                            onChange={handleChange}
                            className="w-full bg-surface border border-white/10 p-3 text-white focus:border-primary outline-none transition-colors rounded-sm"
                            required
                        >
                            <option value="">Select a time</option>
                            {availableTimes.map((time, idx) => (
                                <option key={idx} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Input
                        type="textarea"
                        name="notes"
                        label="Notes (Optional)"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Any special requests or notes..."
                    />

                    {!isAuthenticated && (
                        <div className="p-4 bg-yellow-500/20 border border-yellow-500 rounded text-yellow-400 text-sm">
                            Please <a href="/login" className="underline font-bold">login</a> to complete your booking.
                        </div>
                    )}

                    <div className="flex gap-4">
                        <Button
                            type="button"
                            variant="secondary"
                            className="flex-1"
                            onClick={() => setShowBookingModal(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            className="flex-1"
                            loading={submitting}
                            disabled={!isAuthenticated}
                        >
                            Confirm Booking
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Booking;
