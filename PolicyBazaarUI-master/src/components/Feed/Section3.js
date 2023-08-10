import "./Section3.css";

function Section3() {
  const item = [
    { class: "term", small: "Investment", big: "LIC Plans" },
    { class: "term", small: "Term Life", big: "Return of Premium" },
    { class: "term", small: "Term life", big: "Life Insurance for Housewives" },
    { class: "health", small: "Health", big: "Corona Virus Health Insurance" },
    { class: "health", small: "Health", big: "Arogya Sanjeevani" },
    { class: "health", small: "Health", big: "1 Cr Health Insurance" },
    { class: "bi", small: "Business Insurance", big: "Marine Insurance" },
    {
      class: "bi",
      small: "Business Insurance",
      big: "Professional Indemnity for Doctors",
    },
    {
      class: "bi",
      small: "Business Insurance",
      big: "Directors & Officers Liability",
    },
    { class: "bi", small: "Business Insurance", big: "Workmen Compensation" },
    { class: "others", small: "Others", big: "Pet Insurance" },
  ];
  return (
    <section className="more-products">
      <p>ALSO BUY</p>
      <div className="prd-links">
        {item.map((ele, index) => {
          return (
            <a href="/#" key={index}>
              <span className={ele.class}>{ele.small}</span>
              {ele.big}
            </a>
          );
        })}
      </div>
    </section>
  );
}
export default Section3;
