import React, { useState } from 'react'
import allProduct from '../../Hooks/ProductControl/AllPRoduct'

import { useNavigate } from "react-router-dom";

function AllProduct() {
  const [products, deleteProduct] = allProduct()

  const [openModal, setOpenModal] = useState(false)

  const [product,setProduct]=useState()
  let navigate = useNavigate();


  const gotoProduct = () => {
    navigate('/productDetails',{state:product})
  }



  return (
    <div className='grid grid-cols-1'>
      <h1 className=' md:h-[8vh] text-center mt-4 md:mb-3
     text-3xl font-extrabold  md:text-5xl  text-transparent bg-clip-text bg-gradient-to-r  from-slate-400 to-gray-500'>
        All Products
      </h1>
      <div className="overflow-x-auto  mt-2 rounded-md  ">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-slate-400  ">
            <tr>
              <th scope="col" className="py-3 px-4">
                Name
              </th>
              <th scope="col" className="py-3 px-4">
                price
              </th>
              <th scope="col" className="py-3 px-4">
                category
              </th>
              <th scope="col" className="py-3 px-4">
                brand
              </th>
              <th scope="col" className="py-3 px-4">
                description
              </th>
              <th scope="col" className="py-3 px-4">
                highlights
              </th>
              <th scope="col" className="py-3 px-4">
                Youtube links
              </th>
              <th scope="col" className="py-3 px-4">
                images
              </th>

              <th scope="col" className="py-3 px-4">
                action
              </th>
            </tr>
          </thead>
          <tbody>

            {
              products && products.map((props, index) => {
                const { name, price, images, highlightText, description, youtubeLinks, category, brandName } = props
                return (<tr key={index} className=" bg-gray-300 border-b capitalize ">
                  <td
                    scope="row"
                    className="py-4 px-4 font-medium text-gray-900 
                    whitespace-nowrap  max-w-xs overflow-hidden truncate
                    "
                  >
                    {name}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium first-letter:whitespace-nowrap  max-w-xs overflow-hidden truncate">

                    {price}

                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium">
                    {category}

                  </td>
                  <td
                    scope="row"
                    className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {brandName}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium
                max-h-[1vh]  
                 max-w-10
                 w-10 
                overflow-ellipsis 
                 whitespace-nowrap  max-w-xs overflow-hidden truncate
                  ">
                    {description}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium">
                    {highlightText.length + " Elements"}
                  </td>
                  <td
                    scope="row"
                    className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {youtubeLinks.length + " Elements"}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium
                  whitespace-nowrap  max-w-xs overflow-hidden truncate
                  ">
                    {images.length + " Elements"}
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium cursor-pointer"
                    onClick={() => {setOpenModal(true)
                     setProduct(props)
                    }}
                  >
                    chose
                  </td>

                </tr>)
              })
            }

          </tbody>
        </table>
      </div>

      {openModal && <div
        className="justify-center items-center flex 
            rounded-b
            overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-dashed  focus:outline-none"
      >
        <div className="relative w-11/12 
            sm:w-2/4
            p-2 rounded-lg
            my-6 mx-auto max-w-3xl
            bg-white
            ">
          {/*content*/}
          <div className=" p-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  border-2 border-dashed border-gray-300 ">
            {/*header*/}

            <div className='flex justify-between '>
              <h1 className=' text-black text-lg font-semibold oldstyle-nums uppercase '>
                choose a action
              </h1>

              <button
                className="text-red-500 background-transparent font-bold uppercase  py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>

            </div>



            {/*body*/}
            <div
            onClick={()=>deleteProduct(product?._id)}
              type='button'
              className='grid grid-cols-2 gap-1'>
              <button className='text-white bg-red-600 p-1 rounded'>
                delete
              </button>

              <button
                onClick={() => gotoProduct()}
                type='button'
                className='text-white bg-blue-600 p-1 rounded'>
                view product
              </button>
            </div>

          </div>
        </div>


      </div>}

    </div>
  )
}

export default AllProduct