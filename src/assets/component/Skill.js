import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
function Skill() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-3">Skill :</h1>
      <div className="justify-center items-center flex">
        <div className="flex mt-3">
          <div className="mr-2 w-[75px] h-[75px] flex items-center justify-center rounded-sm text-[#61DBFB] text-[63px] bg-slate-800">
            <FaReact />
          </div>
          <div className="w-[75px] h-[75px] flex items-center justify-center rounded-sm text-[#61DBFB] text-[63px] bg-slate-200">
            <SiTailwindcss />
          </div>
        </div>
      </div>
    </>
  );
}
export default Skill;
