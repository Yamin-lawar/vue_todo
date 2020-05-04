const state = {
     todos:[
     ],
     loader: false
}

const getters = {
    todos: (state) => state.todos,
    loader: (state) => state.loader
}

const actions = {
    fetchTodos({commit}){
        fetch('https://jsonplaceholder.cypress.io/todos?limit=10')
        .then(response => response.json())
        .then(json => {
                commit('setTodos', json); 
                setTimeout( function () { commit('setLoader', true) }, 5000) 
        })
        .catch(err => { throw err; });
    },
    storeTodos({commit}, title){
        fetch('https://jsonplaceholder.cypress.io/todos',{
            method:'post',
            body: JSON.stringify({title, completed: false}),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => commit('addTodos', json)) //this.todos = json)
          .catch(err => { throw err; });
    },
    deleteTodos({commit}, id){
        fetch(`https://jsonplaceholder.cypress.io/todos/${id}`,{
        method:'delete',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json =>  { console.log(json);commit('removeTodos',id) }) //this.todos = json)
      .catch(err => { throw err; });
    }
}

const mutations = {
    setTodos : (state, todos) => (state.todos = todos),
    setLoader: (state, loader) => (state.loader = loader),
    addTodos: (state, todo) => state.todos.unshift(todo),
    removeTodos: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
}

export default {
    state,
    getters,
    actions,
    mutations    
}