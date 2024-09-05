interface Task {
  task: string;
  isDone: boolean;
}

interface TasksProps {
  tasks: Task[];
  deleteTask: (task: string) => void;
  updateTask: (task: string) => void;
}

export function Tasks({ tasks, deleteTask, updateTask }: TasksProps) {
  const completedTasks = tasks.filter((task) => task.isDone === true);

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <span className="font-bold text-sm text-blue flex items-center gap-2">
          Tarefas criadas
          <div className="text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full">
            {tasks.length}
          </div>
        </span>
        <span className="font-bold text-sm text-purple flex items-center gap-2">
          Concluídas
          <div className="text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full">
            {completedTasks.length}
          </div>
        </span>
      </div>

      {tasks.length === 0 && (
        <div>
          <div className="h-px w-full bg-gray-400 rounded-lg rounded-r-lg" />

          <div className="flex flex-col items-center pt-10 space-y-4">
            <img className="" src="./list.png" alt="" />
            <div>
              <p className="font-bold text-gray-300">
                Você ainda não tem tarefas cadastradas
              </p>
              <p className="text-gray-300">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.task}
            className="bg-gray-500 rounded-lg flex items-start justify-between px-4 py-4 gap-3"
          >
            <div className="flex items-start gap-3">
              {task.isDone ? (
                <button onClick={() => updateTask(task.task)}>
                  <img src="./check.png" alt="check" />
                </button>
              ) : (
                <button onClick={() => updateTask(task.task)}>
                  <img src="./uncheck.png" alt="uncheck" />
                </button>
              )}
              <p
                className={`text-gray-100 text-sm text-left ${
                  task.isDone && "line-through text-gray-300"
                }`}
              >
                {task.task}
              </p>
            </div>
            <button onClick={() => deleteTask(task.task)}>
              <img src="./trash.png" alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
