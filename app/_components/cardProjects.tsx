import Image from 'next/image';

const CardProjects = () => {
    const projects = [
      {
        id: 1,
        title: "E-commerce Modern",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
        description: "Application e-commerce complète avec panier, paiement et gestion des commandes.",
        tags: ["React", "Node.js", "MongoDB"]
      },
      {
        id: 2,
        title: "Dashboard Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
        description: "Tableau de bord interactif avec visualisation de données en temps réel.",
        tags: ["Vue.js", "D3.js", "Firebase"]
      },
      {
        id: 3,
        title: "Application Mobile",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60",
        description: "Application mobile cross-platform pour la gestion de tâches et la productivité.",
        tags: ["React Native", "Redux", "Node.js"]
      },
      {
        id: 4,
        title: "Plateforme Education",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
        description: "Plateforme d'apprentissage en ligne avec cours vidéo et quiz interactifs.",
        tags: ["Next.js", "TypeScript", "PostgreSQL"]
      },
      {
        id: 5,
        title: "Réseau Social",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
        description: "Réseau social professionnel avec messagerie instantanée et partage de contenu.",
        tags: ["React", "GraphQL", "AWS"]
      },
      {
        id: 6,
        title: "Portfolio Artiste",
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=60",
        description: "Site vitrine moderne pour artiste avec galerie d'œuvres et système de réservation.",
        tags: ["Gatsby", "Tailwind", "Strapi"]
      }
    ];
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id}>
            <div
            className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                  <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                      <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm"
                      >
                      {tag}
                      </span>
                  ))}
                </div>
            </div>

            <div className="pt-2">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                {project.description}
                </p>
            </div>
          </div>
        ))}
        </div>
    );
  };
  
  export default CardProjects;
  