import React from "react";
import DramaBox from "./DramaBox";
import "../css/dramaList.css";

class DramaList extends React.Component {
  state = {
    dramaList: null,
    dramaTitle: null,
  };

  render() {
    const { dramaList, dramaTitle } = this.state;
    return (
      <div className="drama__main">
        <div className="drama__header"> </div>
        <div className="drama__btnArea">
          <button
            className="d__btn"
            onClick={() => this._popularDramahandler()}
          >
            최신 드라마
          </button>
          <button className="d__btn" onClick={() => this._nowDramaHandler()}>
            인기 드라마
          </button>
        </div>
        <div className="dramaArea">
          {dramaList ? (
            <>
              {dramaList.map((drama, idx) => {
                return (
                  <DramaBox
                    key={idx}
                    title={drama.original_name}
                    vote={drama.vote_average}
                    release={drama.release}
                    overview={drama.overview}
                    poster={drama.poster_path}
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

  _popularDramahandler = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=0ff05e1049342b3ec508d217c36672d4&language=en-US&page=1"
    ).then((response) => response.json());

    this.setState({
      dramaList: data.results,
      dramaTitle: false,
    });
  };

  _nowDramaHandler = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=0ff05e1049342b3ec508d217c36672d4&language=en-US&page=1"
    ).then((response) => response.json());
    this.setState({
      dramaList: data.results,
      dramaTitle: false,
    });
  };
}

export default DramaList;
