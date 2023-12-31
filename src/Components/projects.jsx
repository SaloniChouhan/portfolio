import React from "react";
import Projectcard from "./projectsSubComp";
import one from "../assets/onedesk1.png";
import stocks from "../assets/stoxticker (1).png";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="bg-core-green-300 px-6 sm:px-6 md:px-10 pt-20 mt-20 max-w-screen h-full"
      >
        <p className="text-center lg:text-5xl sm:text-4xl md:text-4xl text-3xl mx-auto font-mono font-extrabold text-dark-green max-w-4xl">
          Explore My Creations
        </p>
        <p className="pt-5 text-center text-dark-green font-mono font-medium lg:text-lg sm:text-sm md:text-sm text-xs">
          My Journey in Project Development
        </p>

        <div className="mx-auto flex flex-col sm:gap-5 lg:flex-row sm:justify-center  max-w-6xl pt-6">
          <div className="sm:shrink-0">
            <Projectcard
              heading="OneDesk"
              subheading="Query Resolution platform"
              projimage={one}
              content="In response to the challenges posed by the pandemic, we developed
                a Query Resolution Platform to bridge the communication gap
                between college students and faculty members across different
                departments. Designed an intuitive and user-friendly interface
                accessible to all students and faculty members."
              li1="BulmaCSS"
              li2="Javascript"
              li3="PHP"
              li4="MySQL"
              linktoproj="https://github.com/SaloniChouhan/OneDesk"
            />
          </div>
          <div className="sm:shrink-0">
            <Projectcard
              heading="StoxTicker"
              subheading="Stock Market Analysis App"
              projimage={stocks}
              content="This robust application provides real-time insights into
              stock trends, equity analysis, and performance metrics for
              various tickers, empowering users to make informed decisions
              in the ever-changing stock market landscape. Utilized APIs
              to fetch real-time stock data, ensuring users have access to
              the latest market information."
              li1="React"
              li2="Ionic Framework"
              li3="Styled Components"
              linktoproj="https://github.com/SaloniChouhan/Stox-Ticker"
            />
          </div>
        </div>

        <br />
        <br />
      </section>
    </>
  );
};

export default Projects;
