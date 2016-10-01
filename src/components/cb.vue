<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="inventory-list" v-if="items">
    <ul>
     <li v-for="item in items">
      {{ item.name }}
    </li>
    </ul>
  </div>

  <a href="javascript:void()" v-on:click="prevPage">Prev Page</a>
  <a href="javascript:void()" v-on:click="nextPage">Next Page</a>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello cloud-bean!',
      page: 0,
      pageSize: 20,
      itmes: [],
      allItems: [],
      apiUrl: 'http://120.25.227.156:8000/inventories',
    };
  },

  ready() {
    this.getInventoryAll();
  },

  methods: {
    setItems() {
      console.log('settting items', this.page, this.pageSize);
      this.$set('items', this.allItems.slice(this.page * this.pageSize,
        (this.page + 1) * this.pageSize));
      console.log(this.items);
    },
    getInventoryAll() {
      console.log('getInventoryAll');
      this.$http.get(this.apiUrl)
        .then((response) => {
          this.$set('allItems', response.data);
          this.setItems();
        })
        .catch((response) => {
          console.log(response);
        });
    },
    nextPage() {
      this.page++;
      this.setItems();
    },
    prevPage() {
      this.page--;
      this.setItems();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: #42b983;
}
</style>
