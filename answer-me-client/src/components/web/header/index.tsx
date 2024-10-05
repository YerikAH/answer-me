import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Inicio", href: ROUTES.HOME },
  { name: "Aplicación", href: ROUTES.DASHBOARD },
  { name: "Acerca", href: ROUTES.ABOUT },
  { name: "Contáctanos", href: ROUTES.CONTACT },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="relative z-10">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex items-center gap-x-12">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              alt=""
              src={logo}
              className="h-12 rounded-full w-auto border"
            />
            <span className="text-zinc-900 font-semibold  text-base ">
              Arxatec
            </span>
          </a>
        </div>
        <div className="hidden lg:flex ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-zinc-600 rounded-md px-4 py-2 hover:bg-white/25 backdrop-blur-sm hover:shadow-sm transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex gap-4">
          <Link
            to={ROUTES.REGISTER}
            className="text-sm font-semibold leading-6 text-zinc-900 px-4 rounded-md py-2 border shadow-sm"
          >
            Registrarse
          </Link>
          <Link
            to={ROUTES.LOGIN}
            className="text-sm font-semibold leading-6 bg-zinc-900 text-white px-4 rounded-md py-2"
          >
            Ingresar
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="logo"
                src={logo}
                className="h-12 w-auto rounded-full border"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-zinc-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root h-[94%] ">
            <div className=" divide-y divide-zinc-500/10 h-full  flex justify-between flex-col">
              <div className=" py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-1.5 font-semibold leading-7 text-zinc-900 hover:bg-zinc-50 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-2">
                <a
                  href="#"
                  className=" block rounded-lg px-3 py-2.5 font-semibold leading-7 text-zinc-900 bg-white text-sm text-center border shadow-sm"
                >
                  Registrarse
                </a>
                <a
                  href="#"
                  className=" block rounded-lg px-3 py-2.5 font-semibold leading-7 text-white bg-zinc-900 text-sm text-center"
                >
                  Ingresar
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
