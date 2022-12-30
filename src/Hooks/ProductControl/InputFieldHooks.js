import { useState } from "react";

const inputFieldHook = () => {
    const initialValue = {
        highLightText: '',
        highLightTextArray:["hello","this is highligh ","this is highligh 2","this is highligh 3"],
        youtubeLinkText:'',
        youtubeLinkArray:["https://youtu.be/tlUcmD0zPI4","https://youtu.be/tlUcmD0zPI4"],
        brandName:"realme",
        categoryName:"mobile",
        price:"1234536",
        name:"kuchbhi",
        description:"kuchbhi kuchbhi kuchbhi kuchbhi kuchbhi kuchbhi kuchbhi kuchbhikuchbhi kuchbhi kuchbhi kuchbhikuchbhi kuchbhi kuchbhi kuchbhikuchbhi kuchbhi kuchbhi kuchbhikuchbhi kuchbhi kuchbhi kuchbhikuchbhi kuchbhi kuchbhi kuchbhikuchbhi kuchbhi kuchbhi kuchbhikuchbhi kuchbhi kuchbhi kuchbhikuchbhi kuchbhi kuchbhi kuchbhikuchbhi kuchbhi kuchbhi kuchbhikuchbhi kuchbhi kuchbhi kuchbhi"
    }

    const [inputText, setInputText] = useState(initialValue)


    const saveHighlightArray = () => {
        // setInputText({ ...inputText, highlightText: [...inputText.highLightText," inputText.highLightText"] })

       inputText.highLightTextArray.push(inputText.highLightText)
        setInputText({...inputText,highLightText:""})
    }
   
    const deleteHighlight = (index1) => {
        const res = inputText?.highLightTextArray.filter((item, index) => index != index1)
        setInputText({...inputText,highLightTextArray:res})
    }

    
    const saveYoutubeLink = () => {
       inputText.youtubeLinkArray.push(inputText.youtubeLinkText)
        setInputText({...inputText,youtubeLinkText:""})
    }
   
    const deleteYoutubeLink = (index1) => {
        const res = inputText?.youtubeLinkArray.filter((item, index) => index != index1)
        setInputText({...inputText,youtubeLinkArray:res})
    }


    return [inputText, setInputText,initialValue, saveHighlightArray, deleteHighlight,saveYoutubeLink,deleteYoutubeLink, ]

}

export default inputFieldHook;
