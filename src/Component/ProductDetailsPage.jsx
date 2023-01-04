import React from 'react';

import { useLocation } from "react-router-dom";


const ProductDetailsPage = () => {
  const { state } = useLocation()

   
  return (
    <div className='max-h-full overflow-y-auto'>

    <div className="flex flex-col md:flex-row ">
    <div className="mb-4 md:max-w-screen-md md:pr-4 flex overflow-x-auto  mr-2 space-x-4">
      {state?.images.map((image) => (
        <img src={image.url} alt={image.alt} key={image.url} className="
           max-h-[30vh] w-screen
        object-cover md:h-auto" />
      ))}
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-4">
      <h1 className="text-2xl font-bold mb-2">{state?.name}</h1>
      <p className="text-lg mb-2">Brand: {state?.brandName}</p>
      <p className="text-lg mb-2">Category: {state?.category}</p>
      <p className="text-lg mb-2">Price: ${state?.price}</p>
      <h2 className=' text-xl font-bold underline'>Product highlights:</h2>
      <ul className="mb-1 p-1">
        {state?.highlightText.map((highlight) => (
          <li className="text-lg mb-2" key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>

      <h2 className=' text-xl font-bold underline'>Product Description </h2>
      <p>
        {state?.description}
      </p>

   
   
    </div>
  </div>

  <div className='flex overflow-auto w-full'> 
  {state?.youtubeLinks.length > 0 && (
        <div className="mb-4 flex overflow-auto">
          {state?.youtubeLinks.map((video) => (
              <div className='w-full h-[20vh]'>
              <iframe src={`https://www.youtube.com/embed/${video.split("be/")[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
          
          ))}
        </div>
      )}
  </div>
</div>
  );
};

export default ProductDetailsPage;
