import React, { useState } from 'react';
import './project.scss';
import projectRight1 from '../../assets/Gate.jpg';
import projectRight3 from '../../assets/GATE_B.jpg';
import projectRight4 from '../../assets/PARK_02.jpg';
import { Link } from 'react-router-dom';
import { AiOutlineMinus } from "react-icons/ai";
import { GiClick } from "react-icons/gi";
import backgroundleft from '../../assets/depositphotos_78505366-stock-illustration-interior-drawing 1.png';
import { Blurhash } from 'react-blurhash';

const Project = () => {
  const [activeDiv, setActiveDiv] = useState('div1');
  const [isImageLoaded, setIsImageLoaded] = useState({
    div1: false,
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
              <Link to="#">Glatt Estate</Link>
            </li>
           
            <li className={activeDiv === 'div3' ? 'active' : ''} onClick={() => handleItemClick('div3')}>
              <AiOutlineMinus className="iconStyle" />
              <Link to="#">Itunu city</Link>
            </li>
            <li className={activeDiv === 'div4' ? 'active' : ''} onClick={() => handleItemClick('div4')}>
              <AiOutlineMinus className="iconStyle" />
              <Link to="#">Burum Accomodation</Link>
            </li>
          </ul>
        </div>
        <div className="project-right">
          {activeDiv === 'div1' && (
            <Link to="/glatt">
              <div className={`inner div1 ${activeDiv === 'div1' ? 'active' : ''}`}>
                {!isImageLoaded.div1 && (
                  <Blurhash
                    hash="LvIYX_bdWAkD.At8V?ogSjt7Rjof"
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

         

          {activeDiv === 'div3' && (
            <Link to="/itunu">
              <div className={`inner div1 ${activeDiv === 'div3' ? 'active' : ''}`}>
                {!isImageLoaded.div3 && (
                  <Blurhash
                    hash="LtJbBTxvIUt7_Nt7WAof-;j]WBof"
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
            <Link to="/burums">
              <div className={`inner div1 ${activeDiv === 'div4' ? 'active' : ''}`}>
                {!isImageLoaded.div4 && (
                  <Blurhash
                    hash="L4F$FR4?ICJ3~oITRUR~9HS1XKIV"
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
