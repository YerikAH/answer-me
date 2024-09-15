import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import google from "@/assets/google-icon.png";
import { useEffect, useState } from "react";
import { EyeIcon } from "@heroicons/react/16/solid";
import { EyeSlashIcon } from "@heroicons/react/20/solid";
import { ROUTES } from "@/router/routes";
import { Link } from "react-router-dom";
import { useTitle } from "@/hooks";

const carousel = [
  {
    image: "https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum ea molestiae excepturi deserunt, explicabo in. Repellat maiores sunt at. Earum incidunt id sed optio mollitia odio placeat obcaecati.",
    label: "Alexander Alex",
    label2: "Founder Luxpace",
  },
  {
    image: "https://images.pexels.com/photos/5424945/pexels-photo-5424945.jpeg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum ea molestiae excepturi deserunt, explicabo in. Repellat maiores sunt at. Earum incidunt id sed optio mollitia odio placeat obcaecati.",
    label: "Alexander Alex",
    label2: "Founder Luxpace",
  },
  {
    image: "https://images.pexels.com/photos/8311890/pexels-photo-8311890.jpeg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum ea molestiae excepturi deserunt, explicabo in. Repellat maiores sunt at. Earum incidunt id sed optio mollitia odio placeat obcaecati.",
    label: "Alexander Alex",
    label2: "Founder Luxpace",
  },
];
export default function Register() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const { changeTitle } = useTitle();

  const handleNext = () => {
    if (currentSlide === carousel.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const handleBack = () => {
    if (currentSlide === 0) {
      setCurrentSlide(carousel.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    changeTitle("Registrarse -  Arxatec");
  }, []);
  return (
    <main className="h-screen w-full grid lg:grid-cols-[50%_50%]  mx-auto">
      <div className="relative w-full h-[500px] lg:h-full overflow-hidden flex flex-nowrap">
        {carousel.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full absolute overflow-hidden flex flex-[0_0_100%] transition-all duration-100 ease-linear  ${
              currentSlide === index ? "left-0 " : "left-[-100%] "
            } `}
          >
            <div className="relative items-end justify-end flex w-full">
              <div
                className="absolute w-full h-full bg-cover bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute w-full h-full bg-[#0005] left-0 z-10" />
              <div className="relative z-20 w-full  py-10 px-16">
                <p className="text-white text-lg tracking-tighter">
                  {item.description}
                </p>
                <div className="mt-8 flex justify-between items-center">
                  <div>
                    <h2 className="text-white text-base">{item.label}</h2>
                    <p className="text-white text-sm opacity-90">
                      {item.label2}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="bg-white size-8 grid place-items-center rounded-full hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      onClick={handleBack}
                    >
                      <ChevronLeftIcon
                        className="size-4 text-gray-950"
                        strokeWidth={2}
                      />
                    </button>
                    <button
                      className="bg-white size-8 grid place-items-center rounded-full hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      onClick={handleNext}
                    >
                      <ChevronRightIcon
                        className="size-4 text-gray-950"
                        strokeWidth={2}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" h-full w-full px-8 pt-16 pb-8 lg:pt-24 max-w-[36rem] flex flex-col">
        <h2 className="text-3xl font-bold tracking-tighter text-zinc-950">
          Crea una nueva cuenta
        </h2>
        <p className="text-sm text-zinc-500 mt-4">
          Complete the data below to enjoy our services
        </p>

        <div className="flex w-full mt-24 gap-6">
          <div className="w-full">
            <label
              htmlFor="firstname"
              className="text-sm text-zinc-900 font-semibold"
            >
              Ingresar tu nombre:
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Ej. Jose Pedro"
              className="block rounded-lg border-0 px-4 py-2 w-full mt-2 text-sm text-zinc-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="lastname"
              className="text-sm text-zinc-900 font-semibold"
            >
              Ingresar tu apellido:
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Ej. Soto Taipe"
              className="block rounded-lg border-0 px-4 py-2 w-full text-zinc-900 mt-2 text-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900"
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="email"
            className="text-sm text-zinc-900 font-semibold"
          >
            Ingresar tu correo eletrónico:
          </label>
          <input
            type="text"
            id="email"
            placeholder="Ej. usuario@dominio.com"
            className="block rounded-lg border-0 px-4 text-zinc-900 py-2 w-full mt-2 text-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900"
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="password"
            className="text-sm text-zinc-900 font-semibold"
          >
            Ingresar tu contraseña:
          </label>
          <div className="relative">
            <input
              type={showPassword ? "password" : "text"}
              id="password"
              placeholder="Ej. 123ABC$#%GawC"
              className="block rounded-lg text-zinc-900 border-0 pl-4 pr-14 py-2 w-full mt-2 text-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900"
            />
            <button
              className="absolute top-0 right-6 bottom-0 my-auto"
              onClick={toggleShowPassword}
            >
              {!showPassword ? (
                <EyeSlashIcon className="text-gray-500 size-4" />
              ) : (
                <EyeIcon className="text-gray-500 size-4" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded-full border-gray-300 text-zinc-900 focus:ring-zinc-900"
            />
            <label
              htmlFor="remember-me"
              className="ml-3 block text-sm leading-6 text-gray-700"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm leading-6">
            <a
              href="#"
              className="font-semibold text-zinc-950 hover:text-zinc-950"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div className="flex w-full gap-8 mt-12 mb-24">
          <button className="text-white bg-zinc-950 rounded-lg py-3 px-6 block w-full text-sm hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900">
            Ingresar
          </button>
          <button className="text-zinc-950 border-zinc-200 border rounded-lg px-6 py-3 w-full text-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 flex items-center justify-center">
            <img src={google} alt="google" className="size-4 mr-2" />
            Ingresar con Google
          </button>
        </div>

        <div className="flex gap-2 mt-auto">
          <p className="text-zinc-400 text-sm">¿Ya tienes una cuenta?</p>
          <Link to={ROUTES.LOGIN} className="text-zinc-950 underline text-sm">
            Ingresa
          </Link>
        </div>
      </div>
    </main>
  );
}
