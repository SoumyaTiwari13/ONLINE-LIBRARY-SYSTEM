import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: '1',
      title: 'Dune',
      author: 'Frank Herbert',
      description: 'Epic science fiction novel.',
      rating: 4.5,
      category: 'Sci-Fi'
    },
    {
      id: '2',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      description: 'History of humankind.',
      rating: 4.7,
      category: 'Non-Fiction'
    }
  ]
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;