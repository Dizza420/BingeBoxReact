import Carsoule from "../ele,emts/Carsoule";
import { Card } from "../ele,emts/Carsoule";
import { useState, useEffect } from 'react';

const PopularTv = 'https://api.themoviedb.org/3/tv/popular?language=en-USlanguage=en-US&page=';
const TopMovies = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=";
const TopTv = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=";
const PopularMovie = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=';
var randomPage = String(Math.floor(Math.random() * 10));

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzU2MTFiNGRhMzlkNTdjOGU5YzdhNTExZDliMjhjMSIsIm5iZiI6MTY5Nzg3MzQzMS4xNTEsInN1YiI6IjY1MzM3ZTE3OTFmMGVhMDEzODg3YmNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kBSlFjwJr9yo8NIuQK7uebRIpkx9_B4pTRGe2yCHpCs";
const img = "https://image.tmdb.org/t/p/w200/";


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};




export function TopMovieRes() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(TopMovies + String(Math.floor(Math.random() * 10) + 1), options)
      .then(res => res.json())
      .then(res => res.results)
      .then(res => {
        setCards(res);
      })
      .catch(err => console.error(err));
  }, []);
  return (<>
    <Carsoule children={cards.map((card) => (
      <Card imgSrc={img + card.poster_path} name={card.title} />
    ))} title="Top Movies"/>
    </>
  );
};


export function TopTvRes() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(TopTv + String(Math.floor(Math.random() * 10) + 1), options)
      .then(res => res.json())
      .then(res => res.results)
      .then(res => {
        setCards(res)
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <Carsoule children={cards.map((card) => (
      <Card imgSrc={img + card.poster_path} name={card.name} />
    ))}  title="Top TV Shows"/>
  );
};


export function PopularTvRes() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(PopularTv + String(Math.floor(Math.random() * 10) + 1), options)
      .then(res => res.json())
      .then(res => res.results)
      .then(res => {
        setCards(res)
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <Carsoule children={cards.map((card) => (
      <Card imgSrc={img + card.poster_path} name={card.name} />
    ))}  title="Popular Movies" crName={"PopMovies"}/>
  );
};

export function PopularMovieRes() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(PopularMovie + String(Math.floor(Math.random() * 10) + 1), options)
      .then(res => res.json())
      .then(res => res.results)
      .then(res => {
        setCards(res)
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <Carsoule children={cards.map((card) => (
      <Card imgSrc={img + card.poster_path} name={card.title} />
    ))}title="Popular TV Shows" />
  );
};
