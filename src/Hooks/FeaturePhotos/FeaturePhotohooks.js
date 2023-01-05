import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { url } from "../../Route/Address";


const featurePhotosHooks = (image, setImage) => {

  const { loading, setLoading } = useContext(AppContext)

  const { baseUrl, route, uploadFeautureImage, deleteFeatureImage, allFeaturePhotos } = url

  const [featurePhotos, setFeaturePhotos] = useState([])

  const getAllFeturePhotos = async () => {
    setLoading({ ...loading, msg: "geting all photos", isLoading: true })
    await axios.get(baseUrl + route + allFeaturePhotos, { withCredentials: true }).then(res => {
      setFeaturePhotos(res.data.featurePhotos)
      setLoading({ ...loading, msg: "get all photos", isLoading: false })
    }).catch(err => {
      setLoading({ ...loading, msg: "get all photos", isLoading: false })
      alert(err.message)
    })
  }


  const uploadFeaturePhotos = async () => {
    if (image.length == 0) {
      return alert("please select a images")
    }

    if (image.length == 10) {
      return alert("please select less images")
    }
    setLoading({ ...loading, msg: "images uploading", isLoading: true })

    let formData = new FormData();
    var myBlob = new Blob();

    image.forEach((element, index) => {
      const myFile = new File([element], element.name, {
        type: myBlob.type,
      });

      formData.append("photos", myFile);
    });

    await axios.post(baseUrl + route + uploadFeautureImage, formData, { withCredentials: true }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {

        // uploadProductDetails(res.data);
        // setImages([])

        alert("image upload complete")
        setLoading({ ...loading, msg: "image upload complete", isLoading: false })


      })
      .catch((err) => {
        //  console.log(err)
        alert("some problem occur while image uploading please try again");
        setLoading({ ...loading, msg: err.message, isLoading: false })

        //setImages([])
      });
  };

  const deleteFePhoto = async (public_id) => {
    await axios.post(baseUrl + route + deleteFeatureImage,{public_id}, { withCredentials: true }).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.error(err)
    })
  }
  useEffect(() => {
    getAllFeturePhotos()
  }, [])



  return [featurePhotos, deleteFePhoto,uploadFeaturePhotos]
}

export default featurePhotosHooks