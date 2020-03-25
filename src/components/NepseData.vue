<template>
  <div class="container">
    <div id="app">
      <h1>Share Prices of Nepal</h1>

      <!-- <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section> -->

      <!-- <section v-else>
        <div v-if="loading">Loading...</div>
      </section> -->
      <!-- <section v-else> -->
        <table class="table table-sm table-hover">
          <thead>
            <tr>
              <th scope="col">S.N.</th>
              <th scope="col">Traded Companies</th>
              <th scope="col">Transaction Qty</th>
              <th scope="col">Max Price</th>
              <th scope="col">Min Price</th>
              <th scope="col">Closing Price</th>
              <th scope="col">Traded Shares</th>
              <th scope="col">Amount</th>
              <th scope="col">Previous Closing</th>
              <th scope="col">Diffrence Rs.</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(nepse, index) in nepses" :key="index">
              <th scope="row">{{index +1}}.</th>
              <td>{{nepse.companyName}}</td>
              <td>{{nepse.noOfTransactions}}</td>
              <td>{{nepse.maxPrice}}</td>
              <td>{{nepse.minPrice}}</td>
              <td>{{nepse.closingPrice}}</td>
              <td>{{nepse.tradedShares}}</td>
              <td>{{nepse.amount}}</td>
              <td>{{nepse.previousClosing}}</td>
              <td>{{nepse.difference}}</td>
            </tr>
          </tbody>
        </table>
      <!-- </section> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "NepseData",
  data() {
    return {
      nepses: [],
      loading: true,
      errored: false
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    this.axios
      .get("data/todaysprice")
      .then(response => {
        this.nepses = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>