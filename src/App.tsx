import React from 'react';
import { ToastContainer } from "react-toastify";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/search_bar/search_bar-container';
import MovieList from './components/movie_list/movie_list-container';
import Header from './components/header/header-component';
import MovieDetailModal from './components/movie_detail_modal/movie_detail_modal-container';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <MovieDetailModal />
      <ToastContainer autoClose={2000} />
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;
