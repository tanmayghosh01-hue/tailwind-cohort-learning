const Main = () => {
  return <div className="bg-rose-400 h-screen flex-1">
    <div className="flex flex-col gap-28">
      <div>
        background image
      </div>
      <div className="flex gap-8 ml-6 mt-[80px]">
        <div className="w-[200px] border border-l-1 border-indigo-400 relative"> 
          <div className="absolute border border-l-1 border-fuchsia-600 top-[-80px]">
            Profile Section
          </div>
        </div>
        <div className="w-[400px] border border-l-1 border-indigo-400 relative">
          calender Section
          <div className="absolute top-[-80px]">
            Good Morning Prabhleen
          </div>
        </div>
        <div className="w-[230px] border border-l-1 border-indigo-400">
          Join Section
        </div>
      </div>
    </div>
  </div>
}

export default Main;