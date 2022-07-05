<template>
    <div class="parent-component">
      <child-component @changeMsg="setMessage" :msg="welcomeMsg"></child-component>
    </div>
</template>

<script>

export default {
  data() {
    return {
      welcomeMsg: "Hello World"
    };
  },
  methods: {
    setMessage(msg) {
      this.welcomeMsg = msg;
    }
  },

}
</script>
