import axios from "axios"
import { useContext, useState } from "react"
import { RouterProvider } from "react-router-dom"
import { domain } from "../../../Util/Address"
import { url } from "../../Route/Address"
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App"


const registerHelper = () => {
  const navigate = useNavigate()
  const { loading, setLoading } = useContext(AppContext)

  const { baseUrl, route, login, register, logOut } = url

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()


  const registerAction = async () => {

    if (password != confirmPassword) {
      return alert("Please check password and Confirm password")
    }
    setLoading({ ...loading, msg: "Register User....", isLoading: true })


    await axios.post(baseUrl + route + register, {
      "username": email,
      "password": password,
      "confirmPassword": confirmPassword
    }).then((res) => {
      //  console.log(res.data)
      setLoading({ ...loading, msg: res.data.message, isLoading: false })

      if (!res.data.success) {
        setLoading({ ...loading, msg: res.data.message, isLoading: false })

        alert(res.data.message)
      }

      navigate("/login")
      // setTimeout(()=>{setHide(false)},3000)
    }).catch(err => {
      setLoading({ ...loading, msg: err.message, isLoading: false })

      //   console.log(err.message)
    }
    )

  }




  return [setEmail, setPassword, setConfirmPassword, registerAction]
}


export default registerHelper