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
  created_at: string
  updated_at: string
  branches: Branch[]
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
  peak_hours: PeakHour[]
  customer_insights: CustomerInsight[]
  top_performing_items: TopItem[]
  order_status_distribution: OrderStatus[]
  weekly_trends: WeeklyTrend[]
}

export interface PopularItem {
  menu_item_id: string
  name: string
  total_orders: number
  revenue: number
}

export interface PeakHour {
  hour: string
  orders: number
  revenue: number
}

export interface CustomerInsight {
  metric: string
  value: string | number
  change: string
  trend: 'up' | 'down'
}

export interface TopItem {
  name: string
  orders: number
  revenue: number
  growth: string
}

export interface OrderStatus {
  status: string
  count: number
  percentage: number
}

export interface WeeklyTrend {
  day: string
  revenue: number
  orders: number
  avg_order: number
}

// Enhanced mock data
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
    icon: '🍞',
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

export const mockMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Creamy and rich chicken curry with butter and cream',
    price: 350,
    image_url: '/images/butter-chicken.jpg',
    category_id: '1',
    is_vegetarian: false,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[0]
  },
  {
    id: '2',
    name: 'Naan',
    description: 'Soft and fluffy Indian bread',
    price: 150,
    image_url: '/images/naan.jpg',
    category_id: '2',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[1]
  },
  {
    id: '3',
    name: 'Biryani',
    description: 'Aromatic rice dish with spices and meat',
    price: 450,
    image_url: '/images/biryani.jpg',
    category_id: '1',
    is_vegetarian: false,
    is_spicy: true,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[0]
  },
  {
    id: '4',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese with spices',
    price: 375,
    image_url: '/images/paneer-tikka.jpg',
    category_id: '1',
    is_vegetarian: true,
    is_spicy: true,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[0]
  },
  {
    id: '5',
    name: 'Dal Makhani',
    description: 'Creamy black lentils',
    price: 650,
    image_url: '/images/dal-makhani.jpg',
    category_id: '3',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[2]
  },
  {
    id: '6',
    name: 'Chicken Tikka',
    description: 'Grilled chicken with spices',
    price: 350,
    image_url: '/images/chicken-tikka.jpg',
    category_id: '1',
    is_vegetarian: false,
    is_spicy: true,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[0]
  },
  {
    id: '7',
    name: 'Roti',
    description: 'Whole wheat flatbread',
    price: 150,
    image_url: '/images/roti.jpg',
    category_id: '2',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[1]
  },
  {
    id: '8',
    name: 'Gulab Jamun',
    description: 'Sweet dessert balls in sugar syrup',
    price: 750,
    image_url: '/images/gulab-jamun.jpg',
    category_id: '4',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[3]
  },
  {
    id: '9',
    name: 'Rasmalai',
    description: 'Soft cheese patties in sweetened milk',
    price: 550,
    image_url: '/images/rasmalai.jpg',
    category_id: '4',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[3]
  },
  {
    id: '10',
    name: 'Palak Paneer',
    description: 'Spinach curry with cottage cheese',
    price: 450,
    image_url: '/images/palak-paneer.jpg',
    category_id: '1',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[0]
  },
  {
    id: '11',
    name: 'Aloo Paratha',
    description: 'Stuffed potato flatbread',
    price: 400,
    image_url: '/images/aloo-paratha.jpg',
    category_id: '2',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[1]
  },
  {
    id: '12',
    name: 'Tandoori Chicken',
    description: 'Marinated chicken cooked in tandoor',
    price: 800,
    image_url: '/images/tandoori-chicken.jpg',
    category_id: '1',
    is_vegetarian: false,
    is_spicy: true,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[0]
  },
  {
    id: '13',
    name: 'Kheer',
    description: 'Rice pudding with nuts and saffron',
    price: 500,
    image_url: '/images/kheer.jpg',
    category_id: '4',
    is_vegetarian: true,
    is_spicy: false,
    is_available: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    category: mockCategories[3]
  }
]

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
      { id: '1', menu_item_id: '1', quantity: 2, price: 350, menu_item: mockMenuItems[0] },
      { id: '2', menu_item_id: '2', quantity: 1, price: 150, menu_item: mockMenuItems[1] }
    ],
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    customer_name: 'Jane Smith',
    customer_phone: '+91 98765 43211',
    delivery_address: '456 Oak Ave, Delhi, Delhi',
    payment_mode: 'card',
    status: 'preparing',
    total_amount: 1200,
    order_items: [
      { id: '3', menu_item_id: '3', quantity: 1, price: 450, menu_item: mockMenuItems[2] },
      { id: '4', menu_item_id: '4', quantity: 2, price: 375, menu_item: mockMenuItems[3] }
    ],
    created_at: '2024-01-15T11:15:00Z',
    updated_at: '2024-01-15T11:15:00Z'
  },
  {
    id: '3',
    customer_name: 'Mike Johnson',
    customer_phone: '+91 98765 43212',
    delivery_address: '789 Pine Rd, Bangalore, Karnataka',
    payment_mode: 'cash',
    status: 'completed',
    total_amount: 650,
    order_items: [
      { id: '5', menu_item_id: '5', quantity: 1, price: 650, menu_item: mockMenuItems[4] }
    ],
    created_at: '2024-01-15T09:45:00Z',
    updated_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '4',
    customer_name: 'Sarah Wilson',
    customer_phone: '+91 98765 43213',
    delivery_address: '321 Elm St, Chennai, Tamil Nadu',
    payment_mode: 'online',
    status: 'completed',
    total_amount: 950,
    order_items: [
      { id: '6', menu_item_id: '6', quantity: 1, price: 350, menu_item: mockMenuItems[5] },
      { id: '7', menu_item_id: '7', quantity: 2, price: 300, menu_item: mockMenuItems[6] }
    ],
    created_at: '2024-01-15T08:20:00Z',
    updated_at: '2024-01-15T09:15:00Z'
  },
  {
    id: '5',
    customer_name: 'David Brown',
    customer_phone: '+91 98765 43214',
    delivery_address: '654 Maple Dr, Hyderabad, Telangana',
    payment_mode: 'card',
    status: 'cancelled',
    total_amount: 750,
    order_items: [
      { id: '8', menu_item_id: '8', quantity: 1, price: 750, menu_item: mockMenuItems[7] }
    ],
    created_at: '2024-01-15T12:00:00Z',
    updated_at: '2024-01-15T12:30:00Z'
  },
  {
    id: '6',
    customer_name: 'Lisa Garcia',
    customer_phone: '+91 98765 43215',
    delivery_address: '987 Cedar Ln, Pune, Maharashtra',
    payment_mode: 'online',
    status: 'pending',
    total_amount: 1100,
    order_items: [
      { id: '9', menu_item_id: '9', quantity: 2, price: 550, menu_item: mockMenuItems[8] }
    ],
    created_at: '2024-01-15T13:45:00Z',
    updated_at: '2024-01-15T13:45:00Z'
  },
  {
    id: '7',
    customer_name: 'Robert Taylor',
    customer_phone: '+91 98765 43216',
    delivery_address: '147 Birch Way, Kolkata, West Bengal',
    payment_mode: 'cash',
    status: 'preparing',
    total_amount: 850,
    order_items: [
      { id: '10', menu_item_id: '10', quantity: 1, price: 450, menu_item: mockMenuItems[9] },
      { id: '11', menu_item_id: '11', quantity: 1, price: 400, menu_item: mockMenuItems[10] }
    ],
    created_at: '2024-01-15T14:20:00Z',
    updated_at: '2024-01-15T14:20:00Z'
  },
  {
    id: '8',
    customer_name: 'Emily Davis',
    customer_phone: '+91 98765 43217',
    delivery_address: '258 Spruce St, Ahmedabad, Gujarat',
    payment_mode: 'card',
    status: 'completed',
    total_amount: 1300,
    order_items: [
      { id: '12', menu_item_id: '12', quantity: 1, price: 800, menu_item: mockMenuItems[11] },
      { id: '13', menu_item_id: '13', quantity: 1, price: 500, menu_item: mockMenuItems[12] }
    ],
    created_at: '2024-01-15T15:10:00Z',
    updated_at: '2024-01-15T16:00:00Z'
  }
]

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Corporate Catering',
    description: 'Professional catering services for corporate events and meetings',
    pricing: '₹500 per person',
    image_url: '/images/corporate-catering.jpg',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Wedding Catering',
    description: 'Specialized catering for weddings and celebrations',
    pricing: '₹800 per person',
    image_url: '/images/wedding-catering.jpg',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Party Orders',
    description: 'Bulk orders for parties and gatherings',
    pricing: '₹300 per person',
    image_url: '/images/party-orders.jpg',
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
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
  branches: [
    {
      id: '1',
      name: 'Taj Resto - Andheri',
      address: '456 Andheri West, Mumbai, Maharashtra 400058',
      contact: '+91 98765 43211',
      is_active: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: '2',
      name: 'Taj Resto - Bandra',
      address: '789 Bandra West, Mumbai, Maharashtra 400050',
      contact: '+91 98765 43212',
      is_active: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: '3',
      name: 'Taj Resto - Powai',
      address: '321 Powai, Mumbai, Maharashtra 400076',
      contact: '+91 98765 43213',
      is_active: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  ]
}

