import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import google from "@/assets/google-icon.png";
import { useEffect, useState } from "react";
import { EyeSlashIcon } from "@heroicons/react/20/solid";
import { EyeIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import { useFetch, useTitle } from "@/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "@/services";
import { Bounce, ToastContainer } from "react-toastify";
import { Loader } from "@/components";
import { handleFetchResponse } from "@/utils";
import { TOKEN } from "@/config";

const carousel = [
  {
    image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg",
    description:
      "La app ha transformado mi forma de trabajar. Puedo gestionar casos y consultas de mis clientes en un solo lugar. ¡Una herramienta imprescindible para mi práctica!",
    label: "Alexander Alex",
    label2: "Founder Luxpace",
  },
  {
    image:
      "https://images.pexels.com/photos/16927556/pexels-photo-16927556/free-photo-of-estatua-de-marmol-de-la-igualdad.jpeg",
    description:
      "Excelente plataforma para mantenerme organizado. Responder consultas y actualizar casos es rápido y eficiente. Mis clientes están más satisfechos y yo también.",
    label: "Alexander Alex",
    label2: "Founder Luxpace",
  },
  {
    image: "https://images.pexels.com/photos/4427501/pexels-photo-4427501.jpeg",
    description:
      "Me encanta esta app. Facilita la comunicación con mis clientes y me permite resolver todo de manera ágil. Ahora puedo enfocarme en lo que realmente importa: defender sus intereses.",
    label: "Alexander Alex",
    label2: "Founder Luxpace",
  },
];

interface LoginForm {
  email: string;
  password: string;
}
export default function Login() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { changeTitle } = useTitle();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const { data, error, fetchData, loader } = useFetch(login);
  const onSubmit: SubmitHandler<LoginForm> = (data) => fetchData(data);

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

  const onSuccess = () => {
    localStorage.setItem(TOKEN, data.token);
    navigate(ROUTES.DASHBOARD);
  };

  useEffect(() => {
    changeTitle("Ingresar -  Arxatec");
  }, []);

  useEffect(() => {
    handleFetchResponse({ data, error, loader }, onSuccess);
  }, [data, error, loader]);

  return (
    <main className="h-screen w-full grid lg:grid-cols-[50%_50%]  mx-auto">
      <div className="relative w-full   h-[500px] lg:h-full overflow-hidden flex flex-nowrap">
        {carousel.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full absolute overflow-hidden flex flex-[0_0_100%] transition-all duration-100 ease-linear  ${
              currentSlide === index ? "left-0 " : "left-[-100%] "
            } `}
          >
            <div className="relative items-end justify-end flex w-full">
              <div
                className="absolute w-full h-full bg-cover bg-no-repeat bg-center"
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
      <form
        className=" h-full w-full px-8 pt-16 pb-8 lg:pt-24 max-w-[36rem] flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl font-bold tracking-tighter text-zinc-950">
          Hola, Bienvenido de nuevo
        </h2>
        <p className="text-sm text-zinc-500 mt-4">
          ¡Bienvenido de nuevo! Ingresa para acceder a tus casos y consultas.
        </p>

        <div className="mt-24">
          <label
            htmlFor="email"
            className="text-sm text-zinc-900 font-semibold"
          >
            Ingresar tu correo electrónico:
          </label>
          <input
            type="text"
            id="email"
            placeholder="Ej. usuario@dominio.com"
            className="block rounded-lg border-0 px-4 py-2 w-full mt-2 text-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500"
            {...register("email", {
              required: "El correo electrónico es un campo requerido.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "El correo electrónico no es valido.",
              },
            })}
          />
        </div>
        {errors.email && (
          <span className="text-xs text-red-500">{errors.email.message}</span>
        )}

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
              className="block rounded-lg border-0 px-4 py-2 w-full mt-2 text-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500"
              {...register("password", {
                required: "La contraseña es un campo requerido.",
                // minLength: {
                //   value: 8,
                //   message:
                //     "La contraseña debe de tener como minimo 8 caracteres.",
                // },
                // pattern: {
                //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                //   message:
                //     "La contraseña debe contener al menos una letra y un número.",
                // },
              })}
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
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded-md border-gray-300 text-zinc-900 focus:ring-zinc-900"
            />
            <label
              htmlFor="remember-me"
              className="ml-3 block text-sm leading-6 text-gray-700"
            >
              Recuérdame
            </label>
          </div>

          <div className="text-sm leading-6">
            <a
              href="#"
              className="font-semibold text-zinc-950 hover:text-zinc-950"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        <div className="flex w-full gap-8 mt-12 mb-24">
          <button
            type="submit"
            className="text-white flex items-center justify-center gap-2 bg-zinc-950 rounded-lg py-3 px-6 w-full text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 transition-all hover:bg-zinc-700"
          >
            {loader && <Loader color="#fff" size="sm" />}
            Ingresar
          </button>
          {/* <button  className="text-zinc-950 border-zinc-200 border rounded-lg px-6 py-3 w-full text-sm hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 flex items-center justify-center transition-all">
            <img src={google} alt="google" className="size-4 mr-2" />
            Ingresar con Google
          </button> */}
        </div>

        <div className="flex gap-2 mt-auto">
          <p className="text-zinc-400 text-sm">¿No tienes una cuenta?</p>
          <Link
            to={ROUTES.REGISTER}
            className="text-zinc-950 underline text-sm"
          >
            Crea una cuenta
          </Link>
        </div>

        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </form>
    </main>
  );
}
