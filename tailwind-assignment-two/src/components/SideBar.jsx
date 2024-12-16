import { PiMonitorPlayFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

import characterOne from "../images/character-one.jpg"

const SideBar = () => {
  return (
    <div className="bg-slate-100 h-screen w-80">
      <div>
        <div className="mt-[10px] mb-[10px] pl-[15px] pr-[26px]">
          <div className="flex justify-between items-center">
              <div className="flex items-center bg-cyan-900 text-zinc-100 w-32 h-8 rounded-lg justify-center">
                <PiMonitorPlayFill className="text-cyan-400" /> <span className="ml-1">Webinar.</span><span className="text-cyan-400">gg</span>
              </div>
              <div className="text-xl mt-[3px]">
                <img src={characterOne} className="w-[35px] rounded-lg" />
              </div>
            </div>
        </div>
        <div className="flex flex-col mt-[20px] gap-[20px] pl-[15px] pr-[35px]">
          <div className="flex justify-between items-center">
            <div>Home</div>
            <div className="text-xl mt-[3px]">
              <FaHome />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>Webinars</div>
            <div className="text-xl mt-[3px]">
              <FaPeopleGroup />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>Billing</div>
            <div className="text-xl mt-[3px]">
              <FaRegCreditCard />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>User Management</div>
            <div className="text-xl mt-[3px]">
              <ImProfile />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>Settings</div>
            <div className="text-xl mt-[3px]">
              <IoSettings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
