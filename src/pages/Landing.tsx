import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'

interface Role {
  id: string
  name: string
  description: string
  icon: string
  color: string
  path: string
}

const roles: Role[] = [
  {
    id: 'driver',
    name: 'Driver',
    description: 'Route management and passenger tracking',
    icon: '🚌',
    color: 'text-orange-500',
    path: '/driver/login'
  },
  {
    id: 'conductor',
    name: 'Conductor',
    description: 'Ticketing and passenger management',
    icon: '🎫',
    color: 'text-blue-500',
    path: '/conductor/login'
  },
  {
    id: 'operator',
    name: 'Operator',
    description: 'Fleet monitoring and dispatch',
    icon: '📡',
    color: 'text-green-500',
    path: '/operator/login'
  },
  {
    id: 'cs_desk',
    name: 'Customer Service',
    description: 'Inquiries and support',
    icon: '🎧',
    color: 'text-purple-500',
    path: '/customer-service/login'
  },
  {
    id: 'admin',
    name: 'Admin',
    description: 'System configuration and management',
    icon: '⚙️',
    color: 'text-red-500',
    path: '/admin/login'
  }
]

export default function Landing() {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  const handleContinue = () => {
    if (selectedRole) {
      const role = roles.find(r => r.id === selectedRole)
      if (role) {
        navigate(role.path)
      }
    }
  }

  const selectedRoleData = roles.find(r => r.id === selectedRole)

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Single Card */}
        <div className="glass-card p-8 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <img 
              src="/logo.png" 
              alt="CommutAI Logo" 
              className="w-16 h-16 mx-auto mb-4"
            />
            <h1 className="text-white text-2xl font-bold mb-2">Welcome to CommutAI</h1>
            <p className="text-white/60 text-sm">Select your role to continue</p>
          </div>

          {/* Role Selection Dropdown */}
          <div className="mb-6">
            <label className="block text-white/80 text-sm font-medium mb-2">
              Select Your Role
            </label>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 flex items-center justify-between hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">
                    {selectedRoleData ? selectedRoleData.icon : '👤'}
                  </span>
                  <span className="text-left">
                    {selectedRoleData ? selectedRoleData.name : 'Choose your role...'}
                  </span>
                </div>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute z-10 w-full mt-2 bg-gray-900 border border-white/20 rounded-xl shadow-xl overflow-hidden">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => {
                        setSelectedRole(role.id)
                        setIsOpen(false)
                      }}
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors text-left border-b border-white/10 last:border-b-0"
                    >
                      <span className="text-xl">{role.icon}</span>
                      <div>
                        <div className="text-white font-medium">{role.name}</div>
                        <div className="text-white/60 text-xs">{role.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Selected Role Description */}
          {selectedRoleData && (
            <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{selectedRoleData.icon}</span>
                <span className={`font-bold ${selectedRoleData.color}`}>
                  {selectedRoleData.name}
                </span>
              </div>
              <p className="text-white/70 text-sm">{selectedRoleData.description}</p>
            </div>
          )}

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border border-orange-400 disabled:border-gray-500 disabled:opacity-50"
          >
            Continue
            <ArrowRight size={20} />
          </button>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-white/40 text-xs">
              Secure access to CommutAI Unified Mobile App
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}