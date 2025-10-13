document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DE ANIMAÇÃO AO ROLAR ---
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- LÓGICA PARA OS FILTROS DAS CARTAS DE CRÉDITO ---
    
    const filtroTipo = document.getElementById('filtro-tipo');
    const filtroValor = document.getElementById('filtro-valor');
    const gridCartas = document.getElementById('cartas-disponiveis-grid');
    const todasAsCartas = gridCartas.querySelectorAll('.carta-card');
    const mensagemNenhumaCarta = document.getElementById('nenhuma-carta');

    // Verifica se os elementos de filtro existem antes de adicionar os listeners
    if (filtroTipo && filtroValor && gridCartas) {
        function aplicarFiltros() {
            const tipoSelecionado = filtroTipo.value;
            const valorSelecionado = filtroValor.value;
            let cartasVisiveis = 0;

            todasAsCartas.forEach(carta => {
                const tipoDaCarta = carta.dataset.tipo;
                const valorDaCarta = parseInt(carta.dataset.valor);

                const tipoMatch = (tipoSelecionado === 'todos') || (tipoDaCarta === tipoSelecionado);

                let valorMatch = false;
                if (valorSelecionado === 'todos') {
                    valorMatch = true;
                } else {
                    const [min, max] = valorSelecionado.split('-').map(Number);
                    if (valorDaCarta >= min && valorDaCarta <= max) {
                        valorMatch = true;
                    }
                }
                
                if (tipoMatch && valorMatch) {
                    carta.classList.remove('hidden');
                    cartasVisiveis++;
                } else {
                    carta.classList.add('hidden');
                }
            });

            if (mensagemNenhumaCarta) {
                 if (cartasVisiveis === 0) {
                    mensagemNenhumaCarta.classList.remove('hidden');
                } else {
                    mensagemNenhumaCarta.classList.add('hidden');
                }
            }
        }

        filtroTipo.addEventListener('change', aplicarFiltros);
        filtroValor.addEventListener('change', aplicarFiltros);

        // Garante que o estado inicial esteja correto
        aplicarFiltros();
    }
});