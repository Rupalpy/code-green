import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Make sure to import FaSearch

export default function Header() {
  return (
    <header className='bg-green-400 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap text-white'>
            <span>Green</span>
            <span className='text-black'>Mate</span>
          </h1>
        </Link>
        <form className='bg-white p-3 rounded-lg flex items-center'>
          <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-black'/>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-white hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-white hover:underline'>About</li>
          </Link>
          <Link to='/signin'>
            <li className='text-white hover:underline'>Sign in</li>
          </Link>
          <Link to='/calculatenow'>
            <li className='text-white hover:underline'>Calculate Now</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

