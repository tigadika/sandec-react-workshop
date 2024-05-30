import { Search } from "lucide-react";
import Button from "./Button";

export default function Headers() {
  return (
    <div className="relative mt-20 h-[700px] w-full px-5 py-5">
      <div className="flex items-center justify-center">
        <img src="/hero.png" alt="Hero" className="rounded-2xl shadow-md" />
      </div>
      <div className="absolute left-[50%] w-full -translate-x-[50%] space-y-10 rounded-xl bg-white p-10 shadow-lg md:w-1/2 md:-translate-y-[50%]">
        <h3 className="text-center text-base font-semibold md:text-2xl">
          What do you want to eat now?
        </h3>
        <div className="flex flex-col gap-5 lg:flex-row">
          <input
            type="text"
            className="w-full rounded-xl border-2 px-5 py-4 text-xl"
            placeholder="Search menu.."
          />
          <Button>
            <div className="flex items-center gap-2">
              <Search />
              Explore
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
