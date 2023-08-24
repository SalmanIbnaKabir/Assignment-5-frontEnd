
import BookCard from '../components/BookCard';
import { useGetBooksQuery } from '../redux/features/book/bookApi';

export default function AllBookPage() {
  const { data, isLoading, error } = useGetBooksQuery(undefined, { refetchOnMountOrArgChange: true });
  return (
    <div className=" grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 pb-20 ">
      {data?.data.map((book: IBook) => (
        <BookCard bookData={book} key={book._id} />
      ))}
    </div>
  )
}
