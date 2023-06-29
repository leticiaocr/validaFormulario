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


## Demonstração 



![Tela]()




## Links
  - Link para acesso: 
  
  - Repositório: 

  ## Autores

  * **Letícia Oliveira - Projeto desenvolvido durante o curso: JavaScript: validando formulários da plataforma Alura* 



## Executar
**Para executar este projeto na sua máquina, siga as instruções:**

* execute o seguinte comando no seu terminal:
`$ git clone  `
* abra a pasta que será  criada
* abra o arquivo "index.html" com o navegador de sua preferência 
