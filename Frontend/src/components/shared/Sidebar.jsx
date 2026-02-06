import { sideMenuIcons } from "../icons/sideMenuIcons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="Sidebar text-white border flex flex-col items-center justify-between ">
      <div className="border ">
        Logo
        </div>
      <ul className="border text-white" >
      {sideMenuIcons.map((items) => {
        const Icon = items.icon;
        return (
          <Link 
          key={items.name}
          to={items.path} 
          className="flex items-center gap-3 hover:bg-gray-400 w-full text-white ">
            <div className=" text-white" ><Icon size={35} /></div>
            <div className=" " >{items.name}</div>
          </Link>
        );
      })}
      </ul>
      <div>
        2026
      </div>
    </div>
  );
}
