<template>
  <h1 class="is-size-3">{{ msg }}</h1>
  <br>
  <input class="input" type="text" v-model="changeMsgVar"> <br/><br/>
  <button @click="changeMsg"> Change Message
  </button>
</template>

<script>
export default {
  data(){
      return {
        changeMsgVar:''
      }
  },
  props: {
    msg: String
  },
  methods:{
    changeMsg(){
      this.$emit("changeMsg", this.changeMsgVar);
      console.log('message emit from child component');
    }
  }
}
</script>
