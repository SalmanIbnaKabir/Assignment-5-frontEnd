import { Link } from 'react-router-dom'

export default function BookCard({ data }: { data: number }) {
  return (
    <div><div className="card w-96 bg-base-100 shadow-xl border border-indigo-100 text-black">

      <div className="card-body">
        <h2 className="card-title">Title: {data}</h2>
        <div>
          <p>Author: </p>
          <p>Genre: </p>
          <p>Publication Date: </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`book-details/${data}`}>

            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div></div>
  )
}
