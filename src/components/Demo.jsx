import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

// const resdata = {
//   error: 0,
//   message: "Article extracting success",
//   data: {
//     url: "https://medium.com/@hii_mohit/im-building-a-new-startup-here-s-my-ai-team-ae34217b238a",
//     title: "I’m building a new startup. Here’s my AI team",
//     description:
//       "I love building things on the Internet because it takes less effort, money, and time. With the rise of AI tools, it is even easier now. Even 9 year old kids are creating apps.Don’t miss this opportunity. Your...",
//     links: [
//       "https://medium.com/@hii_mohit/im-building-a-new-startup-here-s-my-ai-team-ae34217b238a",
//     ],
//     image:
//       "https://miro.medium.com/v2/resize:fit:1200/1*vXWzyPPtu3bCpylS3JeJpQ.png",
//     content:
//       '<article><div><div><div><a target="_blank" href="https://medium.com/@hii_mohit?source=post_page---byline--ae34217b238a--------------------------------"><div><p><img alt="Mohit Vaswani" src="https://miro.medium.com/v2/resize:fill:88:88/1*RMWsiluD3e7Jk0CF6Ymskg.jpeg" /></p></div></a></div><p>I love building things on the Internet because it takes less effort, money, and time. With the rise of AI tools, it is even easier now. Even 9 year old kids are creating apps.</p><p>Don’t miss this opportunity. Your idea could earn you millions, even if you’re working alone with a team of AI tools.</p><p>In this article, I have listed tools that I’m using for building my next startup and you can also start using them for free, with no prior experience in coding or anything else.</p><h2 id="1b35">1. bolt.new — Frontend Engineer</h2><p>Bolt.new is an advanced development platform from StackBlitz.</p><p>It lets you create, run, edit, and deploy full-stack web applications right in the browser. This tool uses AI, specifically Anthropic’s Claude AI, to make web development easier.</p><p>It is designed to help even those with little coding experience. It’s best for building working frontends with a very nice UI and functioning.</p><p><strong>Link: </strong><a href="https://bolt.new/" target="_blank">Bolt.new</a></p></div><div><h2 id="3bba">2. Aider chat — Backend Engineer</h2><p>Aider is like having a smart pair programmer in your terminal.</p><p>It helps you write, edit, and fix code quickly. You can ask it to add features, fix bugs, or rewrite parts of your code. It works with your git repo and keeps things organized with automatic commits.</p><p>Aider understands most used coding languages like Python and JavaScript. Whether you’re working on a single file or an entire project, Aider makes coding faster and more enjoyable. It’s a must-have tool for every programmer.</p><p><strong>Link</strong>: <a href="https://aider.chat/" target="_blank">Aider.chat</a></p></div><div><h2 id="0c02">3. Claude AI — Content Creator</h2><p>Claude is a smart AI tool that helps you think, create, and work faster.</p><p>It is made by Anthropic and is designed to keep your ideas safe and private. You can use Claude to write stories, brainstorm ideas, answer difficult questions, or get help with coding.</p><p>Whether you are working alone or with a team, Claude makes it easy to share ideas and collaborate. It is simple to use on your computer or phone. It’s like having a brilliant assistant who is always ready to help you work done.</p><p><strong>Tool:</strong> <a href="https://claude.ai/" target="_blank">Claude.ai</a></p></div><div><h2 id="1341">4. Perplexity AI — Researcher</h2><p>Perplexity is a super smart search engine that understands your questions. It helps you find answers quickly with some of the best Authentic sources out there.</p><p>Whether you want to learn about science, history, or something interesting, just type in your question. And, it provides clear answers and shows you where the information comes from.</p><p>It’s easy, fast, and enjoyable to use. Perplexity makes learning feel like an adventure, turning your curiosity into knowledge in seconds.</p><p><strong>Link:</strong> <a href="https://www.perplexity.ai/" target="_blank">Perplexity.ai</a></p></div><div><h2 id="d76c">5. Canva — Graphic designer</h2><p>Canva now has great AI features to enhance your creativity.</p><p>Its Magic Studio helps you write text, create beautiful images, and edit designs easily. You can also make presentations or edit videos, while the AI handles the complicated tasks.</p><p>This lets you focus on making your designs look great. Whether you’re designing for your business, work, or just for fun, Canva\'s AI makes it quick and creative. It’s like having a design expert right at your fingertips!</p><p><strong>Tool: </strong><a href="https://www.canva.com/" target="_blank">Canva.com</a></p></div><div><h2 id="cd42">Bonus: <a href="https://anotherwrapper.com/?aff=nyLmN" target="_blank">AnotherWrapper ~ Build your AI startup in hours.</a></h2><p><strong><em>Get $100 off for a limited time with discount code “BLACKFRIDAY” at checkout.</em></strong></p><figure><figcaption>AnotherWrapper</figcaption></figure><p>I just got an amazing boilerplate that really changes the game.</p><p>It helps you build your own AI-powered apps or startups in just hours. Everything is already set up and easy to customize, so you don’t need to be an expert in coding.</p><p>It includes 10+ demo apps, making it ten times faster to start your dream project. The AI features are excellent — they are smart, smooth, and very quick. I was amazed at how much time it saved me and how professional everything looks.</p></div><div><p><strong>Follow me on Twitter: </strong><a href="https://x.com/hii_mohit" target="_blank"><strong>hii_mohit</strong></a></p><p>Thanks for Reading!</p></div></div></article>',
//     author: "Mohit Vaswani",
//     favicon:
//       "https://miro.medium.com/v2/5d8de952517e8160e40ef9841c781cdc14a5db313057fa3c3de41c6f5b494b19",
//     source: "medium.com",
//     published: "2024-11-18T09:32:29.884Z",
//     ttr: 119,
//     type: "article",
//   },
// };

export default function Demo() {
  const [article, setArticle] = useState();
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingArticle = allArticles?.find(
      (item) => item.data.url === e.target.value
    );

    if (existingArticle) return setArticle(existingArticle);

    const { data } = await getSummary({ articleUrl: e.target.value });
    console.log(data);

    if (data?.data.content) {
      const updatedAllArticles = [...allArticles, data];

      setArticle(data);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Paste the article link"
            // onChange={(e) => setArticle({ ...article, url: e.target.value })}
            onKeyDown={handleKeyDown}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles?.reverse().map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div
                className="copy_btn"
                onClick={() => handleCopy(item.data?.url)}
              >
                <img
                  src={copied === item.data?.url ? tick : copy}
                  alt={copied === item.data?.url ? "tick_icon" : "copy_icon"}
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.data?.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that wasn&apos;t supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error ?? article.error}
            </span>
          </p>
        ) : article?.data?.content ? (
          <div className="flex flex-col gap-3">
            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
              Article <span className="blue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
              {article.data.image ? (
                <img className="rounded-3xl" src={article.data.image} />
              ) : null}
              <div
                className="prose font-inter font-medium text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.data.content }}
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
