import { useAuthUser } from "../../hooks/useAuthUser";

export const UserDashboard = () => {
  const { user, accessToken, isLoading } = useAuthUser();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <div className="pb-5 sm:mt-10 sm:px-0 text-white">
        <h2 className="pb-5">Welcome, {user?.name}</h2>
        <div>
          <h2>Your Booked Tours</h2>
        </div>
      </div>
    </div>
  );
};
