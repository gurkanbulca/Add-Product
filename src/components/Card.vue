<template>
  <div class="row product-container">
    <div class="col-md-2 card" :key="index" v-for="(product,index) in getProductList()" @click="deleteCard(index)">
      <img
        class="card-img-top"
        :src="product.selectedImage==null?'/src/assets/default.png':product.selectedImage"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <small>
          <strong>Adet :</strong>
          {{product.count}}
        </small>
        <br />
        <small>
          <strong>Fiyat :</strong>
          {{product.price}}₺
        </small>
        <br />
        <small>
          <strong>Tutar :</strong>
          {{product.price*product.count}}₺
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from "../main";
export default {
    methods:{
        getProductList(){
            return eventBus.productList;
        },
        deleteCard(index){
          eventBus.productList.splice(index,1);
        }
    }
};
</script>

<style scoped>
</style>