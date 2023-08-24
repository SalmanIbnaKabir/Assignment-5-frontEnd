import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import { useAppSelector } from '../redux/hook';
import { useCreateBookMutation } from '../redux/features/book/bookApi';


interface IAddBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  owner: string;
}


export default function AddNewBook() {

  const { user } = useAppSelector(state => state.user)
  // console.log(user.email)

  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [createBook, { isLoading }] = useCreateBookMutation()


  const handleAddNewBook = (data) => {
    createBook(data).unwrap()
      .then((payload) => {
        toast.success(payload.message);
        reset()
      })
      .catch((error) => {
        toast.error(error.data.message)
        reset()

      })
  }

  return (
    <div className="max-w-4xl m-auto my-8">
      <h1 className="text-center font-bold text-indigo-400">Add  You New Book</h1>
      <form onSubmit={handleSubmit(handleAddNewBook)} >
        <div className="form-control w-full  mb-3">
          <label className="label"><span className="label-text">Title</span></label>
          <input type="text" className="input input-bordered input-info w-full" {...register('title', { required: "Title  is required" })} />

          {errors.title && <p className='text-red-600 text-sm pt-2'>{errors.title.message}</p>}


        </div>

        <div className="form-control w-full  mb-3">
          <label className="label"><span className="label-text">Author</span></label>
          <input type="text" className="input input-bordered input-info w-full" {...register('author', { required: "Author  is required" })} />
          {errors.author && <p className='text-red-600 text-sm pt-2'>{errors.author.message}</p>}


        </div>

        <div className="form-control w-full  mb-3">
          <label className="label"><span className="label-text">Genre</span></label>
          <input type="text" className="input input-bordered input-info w-full" {...register('genre', { required: "genre is required" })} />

          {errors.genre && <p className='text-red-600 text-sm pt-2'>{errors.genre.message}</p>}

        </div>

        <div className="form-control w-full  mb-7">
          <label className="label"><span className="label-text">Publication Date <span className='text-indigo-300'> September 21, 1937</span></span></label>
          <input type="text" placeholder='September 21, 1937' className="input input-bordered input-info w-full" {...register('publicationDate', { required: "publication Date is required" })} />
          {errors.publicationDate && <p className='text-red-600 text-sm pt-2'>{errors.publicationDate.message}</p>}
        </div>


        <div className="form-control w-full  mb-8">
          <label className="label"><span className="label-text">Book Owner Email</span></label>
          <input type="text" readOnly defaultValue={user?.email ?? ''} className="input input-bordered input-info w-full" {...register('owner', { required: "owner email is required" })} />

        </div>



        <input type="submit" disabled={isLoading} className='btn  btn-info w-full' value='Add A New Book' />

      </form>

      <Toaster />
    </div>
  )
}
