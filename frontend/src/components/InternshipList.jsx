// InternshipList.jsx
import React from 'react';
import { internships } from '../data/internships'; 
import InternshipCard from './InternshipCard';

function InternshipList() {
  return (
    <div className="mt-4 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {internships.map((internship) => (
        <InternshipCard
          key={internship.id}
          image={internship.image}
          title={internship.title}
          duration={internship.duration}
          description={internship.description}
          location={internship.location}
          technologies={internship.technologies}
          type={internship.type}


        />
      ))}
    </div>
  );
}

export default InternshipList;
