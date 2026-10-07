const { toASCII } = require('punycode');

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


// =====================================
// ARRAYS
// =====================================

let flashcards = [];


// =====================================
// IDs
// =====================================

let proximoIdFlashcard = 1;

// CREATE
function cadastrarFlashcard() {

    rl.question("Digite uma pergunta: ", (pergunta) => {

        rl.question("Digite a resposta: ", (resposta) => {

            rl.question("Digite a matéria: ", (materia) => {

                rl.question("Digite a dificuldade (fácil, médio, difícil):  ", (dificuldade) => {

                    let flashcard = {
                        id: proximoIdFlashcard,
                        pergunta: pergunta,
                        resposta: resposta,
                        materia: materia,
                        dificuldade: dificuldade,
                        acertos: 0,
                        erros: 0
                    };

                    flashcards.push(flashcard);

                    proximoIdFlashcard++;

                    console.log("\n Flashcard cadastrado com sucesso!");



                    mostrarMenu();

                });

            });

        });

    });

};


// READ
function listarFlashcards() {

    console.log("\n--- LISTA DE STUDYCARDS ---");

    if (flashcards.length === 0) {

        console.log("Nenhum flashcard cadastrado.");

        mostrarMenu();

        return;
    }

    for (let i = 0; i < flashcards.length; i++) {

        console.log("-------------------------");

        console.log("ID:", flashcards[i].id);
        console.log("Matéria:", flashcards[i].materia);
        console.log("Pergunta:", flashcards[i].pergunta);
        console.log("Resposta:", flashcards[i].resposta);
        console.log("Dificuldade:", flashcards[i].dificuldade);
        console.log("Acertos:", flashcards[i].acertos);
        console.log("Erros:", flashcards[i].erros)

    }

    mostrarMenu();
};


// READ POR ID
function buscarFlashcardPorId() {

    rl.question("Digite o ID: ", (id) => {

        id = Number(id);

        let flashcardEncontrado = null;

        for (let i = 0; i < flashcards.length; i++) {

            if (flashcards[i].id === id) {

                flashcardEncontrado = flashcards[i];

            }

        }

        if (flashcardEncontrado === null) {

            console.log("Flashcard não encontrado.");

        } else {

            console.log("\n Flashcard encontrado:");


            console.log("ID:", flashcards[i].id);
            console.log("Matéria:", flashcards[i].materia);
            console.log("Pergunta:", flashcards[i].pergunta);
            console.log("Resposta:", flashcards[i].resposta);
            console.log("Dificuldade:", flashcards[i].dificuldade);
            console.log("Acertos:", flashcards[i].acertos);
            console.log("Erros:", flashcards[i].erros)

        }

        mostrarMenu();

    });

};


// UPDATE
function atualizarFlashcard() {

    rl.question("Digite o ID do Flashcard que deseja atualizar: ", (id) => {

        id = Number(id);

        let flashcardEncontrado = null;

        for (let i = 0; i < flashcards.length; i++) {

            if (flashcards[i].id === id) {

                flashcardEncontrado = flashcards[i];

            }

        }

        if (flashcardEncontrado === null) {

            console.log("Flashcard não encontrado.");

            mostrarMenu();

            return;
        }

        console.log("Flashcard encontrado:", flashcardEncontrado.materia);

        rl.question("Digite a nova matéria: ", (materia) => {

            rl.question("Digite a nova pergunta: ", (pergunta) => {

                rl.question("Digite a nova resposta: ", (resposta) => {

                    rl.question("Digite a nova dificuldade: ", (dificuldade) => {

                        flashEncontrado.materia = materia;
                        flashcardEncontrado.pergunta = pergunta;
                        flashcardEncontrado.resposta = resposta;
                        flashcardEncontrado.dificuldade = dificuldade;

                        console.log("Flashcard atualizado com sucesso!");

                        mostrarMenu();

                    });

                });

            });

        });

    });

};


