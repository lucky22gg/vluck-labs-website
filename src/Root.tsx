import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Root() {
  return (
    <div style={{ backgroundColor: '#07090D', color: '#E8EDF5', overflowX: 'hidden' }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
