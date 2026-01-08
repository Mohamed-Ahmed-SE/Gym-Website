# IronGym Backend API

Backend API for the IronGym fitness website built with Node.js, Express, and MongoDB.

## Features

- User Authentication (JWT-based)
- Membership Management
- Program & Trainer Management
- Booking System
- Payment Processing (Stripe)
- Admin Dashboard API
- Email Notifications

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Configure your environment variables in `.env`:
   - MongoDB connection string
   - JWT secrets
   - Stripe API keys
   - Email service credentials

4. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh token
- `GET /api/auth/me` - Get current user (protected)

### Memberships
- `GET /api/memberships` - Get all memberships
- `GET /api/memberships/:id` - Get specific membership
- `POST /api/memberships/purchase` - Purchase membership (protected)
- `GET /api/memberships/user/:userId` - Get user's membership (protected)
- `PUT /api/memberships/cancel/:id` - Cancel membership (protected)

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get program details
- `POST /api/programs` - Create program (admin)
- `PUT /api/programs/:id` - Update program (admin)
- `DELETE /api/programs/:id` - Delete program (admin)

### Trainers
- `GET /api/trainers` - Get all trainers
- `GET /api/trainers/:id` - Get trainer details
- `POST /api/trainers` - Create trainer (admin)
- `PUT /api/trainers/:id` - Update trainer (admin)

### Bookings
- `GET /api/bookings` - Get bookings (user's or all for admin)
- `GET /api/bookings/:id` - Get booking details
- `POST /api/bookings` - Create booking (protected)
- `PUT /api/bookings/:id` - Update booking (protected)
- `DELETE /api/bookings/:id` - Cancel booking (protected)
- `GET /api/bookings/availability` - Check availability

### Payments
- `POST /api/payments/create-intent` - Create Stripe payment intent (protected)
- `POST /api/payments/confirm` - Confirm payment (protected)
- `GET /api/payments/user/:userId` - Get payment history (protected)

### Admin
- `GET /api/admin/stats` - Get dashboard statistics (admin)
- `GET /api/admin/users` - Get all users (admin)
- `PUT /api/admin/users/:id` - Update user (admin)
- `GET /api/admin/bookings` - Get all bookings (admin)
- `GET /api/admin/revenue` - Get revenue analytics (admin)

## Database Models

- **User**: Authentication, profile, membership status
- **Membership**: Membership plans and pricing
- **Program**: Training programs with schedules
- **Trainer**: Trainer profiles and certifications
- **Booking**: Class bookings and reservations
- **Payment**: Payment records and transactions

## Environment Variables

See `.env.example` for all required environment variables.

## License

ISC
