import React from 'react';
import skillData from '../../fakeData/skillData';
import SkillsDetail from './SkillsDetail';

const Skills = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="container">
            <div className="row">
                {
                    skillData.map(skillsData => <SkillsDetail skillsData={skillsData}></SkillsDetail>)
                }
            </div>
        </div>
    );
};

export default Skills;