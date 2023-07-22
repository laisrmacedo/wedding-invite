import React from "react";
import Lottie from "lottie-react";
import lottie from "../lottie.json";

export const Animation = (props) => <Lottie animationData={lottie} loop={false} style={{height:props.height, width:props.width, overflowY: "hidden"}} />;