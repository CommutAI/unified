import { Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoute } from '@commutai/auth'
import Landing from './pages/Landing'

// Multi-app login pages
import DriverApp from './apps/driver/App'
import ConductorApp from './apps/conductor/App'
import OperatorApp from './apps/operator/App'
import CustomerServiceApp from './apps/customer-service/App'
import AdminApp from './apps/admin/App'

// Driver pages from actual driver app
import DashboardPage from './apps/driver/pages/DashboardPage'
import DriverNavigationPage from './apps/driver/pages/DriverNavigationPage'
import HistoryPage from './apps/driver/pages/HistoryPage'
import RoutePage from './apps/driver/pages/RoutePage'
import TripPage from './apps/driver/pages/TripPage'
import BusStatusPage from './apps/driver/pages/BusStatusPage'
import OccupancyPage from './apps/driver/pages/OccupancyPage'
import IncidentPage from './apps/driver/pages/IncidentPage'
import AnnouncementsPage from './apps/driver/pages/AnnouncementsPage'
import NotificationsPage from './apps/driver/pages/NotificationsPage'
import ProfilePage from './apps/driver/pages/ProfilePage'

// Operator pages
import Dashboard from './pages/operator/Dashboard'
import LiveOperations from './pages/operator/LiveOperations'
import Buses from './pages/operator/Buses'
import AIMonitoring from './pages/operator/AIMonitoring'
import Transactions from './pages/operator/Transactions'
import Baggage from './pages/operator/Baggage'
import Revenue from './pages/operator/Revenue'
import Announcements from './pages/operator/Announcements'
import Reports from './pages/operator/Reports'

// Customer Service pages
import QRCards from './pages/customer-service/QRCards'
import ReloadCard from './pages/customer-service/ReloadCard'
import TemporaryQRCards from './pages/customer-service/TemporaryQRCards'
import PassengerList from './pages/customer-service/PassengerList'
import CSDashboard from './pages/customer-service/Dashboard'
import CSReports from './pages/customer-service/Reports'
import CSTransactions from './pages/customer-service/Transactions'

// Sys Admin pages
import TripManagement from './pages/sys-admin/TripManagement'
import PassengerAnalytics from './pages/sys-admin/PassengerAnalytics'
import SysReports from './pages/sys-admin/Reports'
import ManageUsers from './pages/sys-admin/ManageUsers'
import Settings from './pages/sys-admin/Settings'
import AuditLogs from './pages/sys-admin/AuditLogs'
import FareMatrix from './pages/sys-admin/FareMatrix'
import CardManagement from './pages/sys-admin/CardManagement'
import SysDashboard from './pages/sys-admin/Dashboard'

// Layouts
import OperatorLayout from './layouts/OperatorLayout'
import CustomerServiceLayout from './layouts/CustomerServiceLayout'
import SysAdminLayout from './layouts/SysAdminLayout'
import DriverLayout from './layouts/DriverLayout'

function App() {
  return (
    <Routes>
      {/* Landing page for role selection */}
      <Route path="/" element={<Landing />} />
      
      {/* Multi-app login pages - separate routes */}
      <Route path="/driver/login" element={<DriverApp />} />
      <Route path="/conductor/login" element={<ConductorApp />} />
      <Route path="/operator/login" element={<OperatorApp />} />
      <Route path="/customer-service/login" element={<CustomerServiceApp />} />
      <Route path="/admin/login" element={<AdminApp />} />
      
      {/* Legacy login routes */}
      <Route path="/login" element={<Navigate to="/" replace />} />
      
      {/* Driver app protected routes */}
      <Route
        path="/driver"
        element={
          <ProtectedRoute allowedRoles={['driver']}>
            <DriverLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="current-trip" element={<TripPage />} />
        <Route path="navigation" element={<DriverNavigationPage />} />
        <Route path="gps" element={<BusStatusPage />} />
        <Route path="occupancy" element={<OccupancyPage />} />
        <Route path="incident-reporting" element={<IncidentPage />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="trip-history" element={<HistoryPage />} />
        <Route path="route" element={<RoutePage />} />
      </Route>

      {/* Conductor app protected routes */}
      <Route
        path="/conductor"
        element={
          <ProtectedRoute allowedRoles={['conductor']}>
            <DriverLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="current-trip" element={<TripPage />} />
        <Route path="navigation" element={<DriverNavigationPage />} />
        <Route path="gps" element={<BusStatusPage />} />
        <Route path="occupancy" element={<OccupancyPage />} />
        <Route path="incident-reporting" element={<IncidentPage />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="trip-history" element={<HistoryPage />} />
        <Route path="route" element={<RoutePage />} />
      </Route>

      {/* Operator Routes */}
      <Route
        path="/operator"
        element={
          <ProtectedRoute allowedRoles={['operator']}>
            <OperatorLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="live-operations" element={<LiveOperations />} />
        <Route path="buses" element={<Buses />} />
        <Route path="ai-monitoring" element={<AIMonitoring />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="baggage" element={<Baggage />} />
        <Route path="revenue" element={<Revenue />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="reports" element={<Reports />} />
      </Route>

      {/* Customer Service Routes */}
      <Route
        path="/customer-service"
        element={
          <ProtectedRoute allowedRoles={['cs_desk', 'admin']}>
            <CustomerServiceLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<CSDashboard />} />
        <Route path="qr-cards" element={<QRCards />} />
        <Route path="temporary-qr-cards" element={<TemporaryQRCards />} />
        <Route path="reload-card" element={<ReloadCard />} />
        <Route path="passengers" element={<PassengerList />} />
        <Route path="transactions" element={<CSTransactions />} />
        <Route path="reports" element={<CSReports />} />
      </Route>

      {/* Sys Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <SysAdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<SysDashboard />} />
        <Route path="trips" element={<TripManagement />} />
        <Route path="buses" element={<Navigate to="/admin/trips" replace />} />
        <Route path="analytics" element={<PassengerAnalytics />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="settings" element={<Settings />} />
        <Route path="audit-logs" element={<AuditLogs />} />
        <Route path="fare-matrix" element={<FareMatrix />} />
        <Route path="card-management" element={<CardManagement />} />
        <Route path="reports" element={<SysReports />} />
      </Route>

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
