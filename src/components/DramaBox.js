import React from "react";
import "../css/dramabox.css";
import { Link } from "react-router-dom";

class DramaBox extends React.Component {
  render() {
    const pos = "https://image.tmdb.org/t/p/w500" + this.props.poster;
    return (
      <Link
        to={`/detail/${this.props.title}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div
          className="dramaBox"
          // onClick={() =>
          //   this._boxControllBtn(
          //     this.props.title,
          //     this.props.vote,
          //     this.props.release,
          //     this.props.overview
          //   )
          // }
        >
          <div className="dramaBox__poster">
            <img src={pos} alt="poster" width="60px" height="80px" />
          </div>
          <div className="dramaBox__desc">
            <div>{this.props.title}</div>
            <div>{this.props.vote}</div>
            <div>{this.props.release}</div>

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
}

export default DramaBox;
