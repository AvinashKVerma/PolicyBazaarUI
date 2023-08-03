import FooterData from "./Data";
const FooterPlans = () => {
  return (
    <>
      <div className="foottt">
        <div>
          <div className="foote">
            <span className="footer-icon life-insurance"></span>
            <h4>Life Insurance</h4>
          </div>
          {FooterData["Life Insurance"].map((ele, index) => {
            return (
              <li
                key={index}
                style={{ listStyleType: "none", marginLeft: "45px" }}
              >
                {ele}
              </li>
            );
          })}
        </div>
        <div>
          <div className="foote">
            <span className="footer-icon other-insurance"></span>
            <h4>Other Insurance</h4>
          </div>
          {FooterData["Other Insurance"].map((ele, index) => {
            return (
              <li
                key={index}
                style={{ listStyleType: "none", marginLeft: "45px" }}
              >
                {ele}
              </li>
            );
          })}
        </div>
      </div>
      <div>
        <div className="foote">
          <span className="footer-icon health-insurance" />
          <h4>Health Insurance</h4>
        </div>
        {FooterData["Health Insurance"].map((ele, index) => {
          return (
            <li
              key={index}
              style={{ listStyleType: "none", marginLeft: "45px" }}
            >
              {ele}
            </li>
          );
        })}
      </div>
      <div>
        <div className="foote">
          <span className="footer-icon investment"></span>
          <h4>Investment</h4>
        </div>
        {FooterData.Investment.map((ele, index) => {
          return (
            <li
              key={index}
              style={{ listStyleType: "none", marginLeft: "45px" }}
            >
              {ele}
            </li>
          );
        })}
      </div>
      <div>
        <div className="foote">
          <span className="footer-icon general-insurance"></span>
          <h4>General Insurance</h4>
        </div>
        {FooterData["General Insurance"].map((ele, index) => {
          return (
            <li
              key={index}
              style={{ listStyleType: "none", marginLeft: "45px" }}
            >
              {ele}
            </li>
          );
        })}
      </div>
    </>
  );
};
export default FooterPlans;
