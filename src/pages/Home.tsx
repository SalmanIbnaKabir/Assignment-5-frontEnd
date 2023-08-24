
import { Link } from "react-router-dom"
import Books from "./Books"


export default function Home() {
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8,

  return (
    <div className="flex flex-col items-center">
      <Books />
      <Link to='/all-books'>
        <button className="btn btn-primary">All Books</button>
      </Link>
    </div>
  )
}
