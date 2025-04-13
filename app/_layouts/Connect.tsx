import { useState } from "react";
import Icon from "../_components/Icon";

const Connect = () => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="grid h-[80vh] w-full place-items-center bg-neutral-100">
      <div
        id="contact"
        className="grid size-full max-w-7xl grid-cols-1 place-items-center px-8 py-12 md:grid-cols-2"
      >
        <h1 className="font-mono text-5xl md:text-7xl">Vamos Conversar</h1>
        <div className="flex w-fit flex-col items-center gap-8 rounded-md bg-neutral-200 p-8">
          <h2 className="mt-12 font-mono text-3xl">Entre em contato comigo!</h2>
          <div className="flex items-center gap-2 rounded-md bg-neutral-300 shadow-2xl">
            <h1 className="mx-4 my-2 font-mono text-xl tracking-wider text-neutral-900">
              felipcmeira2004@gmail.com
            </h1>
            <button
              className="aspect-square cursor-pointer bg-neutral-400 p-2"
              onClick={async () => {
                await navigator.clipboard.writeText(
                  "felipecmeira2004@gmail.com",
                );
                setIsCopied(true);
                setTimeout(() => {
                  setIsCopied(false);
                }, 2000);
              }}
            >
              {isCopied ? <>✅</> : <>📝</>}
            </button>
          </div>

          <div className="mt-8 flex gap-8">
            <Icon type="github" />
            <Icon type="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
