import CardProjects from "./cardProjects";

const Projects = () => {
  
    return (
      <section className="py-20 pb-56 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Mes Projets
              </span>
            </h2>
            <p className="text-xl text-justify text-gray-900 mt-10">
              Chaque projet est une opportunité pour moi de repousser mes limites en termes de créativité et d'innovation. 
              Mon approche centrée sur l'utilisateur et ma passion pour le design me permettent de créer des sites web qui répondent aux besoins de mes clients.
            </p>
            {/* <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div> */}
          </div>
  
          {/* Projects Grid */}
          <CardProjects></CardProjects>
        </div>
      </section>
    );
  };
  
  export default Projects;
  