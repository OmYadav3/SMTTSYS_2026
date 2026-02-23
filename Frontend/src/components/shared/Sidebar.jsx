import { Link, NavLink } from "react-router-dom";
import { sideMenuIcons } from "../icons/sideMenuIcons";

export default function Sidebar() {
  return (
    <div className="bg-theme text-theme flex flex-col items-center justify-between h-screen border border-theme">
      <div className="w-full flex flex-col">
        {/*Logo */}
        <Link className="p-4 mt-2 ">
          <img src="logo.jpg" className="w-10 h-6 " alt="logo" to="/" />
        </Link>

        {/* Menu Items */}
        <div className=" bg-theme mt-4 group w-19 hover:w-64 transition-all duration-300 shadow-xl">
          <div className="flex flex-col gap-2 p-4 justify-center w-full">
            {sideMenuIcons.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({
                    isActive,
                  }) => `w-full flex items-center gap-4 p-2 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-theme text-theme font-bold border border-theme"
                    : "text-theme hover:bg-theme hover:text-theme"
                }`}
                >
                  <Icon size={23} className="min-w-7.5 text-theme" />

                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {item.name}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="">
        <h1 className="font-bold">2026</h1>
      </div>
    </div>
  );
}
