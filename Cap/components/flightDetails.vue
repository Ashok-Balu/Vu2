<template>
  <div class="container container-styles">
    <div class="row">
      <div class="col-8 offset-2">
        <div class="card ">
          <div class="card-header bg-primary text-white">View the flight</div>
          <div class="card-body bg-light text-dark">
            <table class="table table-bordered">
              <tr>
                <th>Passanger Name</th>
                <th>Booking ID</th>
                <th>No. of tickets</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
              <tr v-for="flight in flightDetails" v-bind:key="flight">
                <td>{{ flight.passengerName }}</td>
                <td>{{ flight.bookingId }}</td>
                <td>{{ flight.noOfTickets }}</td>
                <td>{{ flight.totalAmount }}</td>
                <td >
                  <button
                    type="submit"
                    class="btn btn-danger"
                    v-on:click="deleteBooking(flight.bookingId)"
                    value="Delete"
                    :disabled="flight.totalAmount >= 5000"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </table>

            <span class="success" v-if="successMessage">
                {{successMessage}}
            </span>
            <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "flightDetails",
  data() {
    return {
      flightDetails: [],
      errorMessage: "",
      successMessage: ""
    };
  },
  mounted: function() {
    this.viewDetails();
  },
  methods: {
    deleteBooking(bookingId) {
      this.successMessage = null;
      this.errorMessage = null;
      this.$http.delete("http://localhost:1020/delete/" + bookingId).then(
        res => {
          this.successMessage = res.body.message;
          this.viewDetails();
        },
        err => {
          this.errorMessage = err.body.message;
        }
      );
    },
    viewDetails() {
      this.$http.get("http://localhost:1020/getallId/").then(
        res => {
          this.flightDetails = res.body;
          this.errorMessage = null;
        },
        err => {
          this.errorMessage = err.body.message;
          this.flightDetails = null;
        }
      );
    }
  }
};
</script>

<style>
.container-styles {
  position: relative;
  top: 100px;
}
.error {
  color: red;
  position: relative;
}

.success {
  color: green;
  position: relative;
}


</style>
