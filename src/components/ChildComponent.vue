<template>
  <h1>{{receivedMessage}}</h1>
</template>

<script>
export default {
  props: {
    message:{
      type: String,
      required: true,
      validator: function(value){
        return value === '1' || value === '0'; //this will lead to a warning message in the console.
      }
    },
    valuePassing:{
      type: String,
      required:true
    }
  },
  data(){
    return {
      receivedMessage:this.message
    }
  },
  methods:{
    selectMessageType(){
      this.receivedMessage = "It's working now !"
    }
  }
}
</script>
