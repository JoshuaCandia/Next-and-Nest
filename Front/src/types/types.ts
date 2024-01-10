export type InputTextProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  title: string;
};

export type TextAreaProps = {
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  description: string;
};

export type Task = {
  id?: number;
  title: string;
  description: string;
};

export type TaskFormProps = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
