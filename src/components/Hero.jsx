function Hero() {
  return (
    <>
      <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
          <div className="flex ">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text">
              Summarizer
            </h1>
          </div>
          <button className="black_btn">Github</button>
        </nav>

        <h1 className="head_text">
          Generate Article Summaries Using&nbsp;
          <br className="max-md:hidden" />
          <span className="orange_gradient">Artificial intelligence </span>
        </h1>
        <h2 className="desc">
          With OpenAI GPT-4, summarizing articles becomes a seamless process,
          offering concise and accurate insights from even the most complex
          texts.
        </h2>
      </header>
    </>
  );
}

export default Hero;
