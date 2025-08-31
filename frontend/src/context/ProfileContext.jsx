import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  // userInfo stored in localStorage under 'userInfo'
  const [userInfo, setUserInfo, clearUserInfo] = useLocalStorage("userInfo", null);

  const value = {
    userInfo,
    setUserInfo,
    clearUserInfo,
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
