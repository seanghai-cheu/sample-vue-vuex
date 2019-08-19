/**
 * export company state
 */
export const state = () => ({
    item: {
        id: 0,
        name: '',
        description: ''
    },
    items: [
        {
            id: 10,
            name: 'Auto File App 10',
            description: 'Description'
        },
        {
            id: 9,
            name: 'Ehome App 9',
            description: 'Description'
        },
        {
            id: 8,
            name: 'Auto File App 8',
            description: 'Description'
        },
        {
            id: 7,
            name: 'Ehome App 7',
            description: 'Description'
        },
        {
            id: 6,
            name: 'Auto File App 6',
            description: 'Description'
        },
        {
            id: 5,
            name: 'Ehome App 5',
            description: 'Description'
        },
        {
            id: 4,
            name: 'Auto File App 4',
            description: 'Description'
        },
        {
            id: 3,
            name: 'Ehome App 3',
            description: 'Description'
        },
        {
            id: 2,
            name: 'Auto File App 2',
            description: 'Description'
        },
        {
            id: 1,
            name: 'Ehome App 1',
            description: 'Description'
        }
    ]
})

/**
 * export company getters
 */
export const getters = {
    getItem: state => {
        return state.item
    },
    getItems: state => {
        return state.items
    }
}

/**
 * export company mutation (setter)
 */
export const mutations = {
    setEmptyItem: state => {
        state.item = {
            name: "",
            description: ""
        }
    },
    setItem: (state, payload) => {
        state.item = payload
    },
    setItems: (state, payload) => {
        state.items = payload
    },
    addItem: (state, payload) => {
        state.items.unshift(payload)
    },
    editItem: (state, payload) => {
        state.items = state.items.map(function(item) { return item.id == payload.id ? payload : item; })
    },
    removeItem: (state, payload) => {
        state.items = state.items.filter(item => item.id != payload.id)
    }
}

/**
 * export company action (work with web service)
 */
export const actions = {
    getItems: context => {
        //
    },
    getItem: (context, payload) => {
        let item = context.state.items.filter(row => row.id == payload.id)
        context.commit('setItem', item[0])
    },
    createItem: (context, payload) => {
        payload = {
            id: context.state.items.length + 1,
            name: context.state.item.name,
            description: context.state.item.description
        }
        context.commit('addItem', payload)
        context.commit('setEmptyItem')
    },
    updateItem: (context, payload) => {
        payload = {
            id: context.state.item.id,
            name: context.state.item.name,
            description: context.state.item.description
        }
        context.commit('editItem', payload)
        context.commit('setEmptyItem')
    },
    deleteItem: (context, payload) => {
        context.commit('removeItem', payload)
    }
}

/**
 * export company namespaced for use vuex module
 */
export const namespaced = true
