export default async function Render() {
    // Dynamically import the components and modules
    const { default: UniqueHash } = await import("../security/hascode");
    const { default: BlackJack } = await import("../../components/BlackJack");
  
    // Get Render's ID
    const ContainerDOM = document.getElementById('container');
    const blackJack = document.getElementById('blackjack');

    // Hash Applied
    window.addEventListener('DOMContentLoaded', () => {
      ContainerDOM.id = UniqueHash();
    });
  
    // Render's the JS Component
    BlackJack(blackJack);
  }
  