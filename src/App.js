import React, { useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { bookActions } from './slices/BookSlice';

import './App.css';

// Components
import Header from './components/Layout/Header'
import LinkButton from './components/UI/LinkButton';
import ReviewsList from './components/reviews/ReviewsList';
import ReviewForm from './components/reviews/ReviewForm';

// Screens
import Home from './screens/Home/Home';
import Books from './screens/Books/Books';
import BookDetail from './screens/BookDetail/BookDetail';
import PageNotFound from './screens/NotFound/PageNotFound';
import Reviews from './screens/Reviews/Reviews';

const BOOKS_LIST = [
  {id: 'b1', title: 'Encyclopedia Britannica', author: 'Encyclopedia Britannica Inc.', releaseYear: 2010, pubDate: new Date('2020-5-22').toDateString(),
    summary: 'Ut sadipscing et voluptua sadipscing et voluptua elitr erat, aliquyam nonumy justo amet gubergren elitr eos clita ipsum erat, kasd.'},
  {id: 'b2', title: 'Hunger Games', author: 'Suzanne Collins', releaseYear: 2008, pubDate: new Date('2020-5-26').toDateString(),
    summary: 'Duo diam lorem gubergren takimata consetetur. Eirmod et vero gubergren takimata ea ipsum consetetur rebum et, aliquyam aliquyam sit amet.'},
  {id: 'b3', title: 'I, Robot', author: 'Isaac Asimov', releaseYear: 1950, pubDate: new Date('2021-12-12').toDateString(),
    summary: 'Sed gubergren magna amet et aliquyam dolores, dolor diam justo ipsum sit, dolores sed no sanctus eos voluptua nonumy magna.'},
  {id: 'b4', title: 'Dune', author: 'Frank Herbert', releaseYear: 2010, pubDate: new Date('2021-8-7').toDateString(),
  summary: 'Et diam et invidunt dolor accusam dolore aliquyam dolore, takimata vero labore takimata stet dolor diam justo dolor, ea amet.'},
  {id: 'b5', title: 'Caraval', author: 'Stephanie Garber', releaseYear: 2016, pubDate: new Date('2022-1-18').toDateString(),
  summary: 'Et diam et invidunt dolor accusam dolore aliquyam dolore, takimata vero labore takimata stet dolor diam justo dolor, ea amet.'},
]


function App() {

  const dispatch = useDispatch();


  useEffect(()=>{
    console.log('Books loaded')
    dispatch(bookActions.replaceBookList(BOOKS_LIST));
  }, [dispatch]);


  return (
    <>
      <Header/>
      <main>

        <Routes>
          <Route path="/" element={<Navigate replace to={"/Home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/books" element={<Books />}  />
          <Route path="/book-detail/:id/*" element={<BookDetail />} >
            <Route path="comments" element={<ReviewsList/>} />
            <Route path="" element={<LinkButton center={true} to="../comments">Show Reviews</LinkButton>} />
            <Route path="comments/form" element={<ReviewForm/>} />
          </Route>
          <Route path="/reviews" element={<Reviews/>} />
          
          <Route path="*" element={<PageNotFound/>} />
        </Routes>

      </main>
    </>
  );
}

export default App;
