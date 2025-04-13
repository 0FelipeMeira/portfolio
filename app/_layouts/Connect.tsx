import { useState } from "react";
import Icon from "../_components/Icon";

const Connect = () => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div id="contact" className="bg-neutral-100 w-full h-[80vh] grid grid-cols-2 place-items-center py-12 px-52">
      <h1 className="text-7xl font-mono">Let's Connect</h1>
      <div className="bg-neutral-200 rounded-md p-8 flex flex-col items-center gap-8 w-fit">
        <h2 className="text-5xl font-mono mt-12">Contact me at:</h2>
        <div className="bg-neutral-300 rounded-md flex items-center gap-2 shadow-2xl">
          <h1 className="text-xl text-neutral-900 my-2 mx-4 font-mono tracking-wider">
            felipcmeira2004@gmail.com
          </h1>
          <button
            className="aspect-square p-2 cursor-pointer bg-neutral-400"
            onClick={async () => {
              await navigator.clipboard.writeText("felipecmeira2004@gmail.com");
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
  );
};

export default Connect;