// DELETE
function removerFlashcard() {

    rl.question("Digite o ID do flashcard que deseja remover: ", (id) => {
  id = Number(id);

        let indice = -1;
        let disponivel = false
        for (let i = 0; i < flashcards.length; i++) {

            if (flashcards[i].id === id) {

                indice = i;

            }

        }
        let flashcardRemovido = 0
        if (indice === -1) {

            console.log("Flashcard não encontrado.");

        } else {

            flashcards.splice(indice, 1);

            console.log("Flashcard removido com sucesso!");

        }


        mostrarMenu();

    });

};


// READ POR ID
function listarFlashcardPorMateria() {

    rl.question("Digite a matéria: ", (materia) => {

        materia = materia;

        let flashcardEncontrado = null;

        for (let i = 0; i < flashcards.length; i++) {

            if (flashcards[i].materia === materia) {

                flashcardEncontrado = flashcards[i];

            }

        }

        if (flashcardEncontrado === null) {

            console.log("Flashcard não encontrado.");

        } else {

            console.log("\n Flashcard encontrado:");

            console.log("ID:", flashcards[i].proximoIdFlashcard);
            console.log("Matéria:", flashcards[i].materia);
            console.log("Pergunta:", flashcards[i].pergunta);
            console.log("Resposta:", flashcards[i].resposta);
            console.log("Dificuldade:", flashcards[i].dificuldade);

        }

        mostrarMenu();

    });

};


function listarFlashcardPorDificuldade() {

    rl.question("Digite a dificuldade do flashcard que deseja encontrar: ", (dificuldades) => {

        let flashcardEncontrado = null

        for (let i = 0; i < flashcards.length; i++) {

            if (flashcards[i].dificuldade === dificuldades) {

                flashcardEncontrado = flashcards[i];

            }

        }

        if (flashcardEncontrado === null) {

            console.log("Flashcard não encontrado.");

        } else {

            console.log("\n Flashcard encontrado:");

            console.log("ID:", flashcards[i].proximoIdFlashcard);
            console.log("Matéria:", flashcards[i].materia);
            console.log("Pergunta:", flashcards[i].pergunta);
            console.log("Resposta:", flashcards[i].resposta);
            console.log("Dificuldade:", flashcards[i].dificuldade);

        }

        mostrarMenu();
    });
};

function modoEstudo() {

    if (flashcards.length === 0) {

        console.log("Nenhum flashcard encontrado")
        mostrarMenu()
        return

    }

    let indiceAleatorio = Math.floor(Math.random() * flashcards.length);
    let flashcard = flashcards[indiceAleatorio];

    console.log("Materia : ", flashcard.materia, "\n Dificuldade : ", flashcard.dificuldade, "\n Pergunta : ", flashcard.pergunta)

    rl.question("Você acertou? \n 1 - sim \n 2 - não \n 3 - sair ", (respostaStr) => {

        respostaStr = +respostaStr

        if (respostaStr === 1) {
            flashcard.acertos++

        } else if (respostaStr === 2) {
            flashcard.erros++

        } else if (respostaStr === 3) {

            mostrarMenu()

            return;

        }

        console.log("Quantidade de Acertos:", flashcard.acertos, "\n Quantidade de Erros:", flashcard.erros)

        mostrarMenu();
    })
};

function mostrarDesempenho() {

    rl.question("Digite o ID:", (id) => {

        id = Number(id)

        let flashcard = null

        for (let i = 0; i < flashcards.length; i++) {
            if (flashcards[i].id === id) {
                flashcard = flashcards[i]
            }
        }

        if (flashcard === null) {
            console.log("id nao encontrado")

            mostrarMenu()

            return
        }

        let tentativas = flashcard.acertos + flashcard.erros

        console.log("Acertos:", flashcard.acertos, "\n Erros:", flashcard.erros, "\n Tentativas:", tentativas)

        if (flashcard.acertos > flashcard.erros) {
            console.log("Bom desempenho")


            mostrarMenu();

            return;
        }
        if (flashcard.acertos === flashcard.erros) {
            console.log("Precisa praticar mais")

            mostrarMenu();

            return;
        }
        if (flashcard.erros > flashcard.acertos) {
            console.log("Revisar este conteúdo")

            mostrarMenu();

            return;
        }
    })

    mostrarMenu();
};

