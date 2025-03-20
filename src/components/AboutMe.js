import React from "react";
import ListSvg from "../images/icons/list.svg";
import ChartSvg from "../images/icons/chart.svg";
import UserSvg from "../images/icons/user.svg";

function AboutMe() {
  return (
    <section
      className="bg-[var(--base-color)] px-5 py-10 lg:py-16"
      id="about-section"
      aria-labelledby="about"
    >
      <div className="flex flex-col slg:flex-row slg:items-stretch slg:gap-8 lg:px-5 lg:grid lg:grid-cols-3 lg:gap-16 items-center gap-16 pt-6 max-w-[1200px] mx-auto">
        <div className="info-card bg-white p-6 pt-8 relative rounded-xl max-w-[400px]">
          <div className="absolute top-[-25px] left-[50%] translate-x-[-50%] w-12 h-12 flex place-items-center">
            <img
              src={UserSvg}
              alt="User Icon"
              className="w-full h-full p-2 bg-white rounded-full"
            />
          </div>
          <p>
            I hold a <strong>Bachelor's degree</strong> from the Faculty of
            Engineering Sciences in Kragujevac, where I built a solid foundation
            in computer science and software engineering. Currently, I am
            pursuing a <strong>Master’s degree</strong> in Information
            Technology at the University of Kragujevac, further expanding my
            knowledge. I have a strong passion for continuous learning, whether
            through coding, following industry trends, or exploring new
            technologies.
          </p>
        </div>
        <div className="info-card bg-white p-6 pt-8 relative rounded-xl max-w-[400px]">
          <div className="absolute top-[-25px] left-[50%] translate-x-[-50%] w-12 h-12 flex place-items-center">
            <img
              src={ChartSvg}
              alt="Chart Icon"
              className="w-full h-full p-2 bg-white rounded-full"
            />
          </div>
          <p>
            My main focus is frontend development, where I work with
            technologies like HTML, CSS, JavaScript, and React to build
            responsive and user-friendly web applications. I have experience
            optimizing performance, ensuring accessibility, and creating clean,
            maintainable code. UI/UX principles play a big role in my work, and
            I strive to create seamless digital experiences through thoughtful
            design and development.
          </p>
        </div>
        <div className="info-card bg-white p-6 pt-8 relative rounded-xl max-w-[400px]">
          <div className="absolute top-[-25px] left-[50%] translate-x-[-50%] w-12 h-12 flex place-items-center">
            <img
              src={ListSvg}
              alt="List Icon"
              className="w-full h-full p-2 bg-white rounded-full"
            />
          </div>
          <p>
            Beyond technical skills, I thrive in collaborative environments and
            enjoy problem-solving through structured and creative approaches. I
            am highly organized, adaptable, and always eager to refine my skills
            and learn from others. Whether working independently or as part of a
            team, I am committed to delivering high-quality solutions and
            growing as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
