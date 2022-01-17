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
        // done: false,
    },
    methods: {
        addTask: function () {
            this.tasks.push(this.newTask),
            this.newTask = ''
        },
        removeTask: function (i) {
           this.tasks.splice(i, 1) 
        },
        // taskDone: function () {
        //     this.done = !this.done;
        // }
    }
})