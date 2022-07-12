<template>
    <div class="parent-component">
      <child-component @changeMsg="setMessage" :msg="welcomeMsg"></child-component>
      <p>{{this.selectedMsg}}</p>
    </div>
</template>

<script>

export default {
  data(){
    return{
      selectedMsg: ''
    }
  },
  provide(){
    return{
      topics: this.topics,
      selectMsg: this.selectMsg
    }
  },
  methods:{
    selectMsg(msg){
      this.selectedMsg = msg
    }
  }
}
</script>
