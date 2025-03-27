import React from "react";
import { useDrag } from "react-dnd";

const PictureCard = ({ id, url }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      ref={dragRef}
      className="object-cover h-40 w-40 flex rounded-md"
      id={id}
      src={url}
    />
  );
};

export default PictureCard;
