import React from "react";
// import { useCart } from "../cart-context";
import { useNav } from "../nav-context";
import { data } from "../data";

export function Header() {
  //   const { state } = useCart();
  const { dispatch } = useNav();

  return (
    <div className="header">
      <div
        className="header-left-side"
        onClick={() => dispatch({ type: "MENU" })}
      >
        <button className="btn-show menu">
          <span className="material-icons"> menu </span>
        </button>
        <p
          className="brand-title"
          onClick={() => {
            //   setRoute("product");
            window.scrollTo(0, 0);
          }}
          // onClick={() => setRoute("cart")}
        >
          KannadaClass101
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
