import React from 'react';
import './Reference.css';

function Reference() {
  return (
    <div className="reference">
      <header className="reference-header">
        <h2>Reference Page</h2>
        <p>Here are the resources and materials used in the creation of this website. We appreciate and credit the following:</p>
      </header>

      <div className="reference-content">
        <h3>Image Credits</h3>
        <ul>
          <li>
            Unsplash: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">https://unsplash.com</a>
          </li>
          <li>
            Pexels: <a href="https://pexels.com" target="_blank" rel="noopener noreferrer">https://pexels.com</a>
          </li>
        </ul>

        <h3>Website Development Resources</h3>
        <ul>
          <li>
            React Documentation: <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">https://reactjs.org/docs/getting-started.html</a>
          </li>
          <li>
            CSS Tricks: <a href="https://css-tricks.com" target="_blank" rel="noopener noreferrer">https://css-tricks.com</a>
          </li>
        </ul>

        <h3>Other Credits</h3>
        <ul>
          <li>Google Fonts: Poppins</li>
          <li>EmailJS for Contact Form Integration</li>
        </ul>

        <h3>Required Documents</h3>
        <ul>
          <li>
            <a href="/path-to-student-copyright-checklist.pdf" download>Student Copyright Checklist (PDF)</a>
          </li>
          <li>
            <a href="/path-to-work-log.pdf" download>Work Log (PDF)</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Reference;
