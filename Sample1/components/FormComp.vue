<template>
  <div>
    <div v-bind:style="{width:'35%'}">
    <form>
    <h3 > Login </h3> 
    <br/>
    <div class="form-group" >
       <label for="name">Name</label>
        <input type="text" id="name" v-model="credentials.userName"
		name="Name" class="form-control">
    </div>
			
    <div class="form-group">
       <label for="password">Password</label>
       <input type="password" v-model="credentials.password"
       id="password" class="form-control">
    </div>
    <br>
	<button type="submit" @click.prevent="validate" class="btn btn-primary btn-md btn-block">Submit </button>
   </form>
   </div>
 </div>
</template>
<script>
export default {
    name: 'FormComp',
    data: function () {
        return { 
            credentials:{
                userName:'',
                password:'',
            }
        }
    },
  
    methods:{
        validate :function() {
            if(this.credentials.userName!='' && this.credentials.password!=''){
                alert("Form submitted");
                console.log("Data:" + this.credentials.userName);
            }
            else {
                alert('Please enter the details');
            }	
        }
    }
}
</script>
