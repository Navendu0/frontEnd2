import { useState } from "react";

const inputFieldHook = () => {
  

    const initialValue = {
        id: '',
        highLightText: '',
        highLightTextArray: [],
        youtubeLinkText: '',
        youtubeLinkArray: [],
        brandName: "",
        categoryName: "",
        price: "",
        name: "",
        description: "",
        images:[]
    }

    const [inputText, setInputText] = useState(initialValue)
    const[currentIndex,setCurrentIndex]=useState(null)

    

 
    
 
    const saveHighlightArray = () => {
        // setInputText({ ...inputText, highlightText: [...inputText.highLightText," inputText.highLightText"] })
        if(currentIndex!=null){
            inputText.highLightTextArray[currentIndex]=inputText.highLightText
            setInputText({ ...inputText, highLightText: "" })
        }else{
            inputText.highLightTextArray.push(inputText.highLightText)
            setInputText({ ...inputText, highLightText: "" })
        }

    
    }

    const deleteHighlight = (index1) => {
        const res = inputText?.highLightTextArray.filter((item, index) => index != index1)
        setInputText({ ...inputText, highLightTextArray: res })
    }


    const saveYoutubeLink = () => {
        if(currentIndex!=null){
            inputText.youtubeLinkArray[currentIndex]=inputText.youtubeLinkText

            setInputText({ ...inputText, highLightText: "" })
        }else{
        inputText.youtubeLinkArray.push(inputText.youtubeLinkText)
        setInputText({ ...inputText, youtubeLinkText: "" })}
    }

    const deleteYoutubeLink = (index1) => {
        const res = inputText?.youtubeLinkArray.filter((item, index) => index != index1)
        setInputText({ ...inputText, youtubeLinkArray: res })
    }

    const onEditClickHighLight = (index, props) => {

        setInputText({ ...inputText, highLightText: props })
        setCurrentIndex(index)
    }

    const onEditClickYoutube = (index, props) => {

        setInputText({ ...inputText,youtubeLinkText : props })
        setCurrentIndex(index)
    }

    return [inputText, setInputText, initialValue, saveHighlightArray, deleteHighlight, saveYoutubeLink, deleteYoutubeLink,onEditClickHighLight,onEditClickYoutube]

}

export default inputFieldHook;
