

function enviarMenssagem(event) {
    /* [event.preventDefault] Método usado para impedir o comportamento padrão de um evento.
       (basicamente é usado para impedir que o formulário seja enviado e a página seja recarregada) 
        ⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
       [const] Atributo usado para declarar uma variável constante.
       ⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
       [document.getElementById] Método usado para obter um elemento do DOM pelo seu ID.
       (basicamente é o método usado para obter um elemento do DOM pelo seu ID)
       IMPORTANTE: Tomar cuidado com o uso do getElementById, é preciso colocar o ".value" no final,
       pois queremos pegar o valor do campo não o elemento em si, (o elemento inteiro no caso).
       ⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
       [DOM] É a sigla para Document Object Model, que é uma interface de programação 
       para documentos HTML e XML.
       */
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const menssagem = document.getElementById('menssagem').value;
    const telefone = '5519997934127';

    const texto = `Olá, meu nome é ${nome}, ${menssagem}`;
    /* A mensagem é inviada a partir de URLs, isso quer dizer que não pode haver espaços, 
       então é utilizada a função encodeURIComponent que codifica a mensagem para ser enviada via URL. */
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    /* [window.open] Método usado para abrir uma nova janela do navegador com a URL especificada.
       ⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
       [_blank] É o parâmetro que especifica que a URL deve ser aberta em uma nova janela. */
    window.open(url, '_blank');
}