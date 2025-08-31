import React from "react";
import { ProfileProvider } from "./context/ProfileContext";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <ProfileProvider>
      <Landing />
    </ProfileProvider>
  );
}
