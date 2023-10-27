import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react';
import React from 'react';
import { BsThreeDots } from "react-icons/bs";

const CommentModal = (onClose, isOpen) => {
    return (
        <div>
            <Modal size={'4xl'} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>

                    <ModalBody>
                        <div className='flex h-[75vh]'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                {/* <img className='max-h-full w-full' src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg" alt="" /> */}
                                <img className='max-h-full w-full' src="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg" alt="" />
                            </div>
                            <div className='w-[55%] pl-10'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg" alt="" />
                                        </div>
                                        <div className="ml-2">
                                            <p>username</p>
                                        </div>
                                    </div>
                                </div>
                                

                                <BsThreeDots />
                            </div>
                        </div>
                    </ModalBody>''

                </ModalContent>
            </Modal>
        </div>
    );
}

export default CommentModal;
