import React from 'react';
import Navbar from '../components/Navbar';
import HeroInternships from '../components/HeroInternships';
import InternshipList from '../components/InternshipList'; 

function Internships() {
  return (
    <div>
      <Navbar />
      <HeroInternships />
      <InternshipList />
    </div>
  );
}

export default Internships;
