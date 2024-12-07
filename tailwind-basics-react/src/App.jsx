
import './App.css'

function App() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className='md:bg-teal-500 sm:bg-blue-500 bg-lime-500 col-span-4 text-purple-600'>
          child 1
        </div>
        <div className='bg-rose-500 col-span-6'>
          child 2
        </div>
        <div className='bg-indigo-500 col-span-2'>
          child 3
        </div>
      </div>
    </>
  )
}

export default App
