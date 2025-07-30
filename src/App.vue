<template>
  <div id="app">
    <div class="todo-container">
      <h2>오늘의 할 일</h2>

      <div class="form">
        <input
          v-model="newTodo"
          type="text"
          placeholder="할 일을 입력하세요."
        />
        <button @click="addTodo">추가</button>
      </div>

      <ul class="todo-list">
        <TodoItem
          v-for="(todo, index) in todos"
          :key="index"
          :content="todo"
          @delete="removeTodo(index)"
        />
      </ul>
    </div>

    <div class="todo-container">
      <h2>외부에서 불러온 할 일 목록</h2>
      <button @click="fetchTodos">불러오기</button>
      <ul class="todo-list apiTodo">
        <ApiTodoItem
          v-for="todo in apiTodos"
          :key="todo.id"
          :content="todo.title"
          @delete="removeApiTodo(todo.id)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";

import axios from "axios";
import ApiTodoItem from "./components/ApiTodoItem.vue";

export default {
  components: {
    TodoItem,
    ApiTodoItem,
  },
  data() {
    return {
      newTodo: "",
      todos: [],
      apiTodos: [],
    };
  },
  methods: {
    addTodo() {
      const trimmed = this.newTodo.trim();
      if (trimmed) {
        this.todos.push(trimmed);
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1); //splice는 원본 배열 훼손 수정
    },

    async fetchTodos() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        this.apiTodos = res.data; // res 의 데이터 객체or배열 가져와서 this.apiTodos 에 담기
        console.log(this.apiTodos);
      } catch (err) {
        alert("데이터를 불러오는 데 실패했습니다.");
      }
    },
    removeApiTodo(id) {
      //this.apiTodos.splice(id, 1); // < splice는 원본 훼손
      this.apiTodos = this.apiTodos.filter((todo) => todo.id != id); // filter는 원본 훼손 없이 새로운 배열or객체 반환 (콜백함수)
      // id 가 같은 애는 제외하고 아닌애들만 모아서 새로운 배열 반환
    },
  },
};
</script>

<style scoped>
/* @import "./assets/base.css"; */

.todo-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.todo-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.form input {
  flex: 1;
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 6px;
  font-size: 14px;
}

.form button {
  padding: 8px 0;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 80px;
}

.form button:hover {
  background-color: #36956d;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  padding: 6px 0;
  font-size: 16px;
  border-bottom: 1px dashed #ddd;
}
</style>
