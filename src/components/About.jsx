import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen h-full bg-gradient-to-b from-gray-800 to-black text-white pt-5"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl md:mt-20 mt-5">
          I'm a Front-End Developer located in Serbia. I have a passion for web programming. 
          Creating UI effects, animation, and creating an intuitive, 
          dynamic user experience is a real challenge for me.
        </p>

        <br />

        <p className="text-xl">
        I am very well organized, quickly and qualityly solving every problem that gets in my way. 
        I also pay close attention to the details.
        I spend most of my time on the computer doing both my own and my client's projects.
        I can also say that I am a family man and a father of two beautiful children
        </p>
      </div>
    </div>
  );
};

export default About;
