import React from "react";
import "./Feed.css";
import Section1 from "./Feed/Section1";
import Section2 from "./Feed/Section2";
import Section3 from "./Feed/Section3";
import Section4 from "./Feed/Section4";
import Section5 from "./Feed/Section5";
import Section7 from "./Feed/Section7";
import Section6 from "./Feed/Section6";
import Section8 from "./Feed/Section8";
import Section9 from "./Feed/Section9";
import Section10 from "./Feed/Section10";
import Section11 from "./Feed/Section11";
import Section12 from "./Feed/Section12";
import Section13 from "./Feed/Section13";

function Feed(props) {
  const { func } = props;
  return (
    <>
      <main className="main-container">
        <div className="container">
          <Section1 />
        </div>
        <div className="container prd-container homeIcons home_version11">
          <Section2 func={func} />
        </div>
        <div className="container">
          <Section3 />
        </div>
        <div className="blk-prd featurebox">
          <div className="container featurebanner slick-initialized slick-slider">
            <Section4 />
          </div>
        </div>
        <div className="best-place">
          <div className="container">
            <Section5 />
          </div>
        </div>
        <div className="home-banner">
          <div className="container">
            <Section6 />
          </div>
        </div>
      </main>
      <div className="mid-row">
        <div className="container">
          <Section7 />
        </div>
      </div>
      <div className="app-block">
        <div className="container">
          <Section8 />
        </div>
      </div>
      <div className="customers-saying">
        <div className="container containerr">
          <Section9 />
        </div>
      </div>
      <div className="ourpartner">
        <div className="ptable">
          <div className="container containnerrr">
            <Section10 />
          </div>
        </div>
      </div>
      <div className="investor-new">
        <div className="container">
          <Section11 />
        </div>
      </div>
      <div className="help">
        <div className="container">
          <Section12 />
        </div>
      </div>
      <div className="group-companies">
        <div className="container">
          <Section13 />
        </div>
      </div>
    </>
  );
}

export default Feed;
