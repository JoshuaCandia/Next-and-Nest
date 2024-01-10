import TaskMaker from "./components/organisms/TaskMaker";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-start gap-32 h-screen">
      <h1 className="text-3xl font-bold text-white">Recordatorios</h1>

      <TaskMaker />
    </div>
  );
}
