import React from 'react';
import skillData from '../../fakeData/skillData';
import SkillsDetail from './SkillsDetail';

const Skills = () => {
    return (
        <div className="container">
            <h2 style={{ fontSize: '40px', fontWeight: '700' }} className='text-center text-white mb-5'>--- My Skills ---</h2>
            <div className="row">
                {
                    skillData.map(skillsData => <SkillsDetail skillsData={skillsData}></SkillsDetail>)
                }
            </div>
        </div>
    );
};

export default Skills;