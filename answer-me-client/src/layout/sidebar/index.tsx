import { useState } from "react";

import { Outlet } from "react-router-dom";
import { SidebarDesktop } from "./sidebar-desktop";
import { SidebarMobile } from "./sidebar-mobile";
import { Navigation } from "./navigation";
import {
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  BriefcaseIcon,
  FolderIcon,
} from "@heroicons/react/20/solid";
import { ROUTES } from "@/router/routes";

const navigation = [
  {
    name: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: HomeIcon,
    current: true,
  },
  {
    name: "Casos",
    href: ROUTES.CASES,
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Abogados",
    href: ROUTES.LAWYERS,
    icon: BriefcaseIcon,
    current: false,
  },
  {
    name: "Usuarios",
    href: ROUTES.USERS,
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Configuración",
    href: ROUTES.SETTINGS,
    icon: Cog6ToothIcon,
    current: false,
  },
];
const links = [
  {
    name: "Conocer más",
    href: "",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Registro de cambios",
    href: "",
    icon: SparklesIcon,
  },
];
const teams = [
  {
    id: 1,
    name: "Recursos humanos",
    href: `${ROUTES.NOT_FOUND}/recursos-humanos`,
    initial: "R",
    current: false,
  },
  {
    id: 2,
    name: "Desarrolladores",
    href: `${ROUTES.NOT_FOUND}/desarrolladores`,
    initial: "D",
    current: false,
  },
];

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="">
      <SidebarMobile
        codes={teams}
        navigation={navigation}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        links={links}
      />

      <SidebarDesktop codes={teams} navigation={navigation} links={links} />

      <div className="lg:pl-60">
        <Navigation setSidebarOpen={setSidebarOpen} />

        <main className="p-[5px] bg-white h-screen w-full ">
          <div className="px-4 sm:px-6 lg:px-8 rounded-lg border bg-zinc-50 flex flex-col min-h-[calc(100vh-10px)]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
