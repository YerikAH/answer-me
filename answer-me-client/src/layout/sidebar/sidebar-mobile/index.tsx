import { classNames, textToRoute } from "@/utils";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import logo from "@/assets/logo.png";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
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
export const SidebarMobile = ({
  sidebarOpen,
  setSidebarOpen,
  navigation,
  codes,
  links,
}: Props) => {
  return (
    <Dialog
      open={sidebarOpen}
      onClose={setSidebarOpen}
      className="relative z-50 lg:hidden "
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/35  transition-opacity duration-300 ease-linear data-[closed]:opacity-0 "
      />

      <div className="fixed inset-0 flex p-2">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white border rounded-lg pb-4 ring-1 ring-white/10">
            <div>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className=" p-2 bg-white hover:bg-zinc-100 flex w-fit transition-all rounded-lg mt-2 ml-2"
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon
                  aria-hidden="true"
                  className="size-5 text-zinc-500"
                />
              </button>
              <div className="h-14 shrink-0 items-center flex  px-2 border-b">
                <a className="flex items-center gap-2 bg-white w-full p-1 rounded-md hover:bg-zinc-100 cursor-pointer transition-all">
                  <div className="size-8 border rounded-full overflow-hidden ">
                    <img
                      alt="AsstLog"
                      src={logo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-zinc-950 font-semibold text-sm">Arxatec</p>
                </a>
              </div>
            </div>
            <nav className="flex flex-1 flex-col px-4">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          onClick={() => setSidebarOpen(false)}
                          className={classNames(
                            location.pathname === item.href
                              ? "text-zinc-700 hover:bg-zinc-100"
                              : "text-zinc-600 hover:bg-zinc-100 ",
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
                  <ul role="list" className="-mx-2 mt-2 ">
                    {codes.map((code) => (
                      <li key={code.name}>
                        <Link
                          to={textToRoute(code.href)}
                          onClick={() => setSidebarOpen(false)}
                          className={classNames(
                            code.href === location.pathname
                              ? "text-zinc-700 hover:bg-zinc-100"
                              : "text-zinc-600 hover:bg-zinc-100 ",
                            "group flex gap-x-3 rounded-lg py-1.5 px-2 text-sm font-semibold leading-6  transition-all"
                          )}
                        >
                          <span className="truncate font-lexend">
                            {code.name}
                          </span>
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
                            ? " text-zinc-700 hover:bg-zinc-100"
                            : "text-zinc-600 hover:bg-zinc-100 ",
                          "group flex gap-x-2 items-center rounded-lg py-1.5 px-2 text-sm font-semibold leading-6  transition-all"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-5 shrink-0"
                        />

                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </ul>
            </nav>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
