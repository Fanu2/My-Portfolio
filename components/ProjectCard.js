// components/ProjectCard.js

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
      <style jsx>{`
        .project-card {
          border: 1px solid #ccc;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        .project-card:hover {
          transform: scale(1.05);
        }
        img {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