function flashcardComMaisErro() {

    if (flashcards.length === 0) {
        console.log("Nenhum flashcard cadastrado")

        mostrarMenu();

        return;
    }

    let flashCard = 0;



    for (let i = 0; i < flashcards.length; i++) {
        flashCard = flashcards[i];
        if (flashcards[i].erros > flashCard.Erros);
        flashCard = flashcards[i];

        console.log("Flashcard que mais precisa de revisão")

        console.log("ID:", flashCard.id, "\n Pergunta:", flashCard.pergunta, "\n Matéria:", flashCard.materia, "\n Erros:", flashCard.erros)

    }


    mostrarMenu()
};


function mostrarEstatisticas() {

    let contErros = 0
    let contAcertos = 0
    let contador = 0
    console.log(" =======   ESTATÍSTICAS ======= ")

    for (let i = 0; i < flashcards.length; i++) {
        contAcertos = contAcertos + flashcards[i].acertos
        contErros = contErros + flashcards[i].erros
        contador++
    }

    let tentativas = contAcertos + contErros

    console.log("Flashcards cadastrados:", contador, "\n Total de acertos:", contAcertos, "\n Total de erros:", contErros, "\n Total de respostas:", tentativas)

    mostrarMenu();

};


function materiasCadastradas() {

    let materia = []


    console.log("Matérias das flashcards:")


    for (let i = 0; i < flashcards.length; i++) {
        let mat = flashcards[i].materia

        let jaExiste = false

        for (let j = 0; j <= materia.length; j++) {

            if (mat === materia[j]) {
                jaExiste = true

            }
        }

        if (jaExiste === false) {
            materia.push(mat)

        }
    }

    for (let i = 0; i < materia.length; i++) {

        console.log(materia[i])

    }

    mostrarMenu()
};


// =====================================
// MENU
// =====================================


function mostrarMenu() {

    console.log("\n===============================");
    console.log("       Projeto - StudyCards");
    console.log("===============================");

    console.log("\n  Flashcards");
    console.log("1 - Cadastrar flashcard");
    console.log("2 - Listar flashcards");
    console.log("3 - Buscar flashcards por ID");
    console.log("4 - Atualizar flashcard");
    console.log("5 - Remover flashcard");
    console.log("6 - Listar flashcards por matéria");
    console.log("7 - Listar flashcards por dificuldade");
    console.log("8 - Modo de estudo");
    console.log("9 - Mostrar o desempenho de um flashcard");
    console.log("10 - Flashcard com mais erros");
    console.log("11 - Estatísticas gerais");
    console.log("12 - Matérias cadastradas")
    console.log("\n 0 - Sair");


    rl.question("\n Escolha uma opção: ", (opcao) => {

        if (opcao === "1") {

            cadastrarFlashcard();

        } else if (opcao === "2") {

            listarFlashcards();

        } else if (opcao === "3") {

            buscarFlashcardPorId();

        } else if (opcao === "4") {

            atualizarFlashcard();

        } else if (opcao === "5") {

            removerFlashcard();

        } else if (opcao === "6") {

            listarFlashcardPorMateria();

        } else if (opcao === "7") {

            listarFlashcardPorDificuldade();

        } else if (opcao === "8") {

            modoEstudo();

        } else if (opcao === "9") {

            mostrarDesempenho();

        } else if (opcao === "10") {

            flashcardComMaisErro();

        } else if (opcao === "11") {

            mostrarEstatisticas();

        } else if (opcao === "12") {

            materiasCadastradas();

        } else if (opcao === "0") {

            console.log("Sistema encerrado.");

            rl.close();

        } else {

            console.log("Opção inválida.");

            mostrarMenu();

        }

    });

}


// =====================================
// INICIAR PROGRAMA
// =====================================

mostrarMenu();