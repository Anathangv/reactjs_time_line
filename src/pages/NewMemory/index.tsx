import { CaretLeft, Image, SpinnerGap } from "phosphor-react";
import { NewMemoryContainer, FormMemory } from "./styles";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { ImagePicker } from "../../components/ImagePicker";


interface IMemory {
  coverUrl: string,
  content: string,
  isPublic: boolean,
}

export function NewMemory(){
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleReturnToTimeline(){
    navigate(-1);
  }

  const fakeApiPostImage = async (formData: FormData): Promise<string> => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve('Fake data from the server');
        } else {
          reject('Request failed');
        }
      }, 1000);
    });
    
    return 'https://basicdogmom.com/wp-content/uploads/2021/08/Happy-Dog-Pictures-and-Images-Basic-Dog-Mom.jpg';
  }

  const fakeApiPostSaveMemory = async (memory: IMemory): Promise<IMemory> => {
    await new Promise((resolve) => {
        setTimeout(() => {resolve('Fake data from the server')}, 1000);
    });

    console.log('New mwmory saved: ', memory);
    return memory;
  }


  /*
  To make the feature to save the form data with a image, first it is send the file to the backend, 
  when it successeds returns the link of the image, and only after that that is send a post request to 
  save the form data.
  The solution mentioned above is mocked in this function
  */
  async function handleCreateMemory(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    //get only the file field from the form
    const fileToUpload = formData.get('coverUrl');
    
    let coverUrl = '';

    if(fileToUpload){
      //upload endpoint only accepts "multipart/form-data" (only format that can be used to send files)
      const uploadFormData = new FormData();
      //file is the name that the backend is expecting
      uploadFormData.set('file', fileToUpload);

      const uploadImageResponse = await fakeApiPostImage(uploadFormData);

      coverUrl = uploadImageResponse;
    }

    console.log(Array.from(formData.entries()));

    /*
    after the upload, it is necessary to save the memory in the database, using the api post
    The post reposnible for saving the memory is also moked
    */
    const content = formData.get('content')?.toString();
    const isPublic = formData.get('isPublic') == 'checked' ? true : false;

    if (content && isPublic){
      await fakeApiPostSaveMemory(
        {
          coverUrl,
          content,
          isPublic
        }
      )
    }
    setLoading(false);
    navigate("/");
  }

  return (
    <NewMemoryContainer>
      <div>
        <CaretLeft size={32} />
        <span onClick={handleReturnToTimeline}>voltar à timeline</span>
      </div>
      <FormMemory onSubmit={handleCreateMemory}>
        <div>
          <span>
            <Image size={32} />
            <label htmlFor="media">
              Anexar mídia
            </label>
          </span>
          <label htmlFor="isPublic">
            <input type="checkbox" id="isPublic" defaultValue="checked" name="isPublic" />
            Tornar memórias públicas
          </label>
        </div>
        <ImagePicker />
        <textarea 
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
          spellCheck="false"
          name="content"
        />

        <button type="submit">
          Salvar
          {
            loading && <SpinnerGap size={20} />
          }
        </button>

      </FormMemory>
    </NewMemoryContainer>
  )
}
