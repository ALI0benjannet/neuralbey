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
    // Ici vous pouvez ajouter la logique d'envoi
    alert('Your message has been sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-4 rounded-3xl">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 
              className="text-5xl font-bold text-blue-900 mb-4"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg"                 style={{ fontFamily: "'Jost', sans-serif" }}
>
              Questions or comments? Contact us.
            </p>
            <p className="text-gray-600"                 style={{ fontFamily: "'Jost', sans-serif" }}
>
              We'll be happy to respond to you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-200 border-0 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"                 style={{ fontFamily: "'Jost', sans-serif" }}

                />
              </div>
              <div>
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-200 border-0 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"                 style={{ fontFamily: "'Jost', sans-serif" }}

                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"                 style={{ fontFamily: "'Jost', sans-serif" }}

              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"                 style={{ fontFamily: "'Jost', sans-serif" }}

              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 resize-none"                 style={{ fontFamily: "'Jost', sans-serif" }}

              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-900 hover:bg-blue-900 text-white font-semibold py-2 px-10 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
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

export default Contact;