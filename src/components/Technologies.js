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
              image="mongodb.png"
              name="MongoDB"
              description="NoSQL Database"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="nodejs.png"
              name="Node.js"
              description="JavaScript Runtime"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="expressjs.png"
              name="Express.js"
              description="Backend Framework"
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
              image="postman.png"
              name="Postman"
              description="API Testing"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="php.png"
              name="PHP"
              description="Server Scripting"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="laravel.png"
              name="Laravel"
              description="PHP Framework"
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
              image="bootstrap.png"
              name="Bootstrap"
              description="UI Framework"
            />
          </SplideSlide>
          <SplideSlide>
            <TechnologyCard
              image="gsap.png"
              name="GSAP"
              description="Animation Library"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div className="visible-from-sm grid grid-cols-2 md:grid-cols-3 slg:grid-cols-4 lg:grid-cols-5 gap-4">
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
            image="mongodb.png"
            name="MongoDB"
            description="NoSQL Database"
          />
        </SplideSlide>
        <SplideSlide>
          <TechnologyCard
            image="nodejs.png"
            name="Node.js"
            description="JavaScript Runtime"
          />
        </SplideSlide>
        <SplideSlide>
          <TechnologyCard
            image="expressjs.png"
            name="Express.js"
            description="Backend Framework"
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
            image="postman.png"
            name="Postman"
            description="API Testing"
          />
        </SplideSlide>
        <SplideSlide>
          <TechnologyCard
            image="php.png"
            name="PHP"
            description="Server Scripting"
          />
        </SplideSlide>
        <SplideSlide>
          <TechnologyCard
            image="laravel.png"
            name="Laravel"
            description="PHP Framework"
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
            image="bootstrap.png"
            name="Bootstrap"
            description="UI Framework"
          />
        </SplideSlide>
        <SplideSlide>
          <TechnologyCard
            image="gsap.png"
            name="GSAP"
            description="Animation Library"
          />
        </SplideSlide>
      </div>
    </section>
  );
}

export default Technologies;
