import { PiMonitorPlayFill } from "react-icons/pi";

function App() {
  return (
    <>
      <div className="bg-[#082c54] h-screen">
        <div className="text-blue-200 flex text-2xl justify-center">
          <div className="flex items-center gap-x-[8px] mt-[40px]">
            <div>
              <PiMonitorPlayFill />
            </div>
            <div>
              <span className="text-cyan-300 font-medium">Webinar</span>.gg
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[70px] text-2xl text-blue-200 font-medium">
          Verify Your Age
        </div>
        <div className="flex justify-center mt-[50px] text-xs text-slate-400 font-medium">
          Please confirm your birth year. This data will not stored
        </div>
        <div className="flex justify-center mt-[14px] text-slate-400 font-medium">
          <input
            type="text"
            placeholder="Your birth year"
            className="w-[250px]  placeholder-slate-50 placeholder-opacity-25 bg-[#0c3f79] pl-[10px] text-xs h-[35px] border-[1px] border-cyan-900 outline-none rounded-md"
          />
        </div>
        <div className="flex justify-center mt-[18px]">
          <button className="text-white h-[35px] text-xs bg-[#8493a5] w-[250px] rounded-md hover:bg-cyan-500 hover:text-black">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
