import React from 'react';
import { HeaderBg, HeaderContainer, HeaderContent, HeaderH1, HeaderP, VideoBg, Btn } from './HeaderElements';
import Video from '../../video/video.mp4';
import Typical from 'react-typical';

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeaderBg>
                <HeaderContent>
                    <HeaderP>Hello, I am</HeaderP>
                    <HeaderH1>Md Sakib Al Islam</HeaderH1>
                    <HeaderP>

                        <Typical
                            steps={['A Full Stack Developer', 1000,
                                'A Creative Web Designer', 1000,
                                'A Quick Learner', 1000,
                            ]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </HeaderP>
                    <Btn
                    ><a
                     style={{ textDecoration: 'none' }} href="https://drive.google.com/drive/u/0/folders/1_Ak3t81Nt15oy8DXLxxGyNCQlQyhCW4b">Download CV</a></Btn>
                </HeaderContent>
            </HeaderContainer>
        </div>
    );
};

export default Header;
