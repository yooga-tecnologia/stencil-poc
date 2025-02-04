# 📖  Guia de Instalação

Este documento fornece as instruções para instalar e configurar a ferramenta em diferentes frameworks e bibliotecas de frontend.

## Guia de ajuda
[docs-google](https://docs.google.com/document/d/1OXDa1OkIC-nuEF5t4faAh_hv67vmXOuzK4SUhvBVf60/edit?usp=sharing)



## 🟢 Instalação no Vue

1. **Instalar a biblioteca:**
   No arquivo `src/main.js` ou `src/App.vue`, adicione o seguinte código para importar os estilos:

```bash
   npm install @biancardii/study

   #ou

   yarn add @biancardii/study
```

2. **Importe o arquivo de estilos**:
   No arquivo `src/main.js` ou `src/App.vue`, adicione o seguinte código para importar os estilos:

```bash
    import '@biancardii/study/dist/study/study.css';
```

3. **Defina os componentes customizados:**:
   No arquivo `src/main.js` ou `src/App.vue`, adicione o seguinte código para importar os estilos:

```bash
    import { defineCustomElements } from '@biancardii/study/loader';

    defineCustomElements();
```

## 🅰️ Instalação no Angular

1. **Instalar a biblioteca:**
   Instalar a biblioteca: No seu projeto Angular, use npm ou yarn para instalar a biblioteca:

```bash
   npm install @biancardii/study

   #ou

   yarn add @biancardii/study
```

2. **Importe o arquivo de estilos**:
   No arquivo principal de estilos src/styles.scss ou /src/global.scss , adicione o código para importar o CSS:

```bash
    @import "node_modules/@biancardii/study/dist/study/study.css";
```

3. **Defina os componentes customizados:**:
   No `main.ts`, adicione a linha para definir os componentes customizados:

```bash
    import { defineCustomElements } from '@biancardii/study/loader';
    defineCustomElements();
```

## ⚛️ Instalação no React

1. **Instalar a biblioteca:**
   Para instalar a biblioteca no seu projeto React, use o npm ou yarn:

```bash
   npm install @biancardii/study

   #ou

   yarn add @biancardii/study
```

2. **Importe o arquivo de estilos**:
   No arquivo `src/App.js` ou `src/index.js`, adicione o seguinte código para importar os estilos:


```bash
    import '@biancardii/study/dist/study/study.css';
```

3. **Defina os componentes customizados:**:
   Defina os componentes customizados: No arquivo `src/index.js` ou `src/App.js`, adicione o seguinte código para definir os componentes customizados:

```bash
    import { defineCustomElements } from '@biancardii/study/loader';

    defineCustomElements();
```
