// Função para exibir os detalhes do carro
function showCarDetails(carDiv) {
    const carName = carDiv.querySelector('.nome').textContent;
    const carPrice = carDiv.querySelector('.preco').textContent;
    alert(`🚗 Carro: ${carName}\n💰 Preço: ${carPrice}`);
}

// Função para criar e adicionar os botões de Favoritar e Comprar
function addCarButtons(car) {
    // Botão de Favoritar
    const favoriteBtn = document.createElement('button');
    favoriteBtn.textContent = '❤️ Favoritar';
    favoriteBtn.addEventListener('click', () => {
        alert(`${car.querySelector('.nome').textContent} foi adicionado aos favoritos!`);
    });

    // Botão de Comprar
    const buyBtn = document.createElement('button');
    buyBtn.textContent = '🛒 Comprar';
    buyBtn.addEventListener('click', () => {
        alert(`Você comprou ${car.querySelector('.nome').textContent}!`);
    });

    // Adiciona os botões ao carro
    car.appendChild(favoriteBtn);
    car.appendChild(buyBtn);
}

// Função para filtrar os carros pela busca
function filterCarsBySearch(searchTerm) {
    document.querySelectorAll('.quadrado').forEach(car => {
        const carName = car.querySelector('.nome').textContent.toLowerCase();
        car.style.display = carName.includes(searchTerm) ? 'block' : 'none';
    });
}

// Exibir detalhes do carro ao clicar
document.querySelector('.grid-conteiner').addEventListener('click', (e) => {
    const carDiv = e.target.closest('.quadrado');
    if (carDiv && e.target.classList.contains('imagem')) {
        showCarDetails(carDiv);
    }
});

// Adicionar os botões de Favoritar e Comprar a cada carro
document.querySelectorAll('.quadrado').forEach(car => {
    addCarButtons(car);
});

// Barra de busca
const searchInput = document.createElement('input');
searchInput.setAttribute('placeholder', '🔍 Buscar carro...');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterCarsBySearch(searchTerm);
});

document.body.insertBefore(searchInput, document.querySelector('main'));

// Barra de anúncio (Banner rotativo)
const images = [
    './imagens/fundo,icones-e-logo/james-daniel-bannervideo0001-fractal.gif',
    './imagens/fundo,icones-e-logo/banner carro.jpg',
    './imagens/fundo,icones-e-logo/banner venom.jpg',
    './imagens/fundo,icones-e-logo/kia.jpg',
];
let currentImageIndex = 1;
const adBanner = document.querySelector('.barra-anuncio img');

// Função para alternar a imagem do banner
function changeBannerImage() {
    adBanner.classList.remove('zoom-out');
    void adBanner.offsetWidth; // Reflow para reiniciar a animação
    currentImageIndex = (currentImageIndex + 1) % images.length;
    adBanner.src = images[currentImageIndex];
    adBanner.classList.add('zoom-out');
}

// Intervalo para alternar a imagem do banner
setInterval(changeBannerImage, 3000);
