import { greetBasedOnTime } from "@/utils";

export const GreetHeader = () => (
  <h1 className="text-xl text-zinc-900 font-semibold">
    {greetBasedOnTime()}, Harvey
  </h1>
);
