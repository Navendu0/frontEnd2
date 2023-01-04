import React, { useState } from 'react';

import { useLocation } from "react-router-dom";
import { url } from '../Route/Address';


const ProductDetailsPage = () => {
  const { state } = useLocation()

  const [image, setImage] = useState(state?.images?.[0]?.url)

  return (
    <>
      <div className='bg-gray-200 h-screen overflow-y-auto'>

        {/* images and  details */}
        <div className='grid md:grid-cols-2'>
          {/*.......... images............ */}

          <div>  
            <img
            src={image}
            alt="image" className=' w-full 
          h-[45vh]
          object-contain
          '/>
            <div className=' flex overflow-auto 
            h-[10vh]
            md:h-[20vh]
            md:max-h-[20vh] w-full proPhoto space-x-2   justify-center mt-2'>

              {state?.images && state?.images.map((props, index) => {
                return (
                  <img key={index}
                    onClick={() => setImage(props?.url)}
                    src={props.url}
                    alt="image" className=' w-2/5 
            md:w-1/3 h-[20vh]
           object-cover
          '/>
                )
              })}







            </div>
          </div>

          {/* product details  */}
          <div className='ml-2 md:max-h-[70vh] md:overflow-auto proPhoto'>
            {/*....  name..... */}
            <h3> {state?.name} </h3>

            {/*....  price..... */}
            <h3> price : {state?.price} </h3>

            {/*....  brand..... */}
            <h3 className='text-blue-500 '> {"view more from "}{state.brandName} </h3>

            {/*....  highlights..... */}
            <h3>Highlights </h3>
            <ul className="divide-y-4 list-decimal">
              {state.highlightText && state.highlightText.map((props, index) => (
                <li key={index} className="bg-slate-50 p-1 rounded " >
                  {index + 1}) {props}
                </li>
              ))}


            </ul>

            {/*....  description..... */}
            <h3> Description </h3>
            <p>
              {state?.description}
            </p>
          </div>

        </div>

        {/* youtube videos goes here */}

        <div className=' mt-3'>
          <div className=' w-full  flex overflow-x-auto p-4  space-x-3'>

            {state?.youtubeLinks.map((video) => (
              <div className='w-full h-[20vh]'>
                <iframe src={`https://www.youtube.com/embed/${video.split("be/")[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductDetailsPage;


{/* <div className='max-h-full overflow-y-auto'>

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
</div> */}
