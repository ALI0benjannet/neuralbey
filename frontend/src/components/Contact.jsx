import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Submitted data:', formData);
    alert('Your message has been sent successfully!');
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
            Contact Us
          </h1>
          <p className="text-blue-800 text-lg mb-1" style={{ fontFamily: "'Jost', sans-serif" }}>
            Questions or comments? Contact us.
          </p>
          <p className="text-blue-800" style={{ fontFamily: "'Jost', sans-serif" }}>
            We'll be happy to respond to you.
          </p>
        </div>

        <div className="space-y-8">
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

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-3 bg-blue-50 border border-blue-300 rounded-full text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200"
            style={{ fontFamily: "'Jost', sans-serif" }}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-5 py-3 bg-blue-50 border border-blue-300 rounded-full text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200"
            style={{ fontFamily: "'Jost', sans-serif" }}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-3 bg-blue-50 border border-blue-300 rounded-2xl text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-200 resize-none"
            style={{ fontFamily: "'Jost', sans-serif" }}
          ></textarea>

          <div className="text-center pt-4">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-700 to-cyan-500 hover:from-blue-800 hover:to-cyan-600 text-white font-bold py-3 px-12 rounded-full shadow-lg transition transform hover:scale-[1.05]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
