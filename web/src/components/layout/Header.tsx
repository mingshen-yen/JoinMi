import {
  Sparkles,
  House,
  Binoculars,
  UserPlus,
  Menu,
  X,
  Plus,
  LogOut,
  User,
  CalendarRange,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const baseNavItems = [
  //{ to: "/", label: "Home", icon: House },
  { to: "/tours", label: "Tours", icon: Binoculars },
  //{ to: "/tour-register", label: "Signup", icon: CalendarPlus },
  { to: "/aboutus", label: "About Us", icon: Sparkles },
  // { to: "/login", label: "Login", icon: User },
  // { to: "/create-tour", label: "New Tour", icon: Plus },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
    };

    if (userDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [userDropdownOpen]);

  return (
    <>
      <div className="container p-4">
        <nav className="flex justify-between items-center py-4 text-white">
          <Link to="/">
            <div className="text-4xl font-black tracking-tighter">
              JoinMi
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
          {/* Mobile Burger Icon */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden relative z-130"
            >
              <Menu size={28} />
            </button>
          )}

          {/* Mobile Drawer Backdrop */}
          {open && (
            <div
              className="fixed inset-0 z-120 bg-black/60 lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
          )}

          {/* Mobile Drawer */}
          <div
            className={`fixed top-0 right-0 z-130 h-full w-64 bg-cyan rounded-l-xl shadow-lg flex flex-col overflow-hidden lg:hidden transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* X Button inside drawer */}
            <button
              onClick={() => setOpen(false)}
              className="self-end m-4 p-2 rounded-full hover:bg-purple-dark"
            >
              <X size={24} />
            </button>
            {/* Nav Items */}
            {baseNavItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="flex items-center px-8 py-4 hover:text-cyan-500"
              >
                <Icon className="h-4 w-4 mr-3" />
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};
