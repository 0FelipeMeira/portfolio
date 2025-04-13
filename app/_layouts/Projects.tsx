import Project from "../_components/Project";

const Projects = () => {
  return (
    <div className="grid w-full place-items-center bg-neutral-100">
      <div
        id="projects"
        className="grid size-full max-w-7xl grid-cols-1 place-items-center gap-16 px-8 py-12"
      >
        <div className="w-full">
          <h1 className="font-mono text-5xl">Projetos em Destaque</h1>
          <p>
            Aqui estão alguns projetos selecionados que mostram minha trajetória
            como desenvolvedor fullstack e minha paixão por criar experiências
            digitais acessíveis e bem construídas.
          </p>
        </div>

        <Project
          title="E-commerce Dashboard"
          description="A responsive dashboard built with React and TypeScript for managing online store analytics. Features include real-time sales tracking, inventory management, and customer insights."
          imageUrl="https://miro.medium.com/v2/resize:fit:1128/0*5Q_7VXyQ8xo4Dgpp.jpg"
          githubLink="a"
          demoLink="a"
        />
        <Project
          title="Weather Forecast App"
          description="A sleek weather application that provides accurate forecasts using the OpenWeather API. Includes features like 7-day predictions, location detection, and weather alerts."
          imageUrl="https://miro.medium.com/v2/resize:fit:1128/0*5Q_7VXyQ8xo4Dgpp.jpg"
          githubLink=""
          demoLink=""
        />
      </div>
    </div>
  );
};

export default Projects;
