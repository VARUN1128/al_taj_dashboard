// Mock data for demonstration
export interface Order {
  id: string
  customer_name: string
  customer_phone: string
  delivery_address: string
  payment_mode: 'cash' | 'card' | 'online'
  status: 'pending' | 'preparing' | 'completed' | 'cancelled'
  total_amount: number
  order_items: OrderItem[]
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: string
  menu_item_id: string
  quantity: number
  price: number
  menu_item: MenuItem
}

export interface MenuItem {
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
  category: Category
}

export interface Category {
  id: string
  name: string
  icon: string
  display_order: number
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  name: string
  description: string
  pricing: string
  image_url: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface RestaurantInfo {
  id: string
  name: string
  contact: string
  address: string
  working_hours: string
  minimum_order_amount: number
  branches: Branch[]
  created_at: string
  updated_at: string
}

export interface Branch {
  id: string
  name: string
  address: string
  contact: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Analytics {
  total_orders: number
  revenue_this_week: number
  average_order_value: number
  popular_items: PopularItem[]
}

export interface PopularItem {
  menu_item_id: string
  name: string
  total_orders: number
  revenue: number
}

// Mock data
export const mockOrders: Order[] = [
  {
    id: '1',
    customer_name: 'John Doe',
    customer_phone: '+91 98765 43210',
    delivery_address: '123 Main St, Mumbai, Maharashtra',
    payment_mode: 'online',
    status: 'pending',
    total_amount: 850,
    order_items: [
      {
        id: '1',
        menu_item_id: '1',
        quantity: 2,
        price: 400,
        menu_item: {
          id: '1',
          name: 'Butter Chicken',
          description: 'Creamy and rich butter chicken',
          price: 200,
          image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
          category_id: '1',
          is_vegetarian: false,
          is_spicy: false,
          is_available: true,
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          category: {
            id: '1',
            name: 'Main Course',
            icon: '🍗',
            display_order: 1,
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          }
        }
      },
      {
        id: '2',
        menu_item_id: '2',
        quantity: 1,
        price: 450,
        menu_item: {
          id: '2',
          name: 'Biryani',
          description: 'Aromatic rice dish with spices',
          price: 450,
          image_url: 'https://images.unsplash.com/photo-1563379091339-03246963d4a9?w=400',
          category_id: '1',
          is_vegetarian: false,
          is_spicy: true,
          is_available: true,
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          category: {
            id: '1',
            name: 'Main Course',
            icon: '🍗',
            display_order: 1,
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          }
        }
      }
    ],
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    customer_name: 'Jane Smith',
    customer_phone: '+91 87654 32109',
    delivery_address: '456 Park Ave, Delhi, NCR',
    payment_mode: 'cash',
    status: 'preparing',
    total_amount: 650,
    order_items: [
      {
        id: '3',
        menu_item_id: '3',
        quantity: 3,
        price: 150,
        menu_item: {
          id: '3',
          name: 'Naan',
          description: 'Soft and fluffy bread',
          price: 50,
          image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
          category_id: '2',
          is_vegetarian: true,
          is_spicy: false,
          is_available: true,
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          category: {
            id: '2',
            name: 'Breads',
            icon: '🥖',
            display_order: 2,
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          }
        }
      },
      {
        id: '4',
        menu_item_id: '4',
        quantity: 1,
        price: 200,
        menu_item: {
          id: '4',
          name: 'Dal Makhani',
          description: 'Creamy black lentils',
          price: 200,
          image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
          category_id: '3',
          is_vegetarian: true,
          is_spicy: false,
          is_available: true,
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          category: {
            id: '3',
            name: 'Dals',
            icon: '🫘',
            display_order: 3,
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          }
        }
      }
    ],
    created_at: '2024-01-15T09:15:00Z',
    updated_at: '2024-01-15T09:15:00Z'
  },
  {
    id: '3',
    customer_name: 'Mike Johnson',
    customer_phone: '+91 76543 21098',
    delivery_address: '789 Oak St, Bangalore, Karnataka',
    payment_mode: 'card',
    status: 'completed',
    total_amount: 1200,
    order_items: [
      {
        id: '5',
        menu_item_id: '5',
        quantity: 2,
        price: 600,
        menu_item: {
          id: '5',
          name: 'Tandoori Chicken',
          description: 'Spicy grilled chicken',
          price: 300,
          image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
          category_id: '1',
          is_vegetarian: false,
          is_spicy: true,
          is_available: true,
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          category: {
            id: '1',
            name: 'Main Course',
            icon: '🍗',
            display_order: 1,
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          }
        }
      }
    ],
    created_at: '2024-01-14T18:45:00Z',
    updated_at: '2024-01-14T18:45:00Z'
  },
  {
    id: '4',
    customer_name: 'Sarah Wilson',
    customer_phone: '+91 65432 10987',
    delivery_address: '321 Pine St, Chennai, Tamil Nadu',
    payment_mode: 'online',
    status: 'completed',
    total_amount: 950,
    order_items: [
      {
        id: '6',
        menu_item_id: '6',
        quantity: 1,
        price: 350,
        menu_item: {
          id: '6',
          name: 'Paneer Tikka',
          description: 'Grilled cottage cheese with aromatic spices',
          price: 350,
          image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
          category_id: '1',
          is_vegetarian: true,
          is_spicy: true,
          is_available: true,
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          category: {
            id: '1',
            name: 'Main Course',
            icon: '🍗',
            display_order: 1,
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          }
        }
      },
      {
        id: '7',
        menu_item_id: '7',
        quantity: 2,
        price: 300,
        menu_item: {
          id: '7',
          name: 'Roti',
          description: 'Whole wheat flatbread',
          price: 150,
          image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
          category_id: '2',
          is_vegetarian: true,
          is_spicy: false,
          is_available: true,
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          category: {
            id: '2',
            name: 'Breads',
            icon: '🥖',
            display_order: 2,
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          }
        }
      }
    ],
    created_at: '2024-01-14T16:20:00Z',
    updated_at: '2024-01-14T16:20:00Z'
  },
  {
    id: '5',
    customer_name: 'David Brown',
    customer_phone: '+91 54321 09876',
    delivery_address: '654 Elm St, Hyderabad, Telangana',
    payment_mode: 'cash',
    status: 'cancelled',
    total_amount: 750,
    order_items: [
      {
        id: '8',
        menu_item_id: '8',
        quantity: 1,
        price: 400,
        menu_item: {
          id: '8',
          name: 'Chicken Curry',
          description: 'Spicy chicken curry with rich gravy',
          price: 400,
          image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
          category_id: '1',
          is_vegetarian: false,
          is_spicy: true,
          is_available: true,
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          category: {
            id: '1',
            name: 'Main Course',
            icon: '🍗',
            display_order: 1,
            created_at: '2024-01-01T00:00:00Z',
            updated_at: '2024-01-01T00:00:00Z'
          }
        }
      }
    ],
    created_at: '2024-01-14T14:10:00Z',
    updated_at: '2024-01-14T14:10:00Z'
  }
]

export const mockMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Creamy and rich butter chicken with aromatic spices',
    price: 200,
    image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    category_id: '1',
    is_vegetarian: false,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: {
      id: '1',
      name: 'Main Course',
      icon: '🍗',
      display_order: 1,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  },
  {
    id: '2',
    name: 'Biryani',
    description: 'Aromatic rice dish with tender meat and spices',
    price: 450,
    image_url: 'https://images.unsplash.com/photo-1563379091339-03246963d4a9?w=400',
    category_id: '1',
    is_vegetarian: false,
    is_spicy: true,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: {
      id: '1',
      name: 'Main Course',
      icon: '🍗',
      display_order: 1,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  },
  {
    id: '3',
    name: 'Naan',
    description: 'Soft and fluffy bread baked in tandoor',
    price: 50,
    image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    category_id: '2',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: {
      id: '2',
      name: 'Breads',
      icon: '🥖',
      display_order: 2,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  },
  {
    id: '4',
    name: 'Dal Makhani',
    description: 'Creamy black lentils slow-cooked with spices',
    price: 200,
    image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    category_id: '3',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: {
      id: '3',
      name: 'Dals',
      icon: '🫘',
      display_order: 3,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  },
  {
    id: '5',
    name: 'Tandoori Chicken',
    description: 'Spicy grilled chicken marinated in yogurt and spices',
    price: 300,
    image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    category_id: '1',
    is_vegetarian: false,
    is_spicy: true,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: {
      id: '1',
      name: 'Main Course',
      icon: '🍗',
      display_order: 1,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  },
  {
    id: '6',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese with aromatic spices',
    price: 350,
    image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    category_id: '1',
    is_vegetarian: true,
    is_spicy: true,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: {
      id: '1',
      name: 'Main Course',
      icon: '🍗',
      display_order: 1,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  },
  {
    id: '7',
    name: 'Roti',
    description: 'Whole wheat flatbread cooked on griddle',
    price: 150,
    image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    category_id: '2',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: {
      id: '2',
      name: 'Breads',
      icon: '🥖',
      display_order: 2,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  },
  {
    id: '8',
    name: 'Chicken Curry',
    description: 'Spicy chicken curry with rich gravy',
    price: 400,
    image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400',
    category_id: '1',
    is_vegetarian: false,
    is_spicy: true,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: {
      id: '1',
      name: 'Main Course',
      icon: '🍗',
      display_order: 1,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  }
]

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Main Course',
    icon: '🍗',
    display_order: 1,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Breads',
    icon: '🥖',
    display_order: 2,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Dals',
    icon: '🫘',
    display_order: 3,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Desserts',
    icon: '🍰',
    display_order: 4,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Beverages',
    icon: '🥤',
    display_order: 5,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
]

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Corporate Catering',
    description: 'Professional catering services for corporate events and meetings',
    pricing: 'Starting from ₹5000 for 50 people',
    image_url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Wedding Catering',
    description: 'Complete wedding catering with custom menu options',
    pricing: 'Starting from ₹15000 for 100 people',
    image_url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Party Catering',
    description: 'Birthday and celebration catering services',
    pricing: 'Starting from ₹8000 for 75 people',
    image_url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
]

export const mockRestaurantInfo: RestaurantInfo = {
  id: '1',
  name: 'Taj Resto',
  contact: '+91 98765 43210',
  address: '123 Food Street, Mumbai, Maharashtra 400001',
  working_hours: '10:00 AM - 10:00 PM',
  minimum_order_amount: 200,
  branches: [
    {
      id: '1',
      name: 'Mumbai Central',
      address: '123 Food Street, Mumbai, Maharashtra 400001',
      contact: '+91 98765 43210',
      is_active: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: '2',
      name: 'Andheri West',
      address: '456 Restaurant Lane, Andheri West, Mumbai 400058',
      contact: '+91 87654 32109',
      is_active: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: '3',
      name: 'Bandra East',
      address: '789 Food Court, Bandra East, Mumbai 400051',
      contact: '+91 76543 21098',
      is_active: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  ],
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z'
}

export const mockAnalytics: Analytics = {
  total_orders: 156,
  revenue_this_week: 45000,
  average_order_value: 750,
  popular_items: [
    { menu_item_id: '1', name: 'Butter Chicken', total_orders: 45, revenue: 22500 },
    { menu_item_id: '2', name: 'Biryani', total_orders: 38, revenue: 19000 },
    { menu_item_id: '3', name: 'Naan', total_orders: 32, revenue: 6400 },
    { menu_item_id: '4', name: 'Dal Makhani', total_orders: 28, revenue: 8400 },
    { menu_item_id: '5', name: 'Tandoori Chicken', total_orders: 25, revenue: 7500 },
    { menu_item_id: '6', name: 'Paneer Tikka', total_orders: 22, revenue: 7700 }
  ]
} 