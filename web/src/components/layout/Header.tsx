import {
  Sparkles,
  Binoculars,
  Menu,
  X,
  User,
  Plus,
  CalendarRange,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { LoginButton } from "../ui/LoginBtn";
import { useAuthUser } from "../../hooks/useAuthUser";
import { LogoutButton } from "../ui/LogoutBtn";

const baseNavItems = [
  { to: "/tours", label: "Discover", icon: Binoculars },
  //{ to: "/booking", label: "Book", icon: CalendarPlus },
  { to: "/aboutus", label: "About Us", icon: Sparkles },
];

const organizerNavItem = [
  {
    to: "/create-tour",
    label: "Create New",
    icon: Plus,
  },
];

export const Header = () => {
  const { user, isAuthenticated } = useAuthUser();
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
                    className={`flex items-center p-4 transition hover:text-cyan-500 cursor-pointer ${
                      active ? "text-cyan-500 " : " hover:text-cyan-500 "
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4 mr-2" />}
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
            {/* User Menu or Login Button */}
            {isAuthenticated && user ? (
              <div className="relative" ref={userDropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className={`flex items-center px-2 transition ${userDropdownOpen ? "text-cyan-500" : "hover:text-cyan-500"} cursor-pointer gap-2`}
                >
                  <User className="h-4 w-4" />
                  <span className="truncate max-w-37.5">{user.name}</span>
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 top-10 w-50 bg-cyan rounded-lg shadow-xl py-2 z-100">
                    <div className="flex flex-col items-start px-4 py-2 transition gap-2 text-white">
                      <Link to="/managed-events">
                        <div className="flex items-center gap-2 px-2 py-4 hover:text-cyan-500">
                          <CalendarRange className="h-4 w-4" />
                          <span>Managed Tours</span>
                        </div>
                      </Link>
                      <Link to={"/create-tour"}>
                        <div className="flex items-center px-2 hover:text-cyan-500 gap-2">
                          <Plus className="h-4 w-4" />
                          <span>Create New</span>
                        </div>
                      </Link>
                      <div className="px-2 py-4">
                        <LogoutButton />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center px-4 hover:text-cyan-500">
                <LoginButton />
              </div>
            )}
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
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </Link>
            ))}
            {/* User Menu or Sign up Button Mobile */}
            {isAuthenticated && user ? (
              <>
                <div className="flex items-center px-8 py-4 hover:text-cyan-500 gap-2">
                  <User className="h-4 w-4" />
                  {user.name}
                </div>
                <Link
                  to="/managed-events"
                  onClick={() => setOpen(false)}
                  className="flex items-center px-12 py-3 hover:text-cyan-500 gap-2"
                >
                  <CalendarRange className="h-4 w-4" />
                  Managed Tours
                </Link>
                <Link to={"/create-tour"}>
                  <div className="flex items-center px-12 py-3 hover:text-cyan-500 gap-2">
                    <Plus className="h-4 w-4" />
                    <span>Create New</span>
                  </div>
                </Link>
                <div className="px-12 py-3">
                  <LogoutButton />
                </div>
              </>
            ) : (
              <div className="flex items-center px-8 py-4 hover:text-cyan-500">
                <LoginButton />
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
