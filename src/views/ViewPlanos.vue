<template>
    <div class="col-md-12 imagem">
        <img alt="localweb" class="logo" src="https://www.locaweb.com.br/images/locaweb.svg?v=1.15.85" />
        <h2>Você está muito próximo de mudar a forma de <p>hospedar seu site</p>
        </h2>
    </div>
    <div class="hospedagem">
        <div class="card">
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
                <div>
                    <button type="button" class="btn btn-plan" @click="cadastrar(1)">ESCOLHER ESSE PLANO</button>
                </div>
                <div class="informacoes">
                    <h4>Seu site em servidores no Estados Unidos.</h4>
                    <ul>
                        <li>Servidores em nossos data center americanos;</li>
                        <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;
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
        </div>
        <div class="card">
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
                <div>
                    <button type="button" class="btn btn-plan" @click="cadastrar(2)">ESCOLHER ESSE PLANO</button>
                </div>
                <div class="informacoes">
                    <h4>Seu site em servidores no Brasil.</h4>
                    <ul>
                        <li>Servidores em nosso de São Paulo;</li>
                        <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;
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
        </div>
        <div class="card">
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
                <div>
                    <button type="button" class="btn btn-plan" @click="cadastrar(3)">ESCOLHER ESSE PLANO</button>
                </div>
                <div class="informacoes">
                    <h4>Seu site em servidores no Brasil.
                    </h4>
                    <ul>
                        <li>Servidores em nosso de São Paulo;</li>
                        <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;
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
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'ViewPlanos',
    data() {
        return {

        }
    },
    methods: {
        cadastrar(hospedagem) {
            this.$router.push({ name: 'Cadastrar', query: { hospedagem } })
        }
    },
}
</script>
  
<style>
.hospedagem {
    justify-content: center;
    display: flex;
    text-align: center;
    gap: 2%;
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

.card {
    border: none;
    max-width: 348px;
}


.card-body {
    /* padding: 8%; */
    background-color: #FFFFFF;
}

.btn-plan {
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


.informacoes {
    text-align: start;
    padding: 5%;
}

button {
    height: 56px;
}

h4 {
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    color: #666666;
}

ul {
    list-style: url("../assets/check.svg");
    color: #666666;
    list-style-position: outside;

}

li {
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #666666;
}
</style>
  