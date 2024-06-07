// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="home">
      <h1>Security Demonstration</h1>
      <p>Learn about sniffing, spoofing, and phishing attacks through interactive demonstrations.</p>
      <nav>
        <ul>
          <li><Link to="/sniffing">Sniffing Attack</Link></li>
          <li><Link to="/spoofing">Spoofing Attack</Link></li>
          <li><Link to="/phishing">Phishing Attack</Link></li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Home;
