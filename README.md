  # VALIDAÇÃO DE FORMULÁRIO 
Para tornar o projeto de validação de formulários mais realista, foi criado o MoniBank, um banco fictício desenvolvido como parte do curso de validação de formulários com JavaScript na plataforma Alura. O principal objetivo desse projeto é aprimorar as habilidades em JavaScript, aplicando-as na validação de formulários, incluindo verificações como CPF e idade. Assim, o MoniBank oferece aos usuários um feedback claro sobre os resultados obtidos nessas validações. Essa iniciativa também proporcionou uma valiosa oportunidade de aplicar os conhecimentos adquiridos em JavaScript em uma situação prática e relevante para o cotidiano.

## Tecnologias

Aqui estão as tecnologias utilizadas neste projeto.

* HTML
* CSS 
* JavaScript

## Serviços Usados

* Github


## Sobre o projeto

*VALIDAÇÃO DE CPF*
  
Para validar um CPF, é necessário realizar cálculos e verificações nos dígitos verificadores do número. A lógica de validação do CPF pode ser resumida da seguinte maneira:

Primeiro dígito verificador:

- Recolha os 9 primeiros dígitos do CPF.
- Multiplique cada um desses dígitos por números de 10 a 2, sequencialmente.
- Some todos os resultados das multiplicações.
- Multiplique essa soma por 10.
- Encontre o módulo da divisão desse número por 11.
- Se o resultado for 10 ou 11, zere-o.
- O resultado obtido é o primeiro dígito verificador do CPF.

Segundo dígito verificador:
- Recolha os 10 primeiros dígitos do CPF.
- Multiplique cada um desses dígitos por números de 11 a 2, sequencialmente.
- Some todos os resultados das multiplicações.
- Multiplique essa soma por 10.
- Encontre o módulo da divisão desse número por 11.
- Se o resultado for 10 ou 11, zere-o.
- O resultado obtido é o segundo dígito verificador do CPF.

*VALIDAÇÃO DE IDADE*

A lógica do código é a seguinte:

- Converte o valor do campo em uma data de nascimento utilizando o construtor Date, criando um objeto dataNascimento.
- Chama a função validaIdade, passando o objeto dataNascimento como argumento. Essa função irá retornar true se a pessoa for maior de idade ou false caso contrário.
- Exibe o resultado da validação no console utilizando console.log.
- A função validaIdade recebe um objeto data como parâmetro. Dentro dessa função, são realizadas as seguintes etapas:

- Obtém a data atual utilizando o construtor Date e armazena-a no objeto dataAtual.
- Calcula a data correspondente a 18 anos após a data de nascimento fornecida, armazenando-a no objeto dataMais18. Essa data é obtida adicionando 18 anos ao ano da data de nascimento e mantendo o mesmo mês e dia.
- Compara se a dataAtual é maior ou igual à dataMais18. Se a pessoa tiver pelo menos 18 anos de idade, o resultado será true; caso contrário, será false.
- Retorna o resultado da comparação.
- Dessa forma, ao chamar a função eMaiorDeIdade e passar um campo contendo uma data de nascimento, o código irá verificar se a pessoa é maior de idade com base na data fornecida.
- 
*ENVIO DE FOTO*
- Primeiramente, o código seleciona os elementos do HTML usando os seletores [data-...] para obter referências aos elementos de botões, câmera, vídeo, canvas, mensagem e enviar. Em seguida, declara uma variável imagemURL para armazenar a URL da imagem.

- Quando o botão de iniciar a câmera é clicado, é feita uma solicitação assíncrona para obter acesso à câmera do dispositivo usando o método getUserMedia. Uma vez que o acesso é concedido, o vídeo é exibido no elemento <video>.

Quando o botão de tirar foto é clicado, a função associada a ele é acionada. A imagem capturada a partir do vídeo é desenhada no elemento <canvas> usando o método drawImage. A URL da imagem é obtida usando o método toDataURL do canvas, especificando o formato como 'image/jpeg'. A URL da imagem é armazenada na variável imagemURL, e o campo da câmera é ocultado enquanto a mensagem é exibida.

Quando o botão de enviar foto é clicado, a função associada a ele é acionada. Primeiro, os dados existentes no LocalStorage são obtidos usando o método getItem, e o retorno é convertido de volta para um objeto JavaScript usando JSON.parse. Em seguida, a propriedade imagem do objeto é atualizada com a URL da imagem capturada. Os dados atualizados são armazenados novamente no LocalStorage usando o método setItem, e o usuário é redirecionado para uma página diferente usando window.location.href.


*OUTRAS INFORMAÇÕES*
* Mensagens customizadas de erro são mostradas na página
* Os dados do formulário são salvos em localStorage juntamente com a foto.

## Demonstração 



![Tela](https://github.com/leticiaocr/validaFormulario/blob/main/screen-capture.gif)




## Links
  - Link para acesso: https://leticiaocr.github.io/validaFormulario/ 
  
  - Repositório: https://github.com/leticiaocr/validaFormulario.git

  ## Autores

  * **Letícia Oliveira - Projeto desenvolvido durante o curso: JavaScript: validando formulários da plataforma Alura* 



## Executar
**Para executar este projeto na sua máquina, siga as instruções:**

* execute o seguinte comando no seu terminal:
`$ git clone [https://github.com/leticiaocr/validaFormulario.git]`
* abra a pasta que será  criada
* abra o arquivo "index.html" com o navegador de sua preferência 
