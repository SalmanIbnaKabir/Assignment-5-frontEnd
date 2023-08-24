import { useForm } from "react-hook-form"
import { useSingleBookQuery, useUpdateBookMutation } from "../redux/features/book/bookApi"
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import toast, { Toaster } from "react-hot-toast"


export default function UpdateBook() {
  const { id } = useParams()
  const { data } = useSingleBookQuery(id)

  // console.log(data)
  // const { title, author, genre, publicationDate } = data?.data;

  const [updateBook, { isLoading }] = useUpdateBookMutation()


  const { register, handleSubmit, setValue } = useForm({
    // defaultValues: {
    //   title: data?.data.title,
    //   author: data?.data.author,
    //   genre: data?.data.genre,
    //   publicationDate: data?.data.publicationDate,
    // }
  })


  const handleUpdateBook = (data: unknown) => {
    // console.log(id)
    // console.log(data)
    const option = {
      id: id,
      ...data,
    }
    updateBook(option).unwrap()
      .then((payload) => {
        toast.success(payload.message);
      })
      .catch((error) => {
        toast.error(error.data.message)

      })
  };

  useEffect(() => {
    if (data) {
      setValue('title', data.data.title);
      setValue('author', data.data.author);
      setValue('genre', data.data.genre);
      setValue('publicationDate', data.data.publicationDate);
    }
  }, [data, setValue]);


  return (
    <div className="max-w-4xl m-auto my-8">
      <h1 className="text-center font-bold text-indigo-400">Update You Book</h1>
      <form onSubmit={handleSubmit(handleUpdateBook)} >
        <div className="form-control w-full  mb-3">
          <label className="label"><span className="label-text">Title</span></label>
          <input type="text" className="input input-bordered input-info w-full" {...register('title')} />
        </div>

        <div className="form-control w-full  mb-3">
          <label className="label"><span className="label-text">Author</span></label>
          <input type="text" className="input input-bordered input-info w-full" {...register('author')} />
        </div>

        <div className="form-control w-full  mb-3">
          <label className="label"><span className="label-text">Genre</span></label>
          <input type="text" className="input input-bordered input-info w-full" {...register('genre')} />
        </div>

        <div className="form-control w-full  mb-7">
          <label className="label"><span className="label-text">Publication Date</span></label>
          <input type="text" className="input input-bordered input-info w-full" {...register('publicationDate')} />
        </div>

        <input type="submit" disabled={isLoading} className='btn  btn-info w-full' value='update' />

      </form>

      <Toaster />
    </div>
  )
}
