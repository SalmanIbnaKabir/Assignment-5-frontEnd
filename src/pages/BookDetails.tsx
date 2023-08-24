import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDeleteBookMutation, useSingleBookQuery } from '../redux/features/book/bookApi'
import toast, { Toaster } from 'react-hot-toast'

export default function BookDetails() {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading } = useSingleBookQuery(id)
  const [deleteBook, { isError, isSuccess }] = useDeleteBookMutation()
  console.log(isLoading, isError, isSuccess)
  const navigate = useNavigate()

  const handleDelete = (id: number) => {
    if (confirm(`Do you want to delete The Book`)) {
      deleteBook(id).unwrap()
        .then((payload) => {
          toast.success(payload.message);
          navigate('/')

        })
        .catch((error) => {
          toast.error(error.data.message)

          console.log(error)
        })
    }
  }

  return (

    <div>
      <div className="card lg:card-side bg-base-100 border border-indigo-100">
        <div className="card-body">
          <h2 className="card-title">Title:  {data?.data?.title}</h2>
          <div>
            <p>Author: {data?.data?.author} </p>
            <p>Genre: {data?.data?.genre}</p>
            <p>Publication Date:{data?.data?.publicationDate} </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/book-update/${data?.data?._id}`}>  <button className="btn btn-primary">Update</button> </Link>

            <button className="btn btn-primary" onClick={() => { handleDelete(data?.data?._id) }}>Delete</button>
          </div>
        </div>
      </div>
      <Toaster />

    </div>
  )
}
