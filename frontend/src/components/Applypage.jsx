import React, { useState } from 'react';

function ApplyPage() {
  // Simule un ID de stage pour la démo
  const id = 'INT-2024-001';
  
  const [formData, setFormData] = useState({
    internshipId: id || '',
    name: '',
    surname: '',
    email: '',
    cv: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      cv: file
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Logique de soumission ici
    alert('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-blue-900 relative overflow-hidden py-12 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-indigo-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/7 right-20 w-2 h-2 bg-blue-300 rounded-full animate-bounce"></div>
      </div>

      {/* Effets arrière-plan : cercles flous */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-24 right-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-32 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-bounce"></div>

      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-2xl p-12 relative z-10">
        <div className="text-center mb-10">
          <h1
            className="text-6xl font-black text-blue-950 mb-4"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Application Form
          </h1>
          <p className="text-blue-800 text-lg mb-8" style={{ fontFamily: "'Jost', sans-serif" }}>
            Join us and grow your skills!
            
            Fill in your information to apply for this internship.
          </p>

          <div className="space-y-8">
            {/* ID of Internship */}
            <input
              type="text"
              name="internshipId"
              placeholder="ID of Internship"
              value={formData.internshipId}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-blue-50 border border-blue-300 rounded-full text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200"
              style={{ fontFamily: "'Jost', sans-serif" }}
            />

            {/* Name and Surname */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-blue-50 border border-blue-300 rounded-full text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200"
                style={{ fontFamily: "'Jost', sans-serif" }}
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-blue-50 border border-blue-300 rounded-full text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200"
                style={{ fontFamily: "'Jost', sans-serif" }}
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 bg-blue-50 border border-blue-300 rounded-full text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200"
              style={{ fontFamily: "'Jost', sans-serif" }}
            />

            {/* Upload CV */}
            <div className="relative">
              <label 
                htmlFor="cv-upload" 
                className="w-full px-5 py-3 bg-blue-50 border border-blue-300 rounded-full text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200 cursor-pointer flex items-center justify-between hover:bg-blue-100"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                <span className={formData.cv ? 'text-blue-900' : 'text-blue-400'}>
                  {formData.cv ? formData.cv.name : 'Upload your CV'}
                </span>
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </label>
              <input
                id="cv-upload"
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-700 to-cyan-500 hover:from-blue-800 hover:to-cyan-600 text-white font-bold py-3 px-12 rounded-full shadow-lg transition transform hover:scale-[1.05]"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyPage;