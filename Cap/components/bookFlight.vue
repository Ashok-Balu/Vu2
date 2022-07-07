<template>

  <div class="container container-styles">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card ">
          <div class="card-header bg-primary text-white">Book the flight</div>
          <div class="card-body bg-light text-dark">
            <ValidationObserver v-slot="{ handleSubmit, reset }">
              <form
                @submit.prevent="handleSubmit(bookFlight)"
                @reset.prevent="reset"
              >
                <div class="form-group">
                  <label
                    for="passengerName"
                    class="control-label col-form-label"
                  >
                    Passenger Name :
                  </label>
                  <ValidationProvider
                    name="Passenger Name"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <input
                      class="form-control"
                      v-model="bookingDetails.passengerName"
                      name="passengerName"
                      type="text"
                    />
                    <span class="error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group">
                  <label for="noOfTickets" class="control-label col-form-label">
                    No. Of Tickets :
                  </label>
                  <ValidationProvider
                    name="No. Of Tickets"
                    rules="required|seats"
                    v-slot="{ errors }"
                  >
                    <input
                      class="form-control"
                      v-model="bookingDetails.noOfTickets"
                      type="number"
                      name="noOfTickets"
                    />
                    <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
                    <span class="error" v-if="errors[1]">{{ errors[1] }}</span>
                  </ValidationProvider>
                </div>

                <div class="form-group">
                  <label for="flightId" class="control-label col-form-label">
                    Flight Id :
                  </label>
                  <ValidationProvider
                    name="Flight Id"
                    rules="required|pattern"
                    v-slot="{ errors }"
                  >
                    <input
                      class="form-control"
                      v-model="bookingDetails.flightId"
                      name="flightId"
                      type="text"
                    />
                    <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
                    <span class="error" v-if="errors[1]">{{ errors[1] }}</span>
                  </ValidationProvider>
                </div>

                <br>
                <div class="form-group row">
                  <div class="col-3 ">
                    <button type="submit" class="btn btn-primary ">
                      Book flight
                    </button>
                  </div>
                  <div class="col-3 offset-3">
                    <input
                      type="reset"
                      class="btn btn-outline-secondary"
                      value="Cancel"
                    />
                  </div>
                </div>

                <span class="success" v-if="successMessage">
                  {{successMessage}}
                </span>
                <span class="error" v-if="errorMessage">
                  {{errorMessage}}
                </span>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

// Override the default message.

//extend('required', required);
//Passenger Name is not valid.
//Flight Id is not valid.


extend("required", {
  ...required,
  message: "Field required"
});

extend("seats", value => {
  if (value > 0) {
    return true;
  }
  return "Enter the number of tickets greater than 0";
});

extend("pattern", value => {
  var regex = new RegExp("[A-Z]{3}[-][0-9]{3}");
  if (regex.test(value)) {
    return true;
  }
  return "Enter valid flight id";
});

export default {
  name: "bookFlight",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => {
    return {
      bookingDetails: {
        passengerName: "",
        noOfTickets: 0,
        flightId: ""
      },
      successMessage: "",
      errorMessage: ""
    };
  },
  methods: {
    bookFlight() {
      this.successMessage = null;
      this.errorMessage = null;
      //console.log(this.bookingDetails);
      this.$http.post("http://localhost:1020/bookFlight/", this.bookingDetails).then(
        res => {
          console.log(res); // eslint-disable-line no-console
          this.successMessage = res.body.message;
        },
        err => {
          this.errorMessage = err.body.message;
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
