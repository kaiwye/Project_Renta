<img src="https://github.com/user-attachments/assets/3bc2ccdd-8616-4984-82c6-ea50016c52be" alt="renta-logo" width="200"/>

# Welcome to Project Renta!

This web app was produced to help tenants and propety managers streamline communication and operations. We've designed a seamless property management system that allows for seamless rent/utility payments, easy submissions of maintenance requests, and community building through announcements.

## Tech Stack
- React (Vite)
- Express.js
- PostgreSQL
- Stripe API
- Cloudinary (image hosting)
- Multer (file uploads)
- Node.js

## Key Features

**Secure authentication and role-based access**
<br>
<img src="https://github.com/user-attachments/assets/b92ba5b8-ced7-4123-8ba2-9a9e4c2ef29f" alt="ManagerDashboard" width="75%"/>

<br>
  
**Tenants can submit maintenance requests and view announcements**
<br>
<img src="https://github.com/user-attachments/assets/efc50e3a-cb84-4482-8706-31117022c791" alt="Maintenance" width="75%"/>

<br>

**Property managers can manage their tenants/units, edit/complete maintenance requests, and approve/deny announcements**
<br>
<img src="https://github.com/user-attachments/assets/fab80cd5-a432-488b-9bcd-23ce7347b024" alt="Announcements" width="75%"/>

<br>

**Payments via Stripe**
<br>
<img src="https://github.com/user-attachments/assets/0a2c63ee-09d7-4ab0-a115-cb86d627a589" alt="Announcements" width="75%"/>

## Getting Started

### Live Demo: [Project Renta](https://property-management-capstone.netlify.app)

Feel free to create your own test account or use these test accounts for exploration!

### Tenant
Username: user1
<br>
Password: password1

### Manager
Username: manager1
<br>
Password: password1

## Installation

For running Project Renta locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/project-renta.git
cd project-renta
```

### 2. Set up your Environment Variables

```bash
cd backend
cp example.env .env
```
Open .env and replace the pre-existing values with your own:
- PostgreSQL connection string
- JWT Secret
- Stripe Secret Key and Webhook Secret
- Cloudinary Credentials (Image Uploads)

```bash
cd ../frontend
cp exmaple.env .env
```
Update the .env file with:
- VITE_API_URL: Your backend API URL
- VITE_STRIPE_PUBLISHABLE_KEY: Your Stripe test publishable key

### 3. Install Dependencies

Frontend
```bash
cd frontend
npm install
```

Backend
```bash
cd ../backend
npm install
```

### 4. Run the App!

Backend (Port 8000)
```bash
npm run dev
```

Frontend (Port 5173)
Open a new terminal tab and run:
```bash
cd frontend
npm run dev
```

## Team

Built by [Kai Wui Ye](https://www.linkedin.com/in/kaiwye/), [Matthew Sharp](https://www.linkedin.com/in/matthew-sharp-573811335/), [Aidan Henning](https://www.linkedin.com/in/aidanhenning/), [Bram Cohn](https://www.linkedin.com/in/bram-cohn-66bb03370/), and [Timothee Thomance](https://www.linkedin.com/in/timothee-thomance/).

<img src="https://github.com/user-attachments/assets/7eff463a-fc6d-4ac1-a21d-7c6ea41a2013" alt="ProfilePic" width="35%"/>

<br>

Feel free to connect with me via [LinkedIn](https://www.linkedin.com/in/kaiwye/).
