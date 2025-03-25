# Calorie Tracker for Indian Cuisine

## Overview

This is a **Next.js**-based calorie tracking web application designed specifically for **Indian users** to track their daily food intake. Built with **React**, **TypeScript**, and modern UI frameworks, the platform provides a **single-page layout** with interactive tracking features.

## Technologies Used

-   **Next.js** (15+) – React framework for optimized performance
-   **TypeScript** – Ensuring type safety
-   **PostgreSQL** – Database for storing user and food data
-   **Prisma** – ORM for efficient database queries
-   **Clerk** – Authentication and user management
-   **MaterialUI & ShadCN** – Styling and component design

## Features

### 🏠 **Layout & Design**

-   **Permanent Header:** Displays user authentication options (`Sign In`, `Manage Account`, `Sign Out`).
-   **Grid-Based Dashboard:** Three-column structure for real-time calorie and weight tracking.

### 📊 **Tracking System**

1. **Calorie & Weight Graph** (Column 1) – Visualizes user weight and calorie trends over time.
2. **Food Search & Database Querying** (Column 2) –
    - Search bar dynamically filters food from the database.
    - Live query updates dropdown suggestions as the user types.
3. **Daily Nutritional Overview** (Column 3):
    - **Calorie Tracker** – Displays consumed calories as a percentage of the user’s daily goal.
    - **Macronutrient Breakdown** – Tracks daily intake of **protein, carbohydrates, fats, sodium, and salt**.

### 🍛 **Food Database**

-   Each food item stores:
    -   `food_id`, `food_name`
    -   **Portion scaling** (e.g., **a bowl of daal** vs. **a piece of dosa**)
    -   **Base nutritional values** (adjusted according to portion selection)
-   Users can **log foods consumed** and **store portion sizes** for daily tracking.

## Future Plans

-   ✅ **Expand food database** with more Indian dishes
-   ✅ **User customization** for calorie goals & dietary preferences
-   ✅ **Mobile-responsive UI** for better accessibility
