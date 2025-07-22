import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import BookCard from '../components/BookCard';

const BrowseBooks = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const allBooks = useSelector(state => state.books.books);
  const [search, setSearch] = useState('');

  const filteredBooks = allBooks.filter(book => {
    const matchesCategory = category === 'all' || book.category === category;
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                          book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h2>Books in {category}</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
    </div>
  );
};

export default BrowseBooks;