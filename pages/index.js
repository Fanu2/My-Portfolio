import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact'; 
import Skills from '../components/Skills'; 
import Testimonials from '../components/Testimonials'; 
import About from '../components/About'; // Import the About component
import { fetchRepositories } from '../utils/github'; 

export default function Home() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const getRepositories = async () => {
      try {
        const repos = await fetchRepositories();
        setRepositories(repos);
      } catch (error) {
        console.error(error);
      }
    };

    getRepositories();
  }, []);

  return (
    <div>
      <Navbar />
      <header className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>A showcase of my work and GitHub repositories</p>
      </header>
      
      <section id="projects" className="projects">
        <h2>My GitHub Repositories</h2>
        <div className="project-list">
          {repositories.map((repo) => (
            <ProjectCard
              key={repo.id}
              title={repo.name}
              description={repo.description || 'No description available'}
              imageUrl={repo.owner.avatar_url}
              link={repo.html_url}
            />
          ))}
        </div>
      </section>

      <Skills />
      <Testimonials />
      <About /> {/* Include the About component here */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      
      <style jsx>{`
        .hero {
          text-align: center;
          padding: 60px 0;
          background-color: #f4f4f4;
        }
        .projects {
          padding: 20px;
        }
        .project-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
      `}</style>
    </div>
  );
}
