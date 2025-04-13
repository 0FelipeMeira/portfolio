type Type = "linkedin" | "github";

const Icon = ({ type }: { type: Type }) => {
  const iconSrc = {
    linkedin: "./icons/linkedin.svg",
    github: "./icons/github.svg",
  };

  return (
    <a
      href="/home"
      className="size-12 rounded-full grid place-items-center border-2 aspect-square
            transition-colors duration-200 ease-in-out
            bg-neutral-300  border-neutral-300
            hover:border-primary-500
            active:bg-neutral-400"
    >
      <img src={iconSrc[type]} alt="" className="size-6 object-contain" />
    </a>
  );
};

export default Icon;
