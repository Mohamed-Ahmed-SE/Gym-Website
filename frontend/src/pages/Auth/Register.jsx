import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';
import Input from '../../components/common/Input/Input';
import { Icons } from '../../components/ui/Icons';
import { validateEmail, validatePassword } from '../../utils/validation';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (!validatePassword(formData.password)) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setLoading(true);
        const { confirmPassword, ...registerData } = formData;
        const result = await register(registerData);
        setLoading(false);

        if (result.success) {
            navigate('/profile');
        } else {
            setErrors({ submit: result.message });
        }
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen flex items-center justify-center bg-background">
            <div className="container-padding w-full max-w-md">
                <div className="bg-surface border border-white/10 rounded-lg p-8">
                    <div className="text-center mb-8">
                        <Icons.Dumbbell className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h1 className="text-4xl font-display uppercase italic text-white mb-2">
                            Join IronGym
                        </h1>
                        <p className="text-gray-400">Create your account to get started</p>
                    </div>

                    {errors.submit && (
                        <div className="mb-6 p-4 bg-primary/20 border border-primary rounded text-primary text-sm">
                            {errors.submit}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            type="text"
                            name="name"
                            label="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            error={errors.name}
                        />

                        <Input
                            type="email"
                            name="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            error={errors.email}
                        />

                        <Input
                            type="tel"
                            name="phone"
                            label="Phone (Optional)"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            error={errors.phone}
                        />

                        <Input
                            type="password"
                            name="password"
                            label="Password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            error={errors.password}
                        />

                        <Input
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            error={errors.confirmPassword}
                        />

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full"
                            loading={loading}
                        >
                            Create Account
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-400">
                            Already have an account?{' '}
                            <Link to="/login" className="text-primary hover:text-primary/80 font-bold">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
