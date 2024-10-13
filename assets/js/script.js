/*variables globales*/
let taskId = 1; // Contador para ID correlativo
let totalTasks = 0; // Contador para el total de tareas
let completedTasks = 0; // Contador para las tareas completadas

/*Funcion add task 
Se obtiene el valor del input para la nueva tarea.
Se verifica si hay texto en el campo antes de proceder.*/

function addTask() {
    const taskInput = document.getElementById("new-task").value;
    if (taskInput) {
        const summaryTable = document.getElementById("task-summary");

        // Crear fila para la nueva tarea
        const row = document.createElement("tr");
        row.setAttribute("id", `task-${taskId}`);

        // Columna ID
        const idCell = document.createElement("td");
        idCell.textContent = taskId;
        row.appendChild(idCell);

        // Columna Tarea
        const taskCell = document.createElement("td");
        taskCell.textContent = taskInput;
        row.appendChild(taskCell);

        // Columna Acciones
        const actionCell = document.createElement("td");

        // Checkbox para marcar como realizada (OK)
        const completeButton = document.createElement("input");
        completeButton.type = "checkbox";
        completeButton.onclick = function() {
            if (completeButton.checked) {
                taskCell.classList.add("completed");
                completedTasks++;
            } else {
                taskCell.classList.remove("completed");
                completedTasks--;
            }
            updateSummary();
        };

        // Botón de eliminar (X)
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.onclick = function() {
            row.remove();
            totalTasks--;
            if (taskCell.classList.contains("completed")) {
                completedTasks--;
            }
            updateSummary();
        };

        actionCell.appendChild(completeButton);
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);

        // Añadir la fila al resumen
        summaryTable.appendChild(row);

        // Limpiar input y aumentar el ID
        document.getElementById("new-task").value = '';
        taskId++;
        totalTasks++;
        updateSummary();
    }
}

// Función para actualizar el resumen de tareas
function updateSummary() {
    document.getElementById("total-tasks").textContent = totalTasks;
    document.getElementById("completed-tasks").textContent = completedTasks;
}
