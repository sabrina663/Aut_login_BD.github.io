class Dados{
    constructor(a,b,c=0){
        this.user = a
        this.pass = b
        this.confirm = c
        let id = localStorage.getItem('id')
        if(id === null){
            localStorage.setItem('id', 0)
        }
    }
    getid(){
        let proximoid = localStorage.getItem('id')
        return parseInt(proximoid) + 1
    }
    gravar(d){
        let id = this.getid()
        localStorage.setItem(id,JSON.stringify(d))
        localStorage.setItem("id",id)
    }
    analise(){
        for(let i in this){
            if(this[i] === null || this[i] === undefined || this[i] === ''){
                return false
            }
        }
        return true
    }
    localuser(){
        let dados = Array()
        let id = localStorage.getItem('id')
        for(let i = 1; i <= id; i ++){
            let dado = JSON.parse(localStorage.getItem(i))
            if(dado.a === null){
                continue
            }
            dado.id = i
            dados.push(dado.user)
        }
        return dados
        
    }
    verificar(){
        let user = this.user
        let dados = this.localuser()
        console.log(dados)
        if (dados.indexOf(user) >= 0){
            return false
        }
        return true
    }
    senha(){
        let senha = this.pass
        let confirm = this.confirm
        if(senha === confirm){
            return true
        }
        return false
    }
    localsenha(){
        let dados = Array()
        let id = localStorage.getItem('id')
        for(let i = 1; i <= id; i ++){
            let dado = JSON.parse(localStorage.getItem(i))
            if(dado.pass === null){
                continue
            }
            dado.id = i
            dados.push(dado.pass)
        }
        return dados
    }
    login(){
        let user = this.user
        let senha = this.pass
        let userdado = this.localuser()
        let senhadado = this.localsenha()
        console.log(userdado)
        console.log(senhadado)
        if(userdado.indexOf(user) >= 0 && senhadado.indexOf(senha) >= 0){
            return true
        }
        return false
    }
}
/* logar */
$("#btn").click(function(){
    let user = $("#user")
    let pass = $("#password")
    let dados = new Dados(user.val(),pass.val())
    console.log(dados)
    if(dados.analise()){
        console.log('Campos preenchidos')
        if(dados.login()){
            console.log('Login Efetuado')
            $("#container").hide(200);
            $("#login").show(800)
        }else(
            $("#msg").text('Usuario ou Senha estão incorretos')
        )

    }else{
        $("#msg").text('Preencher ambos campos')
    }
})
/* cadastro */
$("#btn-cadastro").click(function(){
    $("#container").hide(200);
    $("#conteiner-cadastro").show(800);
    let n_user = $('#n-user')
    let n_pass = $('#n-pass')
    let confirm = $('#confirm')
    $('#submit').click(function(){
        let dados = new Dados(n_user.val(),n_pass.val(),confirm.val())
        if(dados.analise()){
            console.log('Campo preenchido')
            if(dados.verificar()){
                console.log("user nao existente")
                if(dados.senha()){
                    console.log('senha compativel')
                    dados.gravar(dados)
                    $("#conteiner-cadastro").hide(200);
                    $("#login").show(5000)
                }else{
                    $("#msg-cad").text('Confirmação de senha incompativel')
                }
            }else{
                $("#msg-cad").text('Usuario ja existente')
            }

        }else{
            $("#msg-cad").text('Preencher campos de cadastro')
        }
    })
})
$('#cancelar').click(()=>{
    $("#conteiner-cadastro").hide(200);
    $("#container").show(800);
})