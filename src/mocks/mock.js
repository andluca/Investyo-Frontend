

const init = {

    main: {
        title: "INVESTYO",
    },

    options: {
        sin: "Sign In",
        sup: "Sign Up",
    }

}

const home ={
    headerbar: {
        title: "Carteira",
        description: "Essa tela possui o propósito de te ajudar a simular uma carteira de investimentos, aqui você poderá simular a compra de ações, títulos de renda fixa e até criptomoedas, além de poder definir um 'orçamento' pré-estabelecido"
        
        
    },
    balancebox:{
        text1: "PATRIMÔNIO",
    }   
}

const calculator ={
    headerbar: {
        title: "Calculadora",
        description: "Como o próprio nome diz, trata-se de uma calculadora de juros composto, irá te auxiliar à enxergar o efeito de bola de neve dos juros e permitirá uma maior facilidade no planejamento financeiro, excluindo a necessidade uma planilha para isso"
    },

} 

const signIn ={
    inputs:{
        message: 'Bem vindo de volta ao Investyo',
        label: 'Entre em sua conta',
    },
    button:{
        textButton:'Entrar',
        underButton: 'Não tem uma conta?',
        underBoldButton: 'Crie uma!'
    }
}

const signUp = {
    inputs:{
        message: 'Bem vindo ao Investyo',
        label: 'Crie uma conta'
    },
    button:{
        textButton:'Criar',
        underButton: 'Já tem uma conta?',
        underBoldButton: 'Entre!'
    }
}

const profile ={
    headerbar:{
        title: 'Conta'
    },
    informations:{
        labelName: 'Nome de usuário',
        name: 'AndLu',
        labelBalanceInvested: 'Patrimônio Investido',
        invested: '200.00',
        labelTotalBalance: 'Patrimônio total',
        total: '258.27',
        experienceLevel: 'Nível de conhecimento',
        level: 'Iniciante'
    }

}

const video ={
    headerbar:{
        title: 'Vídeos',
        description: "Voltada ao auxílio do usuário em relação à educação financeira, essa tela reúne diveros vídeos sobre finanças de desenvolvedores de conteúdo confiáveis, os vídeos possuem uma ordem lógica para sua progressão, da introdução à assuntos mais específicos como criptomoedas."
    }
    
}


export {init, home, calculator, signIn, signUp, profile, video};