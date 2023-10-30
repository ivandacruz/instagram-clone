import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./PostCard.css";
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";


// function PostCard(){
const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSavePost = () => {
    setIsSaved(!isSaved);
  };

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleOpenCommentModal = () => {
    onOpen();
  };
  return (
    <div>
      <div className="w-full border rounded-md ">
        {/* cabeçalho do post */}
        <div className="flex items-center justify-between w-full px-5 py-4">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2021/09/10/20/13/kitten-6614113_640.jpg"
              alt=""
            />
            <div className="pl-2">
              <p className="text-sm font-semibold">username</p>
              <p className="text-sm font-thin">location</p>
            </div>
          </div>

          <div className="dropdown">
            <BsThreeDots className="dots" onClick={handleClick} />
            <div className="dropdown-content">
              {showDropDown && (
                <p className="px-4 py-1 text-white bg-black rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>

        {/* imagem do post */}
        <div className="w-full">
          <img
            className="w-full"
            src="https://cdn.pixabay.com/photo/2023/09/21/21/35/horse-8267686_640.jpg"
            alt=""
          />
        </div>

        {/* marcadores do post */}
        <div className="flex items-center justify-between w-full px-5 py-4">
          <div className="flex items-center space-x-2">
            {
              // isPostLiked? <AiFillHeart className="text-xl text-[#ed254e] cursor-pointer hover:opacity-50" onClick={ handlePostLike } /> :
              // isPostLiked? <AiFillHeart className="text-xl text-red-800 cursor-pointer hover:opacity-50" onClick={ handlePostLike } /> :
              isPostLiked ? (
                <AiFillHeart
                  className="text-2xl text-[#F7AD19] cursor-pointer hover:opacity-50"
                  onClick={handlePostLike}
                />
              ) : (
                <AiOutlineHeart
                  className="text-2xl cursor-pointer hover:opacity-50"
                  onClick={handlePostLike}
                />
              )
            }

            <FaRegComment
              onClick={handleOpenCommentModal}
              className="text-xl cursor-pointer hover:opacity-50"
            />
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

        {/* quantidade likes */}
        <div className="w-full py-2 px-5">
          <p>10 likes</p>
          <p className="opacity-50 py-2 cursor-pointer">view all 10 comments</p>
        </div>

        {/* emojis e barra de comentarios */}
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

      {/* comentario */}
      <CommentModal
        handlePostLike={handlePostLike}
        onClose={onClose}
        isOpen={isOpen}
        handleSavePost={handleSavePost}
        isPostLiked={isPostLiked}
        isSaved={isSaved}
      />
    </div>
  );
};

export default PostCard;
