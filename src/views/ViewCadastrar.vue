<template>
    <div class="col-md-12 imagem">
        <img alt="Vue logo" class="logo" src="https://www.locaweb.com.br/images/locaweb.svg?v=1.15.85" />
        <h2>Você está muito próximo de mudar a forma de <p>hospedar seu site</p>
        </h2>
    </div>
    <div class="cadastro">
        <CustomForm>
            <div class="col-md-12 titulo">
                <h2>Dados pessoais</h2>
                <p>Informe seus dados pessoais para acesso à sua conta</p>
            </div>
            <div class="col-md-12 inputGroup">
                <label for="nome" class="form-label">Nome completo</label>
                <input type="nome" class="form-control" id="nome" placeholder="Informe seu nome completo">
            </div>
            <div class="col-md-12 inputGroup">
                <label for="fone" class="form-label">Celular</label>
                <input type="number" class="form-control" id="fone" data-inputmask-inputformat="(99) 99999-9999" />
            </div>
            <div class="col-md-12 inputGroup">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email" placeholder="Seu e-mail">
            </div>
            <div class="col-md-12 inputGroup">
                <label for="senha" class="form-label">Senha</label>
                <input type="password2" class="form-control" id="senha">
                <small class="text-muted">No mínimo 8 caracteres</small>
            </div>
            <div class="col-md-12 inputGroup">
                <label for="senha" class="form-label">Senha</label>
                <input type="password2" class="form-control" id="senha2">
            </div>
            <div class="col-md-12 inputGroup site-form titulo">
                <h2>Dados pessoais</h2>
                <p>Informe seus dados pessoais para acesso à sua conta</p>
                <label for="site" class="form-label">Nome do seu site</label>
                <input type="text" class="form-control" id="site" placeholder="Meu site">
                <small class="text-muted">Exatamente igual o título do seu site</small>
            </div>
            <div class="col-md-12 inputGroup check">
                <input class="form-check-input" type="checkbox" value="" id="checkPoliticaPrivacidade">
                <label class="form-check-label" for="checkPoliticaPrivacidade">
                    Ao concluir com seu cadastro você concorda com nossos termos de uso e politicas de privacidade.
                </label>
            </div>
            <div class="col-md-12 inputGroup">
                <button type="submit" class="btn">FAZER LOGIN</button>
            </div>

        </CustomForm>
        <div class="hospedagem">
            <div v-if="tipoHospedagem === 1" class="card">
                <div class="card-body">
                    <div class="top-banner">
                        <h2>Hospedagem 1</h2>
                        <h1>Grátis</h1>
                        <p>Você não paga nada para usar</p>
                        <p>sem taxa de setup</p>
                    </div>
                    <div class="mid-banner">
                        <p>Ideal para quem está começando.</p>
                    </div>
                    <div class="listagem">
                        <h4>Seu site em servidores no Estados Unidos.</h4>
                        <ul>
                            <li>Servidores em nossos data center americanos;</li>
                            <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e
                                7.0;
                            </li>
                            <li>1 usuário de FTP para upload ou download;</li>
                            <li>1 contas de e-mails profissionais;</li>
                            <li>1 subdomínio gratuito;</li>
                        </ul>
                        <h4>Suporte 24 horas, 7 dias por semana grátis;</h4>
                        <h4>Aplicativos disponíveis;</h4>
                        <ul>
                            <li>Wordpress;</li>
                            <li>Drupal;</li>
                            <li>entre outros...</li>
                        </ul>
                        <div class="gradient">
                            <h4>Você ainda tem</h4>
                            <ul>
                                <li>Webmail RoundCube;</li>
                                <li>AntiSpam;</li>
                                <li>Painel de gerenciamento de DNS;</li>
                                <li>Painel de controle web;</li>
                                <li>Configurações de PHP personalizáveis;</li>
                                <li>Certificado SSL Grátis;</li>
                                <li>Transferência ilimitada.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-change" @click="trocarPlano()">Trocar plano</button>
                    </div>
                </div>
            </div>
            <div v-else-if="tipoHospedagem === 2" class="card">
                <div class="card-body">
                    <div class="top-banner">
                        <h2>Hospedagem 2</h2>
                        <div class="value-hospedagem">
                            <p>
                                R$
                            </p>
                            <h1>499</h1>
                            <p>
                                /mês
                            </p>
                        </div>
                        <p>Cobrado mensalmente</p>
                        <p>sem taxa de setup</p>
                    </div>
                    <div class="mid-banner">
                        <p>Ideal para site com mais mais de 30k de visitas.</p>
                    </div>

                    <div class="listagem">
                        <h4>Seu site em servidores no Brasil.</h4>
                        <ul>
                            <li>Servidores em nosso de São Paulo;</li>
                            <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6
                                e
                                7.0;
                            </li>
                            <li>10 usuário de FTP para upload ou download;</li>
                            <li>30 contas de e-mails profissionais;</li>
                            <li>10 bdomínio gratuito;</li>
                        </ul>
                        <h4>Suporte 24 horas, 7 dias por semana grátis;</h4>
                        <h4>Aplicativos disponíveis;</h4>
                        <ul>
                            <li>Wordpress;</li>
                            <li>Drupal;</li>
                            <li>entre outros...</li>
                        </ul>
                        <h4>Migração Gratuita;</h4>
                        <ul>
                            <li>Migramos todos seus sites para nossos servidores;</li>
                        </ul>
                        <div class="gradient">

                            <h4>Você ainda tem</h4>
                            <ul>
                                <li>Webmail RoundCube;</li>
                                <li>AntiSpam;</li>
                                <li>Painel de gerenciamento de DNS;</li>
                                <li>Painel de controle web;</li>
                                <li>Configurações de PHP personalizáveis;</li>
                                <li>Certificado SSL Grátis;</li>
                                <li>Transferência ilimitada.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-change" @click="trocarPlano()">Trocar plano</button>
                    </div>
                </div>
            </div>
            <div v-else-if="tipoHospedagem === 3" class="card">
                <div class="card-body">
                    <div class="top-banner">
                        <h2>Hospedagem 3</h2>
                        <div class="value-hospedagem">
                            <p>
                                R$
                            </p>
                            <h1>999</h1>
                            <p>
                                /mês
                            </p>
                        </div>
                        <p>Você não paga nada para usar</p>
                        <p>sem taxa de setup</p>
                    </div>
                    <div class="mid-banner">
                        <p>Ideal para quem está começando.</p>
                    </div>

                    <div class="listagem">
                        <h4>Seu site em servidores no Brasil.
                        </h4>
                        <ul>
                            <li>Servidores em nosso de São Paulo;</li>
                            <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6
                                e
                                7.0;
                            </li>
                            <li>Ilimitados usuário de FTP para upload ou download;</li>
                            <li>Ilimitadas contas de e-mails profissionais;</li>
                            <li>50 bdomínio gratuito;</li>
                        </ul>
                        <h4>Suporte 24 horas, 7 dias por semana grátis;</h4>
                        <h4>Aplicativos disponíveis;</h4>
                        <ul>
                            <li>Wordpress;</li>
                            <li>Drupal;</li>
                            <li>entre outros...</li>
                        </ul>
                        <h4>Migração Gratuita;</h4>
                        <ul>
                            <li>Migramos todos seus sites para nossos servidores;</li>
                        </ul>
                        <div class="gradient">
                            <h4>Você ainda tem</h4>
                            <ul>
                                <li>Webmail RoundCube;</li>
                                <li>AntiSpam;</li>
                                <li>Painel de gerenciamento de DNS;</li>
                                <li>Painel de controle web;</li>
                                <li>Configurações de PHP personalizáveis;</li>
                                <li>Certificado SSL Grátis;</li>
                                <li>Transferência ilimitada.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-change" @click="trocarPlano()">Trocar plano</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import CustomForm from '../components/CustomForm.vue'

