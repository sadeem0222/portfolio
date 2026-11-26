
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">SA.</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">SOFTWARE QUALITY ASSURANCE</p>

            <h1>
              Hello! I Am <span>Sadeem Abulaziz.</span>
            </h1>

            <h2>
              Aspiring Software QA Engineer
              <br />
              Manual & Automation Testing
            </h2>

            <p className="hero-description">
              Passionate about software quality, testing, and building
              reliable applications. Experienced in manual and automation
              testing, API testing, and software development.
            </p>

            <a href="#projects" className="primary-btn">
              Explore My Work
            </a>
          </div>

          <div className="hero-visual">
            <div className="glow-circle">
              <span>QA</span>
              <small>QUALITY ASSURANCE</small>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <h2>I'm a Software Engineer.</h2>

          <p>
            Driven by curiosity and a passion for technology, I explore
            the intersection of Software Quality Assurance and Artificial
            Intelligence.
          </p>

          <p>
            From testing software to independently exploring AI, I enjoy
            learning, experimenting, and turning ideas into smarter
            digital experiences.
          </p>

        <section className="experience" id="experience">
          <h2>Work Experience</h2>

          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-icon">💻</div>

              <div>
                <h3>Software Engineering Intern</h3>
                <p>
                  Contributed to web application development using React,
                  JavaScript, and CSS, while working on chatbot interfaces
                  and backend appointment management.
                </p>
                <span>Armed Forces Hospital</span>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-icon">🧪</div>

              <div>
                <h3>Software Testing Trainee</h3>
                <p>
                  Developed practical skills in manual and automated
                  testing, API testing, test case design, and defect
                  tracking using Selenium, Cucumber, TestNG, Postman,
                  and Jira.
                </p>
                <span>SDA – Software Testing Bootcamp</span>
              </div>
            </div>
          </div>
        </section>

        <section className="learning" id="learning">
          <h2>Self-Learning & Personal Projects</h2>

          <div className="learning-grid">
            <div className="learning-card">
              <div className="learning-icon">🪄</div>

              <div>
                <h3>AI & Machine Learning</h3>
                <p>
                  Exploring AI and Machine Learning through independent
                  learning and hands-on projects, with a growing interest
                  in applying AI to software testing.
                </p>
              </div>
            </div>

            <div className="learning-card">
              <div className="learning-icon">🚀</div>

              <div>
                <h3>Masari AI – AI-Powered Job Analysis</h3>
                <p>
                  Building an AI-powered application that analyzes resumes
                  and job descriptions, identifies skill gaps, and provides
                  personalized career insights.
                </p>
                <span>Currently in Development</span>
              </div>
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="skills-content">
            <h2>
              I'm passionate about building better software
              <br />
              through <span>quality, testing,</span> and technology.
            </h2>

            <div className="skills-icons">
              <div className="skill-icon selenium">Se</div>
              <div className="skill-icon postman">P</div>
              <div className="skill-icon cucumber">C</div>
              <div className="skill-icon testng">TestNG</div>
              <div className="skill-icon jira">J</div>
              <div className="skill-icon github">GH</div>
              <div className="skill-icon java">Java</div>
              <div className="skill-icon python">Py</div>
              <div className="skill-icon javascript">JS</div>
              <div className="skill-icon react">⚛</div>
              <div className="skill-icon sql">SQL</div>
              <div className="skill-icon html">5</div>
              <div className="skill-icon css">3</div>
            </div>

            <div className="skills-orbit">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="orbit orbit-three"></div>

              <div className="orbit-center">
                <span>QA</span>
              </div>

              <div className="orbit-dot dot-one"></div>
              <div className="orbit-dot dot-two"></div>
              <div className="orbit-dot dot-three"></div>
              <div className="orbit-dot dot-four"></div>
            </div>
          </div>
        </section>

        </section>

        <section className="projects" id="projects">
          <h2>Featured Projects</h2>

          <div className="project-card">
            <div className="project-visual bazaar-visual">
              <span>BAZAAR</span>
              <small>SOFTWARE TESTING</small>
            </div>

            <div className="project-info">
              <span className="project-label">Featured Project</span>
              <h3>BazaarStore – Software Testing</h3>
              <h4>Manual & Automated Testing</h4>
              <p>
                A comprehensive testing project focused on validating
                web application functionality through manual and
                automated testing. Designed test cases, performed API
                testing, tracked defects, and implemented automated
                test scenarios using Selenium, Cucumber, and TestNG.
              </p>
            </div>
          </div>

          <div className="project-card reverse">
            <div className="project-visual naqel-visual">
              <span>NAQEL</span>
              <small>LOGISTICS PLATFORM</small>
            </div>

            <div className="project-info">
              <span className="project-label">Featured Project</span>
              <h3>Naqel – Logistics Platform</h3>
              <h4>Graduation Project</h4>
              <p>
                A logistics platform developed to streamline shipment
                tracking, supplier management, analytics, and procurement
                processes while supporting regulatory compliance.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-visual masari-visual">
              <span>MASARI AI</span>
              <small>AI-POWERED JOB ANALYSIS</small>
            </div>

            <div className="project-info">
              <span className="project-label">In Development</span>
              <h3>Masari AI – AI-Powered Job Analysis</h3>
              <h4>Artificial Intelligence</h4>
              <p>
                An AI-powered application that analyzes resumes and job
                descriptions, identifies skill gaps, and provides
                personalized career insights.
              </p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Let's Connect!</h2>

          <p>
            I'm always open to new opportunities, meaningful
            collaborations, and connecting with people who share
            a passion for technology and innovation.
          </p>

          <p>
            Have an opportunity or a project in mind?
            <span> Let's connect!</span>
          </p>

          <a href="mailto:sadharthi24@gmail.com" className="email-btn">
            sadharthi24@gmail.com
          </a>

          <div className="social-links">
            <a href="https://github.com/sadeem0222" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <span>|</span>

            <a href="https://www.linkedin.com/in/sadeem-alharthi-ab20262ab" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App
