import "./Section10.css";

function Section10() {
  const item = [
    {
      title: "ICICI Prudential Life Insurance",
      class: "logo-icon icicipru",
      pos: "-203px -40px",
    },
    {
      title: "Max Life Insurance",
      class: "logo-icon maxlife",
      pos: "-342px -52px",
    },
    {
      title: "HDFC Life Insurance",
      class: "logo-icon hdfclife",
      pos: "-610px -52px",
    },
    {
      title: "Aegon Life Insurance",
      class: "logo-icon agon",
      pos: "-45px -40px",
    },
    {
      title: "Aegon Life Insurance",
      class: "logo-icon agon",
      pos: "-1050px -610px",
    },
    { title: "", class: "logo-icon icicilombard", pos: "-1050px -610px" },
    { title: "", class: "logo-icon cigna", pos: "-487px -40px" },
    {
      title: "Tata AIG Health Insurance",
      class: "logo-icon tataaig",
      pos: "-878px -54px",
    },
    {
      title: "Kotak Life Insurance",
      class: "logo-icon kotak",
      pos: "-1054px -42px",
    },
    {
      title: "Bajaj Allianz Life Insurance",
      class: "logo-icon bajajlife",
      pos: "-62px -124px",
    },
    { title: "", class: "logo-icon bajajgen", pos: "-204px -122px" },
    {
      title: "Max Bupa Health Insurance",
      class: "logo-icon maxhealth",
      pos: "-324px -135px",
    },
    {
      title: "SBI Life Insurance",
      class: "logo-icon sbilife",
      pos: "-486px -121px",
    },
    {
      title: "SBI Health Insurance",
      class: "logo-icon sbigen",
      pos: "-481px -690px",
    },
    {
      title: "Reliance Health Insurance",
      class: "logo-icon reliancegen",
      pos: "-767px -123px",
    },
    {
      title: "Reliance Life Insurance",
      class: "logo-icon reliancelife",
      pos: "-633px -121px",
    },
    {
      title: "Tata AIA Life Insurance",
      class: "logo-icon tataaia",
      pos: "-906px -121px",
    },
    {
      title: "PNB MetLife Insurance",
      class: "logo-icon pnbmetlife",
      pos: "-1053px -121px",
    },
    {
      title: "Aditya Birla Sunlife Insurance",
      class: "logo-icon birlasunlife",
      pos: "-52px -216px",
    },
    {
      title: "Canara HSBC OBC Life Insurance",
      class: "logo-icon canerahsbc",
      pos: "-202px -209px",
    },
    {
      title: "Aviva Life Insurance",
      class: "logo-icon aviva",
      pos: "-489px -199px",
    },
    {
      title: "Digit Health Insurance",
      class: "logo-icon digit",
      pos: "-624px -214px",
    },
    {
      title: "Care Health Insurance",
      class: "logo-icon religare",
      pos: "-754px -216px",
    },
    {
      title: "Star Health Insurance",
      class: "logo-icon star",
      pos: "-905px -214px",
    },
    {
      title: "IDBI Federal Life Insurance",
      class: "logo-icon idbifedrel",
      pos: "-1049px -196px",
    },
    {
      title: "Exide Life Insurance",
      class: "logo-icon exidelife",
      pos: "-52px -292px",
    },
    {
      title: "Pramerica Life Insurance",
      class: "logo-icon dhfl",
      pos: "-172px -303px",
    },
    {
      title: "Navi General Insurance",
      class: "logo-icon dhflgen",
      pos: "-202px -688px",
    },
    {
      title: "Liberty Health Insurance",
      class: "logo-icon liberty",
      pos: "-342px -292px",
    },
    {
      title: "IFFCO TOKIO Health Insurance",
      class: "logo-icon iffcotokio",
      pos: "-476px -295px",
    },
    {
      title: "Bharti AXA Life Insurance",
      class: "logo-icon bhartiaxaredifining",
      pos: "-752px -297px",
    },
    {
      title: "Future Generali Health Insurance",
      class: "logo-icon futuregenerali",
      pos: "-910px -288px",
    },
    {
      title: "Royal Sundaram Health Insurance",
      class: "logo-icon royalsundaram",
      pos: "-1052px -288px",
    },
    {
      title: "Oriental Health Insurance",
      class: "logo-icon orientalinsurance",
      pos: "-59px -371px",
    },
    {
      title: "United India Health Insurance",
      class: "logo-icon unitedindiainsurance",
      pos: "-204px -364px",
    },
    {
      title: "New India Health Insurance",
      class: "logo-icon newindiainsurance",
      pos: "-342px -372px",
    },
    {
      title: "Shriram General Insurance",
      class: "logo-icon shriram",
      pos: "-482px -374px",
    },
    {
      title: "Edelweiss Tokio Life Insurance",
      class: "logo-icon edelwise",
      pos: "-766px -374px",
    },
    {
      title: "National Health Insurance",
      class: "logo-icon national",
      pos: "-907px -374px",
    },
    {
      title: "Universal Sompo Health Insurance",
      class: "logo-icon universalsomplo",
      pos: "-1055px -365px",
    },
    { title: "", class: "logo-icon magmahdi", pos: "-342px -688px" },
    {
      title: "Raheja QBE Health Insurance",
      class: "logo-icon rahejaqbe",
      pos: "-629px -690px",
    },
    {
      title: "ZUNO Health Insurance",
      class: "logo-icon edelwisegen",
      pos: "-751px -782px",
    },
    {
      title: "IndiaFirst Life Insurance",
      class: "logo-icon indiafirst",
      pos: "-892px -702px",
    },
    {
      title: "Kotak Mahindra Health Insurance",
      class: "logo-icon kotakgeneral",
      pos: "-66px -775px",
    },
    {
      title: "Aditya Birla Health Insurance",
      class: "logo-icon adityabirla",
      pos: "-191px -783px",
    },
    {
      title: "Chola MS Health Insurance",
      class: "logo-icon cholams",
      pos: "-493px -776px",
    },
    {
      title: "Life Insurance Corporation",
      class: "logo-icon lazy-bg lic",
      pos: "-621px -784px",
    },
  ];

  return (
    <div className="roww">
      <div className="col-12">
        <div className="partner_title ">
          <div className="h2 f600">Our Partners</div>
          <p>Leading insurers for your financial freedom</p>
        </div>
        <div className="partnerLogo plr">
          {item.map((ele, index) => {
            return (
              <div className="hjk" key={index}>
                <a href="/#" title={ele.title}>
                  <div className={ele.class}></div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section10;
