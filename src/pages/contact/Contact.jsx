import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import ContactInformation from './ContactInformation';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <SectionTitle
        title="Get In Touch"
        description="Have a project in mind or want to collaborate? Feel free to reach out through the form below."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        {/* Contact Form */}
        <div className="md:col-span-2 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="font-medium text-sm">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
              />
            </div>
            <div>
              <label className="font-medium text-sm">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="font-medium text-sm">Subject</label>
            <input
              type="text"
              placeholder="What is this about?"
              className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
            />
          </div>

          <div>
            <label className="font-medium text-sm">Message <span className="text-red-500">*</span></label>
            <textarea
              placeholder="Your message here..."
              rows={6}
              className="w-full border border-gray-300 rounded-md p-2 bg-gray-50"
            ></textarea>
          </div>

          <button className="bg-sky-500 text-white px-5 py-2 rounded-md hover:bg-sky-600 transition">
            Send Message
          </button>
        </div>

        {/* Contact Info Sidebar */}
        <ContactInformation/>
      </div>
    </div>
  );
};

export default Contact;
