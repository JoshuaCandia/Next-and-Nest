import { CiTrash } from "react-icons/ci";
import { SetStateAction } from "react";

type ButtonDeleteProps = {
  id: number;
  setShouldReloadTasks: React.Dispatch<SetStateAction<boolean>>;
};

const ButtonDelete = ({ id, setShouldReloadTasks }: ButtonDeleteProps) => {
  const onDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });

      if (res.ok) {
        // Lógica adicional si es necesario
        setShouldReloadTasks(true);
      } else {
        // Manejo de errores si es necesario
        console.error("Error al eliminar la tarea");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud DELETE:", error);
    }
  };

  return (
    <button onClick={onDelete}>
      <CiTrash color="red" size={25} />
    </button>
  );
};

export default ButtonDelete;
