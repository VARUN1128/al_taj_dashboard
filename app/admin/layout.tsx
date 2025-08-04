'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  ShoppingCart,
  Utensils,
  FolderOpen,
  Gift,
  Settings,
  Menu,
  Search,
  Bell,
  User,
  X,
  Check,
  Clock,
  AlertCircle,
  Info,
  Trash2,
  LogOut
} from 'lucide-react'
import toast from 'react-hot-toast'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Menu', href: '/admin/menu', icon: Utensils },
  { name: 'Categories', href: '/admin/categories', icon: FolderOpen },
  { name: 'Services', href: '/admin/services', icon: Gift },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

// Mock notifications data
const mockNotifications = [
  {
    id: '1',
    type: 'order',
    title: 'New Order Received',
    message: 'Order #12345 from John Doe - ₹850',
    time: '2 minutes ago',
    read: false,
    priority: 'high'
  },
  {
    id: '2',
    type: 'system',
    title: 'System Update',
    message: 'Dashboard analytics updated successfully',
    time: '5 minutes ago',
    read: false,
    priority: 'medium'
  },
  {
    id: '3',
    type: 'order',
    title: 'Order Completed',
    message: 'Order #12344 has been delivered successfully',
    time: '10 minutes ago',
    read: true,
    priority: 'low'
  },
  {
    id: '4',
    type: 'alert',
    title: 'Low Stock Alert',
    message: 'Butter Chicken is running low on stock',
    time: '15 minutes ago',
    read: false,
    priority: 'high'
  },
  {
    id: '5',
    type: 'system',
    title: 'Backup Completed',
    message: 'Daily backup completed successfully',
    time: '1 hour ago',
    read: true,
    priority: 'low'
  }
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [notifications, setNotifications] = useState(mockNotifications)
  const pathname = usePathname()

  const unreadCount = notifications.filter(n => !n.read).length

  const handleNotificationClick = (notificationId: string) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === notificationId ? { ...n, read: true } : n
      )
    )
    toast.success('Notification marked as read')
  }

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
    toast.success('All notifications marked as read')
    setNotificationsOpen(false)
  }

  const handleDeleteNotification = (notificationId: string) => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId))
    toast.success('Notification deleted')
  }

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem('authToken')
    sessionStorage.removeItem('authToken')
    
    // Show success message
    toast.success('Logged out successfully')
    
    // Redirect to login page
    window.location.href = '/login'
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'order':
        return <ShoppingCart className="h-4 w-4" />
      case 'system':
        return <Info className="h-4 w-4" />
      case 'alert':
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50'
      case 'medium':
        return 'text-yellow-600 bg-yellow-50'
      case 'low':
        return 'text-green-600 bg-green-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-72 flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-4 bg-gradient-to-r from-orange-600 to-red-600">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-lg mr-3">
                <Utensils className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-white font-semibold text-lg">Taj Admin</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white hover:text-gray-200 p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-orange-100 text-orange-900 border-l-4 border-orange-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  <span className="truncate">{item.name}</span>
                </Link>
              )
            })}
            <div className="mt-auto">
              <button
                onClick={() => {
                  setSidebarOpen(false)
                  handleLogout()
                }}
                className="group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors text-red-600 hover:bg-red-50 hover:text-red-900 w-full text-left"
              >
                <LogOut className="mr-3 h-5 w-5" />
                <span className="truncate">Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Tablet/Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col lg:w-72">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 shadow-lg">
          <div className="flex h-16 items-center px-4 bg-gradient-to-r from-orange-600 to-red-600">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-lg mr-3">
                <Utensils className="h-6 w-6 text-orange-600" />
              </div>
              <span className="text-white font-semibold text-lg">Taj Admin</span>
            </div>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-orange-100 text-orange-900 border-l-4 border-orange-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  <span className="truncate">{item.name}</span>
                </Link>
              )
            })}
            <div className="mt-auto">
              <button
                onClick={handleLogout}
                className="group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors text-red-600 hover:bg-red-50 hover:text-red-900 w-full text-left"
              >
                <LogOut className="mr-3 h-5 w-5" />
                <span className="truncate">Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 lg:pl-72">
        {/* Topbar */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-2 border-b border-gray-200 bg-white px-3 shadow-sm sm:gap-x-4 sm:px-4 lg:gap-x-6 lg:px-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
      
          <div className="flex flex-1 items-center min-w-0 gap-x-2 sm:gap-x-4 lg:gap-x-6">
            {/* Search */}
            <div className="flex flex-1 items-center min-w-0">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm shadow-sm"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
      
          <div className="flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-6">
            {/* Notifications */}
            <div className="relative">
              <button 
                className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 block h-5 w-5 rounded-full bg-red-500 text-white text-xs font-medium flex items-center justify-center">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={handleMarkAllRead}
                          className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                        >
                          Mark all read
                        </button>
                        <button
                          onClick={() => setNotificationsOpen(false)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-gray-500">
                        <Bell className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                        <p>No notifications</p>
                      </div>
                    ) : (
                      <div className="divide-y divide-gray-200">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                              !notification.read ? 'bg-blue-50' : ''
                            }`}
                            onClick={() => handleNotificationClick(notification.id)}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`flex-shrink-0 p-2 rounded-lg ${getPriorityColor(notification.priority)}`}>
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className={`text-sm font-medium ${
                                    !notification.read ? 'text-gray-900' : 'text-gray-600'
                                  }`}>
                                    {notification.title}
                                  </p>
                                  <div className="flex items-center space-x-1">
                                    {!notification.read && (
                                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    )}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleDeleteNotification(notification.id)
                                      }}
                                      className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                      <Trash2 className="h-3 w-3" />
                                    </button>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                  {notification.message}
                                </p>
                                <div className="flex items-center mt-2 text-xs text-gray-500">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {notification.time}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {notifications.length > 0 && (
                    <div className="p-4 border-t border-gray-200 bg-gray-50">
                      <button
                        onClick={() => {
                          // Navigate to notifications page or show all notifications
                          toast.success('Viewing all notifications')
                          setNotificationsOpen(false)
                        }}
                        className="w-full text-sm text-orange-600 hover:text-orange-700 font-medium"
                      >
                        View all notifications
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* User menu */}
            <div className="flex items-center gap-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900 hidden sm:block">
                Admin User
              </span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 