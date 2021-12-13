<template>
  <div>home page</div>
  <div><pre>{{JSON.stringify(data, null, 2)}}</pre></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  async setup() {
    const {data: { value:data }} =  await useFetch('http://localhost:3000/server-middleware/api/v1/test', { pick: ['message', 'data'] })
    return { data}
  },

})
</script>

