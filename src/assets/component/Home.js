import Profil from "../images/ranggarsynobg.png";

export default function Home() {
  return (
    <div className="container lg:flex flex-wrap mt-20 lg:mt-40">
      <div className="relative w-full lg:w-1/2">
        <img
          src={Profil}
          alt="rem"
          className="mx-auto w-[450px] lg:w-[650px] "
        />
        <span className="absolute -bottom-[80px] lg:-bottom-[90px] left-[200px] lg:left-[370px] -z-10 -translate-x-1/2">
          <svg
            width="500"
            height="500"
            className="lg:flex hidden"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#C147E9"
              d="M26.9,-35.4C38.4,-28.6,53.8,-25.5,56,-18.3C58.2,-11.1,47.2,0.4,44.7,16.5C42.1,32.6,48.1,53.4,42,58C36,62.5,18,50.7,2.5,47.3C-13,43.9,-26,48.8,-37,45.9C-48,42.9,-57,32.2,-62.9,19.2C-68.8,6.3,-71.5,-8.9,-64.9,-18.5C-58.3,-28.1,-42.2,-32.1,-29.9,-38.6C-17.5,-45.1,-8.7,-54.2,-0.5,-53.5C7.7,-52.7,15.3,-42.2,26.9,-35.4Z"
              transform="translate(100 100) scale(1.1)"
            />
          </svg>
          <svg
            width="330"
            height="330"
            className="flex lg:hidden"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#C147E9"
              d="M26.9,-35.4C38.4,-28.6,53.8,-25.5,56,-18.3C58.2,-11.1,47.2,0.4,44.7,16.5C42.1,32.6,48.1,53.4,42,58C36,62.5,18,50.7,2.5,47.3C-13,43.9,-26,48.8,-37,45.9C-48,42.9,-57,32.2,-62.9,19.2C-68.8,6.3,-71.5,-8.9,-64.9,-18.5C-58.3,-28.1,-42.2,-32.1,-29.9,-38.6C-17.5,-45.1,-8.7,-54.2,-0.5,-53.5C7.7,-52.7,15.3,-42.2,26.9,-35.4Z"
              transform="translate(100 100) scale(1.1)"
            />
          </svg>
        </span>
      </div>

      <div className="relative w-full lg:w-1/2">
        <div className="lg:absolute left-[340px] w-72 border-[3px] border-slate-900 mt-16 lg:mt-0">
          <div className="border-2 border-slate-100 ">
            <h1 className="px-5 py-2 text-center  text-xl font-bold bg-gradient-to-r from-primary to-indigo-800 text-white">
              Welcome to my profile
            </h1>
          </div>
        </div>
        <h1 className="mt-4 lg:mt-24 lg:text-right text-4xl font-bold">
          Hi, I'm Agung Saputra
        </h1>
        <h1 className="mt-4 lg:absolute text-lg left-[150px] lg:w-[480px] lg:text-right mb-10 lg:mb-0">
          I am a semester 1 student from Indonesia. I am interested in
          programming, especially fullstack developer. My daily life is studying
          and playing games.
        </h1>
        <a
          href="https://wa.me/+62895337305533"
          target="_blank"
          rel="noreferrer"
          className="lg:absolute text-lg mt-36 left-[495px] lg:text-right hover:text-hoverColor1 cursor-pointer"
        >
          Let's Connect ➜
        </a>
      </div>
    </div>
  );
}
