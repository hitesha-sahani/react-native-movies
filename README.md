# 🎬 React Native Movie App

A modern **React Native Movie App** built with Expo, featuring real-time movie data, search, and a persistent watchlist system.

---

## 🤖 Introduction

This project goes beyond a basic tutorial by implementing real-world features like local persistence, clean UI design, and improved user experience.

✨ Key highlights:

* ⭐ Save & ❌ Unsave movies
* 💾 Persistent storage using AsyncStorage
* 👤 Profile tab with user stats
* 🎬 Cinematic splash screen

---

## 📋 Table of Contents

1. ⚙️ Tech Stack
2. 🔋 Features
3. 🤸 Quick Start
4. 📁 Project Structure

---

## ⚙️ Tech Stack

* **Expo** – Universal React Native development platform
* **React Native** – Cross-platform mobile framework
* **TypeScript** – Static typing for scalable code
* **NativeWind (Tailwind CSS)** – Utility-first styling
* **AsyncStorage** – Local persistent storage
* **TMDB API** – Movie data source
* **Appwrite (optional)** – Backend services

---

## 🔋 Features

👉 **Real-time data**
Fetch and display movies from TMDB API

👉 **Home Page**
Browse trending and latest movies

👉 **Search Page**
Search movies instantly

👉 **Save & Unsave System**

* Save movies to watchlist
* Remove movies from saved list

👉 **Persistent Storage**
Saved movies remain after app reload

👉 **Profile Tab**

* View saved movie count
* Clear saved movies

👉 **Cinematic Splash Screen**
Custom animated loading experience

👉 **Clean UI**
Responsive grid layout with smooth navigation

---

## 🤸 Quick Start

Follow these steps to run the project locally.

### Prerequisites

Make sure you have:

* Git
* Node.js
* npm

---

### Clone the repository

```bash
git clone https://github.com/hitesha-sahani/react-native-movies.git
cd react-native-movies
```

---

### Install dependencies

```bash
npm install
```

---

### Set up environment variables

Create a `.env` file:

```env
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
```

---

### Run the app

```bash
npx expo start
```

Then scan the QR code using Expo Go.

---

## 📁 Project Structure

```
app/
  (tabs)/
    index.tsx
    search.tsx
    save.tsx
    profile.tsx
  movie/
components/
services/
constants/
```

---

## 🚀 Future Improvements

* 🎬 Movie trailer support
* ❤️ Favorites system
* 🔐 Authentication
* 🎨 UI animations & polish
* ☁️ Cloud sync

---

## 🙌 Author

Built with ❤️ by **Hitesha Sahani**

GitHub: https://github.com/hitesha-sahani
