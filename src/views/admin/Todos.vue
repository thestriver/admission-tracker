<template>
    <section style="padding-top: 250px; padding-bottom: 450px">
        <h5 class="text-center text-4xl pb-10 text-green-600 ">Track Your Tasks</h5>
        <ul class="collection with-header">
            <li class="collection-header">
                <div class="flex pb-8 w-full md:justify-start justify-center items-end">
                    <div class="relative mr-4 md:w-full lg:w-full xl:w-2/3 w-3/4">
                        <input id="new_todo" type="text"  v-model.trim="todo.title" 
                        placeholder="Add a new task" class=" validate w-full bg-gray-100 rounded border bg-opacity-50 border-gray-900 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                            />
                    </div>
                    <button @click="addTodo" class="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Add</button>
                </div>
                
            </li>
            <li
                class="collection-item"
                v-for="todo in todos"
                :key="todo.id"
               
            >   
                <span class="secondary-content"   :class="{ fade: todo.isCompleted }" >
                    <label>
                        <input
                            type="checkbox"
                            class="filled-in"
                            :checked="todo.isCompleted"
                            @change="updateTodoItem(todo.id, $event)"
                        />
                        <span></span>
                    </label>
                
                
                {{todo.title}}
                
                </span>

                <span class="deleteIcon" @click="deleteToDo(todo.id)">&#10005;</span>
            </li>
        </ul>
    </section>
</template>

<script>


import firebase from "firebase";
export default {
    data() {
        return {
            todos: [],
            todo: {
                title: ""
            }
        };
    },
    created() {
        this.getTodos();
    },
    components: {  },
    methods: {
        addTodo() {
            firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .collection("todos")
                .add({
                    title: this.todo.title,
                    createdAt: new Date(),
                    isCompleted: false
                });
        },
        async getTodos() {
            var todosRef = await firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .collection("todos");
            todosRef.onSnapshot(snap => {
                this.todos = [];
                snap.forEach(doc => {
                    var todo = doc.data();
                    todo.id = doc.id;
                    this.todos.push(todo);
                });
            });
        },
        updateTodoItem(docId, e) {
            var isChecked = e.target.checked;
            firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .collection("todos")
                .doc(docId)
                .update({
                    isCompleted: isChecked
                });
        },
        deleteToDo(docId) {
            firebase
                .firestore()
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .collection("todos")
                .doc(docId)
                .delete();
        }
    }
};
</script>

<style>
.fade {
    opacity: 0.4 !important;
    text-decoration: line-through;
}
li {
    font-size: 1.3em;
}
.collection.with-header {
    max-width: 500px;
    margin: 0 auto;
}
.deleteIcon {
    margin-left: 30px;
    cursor: pointer;
}
.deleteIcon:hover {
    opacity: 0.5;
}
</style>