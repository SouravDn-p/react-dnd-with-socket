import React, { useState } from "react";
import PictureCard from "./PictureCard";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";

const Picture = () => {
  const [board, setBoard] = useState([]);
  const [pictureList, setPictureList] = useState([
    {
      id: 1,
      url: "https://i.ibb.co.com/Y75m1Mk9/Final-Boss.jpg",
    },
    {
      id: 2,
      url: "https://i.ibb.co/HDLKt1VF/Green-and-Purple-Line-Tech-Action-Adventure-Facebook-Cover-1.jpg",
    },
    {
      id: 3,
      url: "https://www.mua.edu/uploads/sites/10/2023/02/istock-482499394.webp",
    },
  ]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "image",
    drop: (item) => {
      addImageToBoard(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const addImageToBoard = (id) => {
    console.log(id);
    const newImage = pictureList.filter((p) => p.id === id);
    if (board.some((p) => p.id === id)) return;
    setBoard((prevBoard) => [...prevBoard, newImage[0]]);
    const newPictureList = pictureList.filter((p) => p.id !== id);
    setPictureList(newPictureList);
  };

  return (
    <div className="bg-white  h-screen w-screen flex ">
      <div className="flex gap-4 bg-black w-fit p-5" ref={dropRef}>
        {pictureList.map((p) => (
          <PictureCard key={p.id} id={p.id} url={p.url} />
        ))}
      </div>
      <div className="drop h-full w-96 border-black border " ref={dropRef}>
        {board.map((p) => (
          <PictureCard key={p.id} id={p.id} url={p.url} />
        ))}
      </div>
    </div>
  );
};

export default Picture;
