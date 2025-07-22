import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div>
    <h3>{book.title}</h3>
    <p>By {book.author}</p>
    <Link to={`/book/${book.id}`}>View Details</Link>
  </div>
);

export default BookCard;
