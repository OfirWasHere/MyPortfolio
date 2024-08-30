import React from "react";
import "./TopDrawer.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/RootReducer";

function TopDrawer() {
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  return (
    <div className={`drawer-container ${isOpen ? "is-open" : "is-closed"}`}>
      <div>{/* drawer content {isOpen ? "opened" : "closed"} */}</div>
    </div>
  );
}

export default TopDrawer;
