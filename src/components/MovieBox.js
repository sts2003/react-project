import React from "react";
import "../css/movieBox.css";
import { Link } from "react-router-dom";

class MovieBox extends React.Component {
  render() {
    const pos = "https://image.tmdb.org/t/p/w500" + this.props.poster;
    return (
      <Link
        to={`/detail/${this.props.title}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div
          className="movieBox"
          // onClick={() =>
          //   this._boxControllBtn(
          //     this.props.title,
          //     this.props.vote,
          //     this.props.release,
          //     this.props.overview
          //   )
          // }
        >
          <div className="movieBox__poster">
            <img src={pos} alt="poster" width="60px" height="80px" />
          </div>
          <div className="movieBox__desc">
            <div className="movie_title"> {this.props.title} </div>
            <div> {this.props.vote} </div>
            <div> {this.props.release} </div>
            <div>
              {this.props.overview.length > 123
                ? this.props.overview.slice(0, 123) + "..."
                : this.props.overview}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  _boxControllBtn = (param1, param2, param3, param4) => {
    alert(param1 + param2 + param3 + param4);
  };
}

export default MovieBox;
