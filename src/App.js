import "./App.css";
import { createContext, useState } from "react";
import List from "./Components/List/List";
import Navbar from "./Components/Navbar/Navbar";
import Player from "./Components/Player/Player";
import TopNavbar from "./Components/TopNavbar/TopNavbar";

export const SongContext = createContext();
function App() {
  const [song, setSong] = useState({
    name: "Play Something",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png?20160123212544",
  });
  return (
    <SongContext.Provider value={[song, setSong]}>
      <div className="App flex">
        <div className="w-1/6">
          <Navbar />
        </div>
        <div className="w-5/6 absolute bg-gray-50 right-0 min-h-screen">
          <TopNavbar />
          <main className="mt-14 p-5 mb-12">
            <List items="8" title="Charts" />
            <List items="5" title="Sleep" />
            <List items="6" title="Soothing" />
            <List items="9" title="Popular and Trending" />
            <List items="3" title="Editor's pick" />
          </main>
        </div>
        <Player />
      </div>
    </SongContext.Provider>
  );
}

export default App;
