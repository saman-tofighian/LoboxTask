import React from "react";
import "./App.scss";
import DropdownMenu from "./Components/DropdownMenu";
import { MdCastForEducation } from "react-icons/md";
import {
  FaFlask,
  FaPaintBrush,
  FaFootballBall,
  FaGamepad,
  FaHeartbeat,
} from "react-icons/fa";

const App: React.FC = () => {
  const options = [
    { label: "Education", icon: <MdCastForEducation /> },
    { label: "Yeeeah, science", icon: <FaFlask /> },
    { label: "Art", icon: <FaPaintBrush /> },
    { label: "Sport", icon: <FaFootballBall /> },
    { label: "Games", icon: <FaGamepad /> },
    { label: "Health", icon: <FaHeartbeat /> },
  ];

  return (
    <div className="App">
      <h1>Dropdown Menu</h1>
      <DropdownMenu options={options} />
    </div>
  );
};

export default App;
