import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center h-[40vh] justify-center gap-4 px-5 md:px-0 text-xs md:text-base ">
        <div className="font-bold  flex gap-6 md:gap-20 md:text-5xl items-center justify-center text-3xl">
          CreatorHub
        </div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators to fund their projects.

        </p>
        <p className="text-center md:text-left">

          A place where your fans can buy you a Purchase. Unleash the power of your fans and get your projects funded.
        </p>
        <div>
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Start Here
            </button>
          </Link>

          <Link href={"/about"}>
            <button
              type="button"
              className="text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-0.5 opacity-10"></div>
    
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
  <h2 className="text-3xl font-bold text-center mb-14">Your Fans can support you</h2>
  <div className="flex gap-5 justify-around">
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
      <p className="font-bold text-center">Fans want to help</p>
      <p className="text-center">Your fans are available to support you</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
      <p className="font-bold text-center">Fans want to contribute</p>
      <p className="text-center">Your fans are willing to contribute financially</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
      <p className="font-bold text-center">Fans want to collaborate</p>
      <p className="text-center">Your fans are ready to collaborate with you</p>
    </div>
  </div>
</div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center my-14">
          Learn more about us
        </h2>
        {/* Responsive youtube embed */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">

        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/mu3JEfx3PHM?si=XtS9egtXSYCjK92L"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          ></iframe>
          </div>
      </div>
    </>
  );
}
