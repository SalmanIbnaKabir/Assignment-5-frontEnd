import { ChangeEvent, FormEvent, useState } from 'react'
import { useGetCommentQuery, usePostCommentMutation } from '../redux/features/book/bookApi';
import toast, { Toaster } from 'react-hot-toast';
import { useAppSelector } from '../redux/hook';
import { useNavigate } from 'react-router-dom';

export default function BookReview({ id }) {
  const [inputValue, setInputValue] = useState<string>('');
  // const id = useParams()
  const { user } = useAppSelector(state => state.user)
  const navigate = useNavigate()


  const { data, } = useGetCommentQuery(id, { refetchOnMountOrArgChange: true })

  const [postComment, { isLoading, }] = usePostCommentMutation()

  // console.log(isLoading, isError, isSuccess)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const option = {
      id: id,
      data: { comment: inputValue },
    }

    if (user?.email) {
      postComment(option).unwrap()
        .then((payload) => {
          toast.success(payload.message);
        })
        .catch((error) => {
          toast.error(error.data.message)
        })
    }
    else {
      toast.error('Please Login');
      // navigate('/login')
    }

    setInputValue('')
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value)
  }
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <textarea className="textarea textarea-primary w-full" placeholder="Reviews" onChange={handleChange} value={inputValue} />
        <button disabled={isLoading} className="btn btn-primary">
          Reviews
        </button>
      </form>
      <div className="mt-10">
        {data?.data?.reviews?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <div className='avatar'>
              <div className="w-6 rounded-full">
                <img src="https://github.com/shadcn.png" alt='User' />
              </div>

            </div>

            <p>{comment}</p>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
}
