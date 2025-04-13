interface ProjectProps {
  title: string;
  year?: string;
  description: string;
  imageUrl: string;
  demoLink?: string;
  githubLink?: string;
}

const Project = ({
  title,
  year,
  description,
  imageUrl,
  demoLink,
  githubLink,
}: ProjectProps) => {
  return (
    <div className="my-10 grid w-full md:grid-cols-2">
      <div className="bg-neutral-200 px-4 py-6 md:rounded-3xl md:py-26">
        <img
          src={imageUrl}
          className="bg-primary-500 m-auto aspect-video h-80 rounded-2xl object-cover md:aspect-video"
        />
      </div>
      <div className="flex flex-col justify-center bg-neutral-200 px-12 pt-6 md:mt-0 md:bg-neutral-100">
        <h2 className="font-mono text-3xl tracking-wide">{title}</h2>
        {year && (
          <h3 className="mt-4 text-xl">
            Year: <b>{year}</b>
          </h3>
        )}
        <p className="mt-8 text-xl">{description}</p>
        <div className="mt-12 mb-4 flex gap-4">
          {demoLink && (
            <a
              href={demoLink}
              className="text-primary-500 group transition-transform duration-200"
            >
              <h1 className="px-1 text-lg font-semibold text-nowrap transition-transform duration-200 group-hover:-translate-y-0.5">
                LIVE DEMO
              </h1>
              <hr className="w-full transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="text-primary-500 group transition-transform duration-200"
            >
              <div className="flex">
                <h1 className="px-1 text-lg font-semibold text-nowrap transition-transform duration-200 group-hover:-translate-y-0.5">
                  Github Repo
                </h1>
                <img
                  src="./icons/github.svg"
                  alt=""
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <hr className="w-full transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
