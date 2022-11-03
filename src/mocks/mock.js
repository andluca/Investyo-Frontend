

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
    },
    balancebox:{
        text1: "PATRIMÔNIO",
    }   
}

const calculator ={
    headerbar: {
        title: "Calculadora"
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
        title: 'Vídeos'
    }
}


export {init, home, calculator, signIn, signUp, profile, video};