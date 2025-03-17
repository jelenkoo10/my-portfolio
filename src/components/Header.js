import ProgrammingIllustration from "../images/illustrations/programming-setup.svg";

function Header() {
  return (
    <header>
      <section
        className="flex justify-between items-center p-6 lg:max-w-[1200px] lg:mx-auto"
        id="home"
      >
        <img
          src={require("../images/icons/welcome.png")}
          alt="Icon that says `welcome`"
          className="w-20 lg:w-24"
        />
        <nav className="flex items-center justify-end gap-4 pt-1 md:gap-8">
          <a
            href="#projects"
            className="text-[var(--base-color)] font-bold leading-none md:text-lg"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-[var(--base-color)] font-bold leading-none md:text-lg"
          >
            Contact
          </a>
        </nav>
      </section>

      <section className="flex flex-col gap-8 p-6 mb-8 lg:flex-row lg:items-center lg:w-[800px] lg:gap-12 lg:mx-auto">
        <div className="text-center lg:order-2 lg:text-left">
          <h1 className="text-2xl font-bold mb-2">
            Hello world! My name is Veljko.
          </h1>
          <p>junior frontend developer | information technology student</p>
        </div>
        <img
          src={ProgrammingIllustration}
          alt="Illustration of technological devices"
          className="max-w-[300px] mx-auto lg:order-1 lg:mx-0"
        />
      </section>
    </header>
  );
}

export default Header;
