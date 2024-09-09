import React, { useState } from 'react';
import './project.scss';
import projectRight1 from '../../assets/4 Bedroom_View 1.png';
import projectRight2 from '../../assets/Materials for Websites/INTERIOR PROJECTS/Lounge_01.jpg';
import projectRight3 from '../../assets/Materials for Websites/MHQ PROJECT/Images/WS_B_002_0000.jpg';
import projectRight4 from '../../assets/Materials for Websites/ITUNU/Images/COm_street view004.jpg';
import { Link } from 'react-router-dom';
import { AiOutlineMinus } from "react-icons/ai";
import { GiClick } from "react-icons/gi";
import backgroundleft from '../../assets/depositphotos_78505366-stock-illustration-interior-drawing 1.png';
import Footer from '../footer/Footer';
import { Blurhash } from 'react-blurhash';

const Project = () => {
  const [activeDiv, setActiveDiv] = useState('div1');
  const [isImageLoaded, setIsImageLoaded] = useState({
    div1: false,
    div2: false,
    div3: false,
    div4: false,
  });

  const handleItemClick = (target) => {
    setActiveDiv(target);
  };

  const handleImageLoad = (div) => {
    setIsImageLoaded((prevState) => ({ ...prevState, [div]: true }));
  };

  return (
    <>
      <section className="project">
        <div className="project-left">
          <img src={backgroundleft} alt="images" />
          <ul>
            <li className={activeDiv === 'div1' ? 'active' : ''} onClick={() => handleItemClick('div1')}>
              <AiOutlineMinus className="iconStyle" />
              <Link to="#"> 3D Floor Plans</Link>
            </li>
            <li className={activeDiv === 'div2' ? 'active' : ''} onClick={() => handleItemClick('div2')}>
              <AiOutlineMinus className="iconStyle" />
              <Link to="#"> Interior Design</Link>
            </li>
            <li className={activeDiv === 'div3' ? 'active' : ''} onClick={() => handleItemClick('div3')}>
              <AiOutlineMinus className="iconStyle" />
              <Link to="#"> MHQ Project</Link>
            </li>
            <li className={activeDiv === 'div4' ? 'active' : ''} onClick={() => handleItemClick('div4')}>
              <AiOutlineMinus className="iconStyle" />
              <Link to="#"> 3D Visualization</Link>
            </li>
          </ul>
        </div>
        <div className="project-right">
          {activeDiv === 'div1' && (
            <Link to="/itunu">
              <div className={`inner div1 ${activeDiv === 'div1' ? 'active' : ''}`}>
                {!isImageLoaded.div1 && (
                  <Blurhash
                    hash="LjJ8bP-;kDoI?wt7ofaeM|RjWAWB"
                    width={550}
                    height={350}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                )}
                <img
                  src={projectRight1}
                  alt="image1"
                  onLoad={() => handleImageLoad('div1')}
                  style={{ display: isImageLoaded.div1 ? 'block' : 'none' }}
                />
                <div className="div-icon">
                  <GiClick size={50} />
                </div>
              </div>
            </Link>
          )}

          {activeDiv === 'div2' && (
            <Link to="/interior">
              <div className={`inner div1 ${activeDiv === 'div2' ? 'active' : ''}`}>
                {!isImageLoaded.div2 && (
                  <Blurhash
                    hash="LBF=w400E1M_^*IURi?b_4IUIUE1"
                    width={550}
                    height={350}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                )}
                <img
                  src={projectRight2}
                  alt="image2"
                  onLoad={() => handleImageLoad('div2')}
                  style={{ display: isImageLoaded.div2 ? 'block' : 'none' }}
                />
                <div className="div-icon">
                  <GiClick size={50} />
                </div>
              </div>
            </Link>
          )}

          {activeDiv === 'div3' && (
            <Link to="/mhq">
              <div className={`inner div1 ${activeDiv === 'div3' ? 'active' : ''}`}>
                {!isImageLoaded.div3 && (
                  <Blurhash
                    hash="L4IhdF0000~W00xtyD^+?FD*9F?G"
                    width={550}
                    height={350}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                )}
                <img
                  src={projectRight3}
                  alt="image3"
                  onLoad={() => handleImageLoad('div3')}
                  style={{ display: isImageLoaded.div3 ? 'block' : 'none' }}
                />
                <div className="div-icon">
                  <GiClick size={50} />
                </div>
              </div>
            </Link>
          )}

          {activeDiv === 'div4' && (
            <Link to="/visualization3D">
              <div className={`inner div1 ${activeDiv === 'div4' ? 'active' : ''}`}>
                {!isImageLoaded.div4 && (
                  <Blurhash
                    hash="LqI$4_NG%MRj?wNHoej]Rkt7Riof"
                    width={550}
                    height={350}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                )}
                <img
                  src={projectRight4}
                  alt="image4"
                  onLoad={() => handleImageLoad('div4')}
                  style={{ display: isImageLoaded.div4 ? 'block' : 'none' }}
                />
                <div className="div-icon">
                  <GiClick size={50} />
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

     
    </>
  );
};

export default Project;
