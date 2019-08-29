import Home from './components/Home.vue'
import Look from './components/Look.vue'
import AddNote from './components/AddNote.vue'
import EditNote from './components/EditNote.vue'

export const routes = [
      // dynamic segments start with a colon
      { path: '', component: Home},
      { path: '/hello', component: Look},
      { path: '/add-note', component: AddNote},
      { path: '/edit-note/:id', component: EditNote},
    ]
