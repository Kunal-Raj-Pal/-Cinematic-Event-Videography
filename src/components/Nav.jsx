import { CameraIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const tooggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 rounded-xl backdrop-blur-sm transition-transform duration-300 overflowX-hidden">
        <div className=" mx-auto sm:px-6 sm:py-4">
          <div className="flex items-center justify-between p-4 sm:p-0">
            <div className="font-serif font-black sm:text-2xl text-red-500">
              Anurag Video Mixing Zone
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link
                to={"/"}
                className="text-white hover:text-red-600 transition-colors font-medium"
              >
                {" "}
                Home
              </Link>

              <Link
                to={"/Portfolio"}
                className="text-white hover:text-red-600 transition-colors font-medium"
              >
                Portfolio
              </Link>

              <Link
                to={"/About"}
                className="text-white hover:text-red-600 transition-colors font-medium"
              >
                About
              </Link>

              <Link
                to={"/Contact"}
                className="bg-red-600 hover:bg-red-700 text-white px-6 p-1 rounded-lg"
              >
                Contact
              </Link>
            </div>

            {/* Responsive Menu Start */}

            <div className="md:hidden">
              <button onClick={tooggleMenu}>
                {isOpen ? (
                  <XIcon className="w-6 h-6 text-red-800" />
                ) : (
                  <CameraIcon className="w-6 h-6 text-red-800" />
                )}
              </button>
            </div>

            {isOpen && (
              <div className="absolute top-full left-0 w-full bg-black/80 transition-all duration-300  flex flex-col items-center gap-5 py-6 md:hidden border border-red-500  border-2 border-t-0 rounded-xl shadow-xl">
                <Link
                  to={"/"}
                  className="text-white hover:text-red-600 transition-colors font-medium"
                  onClick={tooggleMenu}
                >
                  {" "}
                  Home
                </Link>

                <Link
                  to={"/Portfolio"}
                  className="text-white hover:text-red-600 transition-colors font-medium"
                  onClick={tooggleMenu}
                >
                  Portfolio
                </Link>

                <Link
                  to={"/About"}
                  className="text-white hover:text-red-600 transition-colors font-medium"
                  onClick={tooggleMenu}
                >
                  About
                </Link>

                <Link
                  to={"/Contact"}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 p-1 rounded-lg"
                  onClick={tooggleMenu}
                >
                  Contact
                </Link>
              </div>
            )}

            {/* Responsive Menu End */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