export default {
    name: 'ViewPlanos',
    components: {
        CustomForm
    },
    data() {
        return {
            tipoHospedagem: 1,
        }
    },
    created() {
        this.tipoHospedagem = parseInt(this.$route.query.hospedagem)
    },

    methods: {
        trocarPlano() {
            this.$router.push('Planos')
        }
    },

}
</script>
  
<style>
#fone {
    mask: '(99) 99999-9999';
}

.imagem h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
}

.imagem p {
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    color: #F30168;
    text-decoration: underline;
}

@media (max-width: 425px) {
    .hospedagem {
        display: grid;
    }
}

.card {
    max-width: 348px;
    border: none;
}

.card-body {
    padding: 8%;
    background-color: #FFFFFF;
}

.btn-change {
    max-width: 245px;
}

.top-banner h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 33px;
    color: #666666;
}

.top-banner {
    font-weight: 700;
    font-size: 26px;
    line-height: 33px;
    color: #666666;
}

.value-hospedagem {
    display: flex;
    justify-content: center;
    align-items: baseline;
}

.value-hospedagem p {
    font-weight: 400;
    font-size: 20px !important;
    line-height: 25px;
    color: #F30168;
}

.value-hospedagemh4 h4 {
    font-weight: 700;
    font-size: 34px;
    line-height: 43px;
    color: #F30168;
}

.top-banner h1 {
    font-weight: 700;
    font-size: 34px;
    line-height: 43px;

    color: #F30168;
}

.mid-banner {
    border: 1px solid #E6EAF2;
    border-left: none;
    border-right: none;
    padding: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.mid-banner p {
    font-weight: 400;
    font-size: 2.0rem;
    line-height: 21px;
    color: #666666;
}


.listagem {
    text-align: start;
    padding: 5%;
}

.gradient {
    -webkit-mask-image: linear-gradient(0deg, transparent 16px, red 300px);
    overflow: hidden;
}

button {
    height: 56px;
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

.cadastro {
    justify-content: center;
    display: flex;
    gap: 2%;
}

.cadastro p {
    font-size: 1.8rem;
}

.cadastro a {
    font-size: 1.8rem;
    color: #F30168 !important;
}

.esqueciSenha a {
    color: #515D74;
    text-decoration: none;
    font-size: 1.6rem;

}

.btn-change {
    border: 1px solid #000000;
    border-radius: 5px;
    color: #000000 !important;
    background-color: #FFFFFF !important;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 20px;
}
</style>
  