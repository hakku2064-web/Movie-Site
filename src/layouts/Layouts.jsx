import Header from '../Components/nav/Header'
import Footer from '../Components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layouts() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Layouts