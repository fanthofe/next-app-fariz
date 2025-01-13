import CardProjects from "./cardProjects";
import CallToAction from "./cta";

const Projects = () => {
  
    return (
      <section className="relative py-20 pb-56 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Mes Projets
              </span>
            </h2>
            <p className="text-xl text-gray-900 mt-10">
              J'essaie de mettre à jour régulièrement afin de vous apporter mes dernières réalisations.
              <br></br>
              Du site vitrine à l'application de gestion, j'ai décidé de vous montrer mes meilleures réalisations.
            </p>
            {/* <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div> */}
          </div>
  
          {/* Projects Grid */}
          <CardProjects></CardProjects>
        </div>
        <CallToAction></CallToAction>
      </section>
    );
  };
  
  export default Projects;
  