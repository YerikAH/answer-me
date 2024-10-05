export const Pagination = () => {
  return (
    <div className="flex items-center justify-center py-16 w-full">
      <div>
        <nav aria-label="Pagination" className="isolate inline-flex rounded-lg">
          <a
            href="#"
            className="relative inline-flex bg-zinc-100 text-sm items-center rounded-lg px-4 transition-all py-2 text-zinc-400  hover:bg-zinc-200 focus:z-20 focus:outline-offset-0 border border-zinc-200 mr-4"
          >
            Previous
          </a>
          {/* Current: "z-10 bg-zinc-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600", Default: "text-zinc-900  hover:bg-zinc-200 focus:outline-offset-0" */}
          <div className="flex items-center gap-1">
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-zinc-900 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 rounded-lg transition-all"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-zinc-900  hover:bg-zinc-300 bg-zinc-200 focus:z-20 focus:outline-offset-0 rounded-lg transition-all"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-zinc-900  hover:bg-zinc-300 bg-zinc-200 focus:z-20 focus:outline-offset-0 md:inline-flex rounded-lg transition-all"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-zinc-700  focus:outline-offset-0 rounded-lg bg-zinc-200">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-zinc-900  hover:bg-zinc-300 bg-zinc-200 focus:z-20 focus:outline-offset-0 md:inline-flex rounded-lg transition-all"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-zinc-900  hover:bg-zinc-300 bg-zinc-200 focus:z-20 focus:outline-offset-0 rounded-lg transition-all"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-zinc-900  hover:bg-zinc-300 bg-zinc-200 focus:z-20 focus:outline-offset-0 rounded-lg transition-all"
            >
              10
            </a>
          </div>
          <a
            href="#"
            className="relative text-sm font-medium inline-flex bg-zinc-100 transition-all items-center rounded-lg px-4 py-2 text-zinc-900  hover:bg-zinc-200 focus:z-20 focus:outline-offset-0 border-zinc-200 ml-4 border"
          >
            Next
          </a>
        </nav>
      </div>
    </div>
  );
};
