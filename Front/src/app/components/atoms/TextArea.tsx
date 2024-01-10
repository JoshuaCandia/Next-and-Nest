import React from "react";
import { TextAreaProps } from "@/types/types";
const TextArea: React.FC<TextAreaProps> = ({ setDescription, description }) => {
  return (
    <textarea
      name="content"
      placeholder="Content"
      value={description}
      className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
      onChange={(e) => setDescription(e.target.value)}
    ></textarea>
  );
};

export default TextArea;
