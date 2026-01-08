# 🏋️ IronGym - Premium Fitness Experience Platform

> **A full-stack, production-ready gym management system with modern web technologies.**

![IronGym Banner](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop)

## 📋 Overview

**IronGym** is a complete full-stack fitness management platform designed for modern fitness centers, CrossFit boxes, and personal training studios. It features a beautiful, responsive React frontend connected to a robust Node.js/Express backend with MongoDB, providing a comprehensive solution for gym management, member bookings, and membership processing.

### What This Project Includes

- **Frontend**: React 18 with Vite, TailwindCSS, React Router
- **Backend**: Node.js/Express REST API with MongoDB
- **Authentication**: JWT-based user authentication
- **Payments**: Stripe integration for membership purchases
- **Bookings**: Real-time class booking system
- **Admin**: Admin dashboard API for gym management
- **Notifications**: Email service for confirmations and receipts

---

## 🚀 Key Features

### Frontend Features

- **🎨 Modern Design System**: Dark mode aesthetic with custom TailwindCSS theme
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **⚡ Fast Performance**: Optimized with Vite and code splitting
- **🔄 Dynamic Content**: All data fetched from backend APIs
- **🔐 User Authentication**: Login, registration, and profile management
- **📅 Booking System**: Interactive class booking with availability checking
- **💳 Payment Integration**: Stripe payment processing for memberships
- **👤 User Dashboard**: Profile page with bookings and membership status

### Backend Features

- **🔒 Secure Authentication**: JWT tokens with refresh token rotation
- **💾 MongoDB Database**: Scalable data storage with Mongoose ODM
- **💳 Payment Processing**: Stripe integration for secure payments
- **📧 Email Notifications**: Automated emails for bookings and payments
- **👨‍💼 Admin API**: Complete admin endpoints for gym management
- **📊 Analytics**: Revenue tracking and user statistics
- **🛡️ Security**: Password hashing, input validation, CORS protection

---

## 📁 Project Structure

```
Gym Website/
├── frontend/                    # React Frontend Application
│   ├── src/
│   │   ├── api/                # API service layer (axios)
│   │   │   ├── axios.js        # Axios instance with interceptors
│   │   │   ├── auth.js         # Authentication API calls
│   │   │   ├── memberships.js  # Membership API calls
│   │   │   ├── programs.js     # Programs API calls
│   │   │   ├── trainers.js     # Trainers API calls
│   │   │   ├── bookings.js     # Booking API calls
│   │   │   ├── payments.js     # Payment API calls
│   │   │   └── admin.js        # Admin API calls
│   │   ├── components/
│   │   │   ├── common/         # Reusable components
│   │   │   │   ├── Button/
│   │   │   │   ├── Input/
│   │   │   │   ├── Modal/
│   │   │   │   └── Loading/
│   │   │   ├── layout/         # Layout components
│   │   │   │   ├── Navbar/
│   │   │   │   └── Footer/
│   │   │   └── ui/             # UI primitives
│   │   ├── context/            # React Context providers
│   │   │   └── AuthContext.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── Home/           # Landing page
│   │   │   ├── About/          # About page
│   │   │   ├── Programs/       # Programs listing & details
│   │   │   ├── Trainers/       # Trainers page
│   │   │   ├── Membership/    # Membership plans
│   │   │   ├── Booking/       # Class booking
│   │   │   ├── Gallery/        # Image gallery
│   │   │   ├── Contact/        # Contact page
│   │   │   └── Auth/          # Login, Register, Profile
│   │   ├── routes/             # Route configuration
│   │   ├── utils/              # Utility functions
│   │   └── data/               # Fallback data
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/                     # Node.js/Express Backend API
│   ├── config/
│   │   ├── database.js         # MongoDB connection
│   │   ├── jwt.js              # JWT configuration
│   │   └── stripe.js           # Stripe configuration
│   ├── models/                 # Mongoose schemas
│   │   ├── User.js
│   │   ├── Membership.js
│   │   ├── Program.js
│   │   ├── Trainer.js
│   │   ├── Booking.js
│   │   └── Payment.js
│   ├── routes/                 # Express routes
│   │   ├── auth.routes.js
│   │   ├── membership.routes.js
│   │   ├── program.routes.js
│   │   ├── trainer.routes.js
│   │   ├── booking.routes.js
│   │   ├── payment.routes.js
│   │   └── admin.routes.js
│   ├── controllers/            # Route controllers
│   │   ├── auth.controller.js
│   │   ├── membership.controller.js
│   │   ├── program.controller.js
│   │   ├── trainer.controller.js
│   │   ├── booking.controller.js
│   │   ├── payment.controller.js
│   │   └── admin.controller.js
│   ├── middleware/             # Express middleware
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── services/               # Business logic services
│   │   ├── email.service.js
│   │   └── payment.service.js
│   ├── utils/                  # Utility functions
│   │   └── generateToken.js
│   ├── server.js               # Entry point
│   ├── package.json
│   └── .env.example
│
└── README.md                    # This file
```

