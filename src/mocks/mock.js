import homeicon from '../icons/icon.png'

const init = {

    main: {
        title: "INVESTYO",
        homeicon: homeicon,
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


export {init, home, calculator, signIn, signUp};