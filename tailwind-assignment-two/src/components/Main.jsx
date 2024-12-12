const Main = () => {
  return <div className="bg-rose-400 h-screen flex-1">
    <div className="flex flex-col gap-28">
      <div>
        background image
      </div>
      <div>
        Greeting message
      </div>
      <div className="flex gap-8 ml-6">
        <div className="w-[200px] border border-l-1 border-indigo-400"> 
          Profile Section
        </div>
        <div className="w-[400px] border border-l-1 border-indigo-400">
          calender Section
        </div>
        <div className="w-[230px] border border-l-1 border-indigo-400">
          Join Section
        </div>
      </div>
    </div>
  </div>
}

export default Main;