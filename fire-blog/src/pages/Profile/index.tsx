import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const Profile = () => {
  const { user, logout } = useAuth();
  return (
    <div className="p-4">
      <h1>Profile</h1>
      <h3>{user?.displayName}</h3>
      <Button variant={"destructive"} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
