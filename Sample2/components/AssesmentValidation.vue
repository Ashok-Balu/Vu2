<template>
<div>
  <div>
    <pre>
      {{JSON.stringify(formValue,null,2)}}
    </pre>
  </div>

  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
    <!-- <ValidationObserver v-slot="{ invalid}"> -->
      <form 
       @submit.prevent="handleSubmit(validate)"
       >
          <div class="form-group">
                  <label
                    for="Phonenumber"
                    class="control-label col-form-label"
                  >
                   Phone number :
                  </label>
                  <ValidationProvider
                    name="Phonenumber"
                    rules="required|numeric|min:6|max:9"
                    v-slot="{ errors }"
                  >
                    <input
                      class="form-control"
                      v-model="formValue.phoneNumber"
                      name="Phonenumber"
                      type="number"
                      placeholder="Enter phone number"
                    />
                   <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
                    <span class="error" v-if="errors[1]">{{ errors[1] }}</span>
                    <span class="error" v-if="errors[2]">{{ errors[2] }}</span>
                    <span class="error" v-if="errors[3]">{{ errors[3] }}</span>
                  </ValidationProvider>
           </div>


           <div class="form-group">
                  <label
                    for="location"
                    class="control-label col-form-label"
                  >
                   Location :
                  </label>
                  <ValidationProvider
                    name="location"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <input
                      class="form-control"
                      v-model="formValue.location"
                      name="location"
                      type="text"
                      placeholder="--Select a Location--"
                    />
                   <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
                    
                  </ValidationProvider>
           </div>



           <div class="form-group">
                  <label
                    for="department"
                    class="control-label col-form-label"
                  >
                   Department :
                  </label>
                  <ValidationProvider
                    name="department"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <input
                      class="form-control"
                      v-model="formValue.department"
                      name="department"
                      type="text"
                       placeholder="--Select a Department--"
                    />
                   <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
            
                  </ValidationProvider>
           </div>



           <div class="form-group">
                  <label
                    for="date"
                    class="control-label col-form-label"
                  >
                   Date :
                  </label>
                  <ValidationProvider
                    name="date"
                    rules="required|date"
                    v-slot="{ errors }"
                  >
                    <input
                      class="form-control"
                      v-model="formValue.date"
                      name="date"
                      type="text"
                    />
                   <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
                    <span class="error" v-if="errors[1]">{{ errors[4] }}</span>
                 
                  </ValidationProvider>


                  <div class="form-group">
                        <label   for="Plantype" class="control-label col-form-label">Plan Type:</label>
                        <br>
                        <ValidationProvider
                          name="plantype"
                          rules="required"
                          v-slot="{ errors }"
                        >
                            
                            <input   type="radio" id="Postpaid" value="Postpaid" v-model="formValue.plantype"/>
                            <label  for="Postpaid">Postpaid</label> &nbsp;
                            <input   type="radio" id="Prepaid" value="Prepaid" v-model="formValue.plantype"/>
                            <label  for="Prepaid">Prepaid</label>
                              <br/>
                            <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
                    
                 
                         </ValidationProvider>
                     </div>


                     <div class="form-group">
                  <label
                    for="planValue"
                    class="control-label col-form-label"
                  >
                  plan Value :
                  </label>
                  <ValidationProvider
                    name="planValue"
                    rules="required|min_value:199|max_value:599"
                    v-slot="{ errors }"
                  >
                    <input
                      class="form-control"
                      v-model="formValue.planValue"
                      name="planValue"
                      type="text"
                     
                    />
                   <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
                    <span class="error" v-if="errors[5]">{{ errors[5] }}</span>
                    <span class="error" v-if="errors[6]">{{ errors[6] }}</span>
                  </ValidationProvider>
           </div>


           <div class="form-group">
                  <label
                    for="addOns"
                    class="control-label col-form-label"
                  >
                   addOns :
                  </label>
                  <ValidationProvider
                    name="addOns"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <textarea
                      class="form-control"
                      v-model="formValue.addOns"
                      name="addOns"
                      rows="3" 
                       />
                   <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
            
                  </ValidationProvider>
           </div>


            <div class="form-group">
                  <label
                    for="buffetName"
                    class="control-label col-form-label"
                  >
                   Buffet Name :
                  </label>
                  <ValidationProvider
                    name="buffetName"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <select name="buffetName" class="form-control" placeholder="Select a buffet" v-model="formValue.buffetName">
                    <option disabled value="">--Select a buffet--</option>
                    <option value="NorthIndianFestivalSpecial">North Indian Festival Special</option>
                    <option value="SouthIndianFestivalSpecial">South Indian Festival Special</option>
                    <option value="ChineseSpecial">Chinese Special</option>
                    </select>
                   <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
            
                  </ValidationProvider>
           </div>

          <div class="form-group">
                  <label
                    for="emailId"
                    class="control-label col-form-label"
                  >
                   Email Id :
                  </label>
                  <ValidationProvider
                    name="emailId"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <input
                      class="form-control"
                      v-model="formValue.emailId"
                      name="emailId"
                      type="email"
                       placeholder="Enter your email"
                    />
                  <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
                   <span class="error" v-if="errors[7]">{{ errors[7] }}</span>
            
                  </ValidationProvider>
           </div>


          
  
  

            <!-- <br>
            <div class="form-group ">
            <button
              type="submit"
              class="btn btn-primary btn-md btn-block"
              :disabled="invalid"
              @click.prevent="validate"
            >
              Submit
            </button>
          </div> -->

          <!-- 2 methods for submit
          1.if after enter valid details we can able to submit
          2.if we submit without valid it will show validation error -->

           <div class="form-group ">
            <button
              type="submit"
              class="btn btn-primary btn-md btn-block"
              
            >
              Submit
            </button>
          </div>




           </div>

                

                

            <br><br><br>
       </form>
       </ValidationObserver>
  </div>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";
import { required,numeric,min,max,min_value,max_value,email} from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "Field required"
});
extend("numeric", {
  ...numeric,
  message: "must contain numeric letter"
});
extend("min", {
  ...min,
  message: "Phone number should min 1 digits"
});

extend("max", {
  ...max,
  message: "Phone number should be 10 digits"
});

extend("date",value=> {
 //var today = new Date ().toJSON ().slice (0,10).replace (/-/g,'/');
 var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
//today = yyyy + '-' + mm + '-' + dd; (date)

  console.log(today);
  console.log("today:",today)
  console.log("value:",value)
  if(value>=today){
    return true;
  }
    return "greater than today date";
});

extend("min_value", {
  ...min_value,
  message: "Plan value cannot be less than 199"
});

extend("max_value", {
  ...max_value,
  message: "Plan value cannot be greater than 599"
});
extend("email", {
  ...email,
  message: "email must be valid"
});




  export default {
    name:'AssesmentValidation',
    components: {
      ValidationProvider
     },
    data: function() {
      return {
        formValue: 
          {
            phoneNumber:"",
            location:"",
            department:"",
            date:"",
            plantype:"",
            planValue:"",
            addOns:"",
            buffetName:"",
            emailId:"",
            
         }
      };
    },
    methods:{
        validate() {
      
          alert("Form submitted");
            console.log(this.formValue);
            },

      
    },

 
  }
</script>

<style scoped>
.error {
  color: red;
  position: relative;
}
</style>
