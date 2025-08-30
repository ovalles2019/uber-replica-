# 🚗 Uber Replica - Portfolio Project

An elegant and dynamic Uber replica built with modern web technologies to showcase full-stack development skills.

## ✨ Features

### 🎯 Core Functionality
- **Interactive Ride Booking System** - Complete ride booking flow with pickup/dropoff selection
- **Dynamic Pricing** - Real-time fare calculation based on distance and ride type
- **Multiple Ride Options** - UberX, UberXL, UberBlack, and UberPool with different pricing
- **Driver Matching** - Simulated driver assignment with real-time updates
- **Location Services** - Suggested locations and address input system

### 🎨 User Experience
- **Beautiful UI/UX** - Modern, responsive design with smooth animations
- **Interactive Components** - Dynamic forms, real-time updates, and smooth transitions
- **Mobile-First Design** - Fully responsive across all devices
- **Smooth Animations** - Framer Motion powered micro-interactions

### 🛠 Technical Features
- **React 18** with TypeScript for type safety
- **Modern State Management** using Context API and useReducer
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Responsive Design** with mobile-first approach
- **Component Architecture** with reusable, modular components

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd uber-replica
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🏗 Project Structure

```
uber-replica/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── Header.tsx      # Navigation header
│   ├── context/            # React Context for state management
│   │   └── RideContext.tsx # Ride booking state and logic
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Landing page
│   │   └── RidePage.tsx    # Ride booking interface
│   ├── styles/             # Global styles and Tailwind config
│   │   └── index.css       # Main CSS file
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Uber Green (`#00d4aa`)
- **Secondary**: Primary Blue (`#0ea5e9`)
- **Neutral**: Uber Black (`#000000`), Uber White (`#ffffff`)
- **Background**: Light Gray (`#f8f9fa`)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Primary, Secondary, and disabled states
- **Cards**: Elevated cards with shadows and hover effects
- **Inputs**: Styled form inputs with focus states
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Customization

### Adding New Ride Types
1. Update the `rideTypes` array in `RidePage.tsx`
2. Add new ride type to the `RideRequest` interface in `RideContext.tsx`
3. Update the reducer to handle new ride types

### Styling Changes
- Modify `tailwind.config.js` for theme customization
- Update component classes in individual components
- Add new utility classes in `src/styles/index.css`

### Adding New Features
- Create new components in the `components/` directory
- Add new pages in the `pages/` directory
- Extend the context for new state management needs

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist/` folder to Netlify
3. Configure build settings if needed

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- **Mobile**: Optimized for small screens with touch-friendly interactions
- **Tablet**: Adaptive layouts for medium-sized screens
- **Desktop**: Full-featured experience with larger layouts

## 🎭 Animations

Powered by Framer Motion, the app includes:
- **Page Transitions** - Smooth page-to-page navigation
- **Component Animations** - Fade-in, slide-up, and scale effects
- **Interactive Feedback** - Hover states and micro-interactions
- **Loading States** - Smooth loading animations and transitions

## 🔒 Future Enhancements

- [ ] **Real Map Integration** - Mapbox or Google Maps integration
- [ ] **User Authentication** - Login/signup system
- [ ] **Payment Processing** - Stripe integration for real payments
- [ ] **Real-time Tracking** - WebSocket integration for live updates
- [ ] **Push Notifications** - Service worker for offline support
- [ ] **PWA Features** - Installable app with offline capabilities

## 🤝 Contributing

This is a portfolio project, but contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Uber** for the inspiration and design patterns
- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for the smooth animation library

## 📞 Contact

For questions or feedback about this project:
- **Portfolio**: https://www.oscar-valles.com/
- **LinkedIn**: https://www.linkedin.com/in/oscarvalles87/
- **GitHub**: https://github.com/ovalles2019

---

**Note**: This is a portfolio project created for demonstration purposes. It does not provide actual ride-sharing services and is not affiliated with Uber. 
