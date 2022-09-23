import React from "react";
import bank_reactapp from "../assets/portfolio/bank_reactapp.png";
import weather_app from "../assets/portfolio/weather_app.png";
import video_tube from "../assets/portfolio/video_tube.png";
import tesla_clone from "../assets/portfolio/tesla_clone.png";
import netflix_clone from "../assets/portfolio/netflix_clone.png";
import restate from "../assets/portfolio/restate.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bank_reactapp,
      demo: 'https://calm-lamington-13488f.netlify.app',
      code: 'https://github.com/RMI11/Bank_Modern_App_ReactJS/tree/main/bank_modern_app'
    },
    {
      id: 2,
      src: tesla_clone,
      demo: 'https://visionary-pixie-f26c55.netlify.app',
      code: 'https://github.com/RMI11/Tesla-Clone'
    },
    {
      id: 3,
      src: video_tube,
      demo: 'https://eclectic-bunny-bfd181.netlify.app',
      code: 'https://github.com/RMI11/VideoTube_ReactJS/tree/main/video_tube'
    },
    {
      id: 4,
      src: netflix_clone,
      demo: 'https://netflix-react-clone-803f3.web.app/',
      code: 'https://github.com/RMI11/Netflix-Clone_ReactJS'
    },
    {
      id: 5,
      src: weather_app,
      demo: 'https://silver-bublanina-9fccd2.netlify.app/',
      code: 'https://github.com/RMI11/Weather-App'
    },
    {
      id: 6,
      src: restate,
      demo: 'https://silly-rolypoly-303c4d.netlify.app/',
      code: 'https://github.com/RMI11/Real-Estate-WebPage'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen h-full pt-5"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target='_blank'>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target='_blank' >Code</a> 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
