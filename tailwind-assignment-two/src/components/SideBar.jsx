import { PiMonitorPlayFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="bg-slate-100 h-screen w-80">
      <div>
        <div className="mt-[10px] mb-[10px] pl-[15px]">SideBar Header</div>
        <div className="flex flex-col mt-[20px] gap-[20px] pl-[15px] pr-[35px]">
          <div className="flex justify-between items-center">
            <div>Home</div>
            <div className="text-xl mt-[3px]">
              <FaHome />
            </div>
          </div>
          <div>Webinars</div>
          <div>Billing</div>
          <div>User Management</div>
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
