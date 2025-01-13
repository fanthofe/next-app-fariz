import CarousselSkills from './carousselSkills';

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 sm:text-4xl">
            Fariz Anthofer
          </h2>
          <p className="text-2xl px-20 mt-10">
            Avec plus de 2 ans d'expérience en tant que développeur Fullstack, j'ai acquis 
            une solide expertise grâce à la diversité d'applications que j'ai pu développé. 
            A l'aise sur de multiples environnements de travail (CMS, Microservices), je suis capable
            de m'adapter rapidement afin de répondre au mieux aux besoins clients. 
            <br></br>
            <br></br>
            En effet, mon principal objectif, c'est le Client. 
            Avec ma sensibilité UX/UI, j'ai à coeur de créer des interfaces utilisateur intuitives et esthétiques. 
          </p>
        </div>
      </div>
      <CarousselSkills></CarousselSkills>
    </section>
  );
};

export default Skills;
