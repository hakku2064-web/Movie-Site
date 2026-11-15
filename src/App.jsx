import Layouts from "./layouts/Layouts";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import MyList from "./pages/MyList";
import Search from "./pages/Search";
import Profile from "./pages/Profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvshows" element={<TvShows />} />
        <Route path="mylist" element={<MyList />} />
        <Route path="search" element={<Search />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;