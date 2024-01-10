"use client";
import React, { useState, FormEvent, SetStateAction } from "react";
import InputText from "../atoms/InputText";
import TextArea from "../atoms/TextArea";
import { TaskFormProps } from "@/types/types";
const TaskForm: React.FC<TaskFormProps> = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!title || !description) return;
      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const data = await res.json();

      setTasks((prevTasks) => [...prevTasks, data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText title={title} setTitle={setTitle} />
      <TextArea description={description} setDescription={setDescription} />
      <button className="px-5 py-2 text-white bg-blue-500 rounded-md hover hover:bg-blue-700">
        Create
      </button>
    </form>
  );
};

export default TaskForm;
