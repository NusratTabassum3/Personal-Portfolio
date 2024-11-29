
import './App.css'
import { Outlet } from 'react-router'
import Aside from './component/Aside'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Aside/>
      <div className="main-content">
        <nav>Navbar</nav>
        <section style={
          {scrollBehavior : "smoothScroll"}
        }>
          <Outlet/>
        </section>
      </div>
    
    
    </>
  )
}

export default App
