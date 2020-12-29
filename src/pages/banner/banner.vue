<template>
  <div></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data(){
    return {}
  },
  computed: {
    ...mapGetters({
      list: "cate/list"
    })
  },
  methods: {
    ...mapActions({
      reqList: "cate/reqList"
    })
  },
  mounted() {}
};
</script>

<style scoped>
</style>