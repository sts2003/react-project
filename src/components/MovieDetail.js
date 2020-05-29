import React from "react";
import Card from "@material-ui/core/Card";
import "../css/movieDetail.css";
import Circular from "./Circulcar";

class MoiveDetail extends React.Component {
  state = {
    movieDetail: null,
    poster: "",
    title: "",
    vote: "",
    overview: "",
    release: "",
    isLoading: false,
  };
  // componentDidMount() {
  //   const data = fetch(
  //     "https://api.themoviedb.org/3/search/movie?api_key=0ff05e1049342b3ec508d217c36672d4&language=en-US&query=%20%EA%B8%B0%EC%83%9D%EC%B6%A9&page=1&include_adult=false"
  //   ).then((response) => response.json());
  //   this.setState({
  //     movieDetail: data.results,
  //   });
  // }

  componentDidMount = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0ff05e1049342b3ec508d217c36672d4&language=en-US&query=${this.props.match.params.title}&page=1&include_adult=false`
    ).then((response) => response.json());

    this.setState({
      poster: data.results[0].poster_path,
      title: data.results[0].original_title,
      vote: data.results[0].vote_average,
      overview: data.results[0].overview,
      release: data.results[0].release_date,
    });

    setTimeout(() => {
      this.setState({
        isLoading: true,
      });
    }, 2000);
  };

  render() {
    const { title, vote, overview, release, poster, isLoading } = this.state;
    const pos = "https://image.tmdb.org/t/p/w500" + poster;

    return (
      <div className="detail__main">
        {isLoading ? (
          <div className="detail__body">
            <div className="detail__image">
              <img src={pos} alt="poster" width="350px" height="300px" />
            </div>
            <div className="detail__menu">
              <Card className="detail__card">
                <div>Name = {title}</div>
                <div>Release = {release}</div>
                <div>Vote = {vote}</div>
                <div>Overview = {overview}</div>
                <button
                  className="btn__Area"
                  onClick={() => this._backBtnHandler()}
                >
                  Go Back
                </button>
              </Card>
            </div>
          </div>
        ) : (
          <Circular />
        )}
      </div>
    );
  }
  _backBtnHandler = () => {};
}

export default MoiveDetail;
