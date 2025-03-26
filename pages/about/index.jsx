import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaBitcoin,
  FaCss3,
  FaEthereum,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaRust,
  FaLaravel,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiWeb3Dotjs,
  SiNextdotjs,
  SiSolidity,
  SiOpensea,
  SiSolana,
  SiFlutter,
} from "react-icons/si";
import {
  RiXrpFill,
} from "react-icons/ri";
import {
  DiRuby
} from "react-icons/di";


import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "Goal",
    info: [
      {
        title: "Business for humanity",
        stage: "Forever",
        // icons: [
        //   FaJs,
        //   FaReact,
        //   SiNextdotjs,
        //   FaLaravel,
        //   FaNodeJs,
        //   DiRuby,
        //   FaPython,
        //   FaJava,
        //   SiFlutter,
        // ],
      },
      // {
      //   title:"Blockchain",
      //   icons: [
      //     FaBitcoin,
      //     FaEthereum,
      //     RiXrpFill,
      //     SiSolana,
      //     SiSolidity,
      //     SiWeb3Dotjs,
      //     FaRust,
      //     SiOpensea
      //   ]
      // },
      // {
      //   title: "UI/UX Design",
      //   icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      // },
    ],
  },
  {
    title: "Significance",
    info: [
      {
        title: "Improved standards of living",
        stage: "In the future",
      },
    ],
  },
  {
    title: "Future",
    info: [
      {
        title: "Digitalization and automation, shifts in global supply chains",
        stage: "within 10 years",
      },
      // {
      //   title: "Senior Software Engineer - PeoplePerHour",
      //   stage: "Jul 2024 - Present",
      // },
      // {
      //   title: "Senior Frontend Engineer - Dendekaden",
      //   stage: "Feb 2023 - Jun 2024",
      // },
      // {
      //   title: "Full Stack Developer - Sotaog",
      //   stage: "Oct 2021 - Jan 2023",
      // },
      // {
      //   title: "Top Rated Developer - Upwork",
      //   stage: "Sep 2018 - Sep 2021",
      // },
    ],
  },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Web Development - ABC University, LA, CA",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Computer Science Diploma - AV Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-black/80 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[220px]"
      >
        <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
          <Image
            src="/avatar-2.png"
            alt="avatar"
            width={737}
            height={678}
            className="translate-z-0 w-full h-full"
          />
        </div>
      </motion.div> */}

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            About <span className="text-accent">Global Trade</span> Professional and Free Investment Training.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 text-white xl:mb-12 px-2 xl:px-0 z-50 text-bio text-shadow-bio"
          >
            10 years ago, I started my professional career. This business encompasses a range of educational resources and programs designed to equip individuals with the knowledge and skills needed to navigate international markets and make informed investment decisions.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40000000} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Interested client.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={370} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Market size($Billion).
                </div>
              </div>

              {/* awards */}
              {/* <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="flex flex-col items-start">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="content-end">{item.stage}</div>
                </div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
