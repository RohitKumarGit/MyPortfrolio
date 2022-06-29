import "./style.scss";
//@ts-ignore;
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";
// const animation = function () {};
import ProgressBar from "progressbar.js";
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

var primary = "#b753e1";
import Typed from "typed.js";

const headers: any = [
  {
    s: "Hi_",
    selector: "#header2",
  },
  {
    s: "Resume_",
    selector: "#header3",
  },
  {
    s: "My Projects_",
    selector: "#header4",
  },
  {
    s: "Get in touch_",
    selector: "#header5",
  },
];
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
var options = {
  typeSpeed: 100,
  showCursor: false,
};
headers.forEach((val) => {
  val.ts = false;
});
new Typed("#header2", { ...options, ...{ strings: ["Hi_"] } });

new Vue({
  el: "#app",
  data: {
    mvisible: false,
    experienced: [
      {
        heading: "Research Intern @ Samsung Research Institute - Banglore ",
        time: "Aug 2022 - ongoing",
        sub: "Part of Network Call / OAM team. Created a Deep learning Model (LSTM) to predict real-time network traffic and prepare for it beforehand.",
      },
      {
        heading: "SDE Intern @ Clappia.com - Banglore ",
        time: "June 2021 - March 2022",
        sub: "Working on adding new features and removing bugs as and when reported using tools like AWS, AngularJS , Serverless etc",
        links: [
          {
            label: "Clappia.com",
            link: "http://clappia.com/",
          },
          {
            label: "Experience Letter",
            link: "https://drive.google.com/file/d/1CjnH9eRJAlN-fmWZjRcUNdltoTez67dD/view?usp=sharing",
          },
        ],
      },
      {
        heading:
          "Front-End Developer @ SUSTAIN HILL PVT LTD. - K K Nagar , Chennai - 78",
        time: "Aug 2020 - Dec 2020",
        sub: "Developed the UI for the app and Website for this B2B startup and developed the PWA with the engineering team. Streamlined the DevOps which made the development process faster and helped us to release updates smoothly to clients .",
        links: [
          {
            label: "Letter Of Recommendation",
            link: "https://drive.google.com/file/d/1g158FB1pW-p8BPTdFifaKVUvCXeGQx-F/view?usp=sharing",
          },
          {
            label: "Certificate of completion",
            link: "https://drive.google.com/file/d/1Vqz8bH2uQC2fRPuvWPOtQ191Ah7fwVBZ/view",
          },
        ],
      },
      {
        heading:
          "Graphic Designer & Front End Engineer @ Quality Ayurveda - Noida Sec 52 ",
        time: "Oct 2019 - Jan 2020 ",
        sub: "Created 50+ graphics for social ad-campaigns for the Healthcare Brand.Re-designed the website working closely with the product team ( Vue and React ). Developed and managed a custom system for managing inventory and product distribution with minimum or no human intervention which decreased delivery time by 30% .",
        links: [],
      },
      {
        heading:
          " PR Intern @ NSUT IIF In Collaboration with padUp Ventures - NSUT TBI , NSUT , New Delhi",
        time: "",
        sub: "Organizing in Campus ad campaigns for events organized by the NSUT IIF team",
        links: [],
      },
    ],
    intro:
      "CS Student having 1+ experience working in startups and In love with code since Class V . Having passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versedin technology and writing code to create systems that are reliable and user-friendly with my knowledge of DataStructures and Algorithms . Skilled leader who has the proven ability to motivate, educate, and manage a team of programmers to build polished applications in a well documented form . Confident communicator, strategic thinker",
    educations: [
      {
        heading: "Netaji Subash University Of Technology , New Delhi",
        time: "2019 - 2023",
        sub: "Computer Science and Engineering With Artificial Intelligence ( CSAI)",
      },
      {
        heading: "Doon Public School , Jharkhand",
        time: "2017-2019",
        sub: "Scored 84.5% in XII boards ( CBSE )",
      },
      {
        heading: "Dhanbad Public School , Jharkhand",
        time: "up to class X",
        sub: "Scored 10cgpa in class X.",
      },
      {
        heading: "Simplilearn AI certification ",
        time: "2020",
        sub: "1 Year project based AI course where I learned and worked on projects on AI concepts ( ML , DL & NLP)",
      },
    ],
    skills: [
      [
        {
          label: "Blockchian / Etherumn / NFT's",
          perc: 6,
          ts: true,
        },
        {
          label: "ReactJS / VueJS",
          perc: 9,
          ts: true,
        },
        {
          label: "NodeJS",
          perc: 9,
          ts: true,
        },
        {
          label: "Python",
          perc: 9,
          ts: true,
        },
        {
          label: "Google Firebase",
          perc: 7,
          ts: true,
        },
      ],
      [
        {
          label: "MongoDB",
          perc: 8,
          ts: true,
        },
        {
          label: "Graphic Designing",
          perc: 7,
          ts: true,
        },
        {
          label: "Deep Learning",
          perc: 6,
          ts: true,
        },
        {
          label: "Machine Learning",
          perc: 7,
          ts: true,
        },
        {
          label: "Data Structures a& Algorithms",
          perc: 9,
          ts: true,
        },
      ],
    ],
  },
  created() {
    window.onclick = (e) => {
      if (this.mvisible && e.target.id !== "mnav") {
        this.mvisible = false;
        document.getElementById("mnav").style.opacity = "0";
      }
    };

    window.onload = () => {
      this.checkAnimations();
    };
    window.addEventListener("scroll", (_e) => {
      this.checkAnimations();

      if (window.scrollY > 44) {
        console.log("moved");
        document.getElementById("navs").classList.add("moved");
        console.log(document.querySelectorAll("#navs ul li a "));
        document.querySelectorAll("#navs ul li a ").forEach((el) => {
          document.getElementById(el.id).style.color = "red";
          console.log(document.getElementById(el.id).classList);
        });
      } else {
        document.getElementById("navs").classList.remove("moved");
        document.querySelectorAll("#navs ul li a").forEach((el) => {
          document.getElementById(el.id).classList.remove("moved_link");
        });
      }
    });
  },
  methods: {
    nav() {
      if (document.getElementById("mnav").style.transform === "scaleY(0)") {
        document.getElementById("mnav").style.transform = "scaleY(1)";
      } else {
        document.getElementById("mnav").style.transform = "scaleY(0)";
      }

      //this.mvisible = true;
    },
    checkAnimations() {
      headers.forEach((val, k) => {
        if (
          isInViewport(
            document.getElementById(val.selector.replace("#", ""))
          ) &&
          !val.ts
        ) {
          headers[k].ts = true;
          new Typed(val.selector, { ...options, ...{ strings: [val.s] } });
        }
      });

      const prgs = document.getElementById("progresses");
      if (isInViewport(prgs)) {
        let i = 0;
        while (i <= 1) {
          this.skills[i].forEach((skill, index) => {
            if (!this.skills[i][index].ts) {
              return;
            }
            this.skills[i][index].ts = false;

            const t = new ProgressBar.Line("#skill" + (i * 5 + index), {
              strokeWidth: 2,
              easing: "easeInOut",
              duration: 1400,
              color: primary,
              trailColor: "#eee",
              trailWidth: 2,
              svgStyle: { width: "100%", height: "100%" },
            });

            t.animate(skill.perc * 0.1);
          });
          i++;
        }
      }
    },
  },
});
