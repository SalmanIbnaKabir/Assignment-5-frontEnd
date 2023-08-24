import { useState } from 'react';
import BookCard from '../components/BookCard';
import { useGetBooksQuery } from '../redux/features/book/bookApi';
import { IBook } from '../types/type';

export default function AllBookPage() {
  const { data, isLoading, error } = useGetBooksQuery(undefined, { refetchOnMountOrArgChange: true });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const bookData = data?.data;

  // Filter books based on search query
  const filteredBooks = bookData.filter((book: IBook) =>
    (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedGenre === '' || book.genre.toLowerCase() === selectedGenre.toLowerCase()) &&
    (selectedYear === '' || new Date(book.publicationDate).getFullYear().toString() === selectedYear)
  );

  const genres = [...new Set(bookData.map((book: IBook) => book.genre))];
  const years = [...new Set(bookData.map((book: IBook) => new Date(book.publicationDate).getFullYear().toString()))];


  return (
    <div>
      <div className='flex justify-evenly items-center mb-5'>

        <input
          type="text"
          placeholder="Search by title, author, or genre"
          className="input input-bordered input-primary w-full max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />


        <div>
          <select
            className="select select-primary me-3 "
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option value={genre} key={genre}>{genre}</option>
            ))}
          </select>
          <select
            className="select select-primary  "
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">All Years</option>
            {years.map((year) => (
              <option value={year} key={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-red-500 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 pb-20 ">
        {filteredBooks.map((book: IBook) => (
          <BookCard bookData={book} key={book._id} />
        ))}
      </div>
    </div>
  );
}
