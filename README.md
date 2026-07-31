<<<<<<< HEAD
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
=======
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
>>>>>>> a4d5487d1aa0016c79c33f331fdea824a83eed0b
