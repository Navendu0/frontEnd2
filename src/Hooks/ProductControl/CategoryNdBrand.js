import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../App";
import { url } from "../../Route/Address";
import inputFieldHook from "./InputFieldHooks";



const categoryNbrandHooks = (type, setShowModal, inputText, setInputText) => {
    const { baseUrl, route, creteCategory, createBrand, getCategoryAndBrand, deleteBrand, deleteCategory } = url

    const { loading, setLoading } = useContext(AppContext)

    const [categoryList, setCategoryList] = useState([])


    const [brandList, setBrandList] = useState([])



    const saveCategoryOrBrand = () => {

        if (type == "brand") {
            setLoading({ ...loading, msg: "Brand saving", isLoading: true })

            return axios.post(baseUrl + route + createBrand, { name: inputText.brandName }, { withCredentials: true }).
                then((res) => {
                    setBrandList(oldarray => [...oldarray, res?.data?.brand])
                    alert(res.data.message)
                    setShowModal(false)
                    setInputText({ ...inputText, brandName: "" })
                    setLoading({ ...loading, msg: "complete", isLoading: false })

                }).catch(e => {
                    setLoading({ ...loading, msg: e.message, isLoading: false })
                    alert(e.message)
                    //  console.error(e.message)
                })
        }
        if (type == "category") {
            setLoading({ ...loading, msg: "saving Category", isLoading: true })
            return axios.post(baseUrl + route + creteCategory, { name: inputText.categoryName }, { withCredentials: true }).then((res) => {

                setCategoryList(oldarray => [...oldarray, res?.data?.category])
                alert(res.data.message)
                setShowModal(false)
                setInputText({ ...inputText, categoryName: "" })
                setLoading({ ...loading, msg: "complete", isLoading: false })

            }).catch(e => {
                setLoading({ ...loading, msg:e.message, isLoading: false })

                alert(e.message)
               // console.error(e.message)
            })
        }
    }

    const getCategory = async () => {
        setLoading({ ...loading, msg:"Fetch category and brand", isLoading: true })

        await axios.get(baseUrl + route + getCategoryAndBrand, { withCredentials: true }).then((res) => {
           // console.log(res.data)
            setCategoryList(res?.data?.categories)
            setBrandList(res?.data?.brand)
            setLoading({ ...loading, msg:"fetch complete", isLoading: false })

        }).catch(err => {
            setLoading({ ...loading, msg:err.message, isLoading: false })
            console.error(err)
        })

    }

    const deleteCategoryOrBrand = async (id) => {
        if (type == "category") {
            setLoading({ ...loading, msg:"deleting category", isLoading: true })

            return await axios.post(baseUrl + route + deleteCategory, { id: id }, { withCredentials: true }).then((res) => {
                const result = categoryList.filter((item, index) => item._id != id)
                // setProducts([res])
                alert(res.data.message)
                setCategoryList(result)
                setLoading({ ...loading, msg:"deleted ", isLoading: false })


            }).catch(err => {
                alert('occur error while deleting ' + err.message)
            })
        }
        if (type == "brand") {
            setLoading({ ...loading, msg:"deleting category", isLoading: true })

            return await axios.post(baseUrl + route + deleteBrand, { id: id }, { withCredentials: true }).then((res) => {
                const result = brandList.filter((item, index) => item._id != id)
                // setProducts([res])
                alert(res.data.message)

                setBrandList(result)
                setLoading({ ...loading, msg:"delet complete", isLoading: false })

            }).catch(err => {
                setLoading({ ...loading, msg:err.message, isLoading: false })

                //console.log(err)
                alert('occur error while deleting ')
            })
        }


    }



    useEffect(() => {
        getCategory()
    }, [])




    return [categoryList, brandList, saveCategoryOrBrand, deleteCategoryOrBrand]
}


export default categoryNbrandHooks;