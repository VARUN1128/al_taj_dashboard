# Taj Resto Admin Dashboard

A comprehensive admin dashboard for the Taj Resto food ordering web app, built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Features

### 📊 Dashboard Overview
- **Analytics Cards**: Total Orders, Revenue This Week, Average Order Value, Menu Items
- **Interactive Charts**: Popular Items Bar Chart, Order Status Distribution Pie Chart
- **Recent Orders**: Quick view of latest orders with status indicators

### 🧾 Orders Management
- **Live Order Tracking**: View and manage all customer orders
- **Status Updates**: Update order status (Pending → Preparing → Completed)
- **Advanced Filtering**: Filter by status, search by customer name/phone/order ID
- **Detailed Order View**: Complete order details with customer info and items
- **Order Actions**: Start preparing, mark complete, or cancel orders

### 🍽️ Menu Management
- **CRUD Operations**: Add, edit, delete menu items
- **Rich Item Details**: Name, description, price, category, dietary preferences
- **Image Support**: Upload and preview menu item images
- **Category Assignment**: Assign items to categories with dropdown selection
- **Availability Toggle**: Enable/disable menu items
- **Search & Filter**: Find items quickly with search functionality

### 📂 Category Management
- **Category CRUD**: Add, edit, delete menu categories
- **Display Order**: Control category display order
- **Icon Support**: Add emoji icons for visual appeal
- **Organized Layout**: Clean table view with actions

### 🎁 Services Management
- **Catering Services**: Manage party/catering order services
- **Service Details**: Name, description, pricing, images
- **Active/Inactive Toggle**: Control service visibility
- **Grid Layout**: Beautiful card-based service display

### 🏪 Restaurant Settings
- **Restaurant Info**: Manage restaurant name, contact, address, working hours
- **Minimum Order**: Set minimum order amount
- **Branch Management**: Add, edit, delete restaurant branches
- **Branch Details**: Name, address, contact, active status

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **Charts**: Recharts
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd taj-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Database Setup**
   Set up the following tables in your Supabase database:

   ### Tables Structure

   **orders**
   ```sql
   id: uuid (primary key)
   customer_name: text
   customer_phone: text
   delivery_address: text
   payment_mode: text (cash/card/online)
   status: text (pending/preparing/completed/cancelled)
   total_amount: numeric
   created_at: timestamp
   updated_at: timestamp
   ```

   **menu_items**
   ```sql
   id: uuid (primary key)
   name: text
   description: text
   price: numeric
   image_url: text
   category_id: uuid (foreign key to categories.id)
   is_vegetarian: boolean
   is_spicy: boolean
   is_available: boolean
   created_at: timestamp
   updated_at: timestamp
   ```

   **categories**
   ```sql
   id: uuid (primary key)
   name: text
   icon: text
   display_order: integer
   created_at: timestamp
   updated_at: timestamp
   ```

   **services**
   ```sql
   id: uuid (primary key)
   name: text
   description: text
   pricing: text
   image_url: text
   is_active: boolean
   created_at: timestamp
   updated_at: timestamp
   ```

   **restaurant_info**
   ```sql
   id: uuid (primary key)
   name: text
   contact: text
   address: text
   working_hours: text
   minimum_order_amount: numeric
   created_at: timestamp
   updated_at: timestamp
   ```

   **branches**
   ```sql
   id: uuid (primary key)
   name: text
   address: text
   contact: text
   is_active: boolean
   created_at: timestamp
   updated_at: timestamp
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔐 Authentication

The admin dashboard is protected and requires authentication. You'll need to:

1. Create an admin user in Supabase Auth
2. Use the login page at `/login` to access the dashboard
3. The system will automatically redirect unauthenticated users to the login page

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with Tailwind CSS
- **Loading States**: Smooth loading indicators for all async operations
- **Success/Error Toasts**: User-friendly notifications for all actions
- **Empty States**: Helpful messages when no data is available
- **Interactive Elements**: Hover effects, focus states, and smooth transitions
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update color scheme in `globals.css`
- Customize component styles in individual files

### Database
- Add new tables in Supabase
- Update TypeScript interfaces in `lib/supabase.ts`
- Modify queries in component files

### Features
- Add new pages in `app/admin/` directory
- Create new components in `components/` directory
- Update navigation in `app/admin/layout.tsx`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ for Taj Resto** 