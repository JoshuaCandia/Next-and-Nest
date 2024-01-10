import { SetStateAction } from "react";
import { Task } from "@/types/types";
import ButtonDelete from "../atoms/ButtonDelete";
const TaskViewer = ({
  tasks,
  setShouldReloadTasks,
}: {
  tasks: Task[];
  setShouldReloadTasks: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      {tasks.map((task: Task) => (
        <div className="bg-slate-400 p-4 m-2" key={task.id}>
          <div>
            <h3>{task?.title}</h3>
            <h4>{task?.description}</h4>
          </div>
          <div>
            <ButtonDelete id={task?.id} setShouldReloadTasks={setShouldReloadTasks} />
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskViewer;
