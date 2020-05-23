import React from "react";
import "../css/movieList.css";
import MovieBox from "./MovieBox";
class MovieList extends React.Component {
  state = {
    movieList: null,
  };

  render() {
    const { movieList } = this.state;
    return (
      <div className="movie__main">
        <div className="movie__header"></div>
        <div className="movie__btnArea">
          <button className="m__btn" onClick={() => this._nowBtnHandler()}>
            최신영화
          </button>
          <button className="m__btn" onClick={() => this._popularBtnHandler()}>
            인기영화
          </button>
        </div>
        <div className="movieArea">
          {movieList ? (
            <>
              {movieList.map((movie, idx) => {
                return (
                  <MovieBox
                    key={idx}
                    title={movie.original_title}
                    vote={movie.vote_average}
                    release={movie.release}
                    overview={movie.overview}
                    poster={movie.poster_path}
                  />
                );
              })}
            </>
          ) : (
            <div>버튼을 눌러주세요</div>
          )}
        </div>
      </div>
    );
  }

  _popularBtnHandler = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0ff05e1049342b3ec508d217c36672d4&language=en-US&page=1"
    ).then((response) => response.json());

    this.setState({
      movieList: data.results,
    });
  };

  _nowBtnHandler = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=0ff05e1049342b3ec508d217c36672d4&language=en-US&page=1"
    ).then((response) => response.json());

    this.setState({
      movieList: data.results,
    });
  };
}

export default MovieList;
