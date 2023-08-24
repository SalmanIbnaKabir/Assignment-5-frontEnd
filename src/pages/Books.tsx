import BookCard from '../components/BookCard';
import { useGetBooksQuery } from '../redux/features/book/bookApi';
import { IBook } from '../types/type';

export default function Books() {
  const { data, isLoading, error } = useGetBooksQuery(undefined, { refetchOnMountOrArgChange: true });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const bookData = data?.data;

  const sortedBooks = [...bookData].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  const top10Books = sortedBooks.slice(0, 10);

  return (
    <div className="text-red-500 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 pb-20 ">
      {top10Books.map((book: IBook) => (
        <BookCard bookData={book} key={book._id} />
      ))}
    </div>
  );
}
