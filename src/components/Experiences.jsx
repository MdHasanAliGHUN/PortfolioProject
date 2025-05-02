import React from 'react';
import experience from '../data/experiences';

const Experiences = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Education Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-1 text-blue-600">🎓 Education</h3>
        {experience.education.map((edu, index) => (
          <div key={index} className=" mb-4">
            <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500 text-sm">{edu.duration}</p>
          </div>
        ))}
      </div>

      {/* Work Experience Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-1 text-sky-600">💼 Work Experience</h3>
        {experience.work.map((job, index) => (
          <div key={index} className=" mb-1">
            <h4 className="text-xl font-bold text-gray-800">{job.title}</h4>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500 text-sm">{job.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
