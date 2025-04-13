const About = () => {
  return (
    <div className="grid h-[80vh] w-full place-items-center bg-neutral-100">
      <div
        id="about"
        className="grid size-full max-w-7xl grid-cols-1 place-items-center px-8 py-12 md:grid-cols-3 md:gap-16"
      >
        <div className="h-4/5">
          <h1 className="font-mono text-8xl">Sobre mim</h1>
        </div>
        <div className="col-span-2 flex h-4/5 flex-col gap-8">
          <h1 className="text-4xl font-semibold">
            Sou desenvolvedor fullstack com 2 anos de experiência. Gosto de
            desenvolver aplicações com foco no usuário, acessibilidade e boa
            performance.
          </h1>
          <h2>
            Atualmente estou explorando React.js, Node.js e um pouco de design
            de interfaces. Fora do código, curto tocar guitarra, jogar RPGs e
            sempre estou aprendendo algo novo.
          </h2>
          <a
            href=""
            className="text-primary-500 group w-fit transition-transform duration-200"
          >
            {/* <div className="w-fit">
            <h1 className="text-lg px-1 font-semibold transition-transform duration-200 group-hover:-translate-y-0.5">
              More About Me
            </h1>
            <hr className="w-full transition-transform duration-200 group-hover:translate-y-0.5" />
          </div> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
