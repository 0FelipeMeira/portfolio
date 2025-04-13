import Project from "../_components/Project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-neutral-100 w-full grid grid-cols-1 place-items-center gap-16 py-12 px-52"
    >
      <div className="w-full">
        <h1 className="font-mono text-5xl">Featured Projects</h1>
        <p>
          Here are some of the selected projects that showcase my passion for
          front-end development
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
  );
};

export default Projects;
