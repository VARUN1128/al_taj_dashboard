# Taj Resto Admin Dashboard Setup Guide

## Prerequisites

- Node.js 18+ installed
- Supabase project created with the required tables

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.local.example .env.local
```

3. Configure environment variables in `.env.local`:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

## Required Supabase Tables

The admin dashboard expects the following tables in your Supabase database:

### 1. menu_items
- id (uuid, primary key)
- name (text)
- description (text)
- price (numeric)
- image_url (text)
- category_id (uuid, foreign key to categories.id)
- is_vegetarian (boolean)
- is_spicy (boolean)
- is_available (boolean)
- created_at (timestamp)
- updated_at (timestamp)

### 2. categories
- id (uuid, primary key)
- name (text)
- icon (text)
- display_order (integer)
- created_at (timestamp)
- updated_at (timestamp)

### 3. orders
- id (uuid, primary key)
- user_id (uuid, foreign key to users.id)
- customer_name (text)
- customer_phone (text)
- delivery_address (text)
- payment_mode (text, enum: 'cash', 'card', 'online')
- status (text, enum: 'pending', 'preparing', 'completed', 'cancelled')
- total_amount (numeric)
- created_at (timestamp)
- updated_at (timestamp)

### 4. order_items
- id (uuid, primary key)
- order_id (uuid, foreign key to orders.id)
- menu_item_id (uuid, foreign key to menu_items.id)
- quantity (integer)
- price (numeric)
- created_at (timestamp)

### 5. users
- id (uuid, primary key)
- email (text)
- full_name (text)
- phone (text)
- address (text)
- created_at (timestamp)
- updated_at (timestamp)

### 6. rewards
- id (uuid, primary key)
- user_id (uuid, foreign key to users.id)
- points (integer)
- tier (text, enum: 'normal', 'premium')
- created_at (timestamp)
- updated_at (timestamp)

### 7. branches
- id (uuid, primary key)
- name (text)
- address (text)
- contact (text)
- is_active (boolean)
- created_at (timestamp)
- updated_at (timestamp)

### 8. services
- id (uuid, primary key)
- name (text)
- description (text)
- pricing (text)
- image_url (text)
- is_active (boolean)
- created_at (timestamp)
- updated_at (timestamp)

### 9. restaurant_info
- id (uuid, primary key)
- name (text)
- contact (text)
- address (text)
- working_hours (text)
- minimum_order_amount (numeric)
- created_at (timestamp)
- updated_at (timestamp)

### 10. offers
- id (uuid, primary key)
- title (text)
- description (text)
- discount_percentage (integer)
- valid_from (timestamp)
- valid_until (timestamp)
- is_active (boolean)
- image_url (text)
- created_at (timestamp)
- updated_at (timestamp)

## Database Relationships

- `menu_items.category_id` → `categories.id`
- `orders.user_id` → `users.id`
- `order_items.order_id` → `orders.id`
- `order_items.menu_item_id` → `menu_items.id`
- `rewards.user_id` → `users.id`

## Row Level Security (RLS)

For production use, implement Row Level Security policies:

```sql
-- Example: Only authenticated users can read menu items
CREATE POLICY "Users can view menu items" ON menu_items
FOR SELECT USING (true);

-- Example: Only admins can modify menu items
CREATE POLICY "Admins can modify menu items" ON menu_items
FOR ALL USING (auth.role() = 'authenticated');
```

## Running the Dashboard

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000/admin](http://localhost:3000/admin)

## Features

- **Dashboard**: Real-time analytics and overview
- **Menu Management**: Full CRUD for menu items
- **Categories**: Manage food categories
- **Orders**: Track and update order status
- **Users & Rewards**: Manage customer rewards
- **Restaurant Info**: Update restaurant details
- **Branches**: Manage multiple locations
- **Offers**: Create and manage promotions

## Security Notes

- The service role key has full database access
- Implement proper authentication before production use
- Use Row Level Security policies
- Consider implementing admin user roles

## Troubleshooting

### Common Issues

1. **Environment variables not loaded**
   - Ensure `.env.local` exists and has correct values
   - Restart the development server

2. **Supabase connection errors**
   - Verify your Supabase URL and keys
   - Check if your Supabase project is active

3. **Table not found errors**
   - Ensure all required tables exist in your database
   - Check table names and column names match exactly

4. **Permission denied errors**
   - Verify your Supabase keys have the correct permissions
   - Check RLS policies if enabled

### Getting Help

- Check the browser console for error messages
- Verify Supabase dashboard for connection status
- Ensure all environment variables are set correctly
