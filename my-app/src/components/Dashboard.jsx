import { Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <div>
      <h1>My Dashboard</h1>
      <p>Welcome to the dashboard! Here you can find various insights and data visualizations.</p>
      <p>Use the navigation menu to explore different sections of the dashboard.</p>
      <Outlet />
    </div>
  )
}

export default Dashboard