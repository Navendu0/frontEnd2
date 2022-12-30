import axios from "axios"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { AppContext } from "../../App"
import { url } from "../../Route/Address"


const allProduct = () => {

  const { loading, setLoading } = useContext(AppContext)

  const { baseUrl, route, allProduct, deleteProduct } = url

  const [products, setProducts] = useState([])

  const getAllProduct = async () => {
    setLoading({ ...loading, msg: "geting all product ...", isLoading: true })
    await axios.get(baseUrl + route + allProduct, { withCredentials: true }).then((res) => {
    //  console.log(res?.data)
      setProducts(res?.data?.products)
      setLoading({ ...loading, msg: "geting all product ...", isLoading: false })

    }).catch(err => {
      setLoading({ ...loading, msg:err.message, isLoading: false })

     // console.error(err.message)
    })
  }

  const deleteProductByID = async (id) => {
    setLoading({ ...loading, msg:"product deleting...", isLoading: true })

    await axios.post(baseUrl + route + deleteProduct, { id: id }, { withCredentials: true }).then((res) => {
      const result = products.filter((item, index) => item._id != id)
      setLoading({ ...loading, msg:"delete complete", isLoading: false })

      // setProducts([res])
      alert(res.data.message)
      setProducts(result)

    }).catch(err => {
      setLoading({ ...loading, msg:err.message, isLoading: false })

     console.error(err)
    })
  }


  useEffect(() => {
    getAllProduct()
  }, [])

  return [products, deleteProductByID]
}

export default allProduct