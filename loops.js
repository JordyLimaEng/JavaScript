// while
while(/*condição de parada*/){/*instruções*/}

var num = 1;

while(num<=30){
    console.log(num);
    num++;
}

// do-while
do{/*instruções*/}while(/*condição de parada*/)

do{
    console.log(num);
    num++;
}while(num<=30)

// for
for(/*variavel de progresso*/;/*condição de parada*/;/*atualização*/){
    //instruções
}

for(var num=1; num<=30;num++){
    console.log(num);
}

//  Tratamento de erros
function dividir(dividendo, divisor){
    if(divisor === 0){
        throw new Error('O divisor não pode ser zero.');
        return dividendo / divisor;
    }else{
      console.log(dividendo / divisor);
    }
}

// Para que nosso código esteja preparado para o caso de exceções serem disparadas durante a execução de uma função, esta deve estar envolta por um bloco de código try catch.
try{
    dividir(10,0);
}catch(erro){
    console.log("Ocorreu um erro: ${erro}")
}

// Por fim, caso tenha alguma operação que gostaríamos de realizar, não importando se nossas funções lançaram ou não exceções, temos o bloco finally. As instruções neste bloco são executadas sempre, não importando se o código lançou ou não uma exceção.
try{
    dividir(10,0);
}catch(erro){
    console.log("Ocorreu um erro ${erro}")
}finally{
    console.log("Obrigado.")
}