<template>
    <div class="parent-component">
      <child-component @changeMsg="setMessage" :msg="welcomeMsg"></child-component>
    </div>
</template>

<script>

export default {
  data() {
    return {
      topics: [
        {
          id: 'G01',
          title: 'Grade 01',
          description: 'Cover all grade 01 topics in here'
        },
        {
          id: 'G02',
          title: 'Grade 02',
          description: 'Cover all grade 02 topics in here'
        }
      ]
    };
  },
  provide(){
    return{
      topics: this.topics
    }
  }
}
</script>
