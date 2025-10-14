document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DE ANIMAÇÃO AO ROLAR ---
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    if (elementsToAnimate.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }

    // --- HEADER DINÂMICO ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- LÓGICA PARA O ACORDEÃO (FAQ) ---
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const pergunta = item.querySelector('.faq-pergunta');
            const resposta = item.querySelector('.faq-resposta');

            pergunta.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-resposta').style.maxHeight = '0px';
                    }
                });

                if (!isActive) {
                    item.classList.add('active');
                    resposta.style.maxHeight = resposta.scrollHeight + 'px';
                } else {
                    item.classList.remove('active');
                    resposta.style.maxHeight = '0px';
                }
            });
        });
    }

    // --- LÓGICA PARA OS FILTROS DA PÁGINA INICIAL ---
    const filtroTipoIndex = document.getElementById('filtro-tipo');
    const filtroValorIndex = document.getElementById('filtro-valor');
    const gridCartasIndex = document.getElementById('cartas-disponiveis-grid');
    
    // VERIFICA SE ESTAMOS NA PÁGINA INICIAL (pela existência do grid específico)
    if (filtroTipoIndex && filtroValorIndex && gridCartasIndex) {
        const todasAsCartas = gridCartasIndex.querySelectorAll('.carta-card');
        const mensagemNenhumaCarta = document.getElementById('nenhuma-carta');

        function aplicarFiltrosIndex() {
            const tipoSelecionado = filtroTipoIndex.value;
            const valorSelecionado = filtroValorIndex.value;
            let cartasVisiveis = 0;

            todasAsCartas.forEach(carta => {
                const tipoDaCarta = carta.dataset.tipo;
                const valorDaCarta = parseInt(carta.dataset.valor, 10);

                const tipoMatch = (tipoSelecionado === 'todos') || (tipoDaCarta === tipoSelecionado);

                let valorMatch = false;
                if (valorSelecionado === 'todos') {
                    valorMatch = true;
                } else {
                    const [min, maxStr] = valorSelecionado.split('-');
                    const max = maxStr === '' ? Infinity : Number(maxStr);
                    if (valorDaCarta >= Number(min) && valorDaCarta <= max) {
                        valorMatch = true;
                    }
                }
                
                if (tipoMatch && valorMatch) {
                    carta.style.display = 'flex';
                    cartasVisiveis++;
                } else {
                    carta.style.display = 'none';
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

        filtroTipoIndex.addEventListener('change', aplicarFiltrosIndex);
        filtroValorIndex.addEventListener('change', aplicarFiltrosIndex);

        // Garante que o estado inicial esteja correto ao carregar a página
        aplicarFiltrosIndex();
    }
});