<template>
	<div>
		<h1>Company listing</h1>
		<router-link class="btn btn-primary" :to="{ name: 'company-create' }">Create</router-link>
		<b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
		<b-table responsive
			:fields="fields"
			:items="items"
			:current-page="currentPage"
			:per-page="perPage"
			:filter="filter"
			:filterIncludedFields="filterOn"
			@filtered="onFiltered">
			<template slot="[action]" slot-scope="row">
				<b-button size="sm" @click="edit(row.item)" class="mr-2">Update</b-button>
				<b-button size="sm" @click="deleteItem(row.item)" class="mr-2">Detlete</b-button>
			</template>
		</b-table>

		<b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	/**
	 * component mounted
	 */
	mounted() {
		this.getItems()
	},

	/**
	 * initialize data
	 */
	data: () => ({
		fields: ['id', 'name', 'description', 'action'],
		filter: null,
		filterOn: [],
		totalRows: 10,
		currentPage: 1,
		perPage: 2,
	}),

	/**
	 * computed data
	 */
	computed: mapState({
		items: state => state.company.items
	}),

	/**
	 * method
	 */
	methods: {
		onFiltered(filteredItems) {
			this.totalRows = filteredItems.length
			this.currentPage = 1
		},
		edit(item) {
			this.$router.push({name: 'company-edit', params: { id: item.id} })
		},
		
		...mapActions({
			getItems: 'company/getItems',
			createItem: 'company/createItem',
			deleteItem: 'company/deleteItem'
		})
	}
}
</script>
