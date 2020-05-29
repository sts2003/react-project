import React from "react";
import { Link } from "react-router-dom";
import "../css/mainBox.css";

class MainList extends React.Component {
  render() {
    const pos = "https://image.tmdb.org/t/p/w500" + this.props.poster;
    return (
      <Link
        to={`/detail/${this.props.title}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div
          className="mainBox"
          // onClick={() =>
          //   this._boxControllBtn(
          //     this.props.title,
          //     this.props.vote,
          //     this.props.release,
          //     this.props.overview
          //   )
          // }
        >
          <div className="mainBox__poster">
            <img src={pos} alt="poster" width="60px" height="80px" />
          </div>
          <div className="mainBox__desc">
            <div className="movie__title"> {this.props.title} </div>
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

export default MainList;
