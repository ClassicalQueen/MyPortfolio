import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Projects() {
  const projects = [
    {
      title: 'Carefinder',
      description: 'A web application to help users find and share hospitals in Nigeria.',
      techStack: ['React', 'Firebase', 'TypeScript'],
      liveLink: 'https://care-finder-gray.vercel.app/',
      repoLink: 'https://github.com/ClassicalQueen/CareFinder',
    },
    {
      title: 'My Tech Journey Website',
      description: 'A personal  website to showcasing my tech journey so far.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://hng-stage-one-seven.vercel.app/',
      repoLink: 'https://github.com/ClassicalQueen/HNG-stage-one',
    },
    {
        title: 'Repository Website',
        description: 'A live personal repository website to showcase my projects and skills.',
        techStack: ['Vue', 'Vite', 'CSS'],
        liveLink: 'https://vue-repo-app-neon.vercel.app/',
        repoLink: 'https://github.com/ClassicalQueen/VueRepoApp',
    },
    {
        title: 'Gadget Store',
        description: 'A static web application to help users find and share gadgets in Nigeria.',
        techStack: ['React', 'Vite', 'CSS'],
        liveLink: 'https://gadget-store-ten.vercel.app/',
        repoLink: 'https://github.com/ClassicalQueen/GadgetStore',
    },
  ];

  return (
    <section>
      <Navbar />
      <div className="container">
        <h1>My Projects</h1>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Projects;
