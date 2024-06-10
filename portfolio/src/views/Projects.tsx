// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/_.jpeg";

// components
import { Button, Card } from "../components";

// data
import { projects } from "../data";

type Category = "web" | "uiUx";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("uiUx");

  const filterProjects = () => {
    if (activeCategory === "uiUx") {
      return projects.filter((items) => items.category === "uiUx");
    } else {
      return projects.filter((items) => items.category === "web");
    }
  };
  return (
    <div
      id="projects"
      className="min-h-screen  relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto ">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            My recent <span className="text-secondary">Projects</span>
          </h1>
          <div className="flex items-center justify-center gap-4  xl:justify-start flex-col sm:flex-row">
            <Button
              secondary={activeCategory === "uiUx" ? true : false}
              onClick={() => setActiveCategory("uiUx")}
            >
              UI/UX
            </Button>
            <Button
              secondary={activeCategory === "web" ? true : false}
              onClick={() => setActiveCategory("web")}
            >
              Web design
            </Button>
          </div>
          <div className="flex gap-12 mt-12 flex-wrap justify-center">
            {filterProjects().map((items) => (
              <Card imgSrc={items.img} title={items.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
