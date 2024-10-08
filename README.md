# Profile E-Commerce

## Overview

Profile E-Commerce is a modern e-commerce application built with Next.js and TypeScript. It features a clean and responsive design with functionalities for managing a shopping cart, browsing products, and more. The application is designed to provide an intuitive user experience across various devices.

## Features

### 1. **Product Search**

- **Search Functionality**: Users can search for products using the search bar located in the header. The search bar is styled for a seamless user experience.
- **Search Results**: The application fetches and displays products based on the search query using the external API.

### 2. **Product Listing**

- **Product Cards**: Each product is displayed in a card format with an image, title, price, and an "Add to Cart" button.
- **Dynamic Navigation**: Clicking on a product card adds the product to the cart and navigates to the cart page.

### 3. **Shopping Cart**

- **Add to Cart**: Clicking the "Add to Cart" button on a product card adds the item to the cart.
- **Cart Persistence**: Cart items are saved in local storage, ensuring they persist across page refreshes.
- **Update Quantity**: Users can update the quantity of items in the cart. This functionality is handled by the `updateQuantity` method in the context.
- **Remove Items**: Items can be removed from the cart using the remove button.
- **Clear Cart**: Users have the option to clear all items from the cart.

### 4. **Sidebar and Navigation**

- **Desktop View**: A sidebar is available on larger screens, providing easy access to navigation links.
- **Mobile View**: On smaller screens, a menu icon is provided to open a slide-out navigation menu.
- **Responsive Design**: The sidebar transitions to a slide-out menu when the screen width is below 700px.

### 5. **Custom Toast Notifications**

- **Add to Cart Notification**: A custom toast notification appears when an item is added to the cart, informing users of the successful action.
- **Navigation on Toast Click**: Clicking the toast notification will navigate the user to the cart page.

## Setup

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/profile-ecommerce.git
   cd profile-ecommerce
   
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
#   p r o f i l e _ e c o m m 
 
 
