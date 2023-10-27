import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import CommentCard from "./CommentCard";
import "./CommentModal.css";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";

const CommentModal = (
  onClose,
  isOpen,
  isPostLiked,
  handlePostLike,
  isSaved,
  handleSavePost
) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh] relative">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg"
                  alt=""
                />
              </div>

              <div className="w-[55%] pl-10">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg"
                        alt=""
                      />
                    </div>

                    <div className="ml-2">
                      <p>username</p>
                    </div>
                  </div>

                  <BsThreeDots />
                </div>

                <hr />

                <div className="comment">
                  {[1, 1, 1, 1].map(() => (
                    <CommentCard />
                  ))}
                </div>

                {/*  */}
                <div className="absolute bottom-0">
                  <div className="flex items-center justify-between w-full py-4">
                    <div className="flex items-center space-x-2">
                      {
                        // isPostLiked? <AiFillHeart className="text-xl text-[#F7AD19] cursor-pointer hover:opacity-50" onClick={ handlePostLike } /> :
                        // isPostLiked? <AiFillHeart className="text-xl text-red-800 cursor-pointer hover:opacity-50" onClick={ handlePostLike } /> :
                        isPostLiked ? (
                          <AiFillHeart
                            className="text-2xl text-[#ed254e] cursor-pointer hover:opacity-50"
                            onClick={handlePostLike}
                          />
                        ) : (
                          <AiOutlineHeart
                            className="text-2xl cursor-pointer hover:opacity-50"
                            onClick={handlePostLike}
                          />
                        )
                      }

                      <FaRegComment className="text-xl cursor-pointer hover:opacity-50" />
                      <RiSendPlaneLine className="text-xl cursor-pointer hover:opacity-50" />
                    </div>
                    <div className="cursor-pointer">
                      {isSaved ? (
                        <BsBookmarkFill
                          onClick={handleSavePost}
                          className="text-xl cursor-pointer hover:opacity-50"
                        />
                      ) : (
                        <BsBookmark
                          onClick={handleSavePost}
                          className="text-xl cursor-pointer hover:opacity-50"
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full py-2">
                    <p>10 likes</p>
                    <p className="opacity-50 text-sm">1 day ago</p>
                  </div>

                  <div className="border border-t w-full">
                    <div className="flex w-full items-center px-5">
                      <BsEmojiSmile />
                      <input
                        className="commentInput"
                        type="text"
                        placeholder="Add a comment..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
