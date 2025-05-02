import React from 'react';
import skill from '../data/skill.js';

const Skills = () => {
    return (
        <div className="flex flex-wrap gap-3 my-5">
            {
                skill.map((skill, index) => (
                    <div key={index}>
                        <div className='bg-gray-200 text-sm font-medium text-gray-700 py-1 px-3 rounded-full'>
                            {skill}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Skills;
