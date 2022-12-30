import axios from "axios"
import { url } from "../../Route/Address"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";


export const logoutHelper = () => {
  const { baseUrl, route, logOut } = url
  const navigate = useNavigate()

  const {isUser,setIsUser,loading,setLoading}=useContext(AppContext)

  const logOutAction = async () => {
    setLoading({ ...loading, msg:"LogIN Out ....", isLoading: true })

    await axios.get(baseUrl + route + logOut, { withCredentials: true }).then((res) => {
      setIsUser(!isUser)
      navigate('/login')
      setLoading({ ...loading, msg:res.data.message, isLoading: false })

      alert(res.data.message)

    }).catch(err => {
      setLoading({ ...loading, msg:err.message, isLoading: false })

      alert(err.message)
    })
  }

  return [logOutAction]
}
