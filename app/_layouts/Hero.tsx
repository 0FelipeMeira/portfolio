import Icon from "../_components/Icon";

const Hero = () => {
  return (
    <div className="bg-neutral-100 w-full min-h-[95vh] grid place-items-center">
      <div className="size-full max-w-7xl grid grid-cols-1 md:grid-cols-2 place-items-center gap-16 md:py-12">
        <div className="flex flex-col gap-4 w-full p-8">
          <h1 className="font-mono text-6xl md:text-8xl">Olá, sou</h1>
          <h1 className="font-mono text-6xl md:text-8xl">Felipe Meira.</h1>
          <p className="text-neutral-600">
            Desenvolvedor fullstack com 2 anos de experiência criando aplicações
            acessíveis, escaláveis e centradas no usuário
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 rounded-full h-12 w-full
            font-bold py-2 border-2 
            transition-colors duration-200 ease-in-out
            bg-primary-500 text-neutral-100 border-primary-500
            hover:bg-neutral-100 hover:text-primary-500 hover:border-primary-500
            active:bg-neutral-300"
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
        <div className="mx-6 md:mx-0 bg-neutral-600 h-full rounded-2xl overflow-hidden">
          <img
            src="./hero/profile2.png"
            alt=""
            className="w-full h-full object-cover aspect-[6/7]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
