

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
        description: "Aqui mora o corpo do aplicativo, um sistema que te permite inserir um valor equivalente ao seu patrimônio, e simular a compra de ações."
        
        
    },
    balancebox:{
        text1: "PATRIMÔNIO",
    }   
}

const calculator ={
    headerbar: {
        title: "Calculadora",
        description: "Uma calculadora de juros compostos para te auxiliar a enxergar o poder dos juros compostos ao longo do tempo, basta inserir um valor mensal, uma taxa de juros mensal e a quantidade de meses. Dica : A taxa básica de juros atual é 1.11% ao mês"
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



const video ={
    headerbar:{
        title: 'Vídeos',
        description: "Essa tela é voltada ao seu aprendizado, basta escolher uma categoria e assistir um dos vídeos escolhidos a dedo por nós, boa experiência!"
    }
    
}
const extract={
    headerbar:{
        title:"Extrato"
    }
}

const assets={
    headerbar:{
        title: "Ativos"
    }
}


export {init, home, calculator, signIn, signUp, extract, video, assets};