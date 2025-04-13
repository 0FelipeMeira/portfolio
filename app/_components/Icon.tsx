type Type = "linkedin" | "github";

const Icon = ({ type }: { type: Type }) => {
  const iconSrc = {
    linkedin: "./icons/linkedin.svg",
    github: "./icons/github.svg",
  };

  return (
    <a
      href="/home"
      className="hover:border-primary-500 grid aspect-square size-12 place-items-center rounded-full border-2 border-neutral-300 bg-neutral-300 transition-colors duration-200 ease-in-out active:bg-neutral-400"
    >
      <img src={iconSrc[type]} alt="" className="size-6 object-contain" />
    </a>
  );
};

export default Icon;
