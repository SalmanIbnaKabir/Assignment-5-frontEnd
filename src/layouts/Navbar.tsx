import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar container m-auto bg-base-100 border-b-2 border-indigo-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-blue-500">Book Store</a>
      </div>
      <div className="flex-none gap-2">
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://e1.pxfuel.com/desktop-wallpaper/984/299/desktop-wallpaper-stylish-instagram-dp-for-boys-attitude-sad-smart-instagram-dp-boys.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
