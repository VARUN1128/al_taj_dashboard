'use client'

import { useState, useEffect } from 'react'
import { 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Package,
  Users,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Star,
  MapPin,
  Phone,
  Zap,
  Target,
  TrendingDown
} from 'lucide-react'
import { analyticsService, ordersService } from '@/lib/dataService'
import { formatCurrency } from '@/lib/utils'
import { StatsSkeleton } from '@/components/LoadingSkeleton'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from 'recharts'
import toast from 'react-hot-toast'

interface DashboardStats {
  total_orders: number
  revenue_this_week: number
  average_order_value: number
  order_status_distribution: Array<{
    status: string
    count: number
    percentage: number
  }>
}

export default function Dashboard() {
  const [analytics, setAnalytics] = useState<DashboardStats | null>(null)
  const [recentOrders, setRecentOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch analytics and recent orders in parallel
        const [stats, orders] = await Promise.all([
          analyticsService.getDashboardStats(),
          ordersService.getAll(1, 5)
        ])
        
        setAnalytics(stats)
        setRecentOrders(orders.data)
      } catch (err) {
        console.error('Error fetching dashboard data:', err)
        setError('Failed to load dashboard data')
        toast.error('Failed to load dashboard data')
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard Overview</h1>
              <p className="text-orange-100 text-sm sm:text-base">
                Welcome back! Here's what's happening at Taj Resto today
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-2 text-orange-100">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">{new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
        
        <StatsSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard Overview</h1>
              <p className="text-orange-100 text-sm sm:text-base">
                Welcome back! Here's what's happening at Taj Resto today
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-2 text-orange-100">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">{new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center text-red-600">
            <p className="text-lg font-medium">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!analytics) {
    return null
  }

  const statusData = analytics.order_status_distribution.map(item => ({
    name: item.status.charAt(0).toUpperCase() + item.status.slice(1),
    value: item.count,
    color: item.status === 'pending' ? '#f59e0b' : 
           item.status === 'preparing' ? '#3b82f6' : 
           item.status === 'completed' ? '#10b981' : '#ef4444'
  }))

  // Enhanced analytics data (you can extend this with real data later)
  const peakHoursData = [
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
    { hour: '9PM', orders: 25, revenue: 17500 },
  ]

  const weeklyData = [
    { day: 'Mon', revenue: 8500, orders: 45, avgOrder: 189 },
    { day: 'Tue', revenue: 9200, orders: 52, avgOrder: 177 },
    { day: 'Wed', revenue: 7800, orders: 41, avgOrder: 190 },
    { day: 'Thu', revenue: 10500, orders: 58, avgOrder: 181 },
    { day: 'Fri', revenue: 12800, orders: 72, avgOrder: 178 },
    { day: 'Sat', revenue: 15200, orders: 85, avgOrder: 179 },
    { day: 'Sun', revenue: 13500, orders: 76, avgOrder: 178 },
  ]

  const customerInsights = [
    { metric: 'New Customers', value: 23, change: '+15%', trend: 'up' },
    { metric: 'Repeat Customers', value: 67, change: '+8%', trend: 'up' },
    { metric: 'Avg. Order Value', value: `₹${analytics.average_order_value}`, change: '+5%', trend: 'up' },
    { metric: 'Customer Rating', value: '4.8/5', change: '+0.2', trend: 'up' },
  ]

  const topItems = [
    { name: 'Butter Chicken', orders: 45, revenue: 15750, growth: '+12%' },
    { name: 'Biryani', orders: 38, revenue: 13300, growth: '+8%' },
    { name: 'Paneer Tikka', orders: 32, revenue: 11200, growth: '+15%' },
    { name: 'Naan', orders: 28, revenue: 4200, growth: '+5%' },
    { name: 'Dal Makhani', orders: 25, revenue: 8750, growth: '+10%' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard Overview</h1>
            <p className="text-orange-100 text-sm sm:text-base">
              Welcome back! Here's what's happening at Taj Resto today
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-2 text-orange-100">
            <Calendar className="h-5 w-5" />
            <span className="text-sm">{new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{analytics.total_orders}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <ShoppingCart className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600">+12% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue This Week</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(analytics.revenue_this_week)}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600">+8% from last week</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Order Value</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(analytics.average_order_value)}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600">+5% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Customers</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600">+15% from last month</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Status Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Revenue Trend */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Line type="monotone" dataKey="revenue" stroke="#f97316" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders & Customer Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
          </div>
          <div className="p-6">
            {recentOrders.length > 0 ? (
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-orange-100 rounded-full">
                        <ShoppingCart className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Order #{order.id.slice(-6)}</p>
                        <p className="text-sm text-gray-600">{order.customer_name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{formatCurrency(order.total_amount)}</p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'preparing' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <ShoppingCart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <p>No recent orders</p>
              </div>
            )}
          </div>
        </div>

        {/* Customer Insights */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Customer Insights</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {customerInsights.map((insight, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Target className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{insight.metric}</p>
                      <p className="text-sm text-gray-600">{insight.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {insight.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {insight.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Peak Hours Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Peak Hours Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={peakHoursData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
            <Area type="monotone" dataKey="revenue" stroke="#f97316" fill="#f97316" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 