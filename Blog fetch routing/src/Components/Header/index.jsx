import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="flex justify-between bg-slate-200 shadow-lg mb-3" >
    <div className="px-4">
    <Link className='px-4'to="/">
    <img alt="wave"  className="w-7"  src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" />
      <h1 className='title text-cyan-800 font-bold  hover:bg-slate-50 py-4'>Back</h1>   
        </Link>

    </div>
    <ul className="flex items-center">
      <li >
        <Link className='px-4 text-cyan-800 font-bold hover:bg-slate-50'  to="/"> Home</Link>
      </li>

      <li >
        <Link className='px-4  text-cyan-800 font-bold  hover:bg-slate-50' to="/userinfo"> User Info
        </Link>
      </li>

      <li >
        <Link className='px-4  text-cyan-800 font-bold  hover:bg-slate-50' to="/about"> About
        </Link>
      </li>
      <li >
        <Link className='px-4  text-cyan-800 font-bold  hover:bg-slate-50' to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header