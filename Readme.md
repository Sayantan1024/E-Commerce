# Advance Telecom – Optical & Precision Instruments E-Commerce Platform

## 🏢 Overview
**Advance Telecom** is a company specializing in **optical and precision instruments**, serving both industrial and commercial clients.  
This web application is a modern **MERN Stack**-based platform designed to act as the company’s **landing page and product portal**, enabling customers to explore products, submit inquiries, and receive personalized engagement.

---

## 🚀 Features
### 🌐 Company Landing Page
- Professional and responsive landing page showcasing company overview and offerings.
- Clean, modern UI built for optimal viewing across devices.

### 🧾 Product Listing
- Dynamic product catalog displaying available optical and precision instruments.
- Users can browse and view product details with ease.

### 📞 Contact Form
- Integrated form for users to share inquiries or feedback.
- Submitted data is stored securely for follow-up by the company.

### 🎨 Theme Changer
- Built-in dark/light mode toggle for enhanced user experience.

### 👤 Client Dashboard
- Personalized dashboard for clients to monitor customer preferences and engagement.

### 🧠 Customer Insights
- The system collects and organizes user interest data for **potential follow-up**, helping the company target relevant leads.

---

## 🛠️ Tech Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | React.js, TailwindCSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Deployment** | Frontend on Vercel (Backend restructuring in progress for deployment) |

---

## 📂 Project Structure
```bash
E-Commerce/
├── frontend/ (React)
│ ├── src/
| | ├── assets/ # Images, videos, logos
| | ├── context
│ │ ├── components/ # Navbar, Footer, Feature section, ui library components etc.
│ │ ├── pages/ # Home, Products, Contact Us, Dashboard
│ │ |── App.jsx # Root App component
│ │ |── main.jsx # Main Application entry point
│ └── package.json
│
├── backend/ (Node + Express)
│ ├── src/
│ | ├── controllers/ # API logic for user.controller
│ | ├── db/ # MongoDB connection
│ | ├── middlewares/ # JWT for authentication of client
│ | ├── models/ # Mongoose models for user and product
│ | ├── routes/ # API endpoints for user data
│ | ├── seed/ # Product seeding
│ | ├── utils/ # Utility files
│ | ├── app.js/ # Creating express app
│ | └── index.js
│ |── .env.sample # environment variables
│ └── package.json
|
└── README.md
```
---

### 🧑‍💻 Future Enhancements

- ✅ Backend restructuring and deployment to production.
- 📊 Integration of analytics dashboard for tracking customer behavior.
- 🧾 Admin panel for managing product listings and user interactions.
- 💬 Automated email follow-up system.

---

### 🌍 Deployment

- Frontend: Hosted on [Vercel](https://advancetelecom.vercel.app/)
- Backend: Deployment in progress (to be hosted on Render / Railway / AWS)
