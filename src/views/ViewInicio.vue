<template>
  <div class="dashboard">
    <div class="header">
      <img alt="localweb" class="logo" src="https://www.locaweb.com.br/images/locaweb.svg?v=1.15.85" />
      <div class="dropdown">
        <button class="btn btn-letra" type="button">
          {{ this.$store.getters.getLetra }}
        </button>
        <div class="dropdown-content">
          <button @click="sair()" class="dropdown-item">
            SAIR
          </button>
        </div>
      </div>
    </div>
    <div class="conta-hospedagem">
      <div class="identificacao">
        <h2> Olá, {{ this.$store.state.currentUser.username }}
        </h2>
        <p>
          Seja bem vindo a sua conta de hospedagem.
        </p>
      </div>

      <img class="video" src="../assets/Rectangle89.png" alt="Deveria ser um video">
<p>Caso tenha alguma dúvida, <a href="/">visite nossa central de ajuda.</a> 
</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ViewInicio',
  data() {
    return {
    }
  },
  methods: {
    sair() {
      this.$router.push('Login')
      this.$store.commit('logout')
    }
  },
}
</script>

<style>
a {
    font-size: 1.8rem;
    color: #F30168 !important;
}

.conta-hospedagem {
  max-width: 900px;
  padding: 2% !important;
  margin: 20vw;
  margin-top: 0 !important;
}


.identificacao{
  text-align: left;
}

.video {
  width: 100%;
  max-height: 600px;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50px;
}

.btn-letra {
  max-width: 52px;
  max-height: 52px;
  border-radius: 100%;

  font-style: normal;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 23px;

  color: #FFFFFF;
  align-items: center;

  background: #D9D9D9 !important;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 7%;
  text-align: end;
}

.dropdown-content {
  display: none;
  position: absolute;
  width: 100px;
  z-index: 1 !important;
}

.dropdown-item {
  background-color: #FFFFFF !important;
  color: #292D32 !important;
  text-align: center;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
