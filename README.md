# 🚐 Travel Trucks app.
Travel Trucks is a desktop application that helps users rent camper trucks for their trips.
Users can filter campers by features, read reviews, add them to favorites, and book a camper using a simple booking form.

---

## ✨ Features

- Camper catalog with pagination (“Load more”)
- Advanced filters (location, equipment, transmission, vehicle type)
- Sticky filters sidebar for better UX
- Detailed camper pages with gallery and reviews
- Add campers to favorites (saved in localStorage)
- Booking form with validation and date picker
- Custom calendar with disabled past dates
- Toast notifications on successful booking
- Empty state for no search results
- Responsive desktop layout

---

## 🛠️ Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **CSS Modules**
- **react-hot-toast**
- **REST API**

---

## 🧭 Project Structure

```txt
app/
 ├─ page.tsx        # Home page
 ├─ layout.tsx      # App layout with header
 ├─ catalog/
 │   ├─ page.tsx    # Catalog page
 │   └─ [id]/       # Camper details page
 ├─ components/
 ├─ lib/
 │   └─ api/
 ├─ public/
 └─ types/
 ```
---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## env
NEXT_PUBLIC_API_URL=your_api_url_here

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

---

## 📸 Screenshots

<img width="1229" height="728" alt="Home page" src="https://github.com/user-attachments/assets/ff24cb8d-62c9-49ff-9f68-8c0362cc4494" />

<img width="1229" height="790" alt="Catalog page" src="https://github.com/user-attachments/assets/5e4fe8e4-50d8-440f-8bd2-e433c2a9e82e" />

<img width="566" height="530" alt="Details page_booking form" src="https://github.com/user-attachments/assets/4763da3a-437c-4d01-a81e-cb28ce73c099" />

<img width="562" height="624" alt="Details page_features" src="https://github.com/user-attachments/assets/0d3fa746-2102-4eeb-b9c0-6b019c08eb7a" />

<img width="549" height="313" alt="Details page_reviews" src="https://github.com/user-attachments/assets/23c0443e-b8d7-4c0d-b85f-b4911a53b68d" />

---

## 👩‍💻 Author

Created by Maryna Prushak
Fullstack Developer

