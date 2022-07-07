<template>
    <div>
            
            <h4>Course schedule</h4>
            <h3 v-if="ErrorMessage">{{ErrorMessage}}</h3>
            <h3 v-else>{{SuccessMessage}}</h3>
            <ul>
            <li v-for="detail in details" :key="detail.id">
                {{ detail.name }} by {{ detail.educator }}
            </li>
    </ul>
    </div>
</template>

<script>


    export default {
        name:'HttpCmp',
        data: function () {
        return { 
            details: [] ,
            SuccessMessage:'',
             ErrorMessage:'',};
        },
        // created() {
        // this.$http.get("../data.json").then(function (data) {
        // console.log("data", data);
        // this.details = data.data;
        // });
        // },

        // created: function () {
        //     this.$http.get("../data.json").then(
        //         (success)=>{this.details=success.body}
        //     )
        // }

         created: function () {
             this.$http.get("../data.json")
                 .then((response) => {
                        console.log(response.data)
                        this.details=response.data
                        this.SuccessMessage='Successfully received data'
                        
                    })
                    .catch((error) => {
                        console.log(error)
                        this.ErrorMessage='Error retrieving data'
                    }) 
         }  
        
    }
</script>

<style scoped>

</style>
