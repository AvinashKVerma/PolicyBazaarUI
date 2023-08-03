import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../Resources/logopb.svg";
import { ReactComponent as Logo1 } from "../Resources/logopb1.svg";
import img from "../Resources/img36.png";

function Header() {
  const logo = <Logo />;
  const logo1 = <Logo1 />;

  const term_insurance = [
    "No Cost Term Insurance",
    "Term Insurance for NRI",
    "Term Insurance for Housewife",
    "Best Term Insurance Plans",
    "Life Insurance",
    "1 Crore Term Insurance",
    "Term Insurance Calculator",
    "Term Insurance Return of Premium",
    "Saral Jeevan Bima",
    "Dedicated Claim Assistance",
  ];

  const other_insurance = [
    "Travel Insurance",
    "Group Health Insurance",
    "Cyber Insurance",
    "D&O Insurance",
    "Workers Compensation",
    "Home Insurance",
    "Pet Insurance",
    "Cancer Insurance",
    "Defence Personnel Insurance",
    "General Insurance",
    "Business Insurance",
  ];

  const investment_plan = [
    "Investment Plans with High Returns",
    "Market Linked Investment Plans (ULIP)",
    "Capital Guarantee Plans",
    "Investment Plans for NRIs",
    "Child Plans",
    "Pension Plans",
    "Guaranteed Return Plans",
    "Tax Saving Investments",
    "SIP (Systematic Investment Plan)",
    "Endowment Policy",
    "LIC",
    "Money Back Policy",
    "Annuity Plans",
  ];

  const health_insurance = [
    "Family Health Insurance",
    "Senior Citizen Health Insurance",
    "Health Insurance for Parents",
    "Best Health Insurance Plans",
    "Maternity Insurance",
    "Health Insurance Portability",
    "Mediclaim Policy",
    "Critical Illness Insurance",
    "Health Insurance Calculator",
    "Health Insurance Companies",
    "Health Insurance for NRIs",
    "Health Insurance Claim",
  ];

  const car_insurance = [
    "Motor Insurance",
    "Two Wheeler Insurance",
    "Zero Dep Car Insurance",
    "Third Party Insurance",
    "Third Party Bike Insurance",
    "Car Insurance Calculator",
    "Two Wheeler Insurance Calculator",
    "Best Car Insurance Companies",
    "Pay As You Drive Insurance",
    "Electric Car Insurance",
    "E-Bike Insurance",
    "Used Car Insurance",
    "Car Insurance Claim",
    "Motor Floater Insurance",
  ];

  const claim = [
    "File a new claim",
    "Claim is already filed with the Insurer",
    "Know more about filing claim",
    "Track existing claim",
  ];

  const hamMenu = [
    { span: "ticket", pos: "-6px -55px", heading: "Get help" },
    {
      span: "mcp",
      pos: "-6px -765px",
      heading: "Manage communication preferences",
    },
    { span: "advisor", pos: "-6px -156px", heading: "Verify your advisor" },
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [term, setTerm] = useState(false);
  const [health, setHealth] = useState(false);
  const [motor, setMotor] = useState(false);
  const [inves, setInves] = useState(false);
  const [other, setOther] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownToggle1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const handleDropdownToggle2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const handleDropdownToggle3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };

  const handleClick = () => {
    // Toggle the open class on the hamburger menu
    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.classList.toggle("open");
    setMenuOpen(!menuOpen);
  };

  const handleClick1 = () => {
    const termm = document.getElementById("plus-minus-toggle");
    termm.classList.toggle("active");
    setTerm(!term);
  };

  const handleClick2 = () => {
    const heal = document.getElementById("plus-minus-toggle2");
    heal.classList.toggle("active");
    setHealth(!health);
  };

  const handleClick3 = () => {
    const car = document.getElementById("plus-minus-toggle3");
    car.classList.toggle("active");
    setMotor(!motor);
  };

  const handleClick4 = () => {
    const investment = document.getElementById("plus-minus-toggle4");
    investment.classList.toggle("active");
    setInves(!inves);
  };

  const handleClick5 = () => {
    const others = document.getElementById("plus-minus-toggle5");
    others.classList.toggle("active");
    setOther(!other);
  };

  return (
    <>
      <div className="navbar-wrapper">
        <ul className="navbar-list">
          <li className="li-logo">
            <a href="/#" className="logo">
              {logo}
            </a>
          </li>
          <li
            className={`nav-left-list ${isDropdownOpen ? "active" : ""}`}
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <a href="/#">
              Insurance Products
              <i className={`arrow ${isDropdownOpen ? "active" : ""}`}></i>
            </a>
            {isDropdownOpen && (
              <div className="drop-grid" style={{ zIndex: 1 }}>
                <div className="drop-row">
                  <div className="drop-col">
                    <h3 className="drop-list-heading">
                      <i className="menu-icon icon-bg life-insurance"></i>
                      <a href="/#" className="headlink">
                        Term Insurance
                      </a>
                    </h3>
                    <ul>
                      {term_insurance.map((ele, index) => (
                        <li key={index} className="listt">
                          <a href="/#" className="link">
                            <span>{ele}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <h3 className="drop-list-heading mt-30">
                      <i className="menu-icon icon-bg other-insurance"></i>
                      <a href="/#" className="headlink">
                        Other Insurance
                      </a>
                    </h3>
                    <ul>
                      {other_insurance.map((ele, index) => (
                        <li key={index} className="listt">
                          <a href="/#" className="link">
                            <span>{ele}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="drop-col">
                    <h3 className="drop-list-heading">
                      <i className="menu-icon icon-bg investment-plans"></i>
                      <a href="/#" className="headlink">
                        Investment Plans
                      </a>
                    </h3>
                    <ul>
                      {investment_plan.map((ele, index) => (
                        <li key={index} className="listt">
                          <a href="/#" className="link">
                            <span>{ele}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="drop-col">
                    <h3 className="drop-list-heading">
                      <i className="menu-icon icon-bg investment-plans"></i>
                      <a href="/#" className="headlink">
                        Health Insurance
                      </a>
                    </h3>
                    <ul>
                      {health_insurance.map((ele, index) => (
                        <li key={index} className="listt">
                          <a href="/#" className="link">
                            <span>{ele}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="drop-col">
                    <h3 className="drop-list-heading">
                      <i className="menu-icon icon-bg investment-plans"></i>
                      <a href="/#" className="headlink">
                        Car Insurance
                      </a>
                    </h3>
                    <ul>
                      {car_insurance.map((ele, index) => (
                        <li key={index} className="listt">
                          <a href="/#" className="link">
                            <span>{ele}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            className={`nav-list ${isDropdownOpen1 ? "active" : ""}`}
            onMouseEnter={handleDropdownToggle1}
            onMouseLeave={handleDropdownToggle1}
          >
            <a href="/#">
              Renew Your Policy
              <i className={`arrow ${isDropdownOpen1 ? "active" : ""}`}></i>
            </a>
            {isDropdownOpen1 && (
              <ul style={{ zIndex: 1 }}>
                <li>
                  <a href="/#">
                    <span>
                      <i
                        className="menu-icon icon-bg
                      menu-icon
                      icon-bg
                      renew-life-insurance"
                      ></i>
                      Life Renewal
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>
                      <i
                        className="menu-icon icon-bg
                      menu-icon
                      icon-bg
                      renew-health-insurance"
                      ></i>
                      Life Renewal
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>
                      <i
                        className="menu-icon icon-bg
                      menu-icon
                      icon-bg
                      renew-motor-insurance"
                      ></i>
                      Motor Renewal
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>
                      <i
                        className="menu-icon icon-bg
                      menu-icon
                      icon-bg
                      renew-two-wheeler-insurance"
                      ></i>
                      Two Wheeler Renewal
                    </span>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            className={`nav-list ${isDropdownOpen2 ? "active" : ""}`}
            onMouseEnter={handleDropdownToggle2}
            onMouseLeave={handleDropdownToggle2}
          >
            <a href="/#">
              Claim
              <i className={`arrow ${isDropdownOpen2 ? "active" : ""}`}></i>
            </a>
            {isDropdownOpen2 && (
              <ul className="claim-menu" style={{ zIndex: 1 }}>
                {claim.map((ele, index) => (
                  <li key={index}>
                    <a href="/#">{ele}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            className={`nav-right-list ${isDropdownOpen3 ? "active" : ""}`}
            onMouseEnter={handleDropdownToggle3}
            onMouseLeave={handleDropdownToggle3}
          >
            <a href="/#">
              Support
              <i className={`arrow ${isDropdownOpen3 ? "active" : ""}`}></i>
            </a>
            {isDropdownOpen3 && (
              <ul className="support-ui" style={{ zIndex: 1 }}>
                <li>
                  <span className="sapretor">
                    <small className="badge">My account</small>
                  </span>
                </li>
                <li style={{ display: "inline-block" }}>
                  <a href="/#">
                    <i className="icon-support-ui urpolicy"></i>
                    <span className="strong">
                      Policies
                      <span className="small-text">
                        Sign in to view all your policies
                      </span>
                    </span>
                  </a>
                </li>
                <li style={{ display: "inline-block" }}>
                  <a href="/#">
                    <i className="icon-support-ui raisequery"></i>
                    <span className="strong">Get help</span>
                  </a>
                </li>
                <li style={{ display: "inline-block" }}>
                  <a href="/#">
                    <i className="icon-support-ui mcp"></i>
                    <span className="strong">
                      Manage communication preferences{" "}
                    </span>
                  </a>
                </li>
                <li style={{ display: "inline-block" }}>
                  <a href="/#">
                    <i className="icon-support-ui verify-advisor"></i>
                    <span className="strong">
                      Manage communication preferences{" "}
                    </span>
                  </a>
                </li>
                <li>
                  <span className="sapretor">
                    <small className="badge">Contact us</small>
                  </span>
                </li>
                <li>
                  <div className="wrap-with-icon">
                    <a href="/#">
                      <i className="icon-support-ui whatsapp"></i>
                      <span>Connect on Whatsapp</span>
                    </a>
                    <a href="/#">
                      <i className="icon-support-ui nearme"></i>
                      <span>Stores near you</span>
                    </a>
                    <a href="/#">
                      <i className="icon-support-ui request-callback"></i>
                      <span>Request a callback</span>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="/#">
                    <i className="icon-support-ui sales"></i>
                    <p>Sales: 1800-208-8787</p>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="icon-support-ui services"></i>
                    <p>Service: 1800-258-5970</p>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="icon-support-ui claim"></i>
                    <p>Claims: 1800-258-5881</p>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="icon-support-ui viewmore"></i>
                    <p>View more</p>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="signin-link">
            <a href="/#" className="sign-in">
              Sign in
            </a>
          </li>
        </ul>
      </div>
      <div className="mob-menu no-bg">
        <div id="menu-container">
          <div id="menu-wrapper">
            <div id="hamburger-menu" onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={`menu-list ${menuOpen ? "active" : ""}`}>
            <nav className="nav">
              <ul className="nav__list nav-with-support mr-top0">
                <div className="heading-links">
                  <span className="badge my_acc">My Account</span>
                </div>
                <li className="parent-item ndm all-policies redirectPolicy">
                  <label>
                    <span className="mobile-menu-bg policies setleft"></span>
                    <span className="down-arrow"></span>
                    Policies
                    <i className="small-text">
                      Sign in to view all your policies
                    </i>
                  </label>
                </li>
                {hamMenu.map((ele, index) => {
                  return (
                    <li className="parent-item ndm" key={index}>
                      <label>
                        <span
                          className={`mobile-menu-bg ${ele.span} setleft`}
                          style={{ backgroundPosition: ele.pos }}
                        ></span>
                        <span className="down-arrow"></span>
                        {ele.heading}
                        {ele.text ? (
                          <i className="smalltext">{ele.text}</i>
                        ) : (
                          ""
                        )}
                      </label>
                    </li>
                  );
                })}
              </ul>
              <ul className="nav__list nav-with-support">
                <li className="parent-item ndm down-require">
                  <label htmlFor="group-claim">
                    <span className="mobile-menu-bg renewal setleft"></span>
                    <span className="down-arrow"></span>
                    Claim support
                  </label>
                </li>
                <li className="parent-item ndm down-require">
                  <label htmlFor="group-claim">
                    <span className="mobile-menu-bg renewal setleft"></span>
                    <span className="down-arrow"></span>
                    Renew Policy
                  </label>
                </li>
                <li className="parent-item">
                  <div className="heading-links">
                    <span className="badge"> Explore products</span>
                  </div>
                  <ul className="group-list">
                    <li>
                      <label>
                        <span className="mobile-menu-bg life setleft"></span>
                        <div
                          id="plus-minus-toggle"
                          onClick={handleClick1}
                        ></div>
                        Term Insurance Plan
                      </label>
                      <ul className={`sub-group-list-${term ? "active" : ""}`}>
                        <li>
                          <a href="/#">
                            <span>Term Insurance</span>
                          </a>
                        </li>
                        {term_insurance.map((ele, index) => {
                          return (
                            <li key={index}>
                              <a href="/#">
                                <span>{ele}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li>
                      <label>
                        <span className="mobile-menu-bg health setleft"></span>
                        <div
                          id="plus-minus-toggle2"
                          onClick={handleClick2}
                        ></div>
                        Health Insurance
                      </label>
                      <ul
                        className={`sub-group-list2-${health ? "active" : ""}`}
                      >
                        <li>
                          <a href="/#">
                            <span>Health Insurance</span>
                          </a>
                        </li>
                        {health_insurance.map((ele, index) => {
                          return (
                            <li key={index}>
                              <a href="/#">
                                <span>{ele}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li>
                      <label>
                        <span className="mobile-menu-bg car setleft"></span>
                        <div
                          id="plus-minus-toggle3"
                          onClick={handleClick3}
                        ></div>
                        Motor Insurance
                      </label>
                      <ul
                        className={`sub-group-list3-${motor ? "active" : ""}`}
                      >
                        <li>
                          <a href="/#">
                            <span>Car Insurance</span>
                          </a>
                        </li>
                        {car_insurance.map((ele, index) => {
                          return (
                            <li key={index}>
                              <a href="/#">
                                <span>{ele}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li>
                      <label>
                        <span className="mobile-menu-bg investment setleft"></span>
                        <div
                          id="plus-minus-toggle4"
                          onClick={handleClick4}
                        ></div>
                        Investment Plans
                      </label>
                      <ul
                        className={`sub-group-list4-${inves ? "active" : ""}`}
                      >
                        {investment_plan.map((ele, index) => {
                          return (
                            <li key={index}>
                              <a href="/#">
                                <span>{ele}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li>
                      <label>
                        <span className="mobile-menu-bg other setleft"></span>
                        <div
                          id="plus-minus-toggle5"
                          onClick={handleClick5}
                        ></div>
                        Other Insurance
                      </label>
                      <ul
                        className={`sub-group-list5-${other ? "active" : ""}`}
                      >
                        {other_insurance.map((ele, index) => {
                          return (
                            <li key={index}>
                              <a href="/#">
                                <span>{ele}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="contact-menu mobile_navlist">
              <div className="heading-links">
                <span className="badge">Contact Us</span>
                <ul>
                  <li>
                    <div className="wrap-with-icon">
                      <a href="/#">
                        <i className="menu-icon-bg whatapp"></i>
                        <span>Connect on Whatsapp</span>
                      </a>
                      <a href="/#">
                        <i className="menu-icon-bg nearme"></i>
                        <span className="nearme-add">Stores near you</span>
                      </a>
                      <a href="/#">
                        <i className="menu-icon-bg request-callback"></i>
                        <span>Request a callback</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="menu-icon-bg sales"></i>
                      <p>Sales: 1800-208-8787</p>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="menu-icon-bg service"></i>
                      <p>Service: 1800-258-5970</p>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="menu-icon-bg claim"></i>
                      <p>Claims: 1800-258-5881</p>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="menu-icon-bg viewmore"></i>
                      <p>View more</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="download-app13 play-store">
              <p>Download Mobile App</p>
              <div className="dwn-app">
                <a href="/#" className="googleplay">
                  <img src={img} alt=" " style={{ marginBottom: "20px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-pb">
          <a className="logo" href="/#">
            {logo1}
          </a>
        </div>
        <div className="mobile-signin">
          <a href="/#">Sign In</a>
        </div>
      </div>
    </>
  );
}

export default Header;
