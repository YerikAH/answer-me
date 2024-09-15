import { GoBack } from "@/components";
import { ROUTES } from "@/router/routes";

export default function Lawyer() {
  return (
    <div className="w-full max-w-6xl mt-12 mx-auto">
      <GoBack name="Abogados" route={ROUTES.USERS} />
    </div>
  );
}
