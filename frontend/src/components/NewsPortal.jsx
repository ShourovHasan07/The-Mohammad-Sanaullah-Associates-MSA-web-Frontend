import { useState, useEffect } from "react";

const BreakingNews = () => {
  const [news, setNews] = useState([
    "🔴 Breaking: Our office will be closed on Friday and Saturday.",
    "🗓️ Working Day: Our office working days are from Monday to Thursday.",
    "🗓️ Office Time : 9 AM  - 4 PM  ",
  ]);

  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 10000); // Change news every 7 seconds

    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <div className="bg-black mt-6 text-white py-3 px-4 flex items-center">
      <span className="font-extrabold text-2xl lg:text-3xl mr-4 animate-pulse">
        🔥 Breaking News:
      </span>
      <div className="w-full overflow-hidden">
        <marquee className="text-lg lg:text-xl font-bold uppercase tracking-wide">
          {news[currentNewsIndex]}
        </marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
