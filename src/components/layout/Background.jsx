import React from "react";
import "./Background.css";

function Background() {
  return (
    <div class="ripple-background">
      <div class="circle xxlarge shade1"></div>
      <div class="circle xlarge shade2"></div>
      <div class="circle large shade3"></div>
      <div class="circle medium shade4"></div>
      <div class="circle small shade5"></div>
    </div>
  );
}

export default Background;