export const mockAnalytics: Analytics = {
  total_orders: 156,
  revenue_this_week: 45000,
  average_order_value: 750,
  popular_items: [
    { menu_item_id: '1', name: 'Butter Chicken', total_orders: 45, revenue: 15750 },
    { menu_item_id: '3', name: 'Biryani', total_orders: 38, revenue: 17100 },
    { menu_item_id: '4', name: 'Paneer Tikka', total_orders: 32, revenue: 12000 },
    { menu_item_id: '2', name: 'Naan', total_orders: 28, revenue: 4200 },
    { menu_item_id: '5', name: 'Dal Makhani', total_orders: 25, revenue: 16250 },
    { menu_item_id: '6', name: 'Chicken Tikka', total_orders: 22, revenue: 7700 }
  ],
  peak_hours: [
    { hour: '10AM', orders: 12, revenue: 8500 },
    { hour: '11AM', orders: 18, revenue: 12500 },
    { hour: '12PM', orders: 35, revenue: 24500 },
    { hour: '1PM', orders: 28, revenue: 19500 },
    { hour: '2PM', orders: 15, revenue: 10500 },
    { hour: '3PM', orders: 8, revenue: 5500 },
    { hour: '4PM', orders: 12, revenue: 8500 },
    { hour: '5PM', orders: 22, revenue: 15500 },
    { hour: '6PM', orders: 38, revenue: 26500 },
    { hour: '7PM', orders: 45, revenue: 31500 },
    { hour: '8PM', orders: 42, revenue: 29500 },
    { hour: '9PM', orders: 25, revenue: 17500 }
  ],
  customer_insights: [
    { metric: 'New Customers', value: 23, change: '+15%', trend: 'up' },
    { metric: 'Repeat Customers', value: 67, change: '+8%', trend: 'up' },
    { metric: 'Avg. Order Value', value: '₹750', change: '+5%', trend: 'up' },
    { metric: 'Customer Rating', value: '4.8/5', change: '+0.2', trend: 'up' }
  ],
  top_performing_items: [
    { name: 'Butter Chicken', orders: 45, revenue: 15750, growth: '+12%' },
    { name: 'Biryani', orders: 38, revenue: 17100, growth: '+8%' },
    { name: 'Paneer Tikka', orders: 32, revenue: 12000, growth: '+15%' },
    { name: 'Naan', orders: 28, revenue: 4200, growth: '+5%' },
    { name: 'Dal Makhani', orders: 25, revenue: 16250, growth: '+10%' }
  ],
  order_status_distribution: [
    { status: 'Pending', count: 15, percentage: 20 },
    { status: 'Preparing', count: 12, percentage: 15 },
    { status: 'Completed', count: 45, percentage: 60 },
    { status: 'Cancelled', count: 3, percentage: 5 }
  ],
  weekly_trends: [
    { day: 'Mon', revenue: 8500, orders: 45, avg_order: 189 },
    { day: 'Tue', revenue: 9200, orders: 52, avg_order: 177 },
    { day: 'Wed', revenue: 7800, orders: 41, avg_order: 190 },
    { day: 'Thu', revenue: 10500, orders: 58, avg_order: 181 },
    { day: 'Fri', revenue: 12800, orders: 72, avg_order: 178 },
    { day: 'Sat', revenue: 15200, orders: 85, avg_order: 179 },
    { day: 'Sun', revenue: 13500, orders: 76, avg_order: 178 }
  ]
} 