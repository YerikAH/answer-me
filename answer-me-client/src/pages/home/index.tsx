import { ROUTES } from "@/router/routes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    // navigate(ROUTES.DASHBOARD);
  }, []);
  return (
    <div>
      Te amo Hersly, aunque no me hagas caso, pero igual, María va a ser mía.
    </div>
  );
}
