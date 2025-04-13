import Icon from "../_components/Icon";

const Hero = () => {
  return (
    <div className="grid min-h-[95svh] w-full place-items-center bg-neutral-100">
      <div className="grid size-full max-w-7xl grid-cols-1 place-items-center md:gap-16 md:grid-cols-2 md:py-12">
        <div className="flex w-full flex-col gap-4 p-8">
          <h1 className="font-mono text-6xl md:text-8xl">
            Olá, sou <br /> Felipe Meira.
          </h1>
          <p className="text-neutral-600">
            Desenvolvedor fullstack com 2 anos de experiência criando aplicações
            acessíveis, escaláveis e centradas no usuário
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="#contact"
              className="bg-primary-500 border-primary-500 hover:text-primary-500 hover:border-primary-500 flex h-12 w-full items-center justify-center gap-3 rounded-full border-2 py-2 font-bold text-neutral-100 transition-colors duration-200 ease-in-out hover:bg-neutral-100 active:bg-neutral-300"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Fale Comigo
            </a>

            <Icon type="linkedin" />
            <Icon type="github" />
          </div>
        </div>
        <div className="order-first mx-6 h-full overflow-hidden rounded-2xl bg-neutral-600 md:order-last md:mx-0">
          <img
            src="./hero/profile2.png"
            alt=""
            className="aspect-square h-full w-full object-contain md:aspect-[6/7]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
