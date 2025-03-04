// Exibir detalhes do carro ao clicar na imagem
document.querySelectorAll('.quadrado .imagem').forEach(img => {
    img.addEventListener('click', (e) => {
        const carDiv = e.target.closest('.quadrado');
        const carName = carDiv.querySelector('.nome').textContent;
        const carPrice = carDiv.querySelector('.preco').textContent;

        alert(`🚗 Carro: ${carName}\n💰 Preço: ${carPrice}`);
    });
});

// Adicionar botão de Favoritar ou Comprar
document.querySelectorAll('.quadrado').forEach(car => {
    const favoriteBtn = document.createElement('button');
    favoriteBtn.textContent = '❤️ Favoritar';
    favoriteBtn.addEventListener('click', () => alert(`${car.querySelector('.nome').textContent} foi adicionado aos favoritos!`));

    const buyBtn = document.createElement('button');
    buyBtn.textContent = '🛒 Comprar';
    buyBtn.addEventListener('click', () => alert(`Você comprou ${car.querySelector('.nome').textContent}!`));

    car.appendChild(favoriteBtn);
    car.appendChild(buyBtn);
});

// Barra de busca para filtrar carros
const searchInput = document.createElement('input');
searchInput.setAttribute('placeholder', '🔍 Buscar carro...');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.quadrado').forEach(car => {
        const carName = car.querySelector('.nome').textContent.toLowerCase();
        car.style.display = carName.includes(searchTerm) ? 'block' : 'none';
    });
});
document.body.insertBefore(searchInput, document.querySelector('main'));

// Carrossel de imagens na barra de anúncio
const images = [
    './imagens/fundo,icones-e-logo/james-daniel-bannervideo0001-fractal.gif',
];
let currentImageIndex = 0;
const adBanner = document.querySelector('.barra-anuncio img');

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    adBanner.src = images[currentImageIndex];
}, 3000);
