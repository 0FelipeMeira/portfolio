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
    <div className="w-full grid grid-cols-2 my-10">
      <div className="bg-neutral-200 px-4 py-26">
        <img
          src={imageUrl}
          className="bg-primary-500 aspect-video h-80 m-auto rounded-2xl"
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h2 className="font-mono tracking-wide text-3xl">{title}</h2>
        {year && (
          <h3 className="text-xl mt-4">
            Year: <b>{year}</b>
          </h3>
        )}
        <p className="text-xl mt-8">{description}</p>
        <div className="flex mt-12 gap-4">
          {demoLink && (
            <a
              href={demoLink}
              className="text-primary-500 group transition-transform duration-200"
            >
              <h1 className="text-lg px-1 font-semibold transition-transform duration-200 group-hover:-translate-y-0.5">
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
                <h1 className="text-lg px-1 font-semibold transition-transform duration-200 group-hover:-translate-y-0.5">
                  Github Repo
                </h1>
                <img
                  src="./icons/github.svg"
                  alt=""
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
