import { useState, useEffect } from 'react';
import NavBar from "./ele,emts/NavBar.js";
import { Button, SearchBar } from "./ele,emts/NavBar.js";
import Categories from "./ele,emts/Categories.js";
import {TopTvRes ,TopMovieRes, PopularTvRes, PopularMovieRes} from "./api/Api.js";
const categories = ["Discover", "Shows", "Movies", "People", "Collections", " Companies"];


export default function App() {
  return (<>
    <NavBar>
      <SearchBar />
    </NavBar>
    <Categories>
      {categories.map(category =>
        <Button btName={category}></Button>

      )}
    </Categories>
    <div className="mainWrapper">
      <TopTvRes />
      <TopMovieRes/>
      <PopularTvRes/>
      <PopularMovieRes/>
      
    </div>

  </>
  );
}