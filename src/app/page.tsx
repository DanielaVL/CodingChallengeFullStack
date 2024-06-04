import React from "react";
import LoginScreen from "./components/loginScreen";
import ArtworkSearchScreen from "./components/artworkSearchScreen";
import ListArtwork from "./components/listArtwork";
import UserProfileScreen from "./components/userProfileScreen";
import Card from "./components/userProfileScreen/card";

const Home = () => {
  return (
    <div>
      <LoginScreen />
      {/* <ArtworkSearchScreen />
      <ListArtwork />
      <div style={{ display: "flex" }}>
        <UserProfileScreen />
        <Card />
      </div> */}
    </div>
  );
};

export default Home;
