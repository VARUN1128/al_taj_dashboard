import { supabase, supabaseAdmin } from './supabaseClient'
import type {
  MenuItem,
  Category,
  Order,
  OrderItem,
  User,
  Reward,
  Branch,
  Service,
  RestaurantInfo,
  Offer,
  MenuItemFormData,
  CategoryFormData,
  OrderUpdateData,
  RewardUpdateData,
  PaginatedResponse,
  ApiResponse
} from './types'

// Menu Items CRUD
export const menuItemsService = {
  async getAll(page = 1, limit = 10): Promise<PaginatedResponse<MenuItem>> {
    try {
      const from = (page - 1) * limit
      const to = from + limit - 1

      const { data, error, count } = await supabase
        .from('menu_items')
        .select(`
          *,
          category:categories(*)
        `)
        .range(from, to)
        .order('created_at', { ascending: false })

      if (error) throw error

      const { count: totalCount } = await supabase
        .from('menu_items')
        .select('*', { count: 'exact', head: true })

      return {
        data: data || [],
        total: totalCount || 0,
        page,
        limit,
        totalPages: Math.ceil((totalCount || 0) / limit)
      }
    } catch (error) {
      console.error('Error fetching menu items:', error)
      throw error
    }
  },

  async getById(id: string): Promise<MenuItem | null> {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select(`
          *,
          category:categories(*)
        `)
        .eq('id', id)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching menu item:', error)
      throw error
    }
  },

  async create(item: MenuItemFormData): Promise<MenuItem> {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .insert({
          ...item,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error creating menu item:', error)
      throw error
    }
  },

  async update(id: string, item: Partial<MenuItemFormData>): Promise<MenuItem> {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .update({
          ...item,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating menu item:', error)
      throw error
    }
  },

  async delete(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', id)

      if (error) throw error
    } catch (error) {
      console.error('Error deleting menu item:', error)
      throw error
    }
  }
}

// Categories CRUD
export const categoriesService = {
  async getAll(): Promise<Category[]> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('display_order', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  },

  async create(category: CategoryFormData): Promise<Category> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .insert({
          ...category,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error creating category:', error)
      throw error
    }
  },

  async update(id: string, category: Partial<CategoryFormData>): Promise<Category> {
    try {
      const { data, error } = await supabase
        .from('categories')
        .update({
          ...category,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating category:', error)
      throw error
    }
  },

  async delete(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id)

      if (error) throw error
    } catch (error) {
      console.error('Error deleting category:', error)
      throw error
    }
  }
}

