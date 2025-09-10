# Job Portal 🌐

 
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)  
[![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)](https://nodejs.org/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-5.0-green?logo=mongodb)](https://www.mongodb.com/)  
[![Build](https://img.shields.io/github/actions/workflow/status/softyanshi/job-portal-custom/node.js.yml?branch=main)](https://github.com/softyanshi/job-portal-custom/actions)  
[![Issues](https://img.shields.io/github/issues/softyanshi/job-portal-custom)](https://github.com/softyanshi/job-portal-custom/issues)  
[![Live Demo](https://img.shields.io/badge/Live-Demo-blueviolet)](https://job-portal-custom-frontend.onrender.com)  

A **full-stack MERN Job Portal** with **dark/light mode toggle**, **responsive design**, and **role-based dashboards** for **Students** and **Recruiters**.  

---

## 🚀 Table of Contents

- [✨ Features](#-features)  
- [🛠️ Technologies Used](#-technologies-used)  
- [👩‍🎓 Student Features](#-student-features)  
- [👨‍💼 Recruiter Features](#-recruiter-features)  
- [⚙️ Getting Started](#-getting-started)  
- [📸 Screenshots](#-screenshots)  
- [🌐 Live Demo](#-live-demo)  
- [📊 Architecture](#-architecture)  
- [📄 License](#-license)  

---

## ✨ Features

- 🌟 **Responsive UI** for desktop & mobile  
- 🌗 **Dark/Light Mode Toggle**  
- 👥 **Role-based dashboards** (Students & Recruiters)  
- 🔍 **Advanced Job Search & Filters**  
  - Filter by **Location, Technology, Experience, Salary**  
- 💾 **Saved Jobs** & **Application Tracking**  
- ✅ **Recruiter Candidate Management** (Accept/Reject applicants)  
- 📝 **Profile Management** (Resume, Picture, Bio, Details)  
- 🔒 **Secure Authentication** (Login/Register)  

---

## 🛠️ Technologies Used

| Frontend       | Backend       | Database     | Others                |
|----------------|---------------|-------------|----------------------|
| React.js       | Node.js       | MongoDB     | Axios                |
| HTML5 / CSS3   | Express.js    |             | JWT Authentication   |
| JavaScript     |               |             | Tailwind CSS / MUI   |
| Redux (optional)|               |             |                      |

---

## 👩‍🎓 Student Features

- 🏠 **Home Page:** Job recommendations & overview  
- 🔎 **Browse Jobs:** Search by job title  
- 💼 **Jobs Page:** Filter & apply to jobs  
- ⭐ **Saved Jobs:** Bookmark jobs for later  
- 👤 **Profile Page:** Upload resume, picture, bio & track application status  
- ⏳ **Application Status:** Pending / Selected / Rejected  
- 🔐 **Authentication:** Register & Login  

---

## 👨‍💼 Recruiter Features

- 🏢 **Company Management:** Add/Edit company details  
- 📄 **Job Posting:** Post jobs for students to apply  
- 👥 **Candidate Management:** View, Accept or Reject applicants  
- 📝 **Profile Management:** Edit recruiter profile & company info  
- 🔐 **Authentication:** Register & Login  

---

## ⚙️ Getting Started

### Prerequisites

- Node.js installed  
- npm or yarn  
- MongoDB installed locally or MongoDB Atlas  

### Installation

```bash
# Clone the repo
git clone https://github.com/softyanshi/job-portal-custom.git

# Navigate to project
cd job-portal-custom

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

#Create a .env file in the backend folder:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

## Start backend server
cd backend
npm run dev

# Start frontend server
cd ../frontend
npm run dev

```bash
