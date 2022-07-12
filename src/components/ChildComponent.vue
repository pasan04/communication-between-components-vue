<template>
  <h1 class="is-size-3">Provide + Inject for functions/ methods</h1>
  <div>
    <button @click="selectMsg('Hello VueJs')">Select Msg</button>
  </div>

</template>

<script>
export default {
  inject: ['selectMsg'],
}
</script>
