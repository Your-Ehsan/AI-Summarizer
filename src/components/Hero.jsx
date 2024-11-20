import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <header className="w-full flex justify-center items-center flex-col">
        <motion.nav
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex justify-between items-center w-full mb-10 pt-3"
        >
          <div className="flex ">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text">
              Summarizer
            </h1>
          </div>
          <a href="https://github.com/Your-Ehsan/AI-Summarizer" target="_blank" rel="noreferrer">
            <button className="black_btn">Github</button>
          </a>
        </motion.nav>
        <motion.div
          className="h-[calc(100dvh_-_20rem)] grid items-center content-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="head_text">
            Generate Article Summaries Using&nbsp;
            <br className="max-md:hidden" />
            <span className="orange_gradient">Artificial intelligence</span>
          </h1>
          <h2 className="desc text-center">
            With AI, summarizing articles becomes a seamless process, offering
            concise and accurate insights from even the most complex texts.
          </h2>
        </motion.div>
      </header>
    </>
  );
}

export default Hero;
