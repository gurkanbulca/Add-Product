<template>
  <div class="col-md-5">
    <div class="col-md-11 card">
      <div class="card-body">
        <div class="form-group">
          <label>Ürün Adı</label>
          <input
            type="text"
            class="form-control"
            placeholder="adını giriniz"
            v-model="product.name"
          />
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Ürün Adeti</label>
            <input
              type="text"
              class="form-control"
              placeholder="adetini giriniz"
              v-model="product.count"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Ürün Fiyatı</label>
            <input
              type="text"
              class="form-control"
              placeholder="fiyatını giriniz"
              v-model="product.price"
            />
          </div>
        </div>
        <button class="btn btn-outline-info btn-block" @click="add()">Ekle!</button>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main";
export default {
  data() {
    return {
      product: {
        name: null,
        count: null,
        price: null
      }
    };
  },
  methods: {
    add() {
      if (eventBus.productList.length == 10) {
        alert("Daha fazla ürün ekleyemezsiniz!");
        return;
      }
      const product = {
        selectedImage: eventBus.selectedImage,
        name: this.product.name,
        count: this.product.count,
        price: this.product.price
      };
      eventBus.productList.push(product);
      this.product.selectedImage = null;
      this.product.name = null;
      this.product.price = null;
      this.product.count = null;
      eventBus.selectedImage = null;
    }
  }
};
</script>

<style>
</style>