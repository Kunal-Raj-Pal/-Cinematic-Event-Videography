import { CameraIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const tooggleMenu = () => setIsOpen(!isOpen)
    
  return (
    <>
     <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-transform duration-300'>
         <div className=" mx-auto sm:px-6 sm:py-4">
        <div className="flex items-center justify-between p-4 sm:p-0">
          <div className="font-serif font-black sm:text-2xl text-gray-800">Anurag Video Mixing Zone</div>

          <div className="hidden md:flex items-center gap-8">
            <Link  to={'/'}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            > Home
            </Link>

            <Link  to={'/Portfolio'}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              Portfolio
            </Link>

            <Link to={'/About'}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
            >
              About
            </Link>

            <Link to={'/Contact'}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6"
            >
              Contact
            </Link>
          </div>

        {/* Responsive Menu Start */}

        <div className='md:hidden'>
            <button onClick={tooggleMenu}>
                {isOpen? <XIcon className='w-6 h-6'/> : <CameraIcon className='w-6 h-6'/>}
            </button>
        </div>

        {isOpen && (
            <div className='absolute top-full left-0 w-full bg-gray-200 transition-all duration-300  flex flex-col items-center gap-5 py-6 md:hidden'>
                <Link  to={'/'}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              onClick={tooggleMenu}
            > Home
            </Link>

            <Link  to={'/Portfolio'}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              onClick={tooggleMenu}
            >
              Portfolio
            </Link>

            <Link to={'/About'}
              className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              onClick={tooggleMenu}
            >
              About
            </Link>

            <Link to={'/Contact'}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6"
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
  )
}

export default Nav