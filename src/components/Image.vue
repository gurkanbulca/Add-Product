<template>
  <div class="card offset-2 col-md-3">
    <div class="card-body tex-center d-flex align-items-center flex-column">
      <img
        height="128"
        class="img-responsive text-center mb-3"
        :src="getSelectedImage() == null ? '/src/assets/default.png' : getSelectedImage()"
      />
      <input
        ref="file"
        type="file"
        style="display: none;"
        @change="onChange($event)"
        class="form-control"
      />
      <button class="btn btn-outline-secondary" type="button" @click="$refs.file.click()">Resim Seç</button>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main";
export default {
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      eventBus.selectedImage = URL.createObjectURL(file);
    },
    getSelectedImage(){
        return eventBus.selectedImage;
    }
  }
};
</script>

<style>
</style>