import {
  ArrowRightStartOnRectangleIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ShieldCheckIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { LightBulbIcon } from "@heroicons/react/16/solid";

interface Props {
  setSidebarOpen: (value: boolean) => void;
}
export const Navigation = ({ setSidebarOpen }: Props) => {
  return (
    <div className="z-40 flex h-16 shrink-0 items-center gap-x-4  bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden justify-between">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-zinc-700 font-lexend hover:bg-zinc-100 transition-all rounded-lg"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars2Icon aria-hidden="true" className="size-5 " />
      </button>

      <Menu as="div" className="relative flex w-fit text-left">
        <div className="w-fit">
          <MenuButton className="flex justify-between items-center gap-x-1.5 w-full rounded-md bg-white p-1 text-sm font-semibold text-gray-900  hover:bg-zinc-100">
            <div className="flex items-center ">
              <img
                src="https://catalyst-demo.tailwindui.com/users/erica.jpg"
                alt="avatar"
                className="size-7 rounded-md border"
              />
            </div>
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-50 w-56 origin-top-right divide-y divide-gray-100 rounded-lg p-1 bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in mt-[3rem] -mr-[0.70rem]"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className=" px-4 py-2 flex text-sm text-zinc-700 gap-2 rounded-md group hover:bg-blue-500 hover:text-white font-semibold items-center transition-all"
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
                className=" px-4 py-2 flex text-sm text-zinc-700 gap-2 rounded-md group hover:bg-blue-500 hover:text-white font-semibold items-center transition-all"
              >
                <ShieldCheckIcon className="size-4" />
                Privacidad
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className=" px-4 py-2 flex text-sm text-zinc-700 gap-2 rounded-md group hover:bg-blue-500 hover:text-white font-semibold items-center transition-all"
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
                className=" px-4 py-2 flex text-sm text-zinc-700 gap-2 rounded-md group hover:bg-blue-500 hover:text-white font-semibold items-center transition-all"
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
    </div>
  );
};
