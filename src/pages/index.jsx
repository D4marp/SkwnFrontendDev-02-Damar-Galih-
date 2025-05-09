import React from "react";
import ProfileHeader from "../components/header/header";
import Cards from "../components/cards/cards,";
import Services from "../components/services/services";
import Activity from "../components/activity/activity";

const Home = () => {
  return (
    <>
      <ProfileHeader />
      <Cards />
      <Services />
      <Activity />
    </>
  );
};

export default Home;
