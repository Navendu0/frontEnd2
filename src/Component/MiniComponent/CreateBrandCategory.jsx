import React from 'react'
import categoryNbrandHooks from '../../Hooks/ProductControl/CategoryNdBrand'
import inputFieldHook from '../../Hooks/ProductControl/InputFieldHooks'
import InputHelper from './InputHelper'

import imageHelperHook from '../../Hooks/ProductControl/ImageHelperHooks'

function CreateBrandCategory({name,type}) {

  const [inputText, setInputText] = inputFieldHook()

  const [loading,image,setImage,imageCompress]= imageHelperHook()

  const [categoryList, brandList, saveCategoryOrBrand,deleteCategoryOrBrand] = categoryNbrandHooks(type, ()=>{}, inputText,setInputText,image,setImage)



 

  const list = () => {
    if(type ==="category"){
      return categoryList
    }

    if(type ==="brand"){
      return brandList
    }
   
  }



  
  return (
    <>

    
    <div>
    
        <h1 className=' md:h-[8vh] text-center mt-4 md:mb-3
     text-3xl font-extrabold  md:text-5xl  text-transparent bg-clip-text bg-gradient-to-r  from-slate-400 to-gray-500'>
        {name} Section
      </h1>
      <div className='grid md:grid-cols-2 sm:grid-cols-2 space-x-2'>

        <div className=' '>
          <InputHelper
            titile={`Create ${type}`}
            hint={`Enter ${type} Name`}
            rowD={3}
            buttonNeed={true}
            value={inputText}
            setValue={setInputText}
            inputName={type+"Name"}
            save={saveCategoryOrBrand}
            comp={
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className=" cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 outline-none ring-2 ring-offset-2 ring-indigo-500 mb-2"
                >
                  <span> {  loading?"wait ..": image.length == 0? "chose Photo":"photo selected" }</span>
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
           
            }


          />

        </div>
        <div className="overflow-x-auto  mt-2 rounded-md max-h-[30vh] md:max-h-[40vh] mb-2">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-slate-400  ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  {type} Name
                </th>
                <th scope="col" className="py-3 px-6">
                quantity
                </th>

                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

              {
                list() && list().map((props, index) => (
                  <tr key={index} className=" bg-gray-300 border-b capitalize ">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {props?.name}
                    </th>
                    <td className="py-4 px-6 text-gray-800 font-medium">
                      {props?.quantity}</td>
                       <td
                       onClick={()=>deleteCategoryOrBrand(props._id)}
                       className="py-4 px-6 text-gray-800 font-medium cursor-pointer">
                       delete
                      </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>

     </>
  )
}

export default CreateBrandCategory