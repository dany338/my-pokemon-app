# My Pokémon App

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Running the Project](#running-the-project)
4. [Deploying to Vercel](#deploying-to-vercel)
5. [Project Description](#project-description)
   - [Components](#components)
   - [Hooks](#hooks)
   - [Pages](#pages)
   - [Utils](#utils)
6. [Test Cases](#test-cases)
7. [Production](#production)

---

## Introduction
This project is a Pokémon management and visualization app. Users can search for Pokémon, view details, and manage their favorites. The application is built with React, TypeScript, and uses Vite as the bundler.

---

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd my-pokemon-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Project

### Development Mode:
```bash
npm run dev
```

### Build for Production:
```bash
npm run build
```

### Preview the Production Build:
```bash
npm run preview
```

### Running Test Cases with Vitest:
```bash
npx vitest
```

To run only the failed test cases:
```bash
npx vitest --rerun
```

---

## Deploying to Vercel

1. Install the Vercel CLI if you don’t have it:
   ```bash
   npm install -g vercel
   ```

2. Deploy the project:
   ```bash
   vercel
   ```

3. Follow the interactive instructions to configure your project and get the production URL.

---

## Project Description

### Components

#### `Navbar.tsx`
- **Description:** Main navigation component with a responsive menu (includes a dropdown menu for small screens).
- **Main Functions:**
  - Navigation between pages (Home, Favorites, Logout).
  - Support for responsive design with `Disclosure`.

#### `PokemonCard.tsx`
- **Description:** Displays an individual Pokémon card.
- **Main Props:**
  - `id`: Pokémon ID.
  - `name`: Pokémon name.
  - `image`: Pokémon image.
  - `handleNavigateToDetails`: Function to navigate to the details page.

#### `Pagination.tsx`
- **Description:** Pagination control for navigating between result pages.
- **Main Props:**
  - `currentPage`: Current page.
  - `totalPages`: Total available pages.
  - `onPageChange`: Function to handle page changes.

#### `SearchBar.tsx`
- **Description:** Search bar to filter Pokémon by name.
- **Main Props:**
  - `onSearch`: Function to handle the search event.

### Hooks

#### `usePokemonListStore.ts`
- **Description:** Manages global state for the Pokémon list.
- **Features:**
  - Stores and updates the Pokémon list.
  - Manages scroll position.

#### `favoritiesStore.ts`
- **Description:** Manages global state for Pokémon marked as favorites.
- **Features:**
  - Add and remove Pokémon from favorites.
  - Retrieve the list of favorites.

### Pages

#### `Home.tsx`
- **Description:** Main page where the Pokémon collection is listed.
- **Main Features:**
  - Search by name.
  - Navigate to the details page.

#### `Details.tsx`
- **Description:** Displays detailed information about a specific Pokémon.
- **Displayed Data:**
  - Image.
  - Abilities.

#### `Favorites.tsx`
- **Description:** Page showing Pokémon marked as favorites.
- **Main Features:**
  - List all favorite Pokémon.
  - Navigate to the details page from favorites.

### Utils

#### `api.ts`
- **Description:** Contains functions to make requests to the Pokémon API.
- **Main Functions:**
  - `fetchPokemonList`: Retrieves the Pokémon list.
  - `fetchPokemonDetails`: Retrieves details of a specific Pokémon.

#### `auth.ts`
- **Description:** Manages authentication and token storage.
- **Main Functions:**
  - `validateCredentials`: Verifies entered credentials.
  - `saveAuthToken`: Saves the authentication token to `localStorage`.
  - `clearAuthToken`: Removes the authentication token.
  - `isAuthenticated`: Checks if the user is authenticated.

#### `formatters.ts`
- **Description:** Helper functions to format data.
- **Main Functions:**
  - `formatPokemonName`: Formats a Pokémon’s name.

#### `localStorageHelpers.ts`
- **Description:** Functions for common operations in `localStorage`.
- **Main Functions:**
  - `saveToLocalStorage`: Saves data to `localStorage`.
  - `getFromLocalStorage`: Retrieves data from `localStorage`.
  - `removeFromLocalStorage`: Deletes data from `localStorage`.

---

## Test Cases

### File: `Home.test.tsx`
- **Covered Cases:**
  1. Display the Pokémon list.
  2. Navigate to the details page when clicking on a Pokémon.
  3. Restore scroll position when returning to the list.

### File: `Navbar.test.tsx`
- **Covered Cases:**
  1. Display menu items.
  2. Handle logout correctly.
  3. Toggle the menu on small screens.

### File: `usePokemonListStore.test.ts`
- **Covered Cases:**
  1. Initialize with default values.
  2. Update the current page.
  3. Update scroll position.

---

## Production

### URL
The application is available at:
[https://my-pokemon-app.vercel.app](https://my-pokemon-aroawjsfa-dany338s-projects.vercel.app)
