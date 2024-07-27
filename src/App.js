import { FiBox } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
// import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlineSort } from "react-icons/md";
import { FcFolder } from "react-icons/fc";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function App() {
  return (
    <div className="main bg-gray-200 w-full h-screen flex">
      <div className="sideBar w-64 h-full bg-white text-3xl text-center flex flex-col justify-between shadow-2xl">
        <div>
          <FiBox className="mx-auto mt-12 inline-block" color="blue" size="70" />
          <h3 className="font-bold">Storage Box</h3>
          <nav className="w-28 text-start mx-auto mt-20 text-xl font-semibold text-gray-500">
            <ul className="flex flex-col gap-4">
              <li>Files</li>
              <li>Photos</li>
              <li>Video</li>
              <li>Music</li>
              <li>Trash</li>
            </ul>
          </nav>
        </div>
        <div className="h-36">
          <div>
            <h3 className="text-[17px] font-bold text-gray-500">
              3.6gb used out of 15gb
            </h3>
            <div className="w-[180px] bg-gray-400 h-1 mx-auto mt-1">
              <div className="h-1 bg-blue-600 w-[70%]"></div>
            </div>
          </div>

          <div className="text-black mt-6">
            <div className="flex text-[16px] font-semibold h-8 gap-2 items-center justify-center">
              <h5>Light</h5>
              <input type="checkbox" className="peer sr-only opacity-0" id="toggle" />
              <label for="toggle" className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500" for="toggle" >
                <span className="sr-only">Enable</span>
              </label>
              <h5>Dark</h5>
            </div>
          </div>
          </div>
      </div>
      <div className="h-screen w-full bg-[#f4f7f9] flex flex-col">
        <div className="bg-white h-16 w-full border-l border-red-[#f4f7f9] flex justify-between items-center px-8">
          <div className="flex w-16 justify-between">
            <FaPlus color="lightgray" size={22}/>
            <FaRegFolder color="lightgray" size={23}/>
          </div>
          <div className="flex justify-between items-center w-[250px] h-10 px-1">
            <FaSearch color="lightgray" size={23}/>
            <input className="w-[210px] h-8 pl-2" type="text" placeholder="Search youir files..."/>
            </div>
          <div className="flex items-center gap-3">
            <MdOutlineNotificationsNone color="lightgray" size={30}/>
            <div className="h-10 w-10 rounded-full bg-blue-300"></div>
          </div>
        </div>
        <div className="w-[1500px] pt-12 mx-auto">
          <div className="flex justify-between">
            <h1 className="text-[gray] text-3xl font-semibold">Files</h1>
            <div className=" w-[70px] h-10 flex items-center justify-between">
              <MdOutlineAddBox color="gray" size={30}/>
              <MdOutlineSort color="gray" size={30}/>
            </div>
          </div>
          <div className="bg-white w-[1500px] h-auto max-h-[750px] mt-4 rounded font-semibold shadow-2xl whitespace-nowrap overflow-auto scrollbar-hide">
            <ul className="w-full px-6 flex justify-between items-center h-16 border-b border-[rgba(227, 225, 226, 0.8)]">
              <li className="flex items-center gap-3 w-[700px]">
                <FcFolder size={30}/> Projects
              </li>
              <li className="flex items-center w-[350px]">April 22,2001</li>
              <li className="flex items-center w-[150px]">Private</li>
              <li className="flex items-center w-[50px] justify-end">
                <HiOutlineDotsHorizontal size={25}/>
              </li>
            </ul>
            <ul className="w-full px-6 flex justify-between items-center h-16 border-b border-[rgba(227, 225, 226, 0.8)] bg-[#f4f7f9]">
              <li className="flex items-center gap-3 w-[700px]">
                <FcFolder size={30}/> Dev Team
              </li>
              <li className="flex items-center w-[350px]">April 22,2001</li>
              <li className="flex items-center w-[150px]">Private</li>
              <li className="flex items-center w-[50px] justify-end">
                <HiOutlineDotsHorizontal size={25}/>
              </li>
            </ul>
          


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
