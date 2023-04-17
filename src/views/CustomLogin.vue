<template>
  <div class="col-md-12 imagem">
    <img alt="Vue logo" class="logo" src="https://www.locaweb.com.br/images/locaweb.svg?v=1.15.85" />
  </div>

  <CustomForm>
    <div class="col-md-12 titulo">
      <h2>Entre na sua conta</h2>
      <p>Para acessar sua conta informe seu e-mail e senha</p>
    </div>
    <div class="col-md-12 inputGroup">
      <label for="email" class="form-label">E-mail</label>
      <input type="email" class="form-control" id="email" placeholder="Seu e-mail">
    </div>
    <div class="col-md-12 inputGroup">
      <label for="senha" class="form-label">Senha</label>
      <input type="password" class="form-control" id="senha" placeholder="Sua senha">
    </div>
    <div class="col-md-12 esqueciSenha">
      <a href="/">Esqueci minha senha</a>
    </div>
    <div class="col-md-12 inputGroup">
      <button type="submit" class="btn">FAZER LOGIN</button>
    </div>
  </CustomForm>
  <div class="col-md-12 cadastrar">
    <p>Ainda não tem conta?</p>
    <router-link to="/planos">Cadastre-se</router-link>
  </div>
  <router-view></router-view>
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
      nome: 'Lael'
    }
  },
}
</script>

<style>
#app {
  padding-top: 8vh !important;
  padding: 3%;
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
