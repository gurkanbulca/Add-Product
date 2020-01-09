<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-image></app-image>
      <app-product-form></app-product-form>
    </div>
    <br />
    <br />
    <app-progress></app-progress>
    <br />
    <br />
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr />
    <app-card></app-card>
  </div>
</template>

<script>
import Card from "./components/Card";
import Image from "./components/Image";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import Progress from "./components/Progress";

import { eventBus } from "./main";
export default {
  components: {
    appCard: Card,
    appHeader: Header,
    appImage: Image,
    appProductForm: ProductForm,
    appProgress: Progress
  },
};
</script>

<style>
body {
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card {
  margin-right: 5px;
  margin-bottom: 5px;
}

.card:last-child {
  margin-right: 0px;
}

.col-md-2 {
  max-width: 15.666667% !important;
}

.product-container {
  margin-left: 15px;
}
</style>

