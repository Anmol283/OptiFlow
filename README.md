# 🚀 OptiFlow - Smart Task Management

> A powerful, intuitive task management application that helps you organize your workflow with ease. Built with React.js and Firebase Authentication for secure user access.

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)](https://redux.js.org/)

## ✨ Features that Shine

- 📋 **Intuitive Task Management**
 
- 📊 **Productivity Analytics**
 
- 🔒 **Secure User Authentication**


 

## 🚀 Quick Setup

### Prerequisites

```bash
# Node.js installation required
node -v  # Should be v14.0.0 or higher

# npm or yarn for package management
npm -v   # Should be v6.0.0 or higher
# or
yarn -v  # Should be v1.22.0 or higher

# Firebase project setup required
# Create a project at https://console.firebase.google.com/
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anmol283/OptiFlow
   cd optiflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Firebase**
   ```javascript
   // In src/firebase/config.js, replace with your Firebase config
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Access the application**
   ```
   Open http://localhost:3000 in your browser
   ```

## 🛠️ Technical Architecture

```
optiflow/
├── 📁 public/                 # Static files
│   ├── index.html            # HTML entry point
│   ├── manifest.json         # PWA manifest
│   └── assets/               # Images and icons
├── 📁 src/                    # Source code
│   ├── 📁 components/         # React components
│   │   ├── Auth/             # Authentication components
│   │   ├── Dashboard/        # Dashboard layout
│   │   ├── Tasks/            # Task-related components
│   │   ├── UI/               # Reusable UI components
│   │   ├── Navbar.jsx        # Navigation bar component
│   │   ├── Firebase.jsx      # Firebase-related component
│   │   └── ThreeParticles.jsx # Particle.js component (assumed from "threeparticles")
│   ├── 📁 context/            # React context
│   ├── 📁 firebase/           # Firebase configuration
│   ├── 📁 hooks/              # Custom hooks
│   ├── 📁 pages/              # Application pages
│   │   ├── Login.jsx         # Login page
│   │   ├── Signin.jsx        # Sign-in page
│   │   ├── Dashboard.jsx     # Dashboard page
│   │   ├── Calendar.jsx      # Calendar page
│   │   ├── Report.jsx        # Report page
│   │   └── TaskLoader.jsx    # Task loader page
│   ├── 📁 redux/              # Redux store setup
│   │   ├── actions/          # Redux actions
│   │   ├── reducers/         # Redux reducers
│   │   └── store.js          # Redux store configuration
│   ├── 📁 styles/             # CSS/SCSS styles
│   ├── App.js                # Main App component
│   └── index.js              # JavaScript entry point
└── 📁 config/                 # Build configuration
```

## 🔒 Authentication Flow

### User Registration
OptiFlow provides a seamless registration process:

1. **Email/Password Registration**
   ```javascript
   const handleSignUp = async (e) => {
     e.preventDefault();
     try {
       await signUpUser(email, password);
       history.push('/dashboard');
     } catch (error) {
       setError(error.message);
     }
   };
   ```

2. **Social Media Authentication**
   - Google Sign-In
   - Github Sign-In


## 📋 Task Management Features

### Creating Tasks
Users can create tasks with:
- Title and description
- Priority level (Low, Medium, High)
- Due date

## 🎨 Styling Highlights

- **Modern UI**: Sleek, minimalist design with Particle.js effects
- **Animations**: Framer Motion task loader and smooth transitions
- **Accessibility**: WCAG 2.1 compliant design

## 🔜 Roadmap

- [ ] Collaborative task sharing
- [ ] Task templates
- [ ] Email notifications
- [ ] Time tracking integration
- [ ] Advanced reporting features
- [ ] Mobile app version (React Native)

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.


## 📬 Let's Connect!

<div align="center">

<a href="mailto:295anmol@gmail.com">
  <img src="https://img.shields.io/badge/Email-295anmol%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
</a>

<a href="https://www.linkedin.com/in/anmol-573a162a6/">
  <img src="https://img.shields.io/badge/LinkedIn-Anmol-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
</a>

<a href="https://github.com/Anmol283/OptiFlow">
  <img src="https://img.shields.io/badge/GitHub-OptiFlow-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</a>

</div>

---

<p align="center">
  💻 Visit our website: <a href="https://opti-flow-self.vercel.app/">OptiFlow</a>
</p>

<p align="center">
  🌟 Star this repository if you find it helpful!
</p>

</div>

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Redux](https://redux.js.org/)
- [Material-UI](https://mui.com/)
- [React DnD](https://react-dnd.github.io/react-dnd/)

---

<div align="center">
Made with ❤️ by Anmol
</div>
