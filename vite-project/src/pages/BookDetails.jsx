import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state =>
    state.books.books.find(b => b.id === id)
  );

  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p><strong>Rating:</strong> {book.rating}/5</p>
      <button onClick={() => navigate(-1)}>Back to Browse</button>
    </div>
  );
};

export default BookDetails;
