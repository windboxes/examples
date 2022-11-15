import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import styled from './windboxes';



const logoLayoutClasses = styled('mb-10 flex align-center justify-center');
const logoClasses = 'w-[7rem] h-[7rem] m-5'.split(' ');
const viteLogoClasses = styled([...logoClasses, 'hover:drop-shadow-[0_0_2em_#646cffaa]']);
const vanillaLogoClasses = styled([...logoClasses, 'hover:drop-shadow-[0_0_2em_#3178c6aa]']);

const HelloWorldClasses = styled('mt-10 text-3xl font-bold underline');



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="${logoLayoutClasses}">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="${viteLogoClasses}" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${typescriptLogo}" class="${vanillaLogoClasses}" alt="JavaScript logo" />
      </a>
    </div>
    <h1 class="${HelloWorldClasses}">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
