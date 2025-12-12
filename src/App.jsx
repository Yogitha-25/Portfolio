import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="card">
         <aside className="side">
          <div className="photo-wrapper">
            <img
              src="/profile.jpg"   
              alt="Your portrait"
              className="photo"
            />
          </div>

          <h1 className="name"> Hazel Montague </h1>
          <p className="role">Software engineer</p>

          <nav className="nav">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </aside>
         <main id="home" className="main">
          <p className="tag">PORTFOLIO</p>

          <h1 className="title">
            This is <span className="accent"> Hazel Montague </span>
          </h1>

          <h2 className="subtitle">I&apos;m a Enthusiastic Software Engineer</h2>

          <p className="text">
             Passionate about leveraging cutting-edge technology and innovative coding practices to solve complex, real-world challenges efficiently.
             
             Committed to mastering new languages and frameworks, consistently seeking opportunities for professional growth and staying ahead of industry trends.
             
             Dedicated to building high-quality, scalable software solutions that deliver tangible user value and drive business success.
             
             A team player thriving in dynamic environments, utilizing strong communication skills to mentor peers and jointly develop impactful software products.
          </p>

          <div className="buttons">
            <a href="#" className="btn primary">
              Download CV
            </a>
            <a href="#about" className="btn outline">
              More Details
            </a>
          </div>
          <section id="about">
              <h2>About Me</h2>
              <p>
               I'm a creative and analytical software developer with a knack for building dynamic, user-friendly applications.
               My journey in tech began with a deep curiosity for how things work, evolving into a specialization in modern frameworks like React and Node.js. I'm passionate about the entire development lifecycle, from initial design to seamless deployment,
               and I consistently aim to create high-quality products that exceed expectations. Let's leverage technology to build something amazing together.
              </p>
          </section>
          <section id="experience">
            <h2>Professional Experience</h2>
            <p>
              <ul>
               <li>Software Engineer | Innovative Solutions Ltd., San Francisco, CA | Jan 2019 – May 2021
               Developed and maintained web applications using React and Node.js, improving user engagement by 25%.
               Collaborated with cross-functional teams to design RESTful APIs and integrated third-party services, enhancing application functionality and performance.</li>
          
               <li>Senior Software Engineer | TechCorp Innovations, New York, NY | June 2021 – Present
               Architected and implemented a microservices-based platform using Python, Django, and AWS, enhancing system scalability by 300%.
               Spearheaded the optimization of core database queries and introduced Redis caching, slashing API response times from 850ms to 190ms and cutting database load by 40%.</li>
              </ul>
            </p>
          </section>
          <section id="portfolio">
            <h2>Portfolio</h2>
            <p>Here are some projects I have worked on recently:</p>
            <ul>
               <li> React Landing Page – responsive homepage with hero, features, and footer.</li>
               <li> Dashboard UI – cards and charts layout using CSS Grid/Flexbox.</li>
            </ul>
          </section>
          <section id="contact"> 
            <h2>Contact</h2>
            <p>Email: Hazel@example.com</p>
            <p>GitHub: github.com/Montague_Hazel</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
