import { InputTextProps } from "@/types/types";

const InputText: React.FC<InputTextProps> = ({ setTitle, title }) => {
  return (
    <input
      type="text"
      name="title"
      autoFocus
      placeholder="Title"
      className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
};

export default InputText;
