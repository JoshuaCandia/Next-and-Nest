import { Task } from "@/types/types";
import { SetStateAction } from "react";

const ButtonEdit = ({
  id,
  data,
  setShouldReloadTasks,
}: {
  id: number;
  data: Task;
  setShouldReloadTasks: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const onEdit = (e: any) => {
    e.preventDefault();
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        data,
      }),
    });
    setShouldReloadTasks(true);
  };
  return <button onClick={onEdit}>Edit</button>;
};

export default ButtonEdit;
