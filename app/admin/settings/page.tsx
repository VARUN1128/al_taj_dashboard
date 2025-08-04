'use client'

import { useState, useEffect } from 'react'
import { 
  Save, 
  Plus, 
  Edit, 
  Trash2, 
  MapPin,
  Phone,
  Clock,
  Building
} from 'lucide-react'
import { mockRestaurantInfo, RestaurantInfo, Branch } from '@/lib/supabase'
import { formatCurrency } from '@/lib/utils'
import toast from 'react-hot-toast'

export default function SettingsPage() {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo>(mockRestaurantInfo)
  const [branches, setBranches] = useState<Branch[]>(mockRestaurantInfo.branches)
  const [loading, setLoading] = useState(false)
  const [showBranchModal, setShowBranchModal] = useState(false)
  const [editingBranch, setEditingBranch] = useState<Branch | null>(null)
  const [formData, setFormData] = useState({
    name: mockRestaurantInfo.name,
    contact: mockRestaurantInfo.contact,
    address: mockRestaurantInfo.address,
    working_hours: mockRestaurantInfo.working_hours,
    minimum_order_amount: mockRestaurantInfo.minimum_order_amount.toString()
  })
  const [branchFormData, setBranchFormData] = useState({
    name: '',
    address: '',
    contact: '',
    is_active: true
  })

  const handleRestaurantSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const restaurantData = {
        ...formData,
        minimum_order_amount: parseFloat(formData.minimum_order_amount)
      }

      setRestaurantInfo({ ...restaurantInfo, ...restaurantData })
      toast.success('Restaurant information updated successfully')
    } catch (error) {
      console.error('Error saving restaurant info:', error)
      toast.error('Failed to save restaurant information')
    }
  }

  const handleBranchSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingBranch) {
        setBranches(branches.map(branch =>
          branch.id === editingBranch.id ? { ...branch, ...branchFormData } : branch
        ))
        toast.success('Branch updated successfully')
      } else {
        const newBranch: Branch = {
          id: Date.now().toString(),
          ...branchFormData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
        setBranches([newBranch, ...branches])
        toast.success('Branch added successfully')
      }

      setShowBranchModal(false)
      setEditingBranch(null)
      resetBranchForm()
    } catch (error) {
      console.error('Error saving branch:', error)
      toast.error('Failed to save branch')
    }
  }

  const handleEditBranch = (branch: Branch) => {
    setEditingBranch(branch)
    setBranchFormData({
      name: branch.name,
      address: branch.address,
      contact: branch.contact,
      is_active: branch.is_active
    })
    setShowBranchModal(true)
  }

  const handleDeleteBranch = async (id: string) => {
    if (!confirm('Are you sure you want to delete this branch?')) return

    try {
      setBranches(branches.filter(branch => branch.id !== id))
      toast.success('Branch deleted successfully')
    } catch (error) {
      console.error('Error deleting branch:', error)
      toast.error('Failed to delete branch')
    }
  }

  const resetBranchForm = () => {
    setBranchFormData({
      name: '',
      address: '',
      contact: '',
      is_active: true
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Restaurant Settings</h1>
        <p className="text-gray-600">Manage restaurant information and branches</p>
      </div>

      {/* Restaurant Information */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Restaurant Information</h3>
        </div>
        <div className="p-6">
          <form onSubmit={handleRestaurantSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  required
                  className="input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  required
                  className="input"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                required
                rows={3}
                className="input"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Working Hours
                </label>
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="e.g., 10:00 AM - 10:00 PM"
                  value={formData.working_hours}
                  onChange={(e) => setFormData({ ...formData, working_hours: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Order Amount
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  className="input"
                  value={formData.minimum_order_amount}
                  onChange={(e) => setFormData({ ...formData, minimum_order_amount: e.target.value })}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary">
                <Save className="h-4 w-4 mr-2" />
                Save Restaurant Info
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Branches Management */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Branches</h3>
          <button
            onClick={() => {
              setEditingBranch(null)
              resetBranchForm()
              setShowBranchModal(true)
            }}
            className="btn btn-primary"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Branch
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {branches.map((branch) => (
              <div key={branch.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-gray-900">{branch.name}</h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditBranch(branch)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteBranch(branch.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{branch.contact}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-gray-400" />
                    <span className={`${branch.is_active ? 'text-green-600' : 'text-gray-500'}`}>
                      {branch.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add/Edit Branch Modal */}
      {showBranchModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {editingBranch ? 'Edit Branch' : 'Add Branch'}
              </h3>
              <button
                onClick={() => setShowBranchModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleBranchSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Branch Name
                </label>
                <input
                  type="text"
                  required
                  className="input"
                  value={branchFormData.name}
                  onChange={(e) => setBranchFormData({ ...branchFormData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  required
                  rows={3}
                  className="input"
                  value={branchFormData.address}
                  onChange={(e) => setBranchFormData({ ...branchFormData, address: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  required
                  className="input"
                  value={branchFormData.contact}
                  onChange={(e) => setBranchFormData({ ...branchFormData, contact: e.target.value })}
                />
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    checked={branchFormData.is_active}
                    onChange={(e) => setBranchFormData({ ...branchFormData, is_active: e.target.checked })}
                  />
                  <span className="ml-2 text-sm text-gray-700">Active Branch</span>
                </label>
              </div>

              <div className="flex gap-2">
                <button type="submit" className="btn btn-primary">
                  {editingBranch ? 'Update' : 'Add'} Branch
                </button>
                <button
                  type="button"
                  onClick={() => setShowBranchModal(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 