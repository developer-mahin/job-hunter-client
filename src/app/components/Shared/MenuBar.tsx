import Link from "next/link";
import { BiDownArrow } from "react-icons/bi";

const MenuBar = () => {
  return (
    <div className="container flex flex-wrap p-0 my-2">
      <div className="flex items-center gap-2 w-full md:w-7/12">
        <Link className="text-black font-semibold no-underline mx-2" href="/">
          All Posts
        </Link>
        <div className="hidden md:flex">
          <Link className="text-gray-500 no-underline mx-2" href="/article">
            Article
          </Link>
          <Link className="text-gray-500 no-underline mx-2" href="/education">
            Education
          </Link>
          <Link className="text-gray-500 no-underline mx-2" href="/job">
            Job
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 w-full md:w-5/12">
        <div className="hidden md:block">
          <button className="border flex items-center gap-1 bg-gray-200 py-2 px-3">
            <span className="font-medium">Write a post </span>
            <BiDownArrow />
          </button>
        </div>

        {/* <div className="hidden md:block">
          {user?.uid ? (
            <button
              onClick={handleLogOut}
              className="border flex items-center gap-2 bg-blue-500 text-white py-2 px-3"
            >
              <TbLogout className="text-xl" />
              <span className="font-semibold">Leave Group</span>
            </button>
          ) : (
            <button
              onClick={openModal}
              className="border flex items-center gap-2 bg-blue-500 text-white py-2 px-3"
            >
              <MdGroupAdd className="text-xl" />
              <span className="font-semibold">Join Group</span>
            </button>
          )}
        </div> */}

        <div className="block md:hidden">
          <div className="dropdown">
            <button
              className="border flex items-center gap-1 bg-gray-200 py-2 px-3 dropdown-toggle font-semibold"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>Filter: All</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="/article">
                  Article
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/education">
                  Education
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="/job">
                  Job
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
