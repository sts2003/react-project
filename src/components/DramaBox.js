import React from "react";
import "../css/dramabox.css";

class DramaBox extends React.Component {
  render() {
    const pos = "https://image.tmdb.org/t/p/w500" + this.props.poster;
    return (
      <div
        className="dramaBox"
        onClick={() =>
          this._boxControllBtn(
            this.props.title,
            this.props.vote,
            this.props.release,
            this.props.overview
          )
        }
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
    );
  }
  _boxControllBtn = (param1, param2, param3, param4) => {
    alert(param1 + param2 + param3 + param4);
  };
}

export default DramaBox;
