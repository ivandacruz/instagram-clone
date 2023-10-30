import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";

const CreatePostModal = ({ 
    onClose, isOpen 
}) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState();

    const handleDrop = (event) => {
        event.preventDefault()
        const droppedFile = event.dataTransfer.file[0];
        if(droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")){
            setFile(droppedFile)
        }
    } 

    

    const handleDragOver=(event)=>{
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        setIsDragOver(true)
    }

    const handleDragLeave = () => {
        setIsDragOver(false)
    }

    const handleOnChange = (e) => {
        const file = e.target.file[0];
        if(file&& file.type.startsWith("image/") || file.type.startsWith("video/")){
            setFile(file);
        }
        else {
            setFile(null);
            alert("please select an image or video")
        }
    }


  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex justify-between py-1 px-10 items-center">
            <p>Create New Post</p>
            <Button variant={"ghost"} size="sm" colorSchema={"blue"}>
              Share
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div>
              <div>
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave} 
                    className="drag-drop h-full"
                >
                    <div>
                        <FaPhotoVideo className="text-3xl"/>
                        <p>Drag Photos or videos here</p>
                    </div>
                    <label htmlFor="file-upload" className="custom-file-upload">Select From Computer</label>

                    <input type="text" id="file-upload" accept="image/*, video/*" onChange={handleOnChange} />
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
