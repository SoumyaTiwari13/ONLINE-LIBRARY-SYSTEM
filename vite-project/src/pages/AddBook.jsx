import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const AddBook = () => {
  const [form, setForm] = useState({
    title: '', author: '', description: '', rating: '', category: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, description, rating, category } = form;
    if (!title || !author || !description || !rating || !category) {
      return setError('Please fill out all fields.');
    }

    dispatch(addBook({ id: uuid(), ...form }));
    navigate(`/books/${category}`);
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Author" onChange={e => setForm({ ...form, author: e.target.value })} />
        <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Rating" type="number" onChange={e => setForm({ ...form, rating: e.target.value })} />
        <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

