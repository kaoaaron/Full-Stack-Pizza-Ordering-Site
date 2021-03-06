import React from "react";

class RippleIcon extends React.Component {
  render() {
    return (
      <div style={{position: "fixed", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
        <svg width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-ripple" style={{background:"none"}}>
        <circle cx="50" cy="50" r="38.7535" fill="none" ng-attr-stroke="{{config.c1}}" ng-attr-stroke-width="{{config.width}}" stroke="#1d3f72" strokeWidth="2">
        <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="0.9" keySplines="0 0.2 0.8 1" begin="-0.45s" repeatCount="indefinite">
        </animate><animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="0.9" keySplines="0.2 0 0.8 1" begin="-0.45s" repeatCount="indefinite">
        </animate></circle><circle cx="50" cy="50" r="22.4429" fill="none" ng-attr-stroke="{{config.c2}}" ng-attr-stroke-width="{{config.width}}" stroke="#5699d2" strokeWidth="2">
        <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="0.9" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"></animate>
        <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="0.9" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite">
        </animate></circle></svg>
      </div>
    );
  }
}

export default RippleIcon;
