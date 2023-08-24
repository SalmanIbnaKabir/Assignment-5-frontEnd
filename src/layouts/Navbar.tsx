import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hook"
import { setUser } from "../redux/features/user/userSlice";

export default function Navbar() {
  const { user } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch()
  // console.log(user)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('userData');
    dispatch(setUser(null))
    navigate('/login')
  }
  return (
    <div className="navbar container m-auto bg-base-100 border-b-2 border-indigo-200">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl text-blue-500">Book Store</Link>
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
              <Link to="/add-new-book" className="justify-between">
                Add a Book
                <span className="badge">New</span>
              </Link>
            </li>

            <li>
              <Link to='/all-books'>All Book </Link>
            </li>
            {
              !user?.email && <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
              </>
            }
            {
              user?.email && <li onClick={handleLogout}><a>Logout</a></li>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
