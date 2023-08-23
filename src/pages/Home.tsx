import BookCard from "../components/bookCard"


export default function Home() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8,]
  return (
    <div className="text-red-500 grid grid-cols-3 gap-10 pb-20 ">
      {numbers.map((number) => <BookCard data={number} />)}
    </div>
  )
}
