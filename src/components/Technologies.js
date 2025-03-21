import React from "react";
import TechnologyCard from "./TechnologyCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Technologies() {
  return (
    <section
      className="p-5 max-w-[1200px] my-12 xl:mx-auto"
      id="tech-section"
      aria-labelledby="tech"
    >
      <h1 id="tech" className="text-2xl lg:text-4xl font-extrabold mb-8">
        Tech Stack
      </h1>
      <div className="visible-until-sm">
        <Splide
          options={{
            autoWidth: true,
            perPage: 1,
            gap: "1rem",
            padding: 20,
            arrows: false,
            pagination: false,
          }}
          style={{ margin: "0 -20px" }}
        >
          <SplideSlide>
            <TechnologyCard
              image="html-5.png"
              name="HTML"
              description="Structure Language"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="css-3.png"
              name="CSS"
              description="Styling Sheets"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="sass.png"
              name="SCSS"
              description="Enhanced CSS"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="tailwind.png"
              name="TailwindCSS"
              description="Utility Framework"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="js.png"
              name="JavaScript"
              description="Scripting Language"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="ts.png"
              name="TypeScript"
              description="Typed JavaScript"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="atom.png"
              name="React"
              description="UI Library"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="redux.png"
              name="Redux"
              description="State Management"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="nextjs.png"
              name="Next.js"
              description="React Framework"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="git.png"
              name="Git"
              description="Version Control"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="github.png"
              name="Github"
              description="Code Hosting"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="figma.png"
              name="Figma"
              description="Design Tool"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="mysql.png"
              name="MySQL"
              description="Relational Database"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="api.png"
              name="APIs"
              description="Data Communication"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="motion.png"
              name="Framer Motion"
              description="Animation Library"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="visible-from-sm grid grid-cols-2 md:grid-cols-3 slg:grid-cols-4 lg:grid-cols-5 gap-4">
        <TechnologyCard
          image="html-5.png"
          name="HTML"
          description="Structure Language"
        />
        <TechnologyCard
          image="css-3.png"
          name="CSS"
          description="Styling Sheets"
        />
        <TechnologyCard
          image="sass.png"
          name="SCSS"
          description="Enhanced CSS"
        />
        <TechnologyCard
          image="tailwind.png"
          name="TailwindCSS"
          description="Utility Framework"
        />
        <TechnologyCard
          image="js.png"
          name="JavaScript"
          description="Scripting Language"
        />
        <TechnologyCard
          image="ts.png"
          name="TypeScript"
          description="Typed JavaScript"
        />
        <TechnologyCard
          image="atom.png"
          name="React"
          description="UI Library"
        />
        <TechnologyCard
          image="redux.png"
          name="Redux"
          description="State Management"
        />
        <TechnologyCard
          image="nextjs.png"
          name="Next.js"
          description="React Framework"
        />
        <TechnologyCard
          image="git.png"
          name="Git"
          description="Version Control"
        />
        <TechnologyCard
          image="github.png"
          name="Github"
          description="Code Hosting"
        />
        <TechnologyCard
          image="figma.png"
          name="Figma"
          description="Design Tool"
        />
        <TechnologyCard
          image="mysql.png"
          name="MySQL"
          description="Relational Database"
        />
        <TechnologyCard
          image="api.png"
          name="APIs"
          description="Data Communication"
        />
        <TechnologyCard
          image="motion.png"
          name="Framer Motion"
          description="Animation Library"
        />
      </div>
    </section>
  );
}

export default Technologies;
