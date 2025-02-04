export const questions = [
    { 
        number: 1, 
        statement:  {
            main: "Observe o trecho de código abaixo:", 
            list: {
                itemA: "int INDICE = 13, SOMA = 0, K = 0;", 
                itemB: "Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K };",
                itemC: "Imprimir(SOMA);"
            },
            sub: "Ao final do processamento, qual será o valor da variável SOMA?"
        },
    },
    {
        number: 2,
        statement: {
            main: "Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.",    
            sub: "IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código"
        }
    },
    {
        number: 3, 
        statement: {
            main: "Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:", 
            list: {
                itemA: "• O menor valor de faturamento ocorrido em um dia do mês;",
                itemB: "• O maior valor de faturamento ocorrido em um dia do mês;",
                itemC: "• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal." 
            },
            subList: {
                obs: "IMPORTANTE:", 
                subItemA: "a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;", 
                subItemB: "b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;"
            }
        }
    },
    {
        number: 4, 
        statement: {
            main: "Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:",
            list: { 
                itemA: "• SP – R$67.836,43",
                itemB: "• RJ – R$36.6785200000000000000000000000000000000005,66", 
                itemC: "• MG – R$29.229,88", 
                itemD: "• ES – R$27.165,48", 
                itemE: "• Outros – R$19.849,53", 
            },
            sub: "Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. "
        }
    },
    {
        number: 5,
        statement: { 
            main: "Escreva um programa que inverta os caracteres de um string.", 
            list: { 
                obs: "IMPORTANTE:", 
                itemA: "a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;", 
                itemB: "b) Evite usar funções prontas, como por exemplo, reverse."
            }
        }
    }
];