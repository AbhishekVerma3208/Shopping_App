# 🛍️ Shopping App (React Native)

A modern React Native shopping application built using **React Native CLI**. The app demonstrates a complete authentication flow, product listing, product details, search functionality, pull-to-refresh, error handling, and session management using REST APIs.

---

## 📱 Features

* 🔐 User Authentication (Login & Logout)
* 💾 Persistent Login Session using AsyncStorage
* 📦 Product Listing
* 🔍 Search Products
* 📄 Product Details Screen
* 🔄 Pull to Refresh
* ⏳ Loading Indicator
* ❌ Error Handling with Retry
* 🧩 Reusable Components
* 🧭 React Navigation
* 🌐 REST API Integration

---

## 🛠️ Tech Stack

* React Native CLI
* JavaScript (ES6+)
* React Navigation
* Axios
* AsyncStorage
* DummyJSON API
* ReqRes API (Authentication)

---

## 📂 Project Structure

```
ShoppingApp
│
├── src
│   ├── assets
│   │
│   ├── components
│   │   ├── ErrorView.js
│   │   ├── Loader.js
│   │   ├── ProductCard.js
│   │   └── SearchBar.js
│   │
│   ├── navigation
│   │   └── AppNavigator.js
│   │
│   ├── screens
│   │   ├── LoginScreen.js
│   │   ├── HomeScreen.js
│   │   └── DetailScreen.js
│   │
│   ├── services
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── productService.js
│   │
│   └── utils
│
├── App.js
├── package.json
└── README.md
```

---

## 🔗 APIs Used

### Authentication

ReqRes API

```
POST https://reqres.in/api/login
```

### Products List

DummyJSON

```
GET https://dummyjson.com/products
```

### Product Details

DummyJSON

```
GET https://dummyjson.com/products/{id}
```

---

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/ShoppingApp.git
```

### 2. Move into Project

```bash
cd ShoppingApp
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Android

```bash
npx react-native run-android
```

### 5. iOS

```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

---

## 📸 Screenshots

### Login Screen

> Add screenshot here

```
images/login.png
```

---

### Home Screen

> Add screenshot here

```
images/home.png
```

---

### Search Products

> Add screenshot here

```
images/search.png
```

---

### Product Details

> Add screenshot here

```
images/detail.png
```

---

### Error Screen

> Add screenshot here

```
images/error.png
```

---

## 🎯 Functionalities Implemented

* Login Authentication
* Logout
* Session Persistence
* Product Listing
* Product Details
* Search Functionality
* Pull To Refresh
* Loading State
* Error Handling
* Navigation
* API Integration
* Reusable Components

---

## 📌 Future Improvements

* User Profile Screen
* Dark Mode
* Product Categories
* Wishlist
* Shopping Cart
* Pagination
* Favorites
* Better UI Animations

---

## 👨‍💻 Author

**Abhishek Verma**

React Native Developer

GitHub: https://github.com/your-github-username

LinkedIn: https://linkedin.com/in/your-linkedin-profile

---

## 📄 License

This project is created for learning and assignment purposes.
