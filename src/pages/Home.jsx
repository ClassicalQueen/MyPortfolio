import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <section>
      <Navbar />
      <section className="home-section">
        <h2>Hello, I am Desiree Onyinyechi Chukwuji, a frontend developer.</h2>
        <p><img src="src/assets/mine.jpg" alt="Desiree Onyinyechi Chukwuji" className="mine" />
        <Link to="/projects">
          <button>View My Projects</button>
        </Link>
        </p>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
