import { classNames, textToRoute } from "@/utils";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { ShieldCheckIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { LightBulbIcon } from "@heroicons/react/16/solid";

interface Props {
  navigation: {
    name: string;
    href: string;
    icon: React.ElementType;
    current: boolean;
  }[];
  codes: {
    id: number;
    name: string;
    href: string;
    initial: string;
    current: boolean;
  }[];
  links: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[];
}

export const SidebarDesktop = ({ navigation, codes, links }: Props) => {
  const location = useLocation();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-50 ">
        <div className="h-14 shrink-0 items-center flex  px-2 border-b">
          <a className="flex items-center gap-2 bg-slate-50 w-full p-1 rounded-md hover:bg-slate-200 cursor-pointer transition-all">
            <div className="size-8 border rounded-full overflow-hidden ">
              <img
                alt="AsstLog"
                src={logo}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-950 font-semibold text-sm">Arxatec</p>
          </a>
        </div>
        <nav className="flex flex-1 flex-col px-4">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={classNames(
                        location.pathname === item.href
                          ? " text-slate-700 hover:bg-slate-200"
                          : "text-slate-600 hover:bg-slate-200 ",
                        "group flex gap-x-2 items-center rounded-lg py-1.5 px-2 text-sm font-semibold leading-6 transition-all"
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className="size-5 shrink-0"
                      />

                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Tus casos
              </div>
              <ul role="list" className="-mx-2 mt-2">
                {codes.map((code) => (
                  <li key={code.name}>
                    <Link
                      to={textToRoute(code.href)}
                      className={classNames(
                        code.href === location.pathname
                          ? "text-slate-700 hover:bg-slate-200"
                          : "text-slate-600 hover:bg-slate-200 ",
                        "group flex gap-x-3 rounded-lg py-1.5 px-2 text-sm font-semibold leading-6  transition-all"
                      )}
                    >
                      <span className="truncate ">{code.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <ul className="mt-auto -mx-2">
              {links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? " text-slate-700 hover:bg-slate-200"
                        : "text-slate-600 hover:bg-slate-200 ",
                      "group flex gap-x-2 items-center rounded-lg py-1.5 px-2 text-sm font-semibold leading-6  transition-all"
                    )}
                  >
                    <item.icon aria-hidden="true" className="size-5 shrink-0" />

                    {item.name}
                  </a>
                </li>
              ))}

              <Menu
                as="div"
                className="relative flex w-full text-left border-t pt-2 pb-2 mt-2"
              >
                <div className="w-full">
                  <MenuButton className="flex justify-between items-center gap-x-1.5 w-full rounded-md bg-slate-50 px-2 py-2 text-sm font-semibold text-gray-900  hover:bg-slate-200">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://catalyst-demo.tailwindui.com/users/erica.jpg"
                        alt="avatar"
                        className="size-9 rounded-md border"
                      />
                      <div>
                        <p className="text-slate-900 text-left text-sm font-semibold">
                          Alessander
                        </p>
                        <p className="text-slate-500 text-left text-xs font-semibold">
                          alessander@gmail.com
                        </p>
                      </div>
                    </div>
                    <ChevronUpIcon
                      aria-hidden="true"
                      className=" size-3 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-50 w-56 origin-top-right divide-y divide-gray-100 rounded-lg p-1 bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in "
                  anchor="top end"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className=" px-4 py-2 flex text-sm text-slate-700 gap-2 rounded-md group hover:bg-blue-500 hover:text-white font-semibold items-center transition-all"
                      >
                        <UserCircleIcon className="size-4" />
                        Mi cuenta
                      </a>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className=" px-4 py-2 flex text-sm text-slate-700 gap-2 rounded-md group hover:bg-blue-500 hover:text-white font-semibold items-center transition-all"
                      >
                        <ShieldCheckIcon className="size-4" />
                        Privacidad
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className=" px-4 py-2 flex text-sm text-slate-700 gap-2 rounded-md group hover:bg-blue-500 hover:text-white font-semibold items-center transition-all"
                      >
                        <LightBulbIcon className="size-4" />
                        Terminos y condiciones
                      </a>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className=" px-4 py-2 flex text-sm text-slate-700 gap-2 rounded-md group hover:bg-blue-500 hover:text-white font-semibold items-center transition-all"
                      >
                        <ArrowRightStartOnRectangleIcon
                          className="size-4"
                          strokeWidth={2}
                        />
                        Cerrar sesión
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
};
