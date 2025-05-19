import React from "react";
import "../App.css";
function LandingPage() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>video conferencing website</h2>
        </div>
        <div className="navList">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            Ones
          </h1>
          <p>Cover a distance by video Call </p>
          <div role="button">
            <link to={"/auth"}>Get Started</link>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
