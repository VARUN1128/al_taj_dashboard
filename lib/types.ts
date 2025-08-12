// Database types for Taj Resto admin dashboard
// These types should match your Supabase database schema

export interface Database {
  public: {
    Tables: {
      menu_items: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          image_url: string
          category_id: string
          is_vegetarian: boolean
          is_spicy: boolean
          is_available: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          image_url: string
          category_id: string
          is_vegetarian?: boolean
          is_spicy?: boolean
          is_available?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          image_url?: string
          category_id?: string
          is_vegetarian?: boolean
          is_spicy?: boolean
          is_available?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          icon: string
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          icon: string
          display_order: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          icon?: string
          display_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          customer_name: string
          customer_phone: string
          delivery_address: string
          payment_mode: 'cash' | 'card' | 'online'
          status: 'pending' | 'preparing' | 'completed' | 'cancelled'
          total_amount: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          customer_name: string
          customer_phone: string
          delivery_address: string
          payment_mode: 'cash' | 'card' | 'online'
          status?: 'pending' | 'preparing' | 'completed' | 'cancelled'
          total_amount: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          customer_name?: string
          customer_phone?: string
          delivery_address?: string
          payment_mode?: 'cash' | 'card' | 'online'
          status?: 'pending' | 'preparing' | 'completed' | 'cancelled'
          total_amount?: number
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          menu_item_id: string
          quantity: number
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          menu_item_id: string
          quantity: number
          price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          menu_item_id?: string
          quantity?: number
          price?: number
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          phone: string
          address: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          phone: string
          address: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone?: string
          address?: string
          created_at?: string
          updated_at?: string
        }
      }
      rewards: {
        Row: {
          id: string
          user_id: string
          points: number
          tier: 'normal' | 'premium'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          points: number
          tier?: 'normal' | 'premium'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          points?: number
          tier?: 'normal' | 'premium'
          created_at?: string
          updated_at?: string
        }
      }
      branches: {
        Row: {
          id: string
          name: string
          address: string
          contact: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          address: string
          contact: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          address?: string
          contact?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          name: string
          description: string
          pricing: string
          image_url: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          pricing: string
          image_url: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          pricing?: string
          image_url?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      restaurant_info: {
        Row: {
          id: string
          name: string
          contact: string
          address: string
          working_hours: string
          minimum_order_amount: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          contact: string
          address: string
          working_hours: string
          minimum_order_amount: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          contact?: string
          address?: string
          working_hours?: string
          minimum_order_amount?: number
          created_at?: string
          updated_at?: string
        }
      }
      offers: {
        Row: {
          id: string
          title: string
          description: string
          discount_percentage: number
          valid_from: string
          valid_until: string
          is_active: boolean
          image_url: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          discount_percentage: number
          valid_from: string
          valid_until: string
          is_active?: boolean
          image_url: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          discount_percentage?: number
          valid_from?: string
          valid_until?: string
          is_active?: boolean
          image_url?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

// Convenience types for components
export type MenuItem = Database['public']['Tables']['menu_items']['Row'] & {
  category?: Category
}

export type Category = Database['public']['Tables']['categories']['Row']

export type Order = Database['public']['Tables']['orders']['Row'] & {
  order_items?: OrderItem[]
  user?: User
}

export type OrderItem = Database['public']['Tables']['order_items']['Row'] & {
  menu_item?: MenuItem
}

export type User = Database['public']['Tables']['users']['Row'] & {
  rewards?: Reward
}

export type Reward = Database['public']['Tables']['rewards']['Row']

export type Branch = Database['public']['Tables']['branches']['Row']

export type Service = Database['public']['Tables']['services']['Row']

export type RestaurantInfo = Database['public']['Tables']['restaurant_info']['Row']

export type Offer = Database['public']['Tables']['offers']['Row']

// API Response types
export interface ApiResponse<T> {
  data: T | null
  error: string | null
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Form types
export interface MenuItemFormData {
  name: string
  description: string
  price: number
  image_url: string
  category_id: string
  is_vegetarian: boolean
  is_spicy: boolean
  is_available: boolean
}

export interface CategoryFormData {
  name: string
  icon: string
  display_order: number
}

export interface OrderUpdateData {
  status: Order['status']
}

export interface RewardUpdateData {
  points: number
  tier: Reward['tier']
}
