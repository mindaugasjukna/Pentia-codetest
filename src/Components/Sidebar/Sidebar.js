import { useState } from "react";
import "./Sidebar.scss";

// Assets
import arrow_down from "../../assets/arrow_down.svg";
import logo from "../../assets/logo_white.svg";

export default function Sidebar() {
  const [open, setOpen] = useState("false");

  const [sidebar, setSidebar] = useState("Sidebar");
  const [arrow, setArrow] = useState("arrow");
  const [list, setList] = useState("list");

  const handleBurgerMenu = () => {
    if (open === false) {
      setOpen(true);
      setSidebar("Sidebar open");
      setArrow("arrow rotated");
      setList("navlist open");
    } else {
      setOpen(false);
      setSidebar("Sidebar");
      setArrow("arrow");
      setList("navList");
    }
  };

  return (
    <div className={sidebar} onClick={handleBurgerMenu}>
      <div className="Sidebar--logocontainer">
        <img src={logo} alt={logo} />
      </div>

      <ul className={list}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <div className="Sidebar--menu">
        <img src={arrow_down} className={arrow} alt={arrow} />
      </div>
    </div>
  );
}
