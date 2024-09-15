import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <section>
      <Navbar />
      <div className="about-section">
        <h1>About Me</h1>
        <p>
          Hello! I'm Desiree Onyinyechi Chukwuji, a certified and passionate frontend developer with experience
          in building web applications using React, JavaScript, and other modern technologies.
          I focus on creating user-friendly, visually engaging, and accessible interfaces.
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default About;
