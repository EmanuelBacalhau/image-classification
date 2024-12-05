# Classificação de objetos com TensorFlow e MobileNet

Este projeto utiliza o modelo MobileNet com TensorFlow para classificar imagens selecionadas pelo usuário, identificando objetos presentes nelas. A aplicação foi desenvolvida com React Native e Expo.

## Funcionalidades

- **Seleção de Imagens**: O usuário pode selecionar uma imagem da galeria do dispositivo.
- **Classificação de Imagens**: Após a seleção, o modelo MobileNet classifica a imagem identificando objetos nela.
- **Exibição de Resultados**: Os resultados da classificação são exibidos para o usuário, incluindo o nome do objeto e a probabilidade de acerto.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Framework que facilita o desenvolvimento e a construção de aplicativos React Native.
- **TensorFlow.js**: Biblioteca para operações de machine learning no JavaScript.
- **MobileNet**: Modelo pré-treinado para classificação de imagens.
- **Expo Image Picker**: Biblioteca para selecionar imagens da galeria do dispositivo.
- **Expo FileSystem**: Biblioteca para manipulação de arquivos no dispositivo.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter o seguinte instalado:

- **Node.js** (versão 14 ou superior)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/image-classification.git
cd image-classification
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm start
```

4. Abra o aplicativo no seu emulador ou dispositivo físico com o aplicativo Expo Go.

### Como usar

1. Abra o aplicativo.
2. Selecione uma imagem da galeria.
3. O modelo MobileNet irá classificar a imagem e mostrar os resultados de classificação, incluindo o nome da classe e a probabilidade de cada objeto identificado.

### Estrutura do Código

- App.js: Componente principal do aplicativo que gerencia o estado e interação com o modelo de classificação.
- components/: Componentes da aplicação.
- types/: Tipos da aplicação.
