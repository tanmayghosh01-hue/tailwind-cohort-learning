import vectorTwo from "../images/vector-two.jpg";

import charaterOne from "../images/character-one.jpg";

import { RiCalendarScheduleFill } from "react-icons/ri";

import { IoMdAdd } from "react-icons/io";

import { BsCollectionPlay } from "react-icons/bs";

const Main = () => {
  return (
    <div className="bg-slate-50 h-screen flex-1">
      <div className="flex flex-col gap-[60px]">
        <div>
          <img className="h-[200px] w-[100%] object-cover" src={vectorTwo} />
        </div>
        <div className="flex gap-8 ml-6 mt-[40px]">
          <div className="w-[200px] border-indigo-400 relative">
            <div className="w-[200px] h-[260px] absolute border border-l-1 border-fuchsia-600 top-[-125px] rounded-lg flex flex-col items-center bg-slate-100">
              <div className="mt-[25px] w-[100px] ">
                <img src={charaterOne} className="rounded-xl" />
              </div>

              <div className="mt-[13px] font-bold mb-[4px]">Onizuka Nohara</div>

              <div className="font-medium">erenjeager@titan.in</div>

              <div className="font-medium">999038223244</div>

              <div className="mt-[6px]">Bengaluru, India</div>
            </div>
          </div>
          <div className="w-[400px] h-[250px] border border-l-1 bg-slate-100 border-indigo-400 relative flex justify-center rounded-lg">
            calender Section
            <div className="absolute top-[-80px] left-0">
              <div>Monday 14, October</div>
              <div className="text-2xl flex">
                <div className="font-semibold">Good Morning Onizuka</div>
                <div className="text-3xl">👋</div>
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-slate-100 border border-l-1 border-indigo-400 rounded-lg flex flex-col items-center">
            <div className="mt-[40px] flex">
              <div className="flex gap-[70px] relative">
                <div className="relative">
                  <div className="border bg-cyan-300  rounded border-indigo-400 w-[50px] h-[50px] flex justify-center items-center text-lg ">
                    <div>
                      <RiCalendarScheduleFill />
                    </div>
                  </div>
                  <div className="absolute text-[11px] font-bold bottom-[-19px] left-[-22px] w-[120px]">
                    Schedule a Webinar
                  </div>
                </div>

                <div className="relative">
                  <div className="border bg-cyan-300  rounded border-indigo-400 w-[50px] h-[50px] flex justify-center items-center text-lg ">
                    <div>
                      <IoMdAdd />
                    </div>
                  </div>
                  <div className="absolute text-[11px] font-bold w-[100px] bottom-[-18.5px] left-[-12px]">
                    Join a Webinar
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[70px] mt-[50px]">
              <div className="border bg-cyan-300  rounded border-indigo-400 w-[50px] h-[50px] flex justify-center items-center text-lg relative">
                <div>
                  <BsCollectionPlay />
                </div>
                <div className="absolute text-[11px] font-bold w-[100px] bottom-[-24px] left-[-18px]">
                  Open Recordings
                </div>
              </div>

              <div className=" w-[50px] h-[50px] flex justify-center items-center text-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
