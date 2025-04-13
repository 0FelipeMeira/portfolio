const Header = () => {
  return (
    <div className="flex h-16 w-full items-center justify-center bg-neutral-100 px-8">
      <div className="flex w-full max-w-7xl items-center justify-between whitespace-nowrap">
        <h1 className="font-mono text-2xl sm:text-3xl">Felipe Meira</h1>
        <ul className="flex items-center gap-2 sm:gap-4">
          <li
            className="hover:border-primary-500 cursor-pointer border-b-2 border-transparent text-sm transition-colors duration-200 sm:text-base"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Sobre Mim
          </li>
          <li
            className="hover:border-primary-500 cursor-pointer border-b-2 border-transparent text-sm transition-colors duration-200 sm:text-base"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contato
          </li>
          <li
            className="hover:border-primary-500 cursor-pointer border-b-2 border-transparent text-sm transition-colors duration-200 sm:text-base"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projetos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
