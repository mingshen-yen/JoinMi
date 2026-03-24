import {
  Sparkles,
  House,
  CalendarPlus,
  Sparkle,
  UserPlus,
  Menu,
  X,
  LogOut,
  User,
  CalendarRange,
  MapPin,
  Mic2,
} from "lucide-react";
import { Link } from "react-router";

const baseNavItems = [
  { to: "/tours", label: "Tours", icon: Sparkles },
  { to: "/tour-register", label: "Signup", icon: CalendarPlus },
  { to: "/aboutus", label: "About Us", icon: House },
];

export const Header = () => {
  return (
    <>
      <div className="container p-4">
        <nav className="flex justify-between items-center py-4 text-white">
          <Link to="/">
            <div className="text-4xl font-black tracking-tighter">
              JoinMi Tour
              <span className="not-italic ml-1">✦</span>
            </div>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center font-medium relative">
            <div className="hidden rounded-l-lg overflow-hidden lg:flex ">
              {baseNavItems.map(({ to, label, icon: Icon }) => {
                const active = location.pathname === to;
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`flex items-center p-4 transition hover:text-cyan-200 cursor-pointer ${
                      active ? "text-cyan-200 " : " hover:text-cyan-200 "
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4 mr-2" />}
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
