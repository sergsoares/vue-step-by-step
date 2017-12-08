Vue.component('task-list', {
    template: '<div> <task v-for="task in tasks"> {{ task.title }}</task> </div>',

    data() {
        return {
            tasks: [
                { title: 'Study Vue', completed: false },
                { title: 'Study Vue', completed: false },
                { title: 'Study JS', completed: false },
                { title: 'Study AWS', completed: false },
                { title: 'Study TDD', completed: false }
            ]
        }
    }
})

Vue.component('task', {
    template: '<li> <slot> </slot> </li>'
})

new Vue({
    el: '#root'
})