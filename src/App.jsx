
import './App.css'
import { Outlet } from 'react-router'
import Aside from './component/Aside'
import Nabvar from './component/Nabvar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Aside/>
      <div className="main-content">
       <Nabvar></Nabvar>
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
