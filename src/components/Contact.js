import React from "react";

function Contact() {
  return (
    <section
      className="max-w-[1200px] p-5 pb-0 mx-auto"
      id="contact-section"
      aria-labelledby="contact"
    >
      <h1 id="contact" className="text-2xl lg:text-4xl font-extrabold mb-8">
        Contact me
      </h1>
      <img
        src={require("../images/illustrations/social.png")}
        alt="Social media illustration"
        width="386px"
        height="383px"
        className="lg:mx-auto"
        useMap="#socialmap"
      />
      <map name="socialmap">
        <area
          target="_blank"
          alt="Map link to Instagram profile"
          title="Instagram"
          href="https://www.instagram.com/veljko_jelenkovic"
          coords="125,270,25"
          shape="circle"
        />
        <area
          target="_blank"
          alt="Map link to LinkedIn profile"
          title="LinkedIn"
          href="https://www.linkedin.com/in/veljko-jelenkovi%C4%87-182981250/"
          coords="34,242,26"
          shape="circle"
        />
        <area
          target="_blank"
          alt="Map link to GitHub profile"
          title="GitHub"
          href="https://www.github.com/jelenkoo10"
          coords="28,143,26"
          shape="circle"
        />
        <area
          target="_blank"
          alt="Map link to mail sending"
          title="Email"
          href="mailto:veljkojelenkovic00@gmail.com"
          coords="114,100,27"
          shape="circle"
        />
      </map>
    </section>
  );
}

export default Contact;
