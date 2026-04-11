import { useAuth0 } from "@auth0/auth0-react";
import { LogOut } from "lucide-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-row items-center hover:text-cyan-500">
      <LogOut className="h-4 w-4 mr-2" />
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="button logout"
      >
        <span>Log Out</span>
      </button>
    </div>
  );
};
