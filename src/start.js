export default async function Start(DOM) {

    const stylesModule = await import('./assets/sass/modules/app.module.scss');
    const styles = stylesModule.default;
  
    DOM.innerHTML = `
        <div id='blackjack' class='blackjack'></div>
    `;
  
    const { default: Render } = await import('./assets/render/Render');
    Render();
  }
  