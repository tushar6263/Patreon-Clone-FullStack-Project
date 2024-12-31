import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center h-[40vh] justify-center gap-4">
        <div className="font-bold text-5xl flex gap-2 items-center justify-center">
          Buy Me a Chai
          <span>
            <Image width={70} height={70} src="/tea.gif" alt="Chai" />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div>
          <button
            type="button"
            className="text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="bg-white h-0.5 opacity-10"></div>
      <div className="text-white container mx-auto">
        <h1 className="text-3xl font-bold text-center my-14">
          Your fans can buy you a Chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              height={88}
              src="/man.gif"
              alt="Man Icon"
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">
              Your fans are available to help you.
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              height={88}
              src="/coin.gif"
              alt="Coin Icon"
            />
            <p className="font-bold">Monetize Your Work</p>
            <p className="text-center">
              Your fans are available to help you.
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              height={88}
              src="/group.gif"
              alt="Group Icon"
            />
            <p className="font-bold">Fans Want to Help</p>
            <p className="text-center">
              Your fans are available to help you.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white mt-10 h-0.5 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center my-14">
          Learn more about us
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mu3JEfx3PHM?si=XtS9egtXSYCjK92L"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
