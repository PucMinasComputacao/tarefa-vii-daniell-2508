// 1. Dados iniciais

let nome = prompt("Digite seu nome:");

// Função para validar número com while
function lerNumero(mensagem) {
    let valor = Number(prompt(mensagem));

    while (isNaN(valor)) {
        valor = Number(prompt("Valor inválido! " + mensagem));
    }

    return valor;
}

// Renda mensal
let renda = lerNumero("Digite sua renda mensal:");

// Quantidade de despesas (entre 1 e 5)
let qtdDespesas = lerNumero("Quantas despesas deseja informar? (1 a 5)");

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}


// 3. Lançamento de despesas com for
let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let despesa = lerNumero(`Digite o valor da despesa ${i}:`);
    totalDespesas += despesa;
}


// 4. Análise com if / else
let mensagem = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}


// 5. Saída final

let resultado =
`Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}

${mensagem}`;

// Alert
alert(resultado);

// Console
console.log("===== RESUMO FINANCEIRO =====");
console.log(`Nome: ${nome}`);
console.log(`Renda: R$ ${renda.toFixed(2)}`);
console.log(`Despesas: R$ ${totalDespesas.toFixed(2)}`);
console.log(`Sobra: R$ ${sobra.toFixed(2)}`);
console.log(mensagem);