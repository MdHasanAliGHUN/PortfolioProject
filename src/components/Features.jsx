import React from 'react';
import features from '../data/features';

const Features = () => {
    return (
        <div className="space-y-6 mt-10">
            {
                features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="flex items-center gap-6">
                            <div className="text-blue-500 text-2xl">
                                <Icon className='text-2xl md:text-3xl'/>
                            </div>
                            <div>
                                <h1 className='md:text-2xl font-bold text-black'>{feature.title}</h1>
                                <p className='text-gray-400 mt-1'>{feature.description}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Features;
