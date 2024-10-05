export const ContactSection = () => {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        {/* <img
          alt=""
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          className="h-64 w-full bg-zinc-50 object-cover sm:h-80 lg:absolute lg:h-full"
        /> */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.85032869563355!2d-75.2155267337563!3d-12.070658169674875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e974736d88d2d%3A0x52981c190b36381c!2sLa%20Base%20Cowork!5e0!3m2!1ses!2spe!4v1728154071915!5m2!1ses!2spe"
            width="600"
            height="450"
            style={{ border: 0 }}
            className="h-64 w-full sm:h-80 lg:absolute lg:h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Let's work together
            </h2>
            <p className="mt-2 text-lg leading-8 text-zinc-600">
              Proin volutpat consequat porttitor cras nullam gravida at orci
              molestie a eu arcu sed ut tincidunt magna.
            </p>
            <form action="#" method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-zinc-900"
                  >
                    Ingresa tu nombre:
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      placeholder="Ej. Alessander"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-zinc-900"
                  >
                    Ingresa tu apellido:
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      placeholder="Ej. Perez"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-zinc-900"
                  >
                    Ingresa tu correo electrónico:
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Ej. email@email.com"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="phone"
                      className="block font-semibold text-zinc-900"
                    >
                      Ingresa tu número de celular:
                    </label>
                    <p id="phone-description" className="text-zinc-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Ej. +99 999 999 999"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-zinc-900"
                    >
                      Ingresa tu mensaje:
                    </label>
                    <p id="message-description" className="text-zinc-400">
                      Máximo de 500 caracteres
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Ej. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua"
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end  pt-4">
                <button
                  type="submit"
                  className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