---

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **Lucide React** - Icon library
- **React Context** - State management

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Stripe** - Payment processing
- **Nodemailer** - Email service
- **express-validator** - Input validation

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Stripe Account** (for payment processing - optional for development)

### Step 1: Clone the Repository

    ```bash
    git clone https://github.com/your-username/iron-gym.git
    cd iron-gym
    ```

### Step 2: Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/irongym
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/irongym

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_REFRESH_SECRET=your_super_secret_refresh_key_change_this_in_production
JWT_EXPIRE=7d
JWT_REFRESH_EXPIRE=30d

# Stripe (Get from https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email (Nodemailer - Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=noreply@irongym.com

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

5. Start the backend server:
    ```bash
    npm run dev
    ```

The backend API will be available at `http://localhost:5000`

### Step 3: Frontend Setup

1. Navigate to the frontend directory (in a new terminal):
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
    ```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

---

## 🗺️ Application Pages & Routes

### Public Pages

- **`/`** - Home page with hero, stats, features, testimonials
- **`/about`** - About page with company story and values
- **`/programs`** - All training programs listing
- **`/programs/:id`** - Individual program details
- **`/trainers`** - All trainers/coaches listing
- **`/membership`** - Membership plans and pricing
- **`/gallery`** - Image gallery with filtering
- **`/booking`** - Class booking system
- **`/contact`** - Contact information and form

### Authentication Pages

- **`/login`** - User login
- **`/register`** - User registration
- **`/profile`** - User dashboard (protected)

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/auth/refresh` | Refresh access token | No |
| GET | `/api/auth/me` | Get current user | Yes |

### Memberships

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/memberships` | Get all membership plans | No |
| GET | `/api/memberships/:id` | Get specific membership | No |
| POST | `/api/memberships/purchase` | Purchase membership | Yes |
| GET | `/api/memberships/user/:userId` | Get user's membership | Yes |
| PUT | `/api/memberships/cancel/:id` | Cancel membership | Yes |

### Programs

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/programs` | Get all programs | No |
| GET | `/api/programs/:id` | Get program details | No |
| POST | `/api/programs` | Create program | Admin |
| PUT | `/api/programs/:id` | Update program | Admin |
| DELETE | `/api/programs/:id` | Delete program | Admin |

