import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="intro-section">
        <h1>Giona Tech: India’s Most Valued Digital Assets Company</h1>
        <p>
          Enjoy the ride to pioneering the Indian Digital Assets and Web3 Industry with Giona Tech
        </p>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h3>Trust of</h3>
          <p className="stat-number">1.6 Cr+</p>
          <i className="fas fa-users fa-2x stat-icon"></i>
          <p>Registered Users</p>
        </div>
        <div className="stat-card">
          <h3>Home To</h3>
          <p className="stat-number">500+</p>
          <i className="fas fa-coins fa-2x stat-icon"></i>
          <p>Digital Assets</p>
        </div>
        <div className="stat-card">
          <h3>Quarterly</h3>
          <p className="stat-number">79.6 Cr+</p>
          <i className="fas fa-chart-line fa-2x stat-icon"></i>
          <p>Trading Volume</p>
        </div>
      </section>

      <section className="mission-section">
        <h2>Simple, secure & compliant solutions</h2>
        <p>Giona Tech is making digital assets accessible</p>
        <p>
          GIONA TECHNOLOGIES PRIVATE LIMITED is a newly incorporated private company in India,
          established on June 11, 2025. It's registered under the name GIONA TECHNOLOGIES PRIVATE LIMITED,
          with the CIN (Corporate Identification Number) U63119TN2025PTC181362. The company is based in
          Palayamkottai, Tirunelveli.
        </p>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Simple:</strong> We take pride in our ability to create user experiences that are simple no matter the complexity of the underlying technology.</li>
          <li><strong>Safe:</strong> Our team constantly audits and builds upon existing protocols to ensure that our security is up-to-date.</li>
          <li><strong>Compliant:</strong> The pillar of compliance has enabled us to be one of the pioneers in India to implement digital asset AML monitoring.</li>
        </ul>
      </section>

      <section className="founders-section">
        <h2>Our Founders</h2>
        <div className="founder-card">
          <h3>Manoj Gunastephen</h3>
          <p>CEO, Giona Tech</p>
          <p>
            Giona technology was founded by Manoj Gunastephen. Manoj Gunastephen serves as the CEO.
            He is an IIT Bombay graduate who met while studying Marketing.
            Giona was launched in June 2025 with the goal of making virtual assets accessible to Indians.
          </p>
        </div>
      </section>

      <section className="join-section">
        <h2>Join us to build the Indian Digital Assets Ecosystem together</h2>
        <button className="apply-btn">Apply Now</button>
      </section>
    </div>
  );
};

export default About;
