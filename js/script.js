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

            newTask: {
                done: false,
                text: ''
            },

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
            // console.log(this.newTask.text)

            // se provassi a fare il push direttamente del newTask
            // vedrei in pagina che alla modifica del campo di input
            // si modificherebbe magicamente anche il testo del task appena inserito in lista
            // this.tasks.push(this.newTask)

            // per evitare ciò, usiamo lo spread operator
            // questo "rimuove le parentesi" che circondano un oggetto (o array)
            // e inserisce le proprietà dentro un nuovo oggetto, in questo modo
            // interrompo il legame

            // controllo che non stia aggiungendo un task vuoto
            // il metodo .trim() di una stringa elimina da quella stringa gli spazi vuoti
            // in questo modo se ho inserito solo degli spazi vuoti, verranno eliminati prima di fare il controllo
            if(this.newTask.text.trim() != "") {

                // aggiungo il task all'array
                this.tasks.push({...this.newTask})
                console.log(this.newTask)
    
                // resetto il testo del nuovo task
                this.newTask.text = ""
            }
        },
    },
}).mount("#app");