### Trainers

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/trainers` | Get all trainers | No |
| GET | `/api/trainers/:id` | Get trainer details | No |
| POST | `/api/trainers` | Create trainer | Admin |
| PUT | `/api/trainers/:id` | Update trainer | Admin |

### Bookings

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/bookings` | Get bookings (user's or all) | Yes |
| GET | `/api/bookings/:id` | Get booking details | Yes |
| POST | `/api/bookings` | Create booking | Yes |
| PUT | `/api/bookings/:id` | Update booking | Yes |
| DELETE | `/api/bookings/:id` | Cancel booking | Yes |
| GET | `/api/bookings/availability` | Check availability | No |

### Payments

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/payments/create-intent` | Create Stripe payment intent | Yes |
| POST | `/api/payments/confirm` | Confirm payment | Yes |
| GET | `/api/payments/user/:userId` | Get payment history | Yes |

### Admin

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/admin/stats` | Get dashboard statistics | Admin |
| GET | `/api/admin/users` | Get all users | Admin |
| PUT | `/api/admin/users/:id` | Update user | Admin |
| GET | `/api/admin/bookings` | Get all bookings | Admin |
| GET | `/api/admin/revenue` | Get revenue analytics | Admin |

---

## 💾 Database Models

### User Model
- Authentication fields (email, password hash)
- Profile information (name, phone)
- Membership reference and status
- Role (user/admin)
- Timestamps

### Membership Model
- Plan details (name, price, features)
- Billing period
- Stripe price ID
- Active status

### Program Model
- Program details (title, description, schedule)
- Duration and intensity
- Capacity limits
- Trainer assignment
- Pricing

### Trainer Model
- Personal information (name, role, bio)
- Specialties and certifications
- Social links
- Profile image

### Booking Model
- User, program, and trainer references
- Date and time
- Status (pending/confirmed/cancelled/completed)
- Payment reference

### Payment Model
- User reference
- Amount and currency
- Payment method
- Stripe transaction IDs
- Status
- Type (membership/booking)

---

## 🎨 Customization Guide

### Changing Colors

Edit `frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#E11D48',    // Main brand color
      secondary: '#0F172A',  // Dark background
      background: '#020617',  // Main background
      surface: '#1E293B',    // Card/surface color
      // ... customize as needed
    }
  }
}
```

### Changing Fonts

1. Import new fonts in `frontend/src/index.css`
2. Update `fontFamily` in `frontend/tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  display: ['Bebas Neue', 'sans-serif'],
}
```

### Adding New Pages

1. Create component in `frontend/src/pages/`
2. Add route in `frontend/src/routes/AppRoutes.jsx`
3. Update navigation in `frontend/src/components/layout/Navbar.jsx`

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Import your GitHub repository
2. Set the **Root Directory** to `frontend`
3. Set the **Framework Preset** to **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Add environment variable: `VITE_API_URL=https://your-api-url.com/api`

### Backend Deployment (Heroku/Railway/Render)

1. Set up MongoDB Atlas (cloud database)
2. Configure environment variables in your hosting platform
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Update frontend `VITE_API_URL` to point to deployed backend

### Environment Variables for Production

**Backend:**
- Set `NODE_ENV=production`
- Use strong, unique JWT secrets
- Configure production MongoDB URI
- Set up production Stripe keys
- Configure production email service

**Frontend:**
- Set `VITE_API_URL` to production API URL

---

## 🧪 Development

### Running in Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend
npm start
```

---

## 🔐 Authentication Flow

1. User registers/logs in via frontend
2. Backend validates credentials and returns JWT tokens
3. Frontend stores tokens in localStorage
4. All subsequent API requests include token in Authorization header
5. Backend middleware validates token on protected routes
6. Refresh token used to get new access token when expired

---

## 💳 Payment Flow

1. User selects membership plan
2. Frontend calls `/api/payments/create-intent` with plan details
3. Backend creates Stripe PaymentIntent and returns client secret
4. Frontend uses Stripe.js to collect payment
5. On success, frontend calls `/api/payments/confirm`
6. Backend updates user membership and sends confirmation email

---

## 📧 Email Notifications

The system sends automated emails for:
- Booking confirmations
- Payment receipts
- Membership activation
- Password reset (if implemented)

Configure email service in `backend/.env`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

---

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
- Verify MongoDB is running
- Check `MONGODB_URI` in `.env`
- Ensure network access if using MongoDB Atlas

**JWT Errors:**
- Verify `JWT_SECRET` is set in `.env`
- Check token expiration settings

**CORS Errors:**
- Ensure `FRONTEND_URL` in backend `.env` matches frontend URL
- Check CORS configuration in `backend/server.js`

### Frontend Issues

**API Connection Errors:**
- Verify `VITE_API_URL` in frontend `.env`
- Ensure backend is running
- Check browser console for CORS errors

**Build Errors:**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (v16+ required)

---

## 📝 Scripts

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

ISC

---

## 🔮 Future Roadmap

- [x] User Authentication System ✅
- [x] Membership Management ✅
- [x] Class Booking System ✅
- [x] Payment Processing ✅
- [x] Email Notifications ✅
- [ ] Admin Dashboard Frontend UI
- [ ] Mobile App (React Native)
- [ ] E-commerce (Merch Shop)
- [ ] Blog/CMS Integration
- [ ] Advanced Analytics Dashboard
- [ ] Social Features (Member Community)
- [ ] Workout Tracking & Progress

---

## 📞 Support

For issues, questions, or contributions, please open an issue on GitHub.

---

**Made with ❤️ and 💪 for the fitness community.**
