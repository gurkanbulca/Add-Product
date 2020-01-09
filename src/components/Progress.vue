<template>
  <div class="progress">
      <div
        class="progress-bar bg-info"
        role="progressbar"
        :style="{'width': getLength()*10+'%'}"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >{{getLength()}}/10</div>
    </div>
</template>

<script>
import {eventBus} from "../main";
export default {
    methods:{
        getLength(){
            return eventBus.productList.length;
        }
    }
}
</script>

<style>

</style>