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

        }
    },

    methods: {
        
        deleteTask(taskIndex) {
            
            // l'elemento corrispondente dalla lista
            // console.log(this.tasks[taskIndex])

            this.tasks.splice(taskIndex, 1);

        }

    },
}).mount("#app");