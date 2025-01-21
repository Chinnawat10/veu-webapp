<template>
  <div class="app">
    <h1>Vue.js To-Do List</h1>
    <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask" />
    <button @click="addTask">Add Task</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ 'completed-task': task.completed }">{{ task.text }}</span>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>

.head {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 260px;
  margin-left: 650px;
  position: absolute; /* เปลี่ยนจาก fixed เป็น absolute */
  justify-content: center;
  transition: transform 0.3s ease; /* เพื่อเพิ่มการเคลื่อนไหวที่ลื่นไหล */
}

.head:hover {
  transform: translate(10px, 10px); /* เมื่อโฮเวอร์ โลโก้จะขยับเล็กน้อย */
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.completed-task {
  text-decoration: line-through;
  color: grey;
}
input {
  margin-bottom: 10px;
  padding: 5px;
}
button {
  margin-left: 5px;
  padding: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
}
/* Responsive */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .head {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 260px;
  margin-left : 150px;
  position:fixed;
  justify-content: center;
}
.completed-task {
  text-decoration: line-through;
  color: grey;
}

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .head {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 260px;
  margin-left : 350px;
  position:fixed;
  justify-content: center;
}
.completed-task {
  text-decoration: line-through;
  color: grey;
}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .head {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 260px;
  margin-left : 450px;
  position:fixed;
  justify-content: center;
}
.completed-task {
  text-decoration: line-through;
  color: grey;
}

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .head {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 260px;
  margin-left : 550px;
  position:fixed;
  justify-content: center;
}
.completed-task {
  text-decoration: line-through;
  color: grey;
}

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .head {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 260px;
  margin-left : 650px;
  position:fixed;
  justify-content: center;
}
.completed-task {
  text-decoration: line-through;
  color: rgb(151, 146, 146);
}
}
</style>