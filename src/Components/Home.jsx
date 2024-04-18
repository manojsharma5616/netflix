import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.scss";
// const url="https://api.themoviedb.org/3/movie/popular?api_key=6995cc3d5ab5e36750268075ac1f9d96&language=en-US&page=1";
const url = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p/w500";
const apiKey = "6995cc3d5ab5e36750268075ac1f9d96";

const popular = "popular";
const topRated = "top_rated";
const upComing = "upcoming";
const nowPlaying = "now_playing";
const list = "list";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setupComingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [listGenre, setListGenre] = useState([]);
  useEffect(() => {
    const fetchPopularMovie = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/${popular}?api_key=${apiKey}&language=en-US&page=1`
      );
      //  console.log(data);
      //  console.log(results);
      setPopularMovies(results);
    };
    const fetchTopRatedMovie = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/${topRated}?api_key=${apiKey}&language=en-US&page=2`
      );
      setTopRatedMovies(results);
    };
    const fetchUpComingMovie = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/${upComing}?api_key=${apiKey}&language=en-US&page=3`
      );
      setupComingMovies(results);
    };
    const fetchNowPlayingMovie = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/movie/${nowPlaying}?api_key=${apiKey}&language=en-US&page=4`
      );
      setNowPlayingMovies(results);
    };
    const fetchGenre = async () => {
      // https://api.themoviedb.org/3/genre/movie/list?api_key=6995cc3d5ab5e36750268075ac1f9d96&language=en-US&page=1
      const {
        data: { genres },
      } = await axios.get(`${url}/genre/movie/${list}?api_key=${apiKey}`);
      // console.log(genres);
      setListGenre(genres);
      // console.log(listGenre);
    };

    fetchPopularMovie();
    fetchTopRatedMovie();
    fetchUpComingMovie();
    fetchNowPlayingMovie();
    fetchGenre();
  }, []);
  // console.log(popularMovies);
  const Card = ({ img }) => {
    // console.log(img);
    return <img src={img} className="card" alt="cover"></img>;
  };
  const Row = ({
    title,
    // arr = [
    //   {
    //     img: "https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg",
    //   },
    //   {
    //     img: "https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg",
    //   },
    //   {
    //     img: "https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg",
    //   },
    //   {
    //     img: "https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg",
    //   },
    // ],
    arr = [],
  }) => {
    return (
      <div className="row">
        <h2>{title}</h2>
        <div>
          {/* <Card img={'https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg'}></Card> */}
          {/* {arr.map((item, index) => (
            <Card key={index} img={item.img} />
          ))} */}
          {arr.map((item, index) => (
            <Card key={index} img={`${imageUrl}/${item.poster_path}`} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <div>
      <Banner></Banner>
      <Row title={"Upcoming"} arr={upcomingMovies}></Row>
      <Row title={"Now Palying"} arr={nowPlayingMovies}></Row>
      <Row title={"Popular"} arr={popularMovies}></Row>
      <Row title={"Top rated"} arr={topRatedMovies}></Row>
      <div className="genreBox">
        {listGenre.map((item, index) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
