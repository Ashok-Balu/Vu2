<template>
  <div>
    <div :style="{ width: '35%' }">
      <ValidationObserver v-slot="{ invalid }">
        <!-- using invalid the submit button is disabled. -->
        <form name="login" @submit.prevent="validate">
          <!-- either we can this  @submit.prevent="validate" or 
          we can use @click.prevent="validate" on button form group line:51 -->
          <h3>Login</h3>
          <br />

          <div class="form-group">
            <label>Name</label><br />
            <ValidationProvider name="User Name" rules="nameRequired" v-slot="{ errors }">
              <input
                type="text"
                v-model="credentials.userName"
                class="form-control"
              />
              <!-- <p :style="{ color: 'red' }">{{ errors[0] }}</p> -->
              <!-- We can use either of two methods -->
              <p class="text-danger">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>

           <div class="form-group">
            <label>Age</label><br />
            <ValidationProvider name="Age" rules="ageRequired" v-slot="{ errors }">
              <input
                type="number"
                v-model="credentials.age"
                class="form-control"
              />
              <p :style="{ color: 'red' }">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>

          <div class="form-group">
            <label>Password</label><br />
            <ValidationProvider rules="passwordRequired" v-slot="{ errors }">
              <input
                type="password"
                v-model="credentials.password"
                class="form-control"
              />
              <p :style="{ color: 'red' }">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>

          <div class="form-group ">
            <button
              type="submit"
              class="btn btn-primary btn-md btn-block"
              :disabled="invalid"
            >
              Submit
            </button>
          </div>

        </form>
        <p v-if="!invalid">{{ message }}</p>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("nameRequired", {
  ...required,
  message: "User Name is required",
});

extend("passwordRequired", {
  ...required,
  message: "Password is required",
});

extend('ageRequired', value =>{
      if (value>=18) {
    return true;
  }
  return "Age should be greater than 18";
});

export default {
  name: "ValidateForm",
  data: function() {
    return {
      credentials: 
        {
           userName: "",
            password: "" ,
            age:""
        },
      message: "",
    };
  },

  methods: {
    validate() {
      this.message = "Form submitted successfully";
      alert("Form submitted");
      console.log("Name:" + this.credentials.userName);
      console.log("Password:" + this.credentials.password);
      console.log("Age:" + this.credentials.age);
    },
  },
};
</script>
