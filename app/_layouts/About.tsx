const About = () => {
  return (
    <div
      id="about"
      className="bg-neutral-100 w-full h-[80vh] grid grid-cols-3 place-items-center gap-16 py-12 px-52"
    >
      <div className="h-4/5">
        <h1 className="font-mono text-8xl">Sobre mim</h1>
      </div>
      <div className="h-4/5 flex flex-col gap-8 col-span-2">
        <h1 className="text-4xl font-semibold">
          Sou desenvolvedor fullstack com 2 anos de experiência. Gosto de
          desenvolver aplicações com foco no usuário, acessibilidade e boa
          performance.
        </h1>
        <h2>
          Atualmente estou explorando React.js, Node.js e um pouco de design de
          interfaces. Fora do código, curto tocar guitarra, jogar RPGs e sempre
          estou aprendendo algo novo.
        </h2>
        <a
          href=""
          className="text-primary-500 group transition-transform duration-200 w-fit"
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
  );
};

export default About;
