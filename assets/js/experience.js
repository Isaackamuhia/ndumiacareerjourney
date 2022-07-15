AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "ICT Intern",
    cardImage: "assets/images/experience-page/county.png",
    place: "Nyeri County Goverment,ICT Directorate",
    time: "(January, 2022 - present)",
    desp: "<li>Structure cabling work with Network cabinets and network devices installation eg.POE Switches,cabinet power-backup.</li> <li>Installed IP Cameras,configured the cameras giving them IP addresses & setting recording basin on motion detection.</li> <li>Installed WAN for internet bridging using point to point line of sight technology.Used Ubiquiti Network devices such as Ubiquiti NBE-5AC-Gen2 - NanoBeam AirMAX ac Bridge & Ubiquiti Powerbeam M5.</li> <li>Installed Ubiquiti M2 Nanostation Access Point for internet.</li><li>Computer hardware maintenance with IT support services.</li><li>Installed WAN for internet bridging using point to point line of sight technology.Used Ubiquiti Network devices such as Ubiquiti NBE-5AC-Gen2 - NanoBeam AirMAX ac Bridge & Ubiquiti Powerbeam M5.</li>  ",
  },
  {
    title: "ICT Intern",
    cardImage: "assets/images/experience-page/kcsap.jpeg",
    place: "KCSAP Nyeri-Department of Agriculture,Livestock & Fisheries",
    time: "(Jan - April, 2022)",
    desp: "<li>Worked as data analyst analyzing farmers' farm output data from PMIS.</li><li>Network troubleshooting.</li><li>Offered IT support services.</li><li>Computer hardware maintenance.</li>",
  },
  {
    title: "Field Data Collector (Enumerator)",
    cardImage: "assets/images/experience-page/kenyapower.png",
    place: "KPLC-Mt. Kenya Region",
    time: "(March - April, 2017)",
    desp: "<li>Used GPS enabled android application to mark geographical location of prepaid tocken-meters.</li><li>Managed daily assignment schedule in an efficient and accurate manner.</li><li>Weekly report to field supervisor on data collected.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
  
 
