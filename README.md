# Time Capsule

**Time Capsule** is a futuristic platform designed to let users write to their future selves, relive memories, and set goals for tomorrow. The project uses modern web technologies like React, React Router, Material-UI (MUI), and a custom backend with APIs to deliver a seamless user experience.

---

## 🚀 Features
- **User Authentication**: Login and Signup functionality with secure credential handling.
- **Interactive Landing Page**: An engaging glassmorphism design featuring parallax effects and animations.
- **Future Messaging**: Create and store messages to be read at a later time.
- **Dynamic Profiles**: Showcase team members with links to their LinkedIn profiles.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Scroll to Top**: Smooth scrolling functionality for better navigation.

---

## 🧑‍💻 Contributors
The Time Capsule project is brought to life by an amazing team:
- [Visithran D](https://www.linkedin.com/in/visithran-d-37a877291/)
- [Vijay Syam BK](https://www.linkedin.com/in/vijaysyam-bk/)
- [Vedesh N](https://www.linkedin.com/in/vedesh-n-b631b82a1)
- [Vijay PH](https://www.linkedin.com/in/vijay-ph-a039442a0/)

---

## 🛠️ Tech Stack
- **Frontend**: React, React Router, Material-UI (MUI)
- **Backend**: Node.js, Express
- **Database**: MongoDB (or a mock database for now)
- **Styling**: CSS with animations and custom themes
- **Version Control**: Git and GitHub

---

## 🖥️ Installation and Setup
Follow these steps to set up and run the Time Capsule project locally:

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/vecodesh/Time-Capsule.git
cd Time-Capsule
```

### 2. Install Dependencies
Install the required packages for both the frontend and backend:
```bash
npm install
```

### 3. Start the Development Server
To start the React development server:
```bash
npm start
```
The app will run at [http://localhost:3000](http://localhost:3000).

---

## 🔧 Key Libraries and Tools

### 1. **React**
React is the foundation of this project. To set up a React app:
```bash
npx create-react-app timecapsule
```

### 2. **React Router**
React Router is used for seamless navigation between pages.
Install it using:
```bash
npm install react-router-dom
```
Key Routes:
- `/`: Landing Page
- `/login`: Login Page
- `/signup`: Signup Page
- `/writeletter`: Write Letter Page
- `/achievements`: Achievements Page
- `/community`: Community Page

### 3. **Material-UI (MUI)**
Material-UI is used for styling and components.
Install MUI with:
```bash
npm install @mui/material @emotion/react @emotion/styled
```
Example:
```javascript
import { Button } from "@mui/material";

<Button variant="contained" color="primary">
  Click Me
</Button>
```

### 4. **CORS**
CORS is enabled on the backend to handle API requests from the frontend:
```bash
npm install cors
```

### 5. **Axios**
Axios is used for making HTTP requests:
```bash
npm install axios
```
Example usage:
```javascript
import axios from "axios";

axios.get("/api/messages").then((response) => {
  console.log(response.data);
});
```

---

## 🌟 API Endpoints
Below are the key APIs used in the backend:

### 1. **User Authentication**
- **POST** `/api/auth/login`: Login user
- **POST** `/api/auth/signup`: Register new user

### 2. **Messages**
- **GET** `/api/messages`: Fetch all messages
- **POST** `/api/messages`: Create a new message

### 3. **Profiles**
- **GET** `/api/profiles`: Fetch profile information

---

## 🖌️ Custom Styling
The project uses a mix of custom CSS and MUI for styling:
- **Glassmorphism Design**: Transparent and frosted-glass effect.
- **CSS Animations**: Smooth transitions and hover effects.
- **Responsive Layout**: Mobile-first design using flexbox and grid.

---


## 🤝 Contribution
We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Create a Pull Request.

---


