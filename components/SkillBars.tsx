// components/SkillBars.tsx
import React from 'react';

interface Skill {
  name: string;
  level: number;
}

const designSkills: Skill[] = [
  { name: 'Photoshop', level: 100 },
  { name: 'Figma', level: 95 },
  { name: 'Adobe XD', level: 60 },
  { name: 'Adobe Illustrator', level: 70 },
];

const developmentSkills: Skill[] = [
  { name: 'Photoshop', level: 100 },
  { name: 'Figma', level: 95 },
  { name: 'Adobe XD', level: 60 },
  { name: 'Adobe Illustrator', level: 70 },
];

const SkillBars: React.FC = () => {
  return (
    <div className="flex justify-between space-x-10 px-10 py-8">
      {/* Design Skills Section */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Design Skills</h2>
        {designSkills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between">
              <span className="font-semibold text-lg text-gray-800">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="w-full bg-gray-300 rounded-full">
                  <div
                    className="bg-[#ff014f] h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Development Skills Section */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Development Skills</h2>
        {developmentSkills.map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between">
              <span className="font-semibold text-lg text-gray-800">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="w-full bg-gray-300 rounded-full">
                  <div
                    className="bg-[#ff014f] h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBars;
