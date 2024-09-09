import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SkeletonProjects = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className='project-home'>
        <div className='project-inner'>
          <div className='first-image'>
            <Skeleton style={{ width: "100%", height: "100%" }} />
          </div>
          <div className='right-text'>
            <h1><Skeleton style={{ width: "100%", height: "100%" }} /></h1>
            <p><Skeleton style={{ width: "100%", height: "100%" }} /></p>
            <p><Skeleton style={{ width: "100%", height: "100%" }} /></p>
            <Link to='/project'>
              <FaLongArrowAltLeft size={40} color='#9B934A' />
            </Link>
          </div>
        </div>
        <div className='second-image'>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className='pic'>
              <Skeleton style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonProjects;
