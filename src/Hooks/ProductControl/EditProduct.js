import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { AppContext } from "../../App"
import { url } from "../../Route/Address"

const editProduct = (inputText) => {
    const { baseUrl, route, updateProduct } = url
    const { loading, setLoading } = useContext(AppContext)

    const navigate = useNavigate()

    const {
        id,
        highLightTextArray,
        youtubeLinkArray,
        brandName,
        categoryName,
        price,
        name,
        description, images } = inputText



    const updateProductFun = async () => {
        setLoading({ ...loading, msg: "product uploading start", isLoading: true })

        await axios.post(baseUrl + route + updateProduct, {
            id,
            name, brandName, price, highlightText: highLightTextArray, description, youtubeLinks: youtubeLinkArray, category: categoryName,
            images
        }, { withCredentials: true } ).then((res) => {
            setLoading({ ...loading, msg: "product uploading complete", isLoading: false })
            navigate('/allProduct')
        }).catch(err => {
            alert(err)
            setLoading({ ...loading, msg: "product uploading start", isLoading: false })
        })
    }


    return [updateProductFun]
}


export default editProduct