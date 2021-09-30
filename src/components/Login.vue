<template>
<main class="form-signin">
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="username" v-model="username"
      class="form-control" placeholder="name@example.com">
      </div>
    <div class="form-floating">
      <input type="password" v-model="password"
      class="form-control" placeholder="Password">
      </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button v-on:click="login" class="w-100 btn btn-lg btn-primary"
    type="submit">Sign in</button>
  </form>
</main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submit() {
      const response = await axios.post('https://3.7.128.140:9083/api/login', {
        username: this.username,
        password: this.password,
      });
      console.warn(response);
      localStorage.setItem('token', response.data.token);
    },
  },
};
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
