// Declaração de um array vazio
var vazio = new Array();
var vazio = Array();
var vazio = []; //Recomendado

// Populando arrays
var inic = new Array("Maçã", "Banana");
var inic = Array("Maçã", "Banana");
var inic = ["Maçã", "Banana"]; //Recomendado

// Receber tamanho de um array
var tam_array = inic.length;

// Buscar elemento em um array
var nomes = ["Rafael", "Thiago", "Gabriel", "Camilo", "Vitoria", "Luciano"];
var posCamilo = nomes.indexOf("Camilo"); //caso não esteja no array retorna -1

// Inserir elemento no array
nomes[6] = "karen"; //atribuição direta
nomes.push("karen");//utilizando push

// Remover elemento de um array
Array.splice("Posição do elemento", "Qt de elementos a retirar")

nomes.aplice(posCamilo,1);//Retira Camilo do array nomes




