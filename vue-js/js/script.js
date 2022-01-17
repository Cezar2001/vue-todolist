new Vue ({
    el:"#app",
    data: {
        tasks: [
            {
                text: "Fare i compiti",
                done: false,
            },
            {
                text: "Fare la spesa",
                done: true,
            },
            {
                text: "Fare il bucato",
                done: false,
            },
        ],
        newTask: '',
    },
    methods: {
        addTask: function () {
            let mission = {text: this.newTask, done: false}
            this.tasks.push(mission)
            this.newTask = ''
        },
        removeTask: function (i) {
           this.tasks.splice(i, 1) 
        },
    }
})