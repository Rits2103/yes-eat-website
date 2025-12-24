import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const SyncUser = () => {
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    if (!isSignedIn) return;

    const syncUser = async () => {
      try {
        const token = await getToken();

        await fetch("http://localhost:5000/api/users/sync", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error("User sync failed", error);
      }
    };

    syncUser();
  }, [isSignedIn]);

  return null; // 🔥 IMPORTANT: Renders NOTHING
};

export default SyncUser;
