<template>
	<div>
		<h1>Company Form</h1>
		<input type="text" placeholder="Name" name="name" v-model="item.name">
		<input type="text" placeholder="Description" name="description" v-model="item.description">

		<button class="btn btn-primary" @click="save">Save</button>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	/**
	 * component mounted
	 */
    mounted() {
		this.$store.commit('company/setEmptyItem')

        if(this.$route.params.id) {
            this.getItem({ id: this.$route.params.id })
        }
    },

	/**
	 * computed data
	 */
	computed: mapState({
		item: state => state.company.item,
    }),
	
	/**
	 * method
	 */
	methods: {
        save() {
            if(this.$route.params.id) {
                this.updateItem(this.item)
            } else {
                this.createItem(this.item)
            }

            this.$router.push({ name: 'company-list' })
        },
        
		...mapActions({
			getItem: 'company/getItem',
			createItem: 'company/createItem',
			updateItem: 'company/updateItem',
		})
	}
}
</script>
