/*

*/


const {createApp} = Vue;

createApp({
    data() {
        return {

            tasks: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],

            newTaskText: '',

        }
    },

    methods: {
        
        deleteTask(taskIndex) {
            
            // l'elemento corrispondente dalla lista
            // console.log(this.tasks[taskIndex])

            this.tasks.splice(taskIndex, 1);

        },

        addTask() {
            // contenuto del campo di testo
            // console.log(this.newTaskText)

            // creo un nuovo oggetto task
            const newTask = {
                done: false
            }

            // inserisco il testo all'interno della sua proprietà "text"
            newTask.text = this.newTaskText


            // lo inserisco nell'array
            this.tasks.push(newTask)

            console.log(this.tasks)

            // resetto il contenuto del campo di input
            this.newTaskText = ""

        },

    },
}).mount("#app");