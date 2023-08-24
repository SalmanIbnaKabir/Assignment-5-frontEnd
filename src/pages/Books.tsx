
import BookCard from '../components/BookCard'
import { useGetBooksQuery } from '../redux/features/book/bookApi'
import { IBook } from '../types/type'

export default function Books() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading, error } = useGetBooksQuery(undefined, { refetchOnMountOrArgChange: true })

  return (
    <div className="text-red-500 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 pb-20 ">
      {data?.data.map((book: IBook) => <BookCard bookData={book} key={book._id} />)}
    </div>
  )
}