// Orders CRUD
export const ordersService = {
  async getAll(page = 1, limit = 10, status?: Order['status']): Promise<PaginatedResponse<Order>> {
    try {
      const from = (page - 1) * limit
      const to = from + limit - 1

      let query = supabase
        .from('orders')
        .select(`
          *,
          order_items:order_items(
            *,
            menu_item:menu_items(*)
          ),
          user:users(*)
        `)
        .range(from, to)
        .order('created_at', { ascending: false })

      if (status) {
        query = query.eq('status', status)
      }

      const { data, error } = await query

      if (error) throw error

      const { count: totalCount } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })

      return {
        data: data || [],
        total: totalCount || 0,
        page,
        limit,
        totalPages: Math.ceil((totalCount || 0) / limit)
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
      throw error
    }
  },

  async getById(id: string): Promise<Order | null> {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items:order_items(
            *,
            menu_item:menu_items(*)
          ),
          user:users(*)
        `)
        .eq('id', id)
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching order:', error)
      throw error
    }
  },

  async updateStatus(id: string, status: Order['status']): Promise<Order> {
    try {
      const { data, error } = await supabase
        .from('orders')
        .update({
          status,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating order status:', error)
      throw error
    }
  }
}

// Users & Rewards
export const usersService = {
  async getAll(page = 1, limit = 10): Promise<PaginatedResponse<User>> {
    try {
      const from = (page - 1) * limit
      const to = from + limit - 1

      const { data, error } = await supabase
        .from('users')
        .select(`
          *,
          rewards(*)
        `)
        .range(from, to)
        .order('created_at', { ascending: false })

      if (error) throw error

      const { count: totalCount } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })

      return {
        data: data || [],
        total: totalCount || 0,
        page,
        limit,
        totalPages: Math.ceil((totalCount || 0) / limit)
      }
    } catch (error) {
      console.error('Error fetching users:', error)
      throw error
    }
  },

  async updateRewards(userId: string, rewardData: RewardUpdateData): Promise<Reward> {
    try {
      const { data, error } = await supabase
        .from('rewards')
        .upsert({
          user_id: userId,
          ...rewardData,
          updated_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating rewards:', error)
      throw error
    }
  }
}

// Restaurant Info
export const restaurantService = {
  async getInfo(): Promise<RestaurantInfo | null> {
    try {
      const { data, error } = await supabase
        .from('restaurant_info')
        .select('*')
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error fetching restaurant info:', error)
      throw error
    }
  },

  async updateInfo(info: Partial<RestaurantInfo>): Promise<RestaurantInfo> {
    try {
      const { data, error } = await supabase
        .from('restaurant_info')
        .update({
          ...info,
          updated_at: new Date().toISOString()
        })
        .eq('id', '1') // Assuming single restaurant
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating restaurant info:', error)
      throw error
    }
  }
}

// Branches
export const branchesService = {
  async getAll(): Promise<Branch[]> {
    try {
      const { data, error } = await supabase
        .from('branches')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching branches:', error)
      throw error
    }
  },

  async create(branch: Omit<Branch, 'id' | 'created_at' | 'updated_at'>): Promise<Branch> {
    try {
      const { data, error } = await supabase
        .from('branches')
        .insert({
          ...branch,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error creating branch:', error)
      throw error
    }
  },

  async update(id: string, branch: Partial<Branch>): Promise<Branch> {
    try {
      const { data, error } = await supabase
        .from('branches')
        .update({
          ...branch,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating branch:', error)
      throw error
    }
  },

  async delete(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('branches')
        .delete()
        .eq('id', id)

      if (error) throw error
    } catch (error) {
      console.error('Error deleting branch:', error)
      throw error
    }
  }
}

// Offers
export const offersService = {
  async getAll(): Promise<Offer[]> {
    try {
      const { data, error } = await supabase
        .from('offers')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching offers:', error)
      throw error
    }
  },

  async create(offer: Omit<Offer, 'id' | 'created_at' | 'updated_at'>): Promise<Offer> {
    try {
      const { data, error } = await supabase
        .from('offers')
        .insert({
          ...offer,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error creating offer:', error)
      throw error
    }
  },

  async update(id: string, offer: Partial<Offer>): Promise<Offer> {
    try {
      const { data, error } = await supabase
        .from('offers')
        .update({
          ...offer,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Error updating offer:', error)
      throw error
    }
  },

  async delete(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('offers')
        .delete()
        .eq('id', id)

      if (error) throw error
    } catch (error) {
      console.error('Error deleting offer:', error)
      throw error
    }
  }
}

// Analytics
export const analyticsService = {
  async getDashboardStats() {
    try {
      // Get total orders
      const { count: totalOrders } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })

      // Get revenue this week
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      
      const { data: weeklyOrders } = await supabase
        .from('orders')
        .select('total_amount')
        .gte('created_at', weekAgo.toISOString())
        .eq('status', 'completed')

      const revenueThisWeek = weeklyOrders?.reduce((sum, order) => sum + order.total_amount, 0) || 0

      // Get average order value
      const { data: allOrders } = await supabase
        .from('orders')
        .select('total_amount')
        .eq('status', 'completed')

      const averageOrderValue = allOrders && allOrders.length > 0 
        ? allOrders.reduce((sum, order) => sum + order.total_amount, 0) / allOrders.length 
        : 0

      // Get order status distribution
      const { data: statusData } = await supabase
        .from('orders')
        .select('status')

      const statusDistribution = statusData?.reduce((acc, order) => {
        acc[order.status] = (acc[order.status] || 0) + 1
        return acc
      }, {} as Record<string, number>) || {}

      return {
        total_orders: totalOrders || 0,
        revenue_this_week: revenueThisWeek,
        average_order_value: Math.round(averageOrderValue),
        order_status_distribution: Object.entries(statusDistribution).map(([status, count]) => ({
          status,
          count,
          percentage: totalOrders ? Math.round((count / totalOrders) * 100) : 0
        }))
      }
    } catch (error) {
      console.error('Error fetching analytics:', error)
      throw error
    }
  }
}
