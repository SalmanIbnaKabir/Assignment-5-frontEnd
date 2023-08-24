import { Link } from 'react-router-dom'
import { IBook } from '../types/type'

export default function BookCard({ bookData }: IBook) {

  return (
    <div><div className="card w-96 bg-base-100 shadow-xl border border-indigo-100 text-black">

      <div className="card-body">
        <h2 className="card-title">Title: {bookData.title}</h2>
        <div>
          <p>Author: {bookData.author} </p>
          <p>Genre: {bookData.genre}</p>
          <p>Publication Date: {bookData.publicationDate}</p>
        </div>
        <div className="card-actions justify-end mt-5">
          <Link to={`book-details/${bookData._id}`}>

            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div></div>
  )
}
