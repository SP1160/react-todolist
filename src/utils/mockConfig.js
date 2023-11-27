const mockConfig = (mock) => {
  const tasks = [
    {
      id: 1,
      name: "Do something",
      priority: "1",
      isCompleted: false,
    },
    {
      id: 2,
      name: "Hello World",
      priority: "2",
      isCompleted: false,
    },
    {
      id: 3,
      name: "Hey man",
      priority: "3",
      isCompleted: false,
    },
  ];

  const deleteTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);

    if (index !== -1) {
      tasks.splice(index, 1);
    }
  };

  const completeTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);

    if (index !== -1) {
      tasks[index].isCompleted = !tasks[index].isCompleted;
    }
  };

  const addTask = (task) => {
    if (task.hasOwnProperty("name") && task.hasOwnProperty("priority")) {
      if (typeof task.name === "string" && typeof task.priority === "string") {
        const newTask = {
          id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
          name: task.name,
          priority: task.priority,
          isCompleted: false,
        };

        tasks.push(newTask);
      } else {
        console.error("Error types");
      }
    } else {
      console.error("Error property");
    }
  };

  const editTask = (editedTask) => {
    const index = tasks.findIndex((task) => task.id === editedTask.id);

    if (index !== -1) {
      tasks[index] = {
        ...tasks[index],
        name: editedTask.name,
        priority: editedTask.priority,
        isCompleted: editedTask.isCompleted,
      };
    }
  };

  const findTaskById = (id) => {
    return tasks.find((task) => task.id === id);
  };

  mock.post("/api/getTaskList", (req, res) => {
    console.log(tasks);
    return res.status(200).body(JSON.stringify(tasks));
  });
  mock.post("/api/getTaskById", (req, res) => {
    const { id } = JSON.parse(req.body());
    const task = findTaskById(id);
    return res.status(200).body(JSON.stringify(task));
  });
  mock.post("/api/deleteTask", (req, res) => {
    const { id } = JSON.parse(req.body());
    deleteTask(id);
    return res.status(200);
  });
  mock.post("/api/completeTask", (req, res) => {
    const { id } = JSON.parse(req.body());
    completeTask(id);
    return res.status(200);
  });
  mock.post("/api/createTask", (req, res) => {
    const newTask = JSON.parse(req.body());
    addTask(newTask);
    const event = new CustomEvent("createTask", { detail: newTask });
    window.dispatchEvent(event);
    return res.status(200);
  });
  mock.post("/api/editTask", (req, res) => {
    const editedTask = JSON.parse(req.body());
    editTask(editedTask);
    const event = new CustomEvent("editTask", { detail: editedTask });
    window.dispatchEvent(event);
    return res.status(200);
  });
};

export default mockConfig;
