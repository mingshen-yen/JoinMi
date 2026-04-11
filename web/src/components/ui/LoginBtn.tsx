import { useAuth0 } from "@auth0/auth0-react";
import { User } from "lucide-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex flex-row items-center hover:text-cyan-500">
      <User className="h-4 w-4 mr-2" />
      <button onClick={() => loginWithRedirect()} className="button login">
        <span>Log In</span>
      </button>
    </div>
  );
};
