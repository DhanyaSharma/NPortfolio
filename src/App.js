import './App.css';
import myPhoto from './assets/myphoto.jpg';

function App() {
  const projects = [
    
    {
      name: 'Page Clustering (Text Clustering)',
      link: 'https://page-clustering009988.streamlit.app/',
    },
    {
      name: 'Heart Disease Prediction (ML)',
      link: 'https://github.com/DhanyaSharma/ML--Heart-Disease-Prediction',
    },
    {
      name: 'Hospital Donation Page',
      link: 'https://hdpage.netlify.app/',
    },
  ];

  return (
    <div className="app">
      <header className="header">
  <div className="intro-text">
    <h1>Dhanya Sharma</h1>
    <p>Aspiring Software Developer | ML Enthusiast | Tech Explorer</p>
  </div>
  <img src={myPhoto} alt="Dhanya" className="profile-photo" />
</header>



      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noreferrer">
              <div className="project-card">{project.name}</div>
            </a>
          ))}
        </div>
      </section>
      

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:dhanya.sharma2004@gmail.com">dhanya.sharma2004@gmail.com</a></p>
        <p>
          LinkedIn:{' '}
          <a href="http://linkedin.com/in/dhanya-s-b59260215/" target="_blank" rel="noreferrer">
            Profile
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/DhanyaSharma" target="_blank" rel="noreferrer">
            DhanyaSharma
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
