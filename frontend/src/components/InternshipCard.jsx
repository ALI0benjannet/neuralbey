import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Code, Briefcase } from 'lucide-react';

function InternshipCard({ 
  id,
  image, 
  title, 
  description, 
  duration, 
  location, 
  technologies, 
  type,
  company
}) {
  const navigate = useNavigate();

 const handleApplyClick = () => {
  navigate(`/apply`);
};

  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border border-gray-100 w-full max-w-sm">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {type || "Internship"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">{title}</h3>
          {company && (
            <p className="text-blue-600 font-medium text-sm">{company}</p>
          )}
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-2 text-blue-500" />
            <span>{duration}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <Briefcase className="w-4 h-4 mr-2 text-blue-500" />
            <span>{type}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 mb-4">{description}</p>

        {technologies && (
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <Code className="w-4 h-4 mr-2 text-blue-500" />
              <span className="text-sm font-medium text-gray-900">Required Skills</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleApplyClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default InternshipCard;
