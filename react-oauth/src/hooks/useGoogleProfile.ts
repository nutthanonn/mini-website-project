import { useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";
import type GoogleTokenResponse from "../interfaces/google_token_response";
import { useNavigate } from "react-router-dom";

export const useGoogleProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<GoogleTokenResponse>();
  const cookies = new Cookies();

  useEffect(() => {
    async function getProfile() {
      const cookie = cookies.get("google_token");
      if (!cookie) return navigate("/");

      const { data } = await axios.get(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${cookie}`
      );
      setProfile(data);
    }

    getProfile();
  });

  return { profile };
};
