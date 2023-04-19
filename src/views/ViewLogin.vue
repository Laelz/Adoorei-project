<template>
  <div class="col-md-12 imagem">
    <img alt="localweb" class="logo" src="https://www.locaweb.com.br/images/locaweb.svg?v=1.15.85" />
  </div>
  <CustomForm class="login">
    <div class="col-md-12 titulo">
      <h2>Entre na sua conta</h2>
      <p>Para acessar sua conta informe seu e-mail e senha</p>
    </div>
    <div class="col-md-12 inputGroup">
      <label for="email" class="form-label">E-mail</label>
      <input v-model="form.username" type="text" class="form-control" id="email" placeholder="Seu e-mail">
      <small v-if="incorreto" class="text-muted">Usuário ou Senha incorretos</small>
    </div>
    <div class="col-md-12 inputGroup">
      <label for="senha" class="form-label">Senha</label>
      <input v-model="form.password" type="password" class="form-control" id="senha" placeholder="Sua senha">
    </div>
    <div class="col-md-12 esqueciSenha">
      <a href="/">Esqueci minha senha</a>
    </div>
    <div class="col-md-12 inputGroup">
      <button :disabled="!(form.username && form.password)" @click="login()" class="btn">FAZER LOGIN</button>
    </div>
  </CustomForm>
  <div class="col-md-12 cadastrar">
    <p>Ainda não tem conta?</p>
    <router-link to="/planos">Cadastre-se</router-link>
  </div>
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">ERROR</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</template>

<script>
import CustomForm from '../components/CustomForm.vue'

export default {
  name: 'CustomLogin',
  components: {
    CustomForm
  },
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      incorreto: false,
    }
  },
  methods: {
    async login() {
      try {
        await this.axios.post('https://fakestoreapi.com/auth/login', this.form).then((response) => {
          this.$store.commit('login', { form: this.form, token: response.token })
        })
        this.$router.push('Inicio')
      } catch (error) {
        this.incorreto = true
        console.log(error);
      }
    }
  },
}
</script>

<style>
.login {
  margin: auto;
}

.titulo h2 {
  margin-bottom: 0 !important;
}

.titulo p {
  padding-top: 0% !important;
  margin-top: 0 !important;
  font-size: 1.8rem;
}

.esqueciSenha {
  margin: 0% !important;
  text-align: right;
}

.cadastrar {
  justify-content: center;
  display: flex;
  margin: 10px;
  gap: 3px;
}

.cadastrar p {
  font-size: 1.8rem;
}

.cadastrar a {
  font-size: 1.8rem;
  color: #F30168 !important;
}

.esqueciSenha a {
  color: #515D74;
  text-decoration: none;
  font-size: 1.6rem;

}
</style>
