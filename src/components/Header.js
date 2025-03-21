import ProgrammingIllustration from "../images/illustrations/programming-setup.svg";
import { motion } from "framer-motion";

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
          <motion.a
            whileHover={{ fontWeight: "bold", scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.25 }}
            href="#projects-section"
            className="text-[var(--base-color)] font-bold leading-none md:text-lg"
          >
            Projects
          </motion.a>
          <motion.a
            whileHover={{ fontWeight: "bold", scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.25 }}
            href="#contact"
            className="text-[var(--base-color)] font-bold leading-none md:text-lg"
          >
            Contact
          </motion.a>
        </nav>
      </section>

      <section className="flex flex-col gap-8 p-6 pb-0 lg:pb-6 lg:mb-8 lg:flex-row lg:items-center lg:w-[800px] lg:gap-12 lg:mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-center lg:order-2 lg:text-left">
            <h1 className="text-2xl font-bold mb-2">
              Hello world! My name is Veljko.
            </h1>
            <p>junior frontend developer | information technology student</p>
          </div>
        </motion.div>
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
