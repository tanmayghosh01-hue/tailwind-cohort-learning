
import './App.css'

import SideBar from './components/SideBar'
import Main from './components/Main'

function App() {

  return (
    <>
      <div className='flex bg-orange-300 h-screen'>
       <SideBar />
       <Main />
      </div>
    </>
  )
}

export default App
