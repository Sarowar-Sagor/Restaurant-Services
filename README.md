# 🍽️ Restaurant Services - Full-Stack Web Application

![Project Status](https://img.shields.io/badge/Status-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Frontend Deployed with Firebase](https://img.shields.io/badge/Frontend_Deployed-Firebase-orange?logo=firebase)
![Backend Deployed with Vercel](https://img.shields.io/badge/Backend_Deployed-Vercel-black?logo=vercel)
![Built with React](https://img.shields.io/badge/Built%20With-React-61DAFB?logo=react&logoColor=white)
![Backend Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)
![Database MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)

---

## 🌟 Introduction

Welcome to **Restaurant Services**, a comprehensive full-stack web application designed to revolutionize the way restaurants manage their online presence, menu, users, and orders. This project showcases my expertise in building robust, secure, and user-friendly web solutions from the ground up.

This platform provides a seamless experience for both administrators and customers. It highlights my ability to integrate secure authentication, powerful data management, and reliable payment processing into a single, cohesive system.

## ✨ Key Features

This application is packed with essential functionalities to empower restaurant operations and enhance customer engagement:

*   **Robust Authentication System:**
    *   Email/Password Login & Registration.
    *   Google Authentication for quick access.
    *   reCAPTCHA integration for enhanced security.
    *   Protected Routes to ensure only authorized users access specific content.
    *   Secure session management using **JWT (JSON Web Tokens)**.
*   **Dual Dashboards:**
    *   **Admin Dashboard:** Comprehensive controls for managing the entire platform.
        *   Add new menu items.
        *   Manage existing menu items (edit, delete).
        *   Manage users (view, assign roles).
    *   **User Dashboard:** Personalized experience for customers to view their order history and manage their profile.
*   **Menu Management:** Admins can effortlessly add, update, and remove food items, keeping the online menu fresh and accurate.
*   **Secure Payment Gateway:** Users can securely pay for their orders using **Stripe**, offering a reliable and trusted payment solution.

## 💡 Problem Solved

**Restaurant Services** addresses several critical pain points for modern restaurants and their customers:

*   **Operational Inefficiency:** Many restaurants struggle with manual processes for menu updates, customer management, and order taking. This application automates these tasks, freeing up staff to focus on service.
*   **Lack of Digital Presence & Ordering:** In today's digital age, an effective online presence and seamless online ordering are crucial. This platform provides a professional storefront where customers can easily browse menus and place orders.
*   **Security & Trust Concerns:** Handling user data and payments online requires robust security. By implementing features like reCAPTCHA, JWT, and Stripe, the application ensures data integrity and secure transactions, building trust with users.

## 🚀 Live Demos

Experience the application live!

*   **Frontend (User Interface):** [https://restaurant-99179.web.app/](https://restaurant-99179.web.app/)
*   **Backend (API Server):** [https://vercel.com/sarowar-sagors-projects/restaurant-server](https://vercel.com/sarowar-sagors-projects/restaurant-server)

## 🛠️ Technologies Used

This project leverages a powerful and diverse stack to deliver a robust and scalable solution:

### Frontend
*   **React.js**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
*   **React Router DOM**: For declarative routing in React applications.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **DaisyUI**: A Tailwind CSS component library to quickly build beautiful UIs.
*   **`lottie-react`**: For integrating beautiful Lottie animations.
*   **`motion`**: Framer Motion for fluid and engaging animations.
*   **`react-icons`**: For a wide range of popular icons.
*   **`sweetalert2`**: For beautiful, responsive, and customizable alerts.
*   **`swiper`**: Modern touch slider.
*   **`react-simple-captcha`**: For reCAPTCHA integration.
*   **`react-responsive-carousel`**: For creating responsive carousels.
*   **`react-hook-form`**: For efficient and flexible form management.
*   **`react-helmet`**: To manage document head tags for SEO and other purposes.
*   **`moment`**: For parsing, validating, manipulating, and formatting dates.
*   **`@tanstack/react-query`**: For data fetching, caching, and state management.
*   **`@smastrom/react-rating`**: For interactive star rating components.
*   **`@stripe/react-stripe-js`**: React components for Stripe.js.
*   **`axios`**: Promise-based HTTP client for making API requests.

### Backend
*   **Node.js**: JavaScript runtime environment.
*   **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
*   **`jwt` (jsonwebtoken)**: For implementing JSON Web Tokens for authentication.
*   **`cookie-parser`**: Middleware to parse cookie headers.

### Database
*   **MongoDB**: A NoSQL document database for flexible data storage.

### Authentication
*   **Firebase Authentication**: For email/password and Google social login.

### Payments
*   **Stripe**: A secure and widely-used payment processing platform.

### Deployment & Tools
*   **Firebase Hosting**: For deploying the React frontend.
*   **Vercel**: For deploying the Node.js/Express backend.
*   **GitHub**: For version control and collaborative development.

## ⚙️ Getting Started

Follow these instructions to set up the project locally on your machine. This project consists of two separate repositories: one for the frontend (this repo) and one for the backend.

### Prerequisites

Make sure you have the following installed:

*   [Node.js](https://nodejs.org/en/) (LTS version recommended)
*   npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
*   [Git](https://git-scm.com/)



### Installation

1.  **Clone the Frontend Repository (this one):**
    ```bash
    git clone https://github.com/Sarowar-Sagor/Restaurant-Services.git
    ```
2.  **Navigate into the Frontend Directory:**
    ```bash
    cd Restaurant-Services
    ```
3.  **Install Frontend Dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```
4.  **Create `.env` File for Frontend:**
    Create a file named `.env.local` in the `Restaurant-Services` directory and add your Firebase configuration and API endpoint. Replace placeholders with your actual values:
    ```env
    VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID

    VITE_IMAGE_HOSTING_KEY=YOUR_IMAGE_HOSTING_KEY
    VITE_PAYMENT_GATEWAY_API=YOUR_STRIPE_PUBLISHABLE_KEY
    ```
5.  **Run the Frontend Development Server:**
    ```bash
    npm run dev
    # OR
    yarn dev
    ```
6.  **Open your browser:**
    Visit `http://localhost:5173` (or the port indicated in your terminal) to see the frontend application running.

## 📧 Contact

Feel free to reach out to me for collaborations, questions, or just to say hello!

*   **Email:** `sarowarsagor760@gmail.com`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
