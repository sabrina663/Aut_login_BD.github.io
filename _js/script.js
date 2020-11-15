// dados ja dentro ja guardados
var dados= Array()
dados['user1'] = Array('Sabrina','sabrina')
console.log(dados)

function login(){
    //pegando os valores do campos
    var user_input = document.getElementById('user-input').value
    var user_password = document.getElementById('user-password').value
    console.log(`user: ${user_input}`)
    console.log(`password: ${user_password}`)
    //verificaçao de acesso
    //verificar se o campo user ta
    if (user_input !== ''){
        console.log('Campo user Não vazia')
        if (dados['user1'][0].indexOf(user_input) !== -1){
            console.log('User Encontrado')
            if (user_password !== ''){  
                console.log('Campo de senha Não vazia')
                //verificar se a senha foi encontrada na array
                if(dados['user1'][1].indexOf(user_password) !== -1 ){
                console.log('Senha Encontrada')
                document.getElementById('anwser').innerHTML = '<p>Acesso Permitido</p>'
                document.getElementById('fundo').style.backgroundImage ='url(_imagens/green.jpg)'
                }else{
                console.log('Senha Não Encontrada')
                document.getElementById('anwser').innerHTML = '<p>Senha Invalida</p>'
                document.getElementById('fundo').style.backgroundImage ='url(_imagens/danger.jpg)'
                }
            }else{
                console.log('Campo senha vazia')
                document.getElementById('anwser').innerHTML = '<p>Campo senha vazia, Por favor preencher</p>'
                document.getElementById('fundo').style.backgroundImage ='url(_imagens/key.jpg)'
            }
        //else pra ver se o user ta na array
        }else{
            console.log('User nao encontrada')    
            document.getElementById('anwser').innerHTML = '<p>Usuario não encontrado</p>'
            document.getElementById('fundo').style.backgroundImage ='url(_imagens/found.jpg)'

        }
    //else pra ver ser o campo user ta vazio
    }else{
        console.log('Campo user vazia')
        document.getElementById('anwser').innerHTML = '<p>Campo Usuario Vazio, Por favor preencher com valores validos</p>'
        document.getElementById('fundo').style.backgroundImage ='url(_imagens/background_red.jpg)'
    }
}