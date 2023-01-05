import React, { useState } from 'react'
import featurePhotosHooks from '../../Hooks/FeaturePhotos/FeaturePhotohooks';

import imageHelperHook from "../../Hooks/ProductControl/ImageHelperHooks";

function FeaturePhotos() {
  const [loading, image, setImage, imageCompress] = imageHelperHook()
  const [showFull, setShowFull] = useState(false)

  const [featurePhotos, deleteFePhoto,uploadFeaturePhotos] = featurePhotosHooks(image, setImage)

  console.log(featurePhotos)
  return (

    <>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Feature photos

          {loading ? "   loading...." : ""}
        </label>
        <div className="fixed text-left p-2"></div>
        <div
          className=" flex mt-1 p-2 border-2 border-gray-300 border-dashed rounded-md h-[30vh] 
           
            "
        >
          <div className="flex space-x-1  overflow-x-scroll proPhoto">
            {image &&
              image.map((props, index) => (
                <img key={index}
                  onClick={() => setShowFull(!showFull)}
                  className="h-[28vh] w-[40vw] sm:w-[20vw] rounded cursor-pointer"
                  src={URL.createObjectURL(props)}
                  style={{ objectFit: showFull ? "contain" : "cover" }}
                />
              ))}
          </div>
          <div
            className={`${image.length == 0 && "flex justify-center w-full "
              } p-4 `}
          >
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="True"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className=" cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>chose Photos</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    className="sr-only"
                    onChange={imageCompress}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG up to 5MB
              </p>
            </div>
          </div>
        </div>
        <button
          type='button'
          onClick={uploadFeaturePhotos}
          className=' bg-purple-700 text-white p-2 rounded-md w-full'>
          {loading ? "wait ..." : "save"}
        </button>
      </div>


      <div className='max-h-full overflow-auto flex'>
        {featurePhotos.photos && featurePhotos.photos.map((props) => (
          <div>
            <img
              src={props.url}
              className="w-full max-h-[40vh] object-contain"
            />
            <button 
             onClick={()=>deleteFePhoto(props.public_id)}
            className='bg-red-500'>
              delete
            </button>
          </div>

        ))}

      </div>
    </>
  )
}

export default FeaturePhotos