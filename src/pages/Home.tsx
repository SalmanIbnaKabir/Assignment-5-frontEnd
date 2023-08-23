import BookCard from "../components/BookCard"


export default function Home() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8,]
  return (
    <div className="text-red-500 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 pb-20 ">
      {numbers.map((number) => <BookCard data={number} key={number} />)}
    </div>
  )
}
