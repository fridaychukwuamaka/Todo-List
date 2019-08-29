import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        lists: [
            {
              id: "1",
              title: '',
              body: 'hi every one'
            },
            {
              id: '2',
              title: '',
              body: `my name is amaka`
            },
            {
              id: '2sf',
              title: '',
              body: 'and i am a intern at bincom'
            },
            {
              id: "23",
              title: '',
              body: 'hi every one'
            },
            {
              id: "223",
              title: '',
              body: 'my name is amaka'
            },
            {
              id:"34",
              title: '',
              body: 'and i am a intern at bincom'
            }
          ],
    }
})