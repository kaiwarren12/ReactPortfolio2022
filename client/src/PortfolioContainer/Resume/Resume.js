import React, {useState, useEffect} from "react";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import ScrollService from '../../utilities/ScrollService'
import './Resume.css';



const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
  
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };
  
    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Programming Skills", logoSrc: "programming-skills.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];
  
    //here we have
    const programmingSkillsDetails = [
      { skill: "JavaScript", ratingPercentage: 75 },
      { skill: "React JS", ratingPercentage: 75 },
      { skill: "React Native", ratingPercentage: 75 },
      { skill: "Express JS", ratingPercentage: 60 },
      { skill: "Node JS", ratingPercentage: 70 },
      { skill: "Mongo Db", ratingPercentage: 50 },
      { skill: "Core Java", ratingPercentage: 60 },
      { skill: "HTML", ratingPercentage: 80 },
      { skill: "CSS", ratingPercentage: 80 },
    ];
  
    const projectsDetails = [
      {
        title: "Personal Portfolio Website",
        duration: { fromDate: "2020", toDate: "2021" },
        description:
          "A Personal Portfolio website to showcase all my details and projects at one place.",
        subHeading: "Technologies Used: React JS, Bootsrap",
      },
      {
        title: "Mobile E-shop ",
        duration: { fromDate: "2020", toDate: "2021" },
        description:
          "An ecommerce application designed to sell products online wth payment system integration",
        subHeading:
          "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
      },
      {
        title: "Ecommerce Website ",
        duration: { fromDate: "2020", toDate: "2021" },
        description:
          "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
        subHeading:
          "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
      },
    ];
  
    const resumeDetails = [
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"University of Washington"}
          subHeading={"Coding Developement Bootcamp"}
          fromDate={"2021"}
          toDate={"2020"}
        />
  
        <ResumeHeading
          heading={"Western Washington University"}
          subHeading={"Business, Marketing"}
          fromDate={"2013"}
          toDate={"2019"}
        />
        <ResumeHeading
          heading={"High School "}
          subHeading={"Edmonds Woodway"}
          fromDate={"2009"}
          toDate={"2012"}
        />
      </div>,
  
      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading
            heading={"DocuSign"}
            subHeading={"Market Development Representative"}
            fromDate={"2021"}
            toDate={"Present"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Currently working as an account manager in tandom with an Account Executive to help manage corporate DocuSign agreements with varius companies.
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Account management
            </span>
            <br />
            <span className="resume-description-text">
              - Email Marketing{" "}
            </span>
            <br />
            <span className="resume-description-text">
              - Business development/prospecting
            </span>
            <br />
          </div>
        </div>
      </div>,
  
      /* PROGRAMMING SKILLS */
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,
  
      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
          />
        ))}
      </div>,
  
      /* Interests */
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Spending time with my dogs"
          description="The greatest thing to happen to my fiance and I were getting our two dogs, Lilo & Stitch, at the beginning of the pandemic."
        />
        <ResumeHeading
          heading="Basketball"
          description="I started playing basketball at the age of 5 and played through high school. Basketball was my first love and will always be my favorite activity to stay fit"
        />
        <ResumeHeading
          heading="Gaming"
          description="I love the competitive aspect when it comes to gaming. Currently I play league of legends but love a classic like old school runescape."
        />
      </div>,
    ];
  
    const handleCarousal = (index) => {
      let offsetHeight = 360;
  
      let newCarousalOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };
  
     const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  
    const getResumeScreens = () => {
      return (
        <div
          style={carousalOffsetStyle.style}
          className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };
  
    useEffect(() => {
      return () => {
        /* UNSUBSCRIBE THE SUBSCRIPTIONS */
        fadeInSubscription.unsubscribe();
      };
    }, [fadeInSubscription]);
  
    return (
      <div
        className="resume-container screen-container fade-in"
        id={props.id || ""}
      >
        <div className="resume-content">
          <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
  
            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resume;