
import { useParams } from 'react-router-dom'

export default function BookDetails() {
  const { id } = useParams()
  return (

    <div>
      <div className="card lg:card-side bg-base-100 border border-indigo-100">
        <div className="card-body">
          <h2 className="card-title">Title:  {id}</h2>
          <div>
            <p>Author: </p>
            <p>Genre: </p>
            <p>Publication Date: </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>

    </div>
  )
}
