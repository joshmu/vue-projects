<template>
  <div class="login-modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal">
      <h1>login</h1>
      <form @submit.prevent="submit">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">{{ isLoading ? '⌛' : 'Login' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import emailPasswordLogin from './emailPasswordLogin'

export default {
  name: 'LoginModal',
  mixins: [emailPasswordLogin],
  data() {
    return {
      email: 'test@test.com',
      password: 'password',
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-login-modal')
    },
    submit() {
      this.login(this.email, this.password)
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @include flex-center();

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.25);
  }

  .modal {
    position: absolute;
    @include flex-center();
    flex-direction: column;
    background-color: white;
    border-radius: 0.25rem;
    padding: 3rem;

    h1 {
      text-transform: capitalize;
    }

    form {
      @include flex-center();
      flex-direction: column;

      label {
        display: none;
      }

      input {
        margin-top: 1rem;
        font-size: 1rem;
        padding: 0.25rem;
      }

      button[type='submit'] {
        cursor: pointer;
        font-size: 1rem;
        padding: 0.5rem 0.75rem;
        float: right;
        background-color: black;
        color: white;
        border: none;
        text-transform: uppercase;
        margin-top: 2rem;
        min-width: 50%;
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
