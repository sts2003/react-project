import React from "react";
import MainList from "./MainList";
import "../css/mainPage.css";

class MainPage extends React.Component {
  state = {
    mainPage: null,
    mainTitle: null,
  };

  render() {
    const { mainPage, mainTitle } = this.state;

    return (
      <div className="main__content">
        <div className="main__header"></div>
        <div className="main__btnArea">
          <button
            className="main__btn"
            onClick={() => this._nowMovieBtnHandler()}
          >
            영화
          </button>
          <button
            className="main__btn"
            onClick={() => this._nowDramaBtnHandler()}
          >
            드라마
          </button>
        </div>
        <div className="mainArea">
          {mainPage ? (
            <>
              {mainPage.map((main, idx) => {
                return (
                  <MainList
                    key={idx}
                    title={mainTitle ? main.original_title : main.original_name}
                    vote={main.vote_average}
                    release={main.release}
                    overview={main.overview}
                    poster={main.poster_path}
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

  _nowMovieBtnHandler = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=0ff05e1049342b3ec508d217c36672d4&language=en-US&page=1"
    ).then((response) => response.json());

    console.log(data);

    this.setState({
      mainTitle: true,
      mainPage: data.results,
    });
  };

  _nowDramaBtnHandler = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=0ff05e1049342b3ec508d217c36672d4&language=en-US&page=1"
    ).then((response) => response.json());
    this.setState({
      mainTitle: false,
      mainPage: data.results,
    });
  };
}

export default MainPage;
