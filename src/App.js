import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";

//1. 페이지는 총 3개 필요(홈페이지,movie,movieDetail)
//2. 홈페이지에서는 배너를 볼 수 있다
//3. 3가지 섹션의 영화를 볼 수 있다(popular, top rated, upcoming)
//4. 영화에 마우스를 올려두면 제목, 장르, 점수, 인기도, 청불 여부 알수있음
//5. 영화목록을 슬라이드로 넘기면서 다른 영화를 볼 수 있다
//6. 영화디테일 페이지에서 영화의 정보를 볼 수 있다(포스터,제목,줄거리,점수,인기도..)
//7. 트레일러를 누르면 트레일러(예고편)를 볼 수 있다
//8. 영화의 리뷰도 볼 수 있다
//9. 관련된 영화도 볼 수 있다
//10. 영화 검색을 할 수 있다
//11. 영화 정렬 할 수 있다(sort)
//12. filter도 가능

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}
export default App;
