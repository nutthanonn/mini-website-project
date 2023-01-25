import React from "react";
import { useGoogleProfile } from "../hooks/useGoogleProfile";

const Home: React.FC = () => {
  const { profile } = useGoogleProfile();

  return <>{profile?.email}</>;
};

export default Home;
