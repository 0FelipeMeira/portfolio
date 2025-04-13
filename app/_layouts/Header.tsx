const Header = () => {
  return (
    <div className="bg-neutral-100 w-full h-16 flex items-center justify-center px-8">
      <div className="max-w-7xl w-full flex items-center justify-between whitespace-nowrap">
        <h1 className="font-mono text-2xl sm:text-3xl">Felipe Meira</h1>
        <ul className="flex gap-2 sm:gap-4 items-center">
          <li
            className="text-sm sm:text-base cursor-pointer border-b-2 border-transparent hover:border-primary-500 transition-colors duration-200"
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
            className="text-sm sm:text-base cursor-pointer border-b-2 border-transparent hover:border-primary-500 transition-colors duration-200"
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
            className="text-sm sm:text-base cursor-pointer border-b-2 border-transparent hover:border-primary-500 transition-colors duration-200"
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
