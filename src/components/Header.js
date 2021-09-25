import React from "react";
// import { useCart } from "../cart-context";
import { useNav } from "../nav-context";
import { data } from "../data";
import { Link } from "react-router-dom";

export function Header() {
  //   const { state } = useCart();
  const { dispatch } = useNav();

  return (
    <div className="header">
      <div className="header-left-side">
        <button
          className="btn-show menu"
          onClick={() => dispatch({ type: "MENU" })}
        >
          <span className="material-icons"> menu </span>
        </button>
        <p>
          <Link
            to="/"
            className="brand-title"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            KannadaClass101
          </Link>
        </p>
      </div>
      <div className="header-right-side">
        <div>
          <button className="btn-show notification">
            <span className="material-icons"> notifications </span>
            <span className="icon-badge">1</span>
          </button>
        </div>
        <div>
          <img
            src={data[data.length - 1].channelThumbnail}
            alt="avatar"
            className="custom-avatar-small"
          />
        </div>
      </div>
    </div>
  );
}
