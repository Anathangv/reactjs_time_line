import { ImagePickerContainer } from "./styles";
import { ChangeEvent } from "react";
import { useState } from "react";

export function ImagePicker(){
  const [preview, setPreview] = useState<string | null>(null);

  function onFileSelect(event: ChangeEvent<HTMLInputElement>){
    const {files} = event.target;

    if(!files){
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);
    setPreview(previewURL);
  }

  return(
    <ImagePickerContainer>
      <input 
        type="file" 
        id="media" 
        accept="image/*"
        onChange={onFileSelect}
        name="coverUrl"/>

      { preview && (
        <img src={preview} alt="" />
      )}
    </ImagePickerContainer>
  )
}

