
# Doutor Estranho - Landing Page

Este é um projeto criado por mim como fã com intuito de estudo sobre a criação de uma landing page responsiva e que sirva de entrada para diferentes áreas a serem trabalhadas (Como uma futura galeria de imagens do filme e uma área que descreve um pouco sobre os personagens.)

Site hospedado no Github Pages: https://phrojekt.github.io/Doctor-Strange/ 


## Funcionalidades

► Landing-Page

- Logo da Marvel como link para o site da mesma.
- Navbar que dará acesso para as diversas páginas do site.
- Burger-Menu animado para dispositivos com largura inferior à 768px.
- Compatibilidade com dispositivos de: 300px, 768px ou 992px de Largura.

► Personagens.

- Logo da Marvel como link para o site da mesma.
- Navbar que dará acesso para as diversas páginas do site.
- Cards descritivos com breves resumos dos personagens. 
- Burger-Menu animado para dispositivos com largura inferior à 768px.
- Compatibilidade com dispositivos de: 300px, 768px ou 992px de Largura.

► Galeria de Imagens (Em desenvolvimento.)

► Vídeos (Em Desenvolvimento.)




## Aprendizados

Iniciei o projeto tendo de aprender a usar o Figma para criar a interface, isto é, criar uma imagem real daquilo que estava planejando. Felizmente, a ferramenta é um tanto intuitiva e tendo uma noção dos padrões geralmente utilizados para este tipo de projeto, não foi difícil montar um "Wireframe".

Neste tempo, eu acabei vendo sobre o SMACSS e resolvi que, inicialmente, poderia dividir o CSS do projeto baseado nas áreas da página. Isto é, um arquivo específico para o padrão dos elementos, um arquivo para header, um para o contéudo e assim por diante. Isto facilitou identificar onde eram necessárias alterações durante o desenvolvimento.

Aqui, aprendi um pouco sobre pseudo-classes (como o hover pra alterar o background-color dos itens na navbar), sobre display none e também o uso prático de display flex para organizar o conteúdo. Definir uma imagem como background e definir para cobrir toda a área sem repetir, além de aplicar sombreamento com linear-gradient, dar foco a uma área especifica com o background-position e o uso do blend-mode.

Usando JavaScript para adicionar a classe "active" de acordo o evento de click, o burguer-menu tomava a funcionalidade que deveria.  

Se o objetivo inicial era uma página responsiva, eu adquiri o oposto disso e percebi testando no Responsinator e no Google Mobile Friendly. Foram dias analisando e tentando entender a diferença do resultado do Chrome Dev Tools para as outras ferramentas, até perceber — Graças ao conteúdo do curso de UX que estava fazendo — que havia cometido um erro "bobo": Não havia utilizado o conceito de "Mobile-First".
Para solucionar, reescrevi todo o CSS enquanto o adaptava com os breakpoints utilizados pelo Bootstrap, vindo da menor mídia até a maior.

Foi um projeto importante para entender que o Desenvolvimento é algo constante e que é necessário flexibilidade sobre adaptar os elementos conforme preciso, desde que respeitando o papel que tal elemento deve cumprir, e o mais importante, é que conforme eu for aprendendo e melhorando como um Dev Front-End, eu poderei revisitar o projeto para o refinar e trazer cada vez mais, resultados satisfatórios. 


## Futuro do Projeto.

Além de novas páginas, pretendo adicionar acessibilidade ao conteúdo do site inteiro e criar breakpoints menores para conceder maior responsividade.

Também planejo acrescentar animações que tornem a experiência mais interativa e temática.

