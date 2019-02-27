<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.userName">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input class="form-control" type="text" v-model="user.email">
        </div>
        <input type="text" class="form-control" v-model="node">
        <br>
        <br>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <button class="btn btn-primary" @click="fetchData">Get data</button>
        <br>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="u in users"
            :key="u + Math.random()"
          >{{u.userName}} - {{u.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "users"
    };
  },

  methods: {
    submit() {
      // this.$http.post("users.json", this.user).then(
      //   response => {
      //     console.log(response);
      //   },
      //   error => console.log(error)
      // );
      // this.resource.save({}, this.user);
      this.resource.saveAlternative(this.user);
    },
    fetchData() {
      // this.$http
      //   .get("users.json")
      // .then(response => {
      //   return response.json();
      // })
      // .then(users => {
      //   let usersArr = [];
      //   for (let key in users) {
      //     usersArr.push(users[key]);
      //   }
      //   this.users = usersArr;
      // });
      this.resource
        .getData({ node: this.node })
        .then(response => {
          return response.json();
        })
        .then(users => {
          let usersArr = [];
          for (let key in users) {
            usersArr.push(users[key]);
          }
          this.users = usersArr;
        });
    }
  },
  created() {
    const customAction = {
      saveAlternative: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" }
    };
    this.resource = this.$resource("{node}.json", {}, customAction);
  }
};
</script>

<style>
</style>
