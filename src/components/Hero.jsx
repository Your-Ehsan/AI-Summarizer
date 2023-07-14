import { logo } from "../assets";

function Hero() {
  return (
    <>
      <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
          <img src={logo} alt="logo" className="w-28 object-contain" />
          <button
            onClick={() => window.open("anyurl...", "_blank")}
            className="black_btn"
          >
            Github
          </button>
        </nav>

        <h1 className="head_text">
          Summarize articles with&nbsp;
          <br className="max-md:hidden" />
          <span className="orange_gradient">Open Ai GPT-4</span>
        </h1>
        <h2 className="desc">
          Simplify your reading from summerizer & many more stuff like this one
          i dont know what i am writing there because this is not my work just
          practice.
        </h2>
      </header>
    </>
  );
}

export default Hero;
