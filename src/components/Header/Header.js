import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../Resources/logopb.svg";
import { ReactComponent as Logo1 } from "../Resources/logopb1.svg";

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

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  const handleDropdownToggle1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const [isDropdownOpen2, setDropdownOpen2] = useState(false);

  const handleDropdownToggle2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const [isDropdownOpen3, setDropdownOpen3] = useState(false);

  const handleDropdownToggle3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };

  const handleClick = () => {
    // Toggle the open class on the hamburger menu
    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.classList.toggle("open");
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
          <div className="logo-pb">
            <a className="logo" href="/#">
              {logo1}
            </a>
          </div>
          <div className="mobile-signin">
            <a href="/#">Sign In</a>
          </div>
          <div className="menu-list active">
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
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
