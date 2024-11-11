import homePages from "../assets/images/homepages.png";
import spotify_image from "../assets/images/spotify_image.png";
import desk_app from "../assets/images/desk_app.png";
import currency from "../assets/images/currency.png";
import ecommerce from "../assets/images/ecommerce.png";
import GrainImg from "../assets/images/grain.jpg";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import SectionHeader from "./SectionHeader";

function FeatureProjects() {
  const portfolioProjects = [
    {
      // company: "Personal Project",
      // year: "2023",
      title: "Netflix, Amazon, and YouTube Clones",
      results: [
        { title: "Designed responsive clones with pure HTML and CSS" },
        { title: "Demonstrated strong understanding of layout and styling" },
        { title: "Achieved 84.8% similarity to original interfaces" },
      ],
      link: "https://github.com/Amaansari/Youtube-Clone",
      image: homePages, 
    },
    {
      // company: "Personal Project",
      // year: "2023",
      title: "LAN Messaging Application",
      results: [
        { title: "Developed a LAN-based messaging app in Java" },
        { title: "Implemented client-server architecture with Socket programming" },
        { title: "Enabled local network communication with user-friendly UI" },
      ],
      link: "https://github.com/Amaansari/Java-ChatApp",
      image: desk_app, 
    },
    {
      // company: "Personal Project",
      // year: "2023",
      title: "Spotify Clone",
      results: [
        { title: "Created responsive Spotify UI clone with HTML, CSS, and JavaScript" },
        { title: "Utilized dynamic styling and layout techniques" },
        { title: "Achieved seamless interface similar to original Spotify design" },
      ],
      link: "https://github.com/Amaansari/Spotify-Clone",
      image: spotify_image, 
    },
    {
      // company: "Personal Project",
      // year: "2023",
      title: "Currency Converter App",
      results: [
        { title: "Developed using JavaScript and API integration" },
        { title: "Enabled real-time currency conversion between multiple currencies" },
        { title: "Enhanced user experience with dynamic, responsive UI" },
      ],
      link: "https://github.com/Amaansari/Currency-Converter",
      image: currency, 
    },
    {
      // company: "Personal Project",
      // year: "2023",
      title: "E-commerce Web App",
      results: [
        { title: "Built with React.js and Firebase for real-time data and auth" },
        { title: "Implemented user authentication and dynamic product catalog" },
        { title: "Created responsive, interactive interface for seamless shopping" },
      ],
      link: "https://github.com/Amaansari/E-commerce-Web-App-React.Js-firebase-",
      image: ecommerce, 
    },
  ];
  

  return (
    <section
      id="project"
      className="pb-16 pt-5"
      aria-labelledby="featured-projects"
      role="region"
    >
      <div className="container py-20 max-w-5xl w-full ">
      <SectionHeader
        tag="Portfolio Highlights"
        title="My Projects"
        description="Explore some of the personal projects I've built to sharpen my skills in web development, UI design, and backend functionality."
      />

        <div className="mt-10 md:mt-20 flex flex-col gap-16">
          {portfolioProjects.map((project, index) => (
            <article
              key={index}
              className="w-full gap-10 bg-gray-800 rounded-2xl relative z-0 overflow-hidden shadow-2xl px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 border-white/20 border-[3px]"
              role="article"
              aria-label={project.title}
            >
              {/* grains background image  */}
              <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{ backgroundImage: `url(${GrainImg})` }}
                role="presentation"
                aria-hidden="true"
              ></div>
              <div className="md:grid md:grid-cols-2 lg:gap-16">
                <div className="md:pb-12 lg:pb-16">
                  {/* <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex font-bold uppercase tracking-normal text-sm  gap-1">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div> */}

                  <h3 className="text-2xl md:text-3xl mt-2 font-serif">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 items-center text-sm text-white/60"
                      >
                        <span>
                          <RiCheckboxCircleLine
                            size={18}
                            className="text-emerald-300/50"
                            role="presentation"
                            aria-hidden="true"
                          />
                        </span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold mt-8 flex gap-2 items-center justify-center hover:bg-white/80 duration-200">
                      <span>View Project Details</span>
                      <MdArrowOutward size={20} />
                    </button>
                  </a>
                </div>
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" object-cover lg:absolute lg:h-full md:mt-0 md:mb-0 mt-4 overflow-hidden -mb-2 hover:scale-110 duration-300 lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureProjects;
