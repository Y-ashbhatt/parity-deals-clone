# 🌎 Parity Deals Clone: Geo-Targeted Coupon SaaS

A feature-rich clone of the Parity Deals platform, built with **Next.js** and modern tools, providing a geo-targeted coupon system. This project is designed for scalability and optimized performance, enabling users to create customizable, location-based discounts and monitor site analytics in real-time.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [What I Learned](#what-i-learned)
- [Future Enhancements](#future-enhancements)
- [Author](#author)

## Overview
This project replicates Parity Deals' core functionalities as a SaaS platform, allowing site owners to show unique discounts based on user location. Users benefit from configurable discount settings, real-time analytics, subscription management, and permission-based access. The codebase is modular, modern, and highly maintainable.

## Features
- **Geo-Targeted Discounts**: Adjust discounts based on user location, segmented by purchasing power.
- **Customizable Banners**: Customize the banner message, color, font, and size to align with branding.
- **In-depth Analytics**: Track users by location, date, and product to gain insights into site traffic.
- **Subscription & Billing**: Multiple subscription tiers (e.g., Basic, Pro) with Stripe integration.
- **Access Permissions**: Role-based access, restricting lower-tier users from analytics and customization tools.
- **Caching System**: A robust caching layer to enhance performance and manage high traffic.

## Tech Stack
- **Frontend**: Next.js (React Framework), TypeScript, Tailwind CSS, ShadCN
- **Backend**: Next.js API Routes
- **Authentication**: Clerk for user authentication and role management
- **Database**: Neon (PostgreSQL) using Drizzle ORM
- **Payments**: Stripe API for subscription and billing
- **Deployment**: Vercel

## Getting Started
### Prerequisites
- Node.js v16.8 or later
- npm or yarn

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/parody-deals-clone.git
```
```bash
cd parody-deals-clone
```
```bash
npm install
```

## Run Locally
To start the development server:

```bash
npm run dev
```
Navigate to http://localhost:3000 in your browser.

## Usage

- **User Authentication**: Register or log in with Clerk.
- **Dashboard**: Access analytics, customize banners, and manage subscriptions.
- **Discounts**: Define and manage discounts by country group.
- **Admin Controls**: Only authorized users can edit discounts or view analytics based on their subscription level.

## What I Learned

This project taught me:

- **Advanced Authentication**: Implemented multi-tier access and role-based controls using Clerk.
- **Complex UI Customization**: Leveraged ShadCN with Tailwind CSS for a modular design system.
- **Geo-Targeted Discounts**: Developed logic to tailor discounts based on user location and purchasing power.
- **Modular Code Design**: Utilized Next.js App Router and TypeScript for scalable code structure and clean data handling.
- **SaaS Payment Integration**: Integrated Stripe for subscription handling, payment management, and role-based access.
- **Real-Time Analytics**: Designed dashboards that track user activity by date and country in Neon with Drizzle ORM.

## Future Enhancements

- **Real-Time Notifications**: Notify admins of high traffic from certain regions.
- **Advanced Customization Options**: Add more options for banner styling and layout.
- **Localization**: Support for multiple languages based on user location.

## Author

**Yash Bhatt**  
[GitHub](https://github.com/y-ashbhatt)  
[LinkedIn](https://www.linkedin.com/in/yashbhatt30)
