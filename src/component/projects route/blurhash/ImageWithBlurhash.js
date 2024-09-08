import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import fallbackImage from './defaultImage/istockphoto-1147544807-612x612.jpg'; 

const ImageWithBlurhash = ({ blurhash, src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Handle image load success
  const handleImageLoad = () => {
    setIsLoaded(true);
    setHasError(false); // Reset any previous errors on successful load
  };

  // Handle image load error
  const handleImageError = () => {
    setIsLoaded(true);
    setHasError(true);
  };

  useEffect(() => {
    // Reset loading and error states if the src changes
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Blurhash placeholder */}
      {!isLoaded && blurhash && !hasError && (
        <Blurhash
          hash={blurhash}
          style={{ width: '100%', height: '100%' }}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}

      {/* Actual Image */}
      <img
        src={hasError ? fallbackImage : src}
        alt={alt}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          display: isLoaded ? 'block' : 'none' // Hide img while loading
        }}
        onLoad={handleImageLoad}
        onError={handleImageError} // Handle image error
      />
    </div>
  );
};

export default ImageWithBlurhash;
