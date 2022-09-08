// Criando uma variável para fazer a requesição dos módulos
let mysql=require('mysql');

//Criando uma conexão 
let con = mysql.createConnection({
    // Criando as variáveis de conexão no Banco de Dados
    host:"localhost",
    user:"root",
    password:"mysql",
    database:"nodejs"
});

// Utilizando a passagem de parâmetros através da variável con 
con.connect(function(err){
    if(err)throw err;
    console.log("Conectado");
    //Criando a inserção de registros no tabela de consumidores
    let sql ="insert into consumidores values ('Ricardo Alexandre','Rua Atibaia, 449')";
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("1 Registro inserido com Êxito");

    })


});