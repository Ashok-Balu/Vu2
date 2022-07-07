<template>
  <div>
    <form @submit.prevent="bookForm">
      <div>
        <label for="userId">Post User ID</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>
      <div>
        <label for="title">Post Title</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="body">Post Body</label>
        <input type="text" id="body" v-model="formData.body" />
      </div>
      <button>Create Post</button>
       <span class="success" v-if="successMessage">
                  {{successMessage}}
                </span>
                <span class="error" v-if="errorMessage">
                  {{errorMessage}}
                </span>
    </form>
     <br><br>
    <div>
        <button @click="deletePosts">Delete Posts</button>
        <h3 v-if="ErrorMessage1">{{ErrorMessage1}}</h3>
         <h3 v-else>{{SuccessMessage1}}</h3>
        <div v-for="del in deleted" :key="del.id">
            <h3>{{del.id}}. {{del.title}}</h3>
            <p>{{del.body}}</p>
            <hr />
        </div>
    </div>
    <br><br>
    <div>
        <button @click="getPosts">Load Posts</button>
        <h3 v-if="ErrorMessage2">{{ErrorMessage2}}</h3>
         <h3 v-else>{{SuccessMessage2}}</h3>
        <div v-for="post in posts" :key="post.id">
            <h3>{{post.id}}. {{post.title}}</h3>
            <p>{{post.body}}</p>
            <hr />
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HttpSample',
  data() {
    return {
      formData: {
        userId: '',
        title: '',
        body: '',
      },
      successMessage:'',
      errorMessage:'',
       posts:[],
       deleted:[],
       SuccessMessage1:'',
       ErrorMessage1:'',
       SuccessMessage2:'',
       ErrorMessage2:'',
    
    }
  },
  methods: {
      bookForm(){
          
          this.successMessage = null;
          this.errorMessage = null;
          //console.log(this.bookingDetails);
          this.$http.post('https://jsonplaceholder.typicode.com/posts', this.formData)
          .then((response) => {
          console.log(response)
          this.successMessage=`Successfully received data: ${this.formData.userId}`
        //   'Successfully received data:'+(this.formData.userId)
             })
        .catch((error) => {
          console.log(error)
          this.errorMessage='Error retrieving data'
        }
          );
          this.deletePosts();
        },


        deletePosts(){

                     this.$http
                    .delete('https://jsonplaceholder.typicode.com/posts/1')
                    .then((response) => {
                        console.log(response.data)
                        this.deleted=response.body
                        console.log("Deleted:",this.deleted)
                        this.SuccessMessage1='Successfully deleted'
                    })
                    .catch((error) => {
                        console.log(error)
                        this.ErrorMessage1='Error in deleting'
                    })
                    this.getPosts();
            },

        getPosts(){
                 this.$http
                    .get('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => {
                        console.log(response.data)
                        this.posts=response.data
                        //console.log(this.posts)
                        this.SuccessMessage2='Successfully received data from post'
                    })
                    .catch((error) => {
                        console.log(error)
                        this.ErrorMessage2='Error retrieving data from post'
                    })
                    
                    
            },

             
  },
}
</script>

<style scoped>
.error {
  color: red;
  position: relative;
}

.success {
  color: green;
  position: relative;
}
</style>