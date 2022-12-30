import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { url } from "../../Route/Address";
import loadingState from "../Loading";

const productSave = (image, inputText, setInputText,setImage,initialValue) => {
  const { baseUrl, route, imageUpload, createProduct } = url;

  const {loading,setLoading}=useContext(AppContext)

  const uploadImages = async () => {
    if (image.length == 0) {
      return alert("please select a images")
    }

    if (image.length == 10) {
      return alert("please select less images")
    }
    setLoading({ ...loading, msg:"images uploading", isLoading: true })

    let formData = new FormData();
    var myBlob = new Blob();

    image.forEach((element, index) => {
      const myFile = new File([element], element.name, {
        type: myBlob.type,
      });

      formData.append("image", myFile);
    });

    await axios.post(baseUrl + route + imageUpload, formData,{ withCredentials: true }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
       
        // uploadProductDetails(res.data);
        // setImages([])

        createNewProduct(res.data)
        alert("image upload complete")
        setLoading({ ...loading, msg:"image upload complete", isLoading: false })


      })
      .catch((err) => {
      //  console.log(err)
        alert("some problem occur while image uploading please try again");
        setLoading({ ...loading, msg:err.message, isLoading: false })

        //setImages([])
      });
  };


  const createNewProduct = async (imagesData) => {
    const {
      highLightTextArray,
      youtubeLinkArray,
      brandName,
      categoryName,
      price,
      name,
      description } = inputText

      setLoading({ ...loading, msg:"product uploading start", isLoading: true })


    await axios.post(baseUrl + route + createProduct, {
      name, brandName, price, highlightText: highLightTextArray, description, youtubeLinks: youtubeLinkArray, category: categoryName,
      images: imagesData
    },{ withCredentials: true }).then(res => {
      alert(res.data.message)
       console.log(res.data)
       setInputText(initialValue)
       setImage([])
       setLoading({ ...loading, msg:res.data.message, isLoading: false })
       
    }).catch(err => {
      setLoading({ ...loading, msg:err.message, isLoading: false })

      alert(err.message)
     // console.error(err)
    })


  }



  return [uploadImages];
};

export default productSave;
