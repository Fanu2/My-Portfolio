// components/About.js

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hello! I'm [Your Name], a passionate web developer based in [Your Location]. 
          With a strong background in [Your Background, e.g., Computer Science, Graphic Design], 
          I love creating beautiful and functional web applications that improve user experiences.
        </p>
        <p>
          I specialize in technologies like <strong>JavaScript</strong>, <strong>React</strong>, 
          and <strong>Next.js</strong>. I enjoy solving complex problems and continuously strive to enhance my skills.
        </p>
        <p>
          When I'm not coding, you can find me [your hobbies or interests, e.g., hiking, reading, or working on personal projects].
        </p>
      </div>
      <style jsx>{`
        .about-section {
          padding: 20px;
          background-color: #f9f9f9;
        }
        .about-content {
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
      `}</style>
    </section>
  );
};

export default About;
