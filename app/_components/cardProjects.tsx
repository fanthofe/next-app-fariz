import Image from 'next/image';
import Link from 'next/link';

const CardProjects = () => {
    const projects = [
      {
        id: 1,
        title: "Momentum",
        image: "momentum.png",
        description: "J'ai beaucoup aimé travailler sur ce projet car le style graphique simple et épurée me plait énormément. Cette refonte a été très instructive pour moi car il s'agit de l'un de mes premiers projets d'intégration avec Wordpress. J'utilise essentiellement le plugin ACF pour l'implémentation des données via le back-office (php) et du javascript vanilla pour la partie dynamique.",
        tags: ["Refonte du site"],
        url: "https://www.momentum-assurances.fr/"
      },
      {
        id: 2,
        title: "CSB School",
        image: "csb.png",
        description: "Pour ce site vitrine, j'utilise également Wordpress (ACF) et du JS Vanilla. Chaque projet est challengeant mais celui-ci l'a été d'autant plus parce que le développement de cette page était complexe techniquement (objet de design spécifique, responsive).",
        tags: ["Refonte partielle"],
        url: "https://www.csb.school/formation-sur-mesure/"

      },
      {
        id: 3,
        title: "CER Réseau",
        image: "cer.png",
        description: "J'ai participé à la mise en place d'un store locator développé en Symfony / Twig pour faciliter le temps de chargement des données. A partir d'une maquette sous AdobeXD, j'ai pu facilement intégrer tous les éléments de cette page afin qu'elle soit esthétique et responsive.",
        tags: ["Refonte partielle"],
        url: "https://auto-ecole.cer-reseau.com/nos-centres-de-formation/rhone-69/360-cer-oullins-oullins/"

      },
      {
        id: 4,
        title: "Dr. Cinik",
        image: "cinik.png",
        description: "Je suis intervenu uniquement sur la refonte de la page d'accueil. Etant également l'un de mes premiers projets d'intégration avec Wordpress, je ne suis pas peu fier du résultat.",
        tags: ["Refonte partielle"],
        url: "https://emrahcinik.com/fr/"
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
                <Link className="pointer-events-auto" href={project.url}>
                  <Image
                    src={`/projects/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                  />
                </Link>
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div> */}
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
  