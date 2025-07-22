import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

const Home = () => {
  const books = useSelector(state => state.books.books.slice(0, 3)); // top 3

  return (
    <div>
      <h1>Welcome to the Online Library</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}><Link to={`/books/${cat}`}>{cat}</Link></li>
        ))}
      </ul>

      <h2>Popular Books</h2>
      {books.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
