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
                <div className="font-semibold">Good Morning Onizuka</div>{" "}
                <div className="text-3xl">👋</div>
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-slate-100 border border-l-1 border-indigo-400 rounded-lg flex flex-col items-center">
            <div className="mt-[40px] flex">
              <div className="flex gap-[120px]">
                <div className="border border-l-1 bg-slate-100  rounded border-indigo-400">
                  <RiCalendarScheduleFill />
                </div>

                <div>
                  <IoMdAdd />
                </div>
              </div>
            </div>
            <div className="flex gap-[120px] mt-[50px]">
              <div>
                <BsCollectionPlay />
              </div>

              <div className="w-[15px]">
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
