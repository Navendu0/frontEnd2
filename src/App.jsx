import React, { createContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"

import axios from 'axios'
import Dashboard from './Component/Dashboard'


import Register from './Component/UserControler/Register'

import Login from './Component/UserControler/Login'
import Menu from './Component/Menu'
import CreateCategory from './Component/ProductControl/CreateCategory'
import AllProduct from './Component/ProductControl/AllProduct'
import AddProduct from './Component/ProductControl/AddProduct'
import './App.css'
import { url } from './Route/Address'
import ProductDetailsPage from './Component/ProductDetailsPage'
import FeaturePhotos from './Component/FeaturePhoto/FeaturePhotos'
import EditProduct from './Component/ProductControl/EditProduct'


export const AppContext = createContext(null)


function App() {
    const navigate = useNavigate()

    const {baseUrl} = url
 
    const [loading,setLoading]=useState({
        msg:"",
        isLoading:false
    })

    const [isUser, setIsUser] = useState(false)

    const signin = () => {
        setIsUser(true)
    }
    const signout = () => {
        setIsUser(false)
    }



    const checkUser = async () => {
        await axios.get(baseUrl+"/api/v1/profile", { withCredentials: true }).then((res) => {
            if (res.data.success) {
             //   console.log(res.data)
                return signin()

            }
            if (!res.data.success) {
              //  console.log(res.data)

                navigate('/login')
                return signout()
                return console.log("second")

            }
        }).catch(err => {
           console.error(err)
        })
    }

    useEffect(() => {

   checkUser()

    }, [])

    return (
        <AppContext.Provider value={{ isUser, setIsUser,loading,setLoading}}>
            <div className='max-h-full'>

            {/* <div >
                    <Routes>
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </div> */}
                {!isUser ? <div >
                    <Routes>
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </div>
                    :
                    <div >
                        <Menu comp={<Routes>
                            <Route path="/" element={<AllProduct />} />

                            <Route path="/brandorcategory" element={<CreateCategory />} />

                            <Route path="/allProduct" element={
                                <AllProduct />
                            } />

                            <Route path="/addProduct" element={<AddProduct />} />
                          
                            <Route path="/productDetails" element={<ProductDetailsPage />} />

                            <Route path="/featurePhotos" element={<FeaturePhotos />} />

                            <Route path="/editProduct" element={<EditProduct />} />

                        </Routes>} />
                    </div>}


                {loading.isLoading && <div>
                    <div className="
        flex justify-center items-center
        fixed top-0 bottom-0 left-0 right-0 " >

                        <button disabled type="button" class=" 
                 justify-center 
                py-2.5 px-5 mr-2 text-2xl font-medium  text-blue-500 
                inline-flex items-center">
                            <svg aria-hidden="true" role="status" class="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />

                            </svg>
                            {loading.msg}
                        </button>       </div>

                    <div className="opacity-25 fixed inset-0 z-40  bg-black">
                    </div>
                </div>}

            </div>
        </AppContext.Provider>
    )
}

export default App

