
/*import React, {useEffect, useMemo, useState} from 'react'
import site from './data/site.json'
// import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
// import Team from './pages/Team.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Marquee from './components/Marquee.jsx'

const routes = {
  // '/': {component: Home, title: 'Home — ' + site.brand},
  '/events': {component: Events, title: 'Events — ' + site.brand},
  // '/team': {component: Team, title: 'Team — ' + site.brand}
}

// simple hash parser
function useHashRoute(){
  const getPath = () => location.hash.replace('#','') || '/'
  const [path,setPath] = useState(getPath())
  useEffect(()=>{
    const onHash = ()=> setPath(getPath())
    window.addEventListener('hashchange', onHash)
    return ()=> window.removeEventListener('hashchange', onHash)
  },[])
  return path
}

export default function App(){
  const path = useHashRoute()
  const match = routes[path] || routes['/']
  useEffect(()=>{
    document.title = match.title
  },[match])

  const Page = match.component
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<events />} />
      </Routes>
    </BrowserRouter>
      <Navbar />
      <main className="container" role="main">
        <Page />
      </main>
      <section aria-label="Looping marquee" className="marquee-wrap" role="region">
        <Marquee />
      </section>
      <Footer />
    </>
   

  )
}
   */

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Events from "./pages/Events"; // <-- make sure this path matches your project

export default function App() {
  return (
    <>
      <Navbar />

      <main className="container" role="main">
        <Events />  
      </main>

      <section aria-label="Looping marquee" className="marquee-wrap" role="region">
        <Marquee />
      </section>

      <Footer />
    </>
  );
}
