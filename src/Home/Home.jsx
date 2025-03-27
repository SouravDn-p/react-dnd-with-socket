import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Picture from "./pictures/Picture";
import Task from "./tasks/Task";

export default function Home() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Task />
      </DndProvider>
    </>
  );
}
