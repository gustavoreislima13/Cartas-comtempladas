document.addEventListener('DOMContentLoaded', () => {

    // --- MENU RESPONSIVO ---
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryNav = document.getElementById('primary-navigation');
    const pageHeader = document.querySelector('.main-header');

    function closeMenu() {
        if (primaryNav && primaryNav.classList.contains('is-open')) {
            primaryNav.classList.remove('is-open');
            document.body.classList.remove('menu-open');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        }
    }

    if (menuToggle && primaryNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = primaryNav.classList.toggle('is-open');
            document.body.classList.toggle('menu-open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.querySelector('i')?.classList.toggle('fa-xmark', isOpen);
            menuToggle.querySelector('i')?.classList.toggle('fa-bars', !isOpen);
        });

        primaryNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) {
                closeMenu();
            }
        });
    }

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
    if (pageHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                pageHeader.classList.add('scrolled');
            } else {
                pageHeader.classList.remove('scrolled');
            }
        });
    }

    // --- BOTÃO VOLTAR AO TOPO ---
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
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
                        const otherResposta = otherItem.querySelector('.faq-resposta');
                        if (otherResposta) {
                            otherResposta.style.maxHeight = '0px';
                        }
                    }
                });

                if (!isActive) {
                    item.classList.add('active');
                    if (resposta) {
                        resposta.style.maxHeight = resposta.scrollHeight + 'px';
                    }
                } else {
                    item.classList.remove('active');
                    if (resposta) {
                        resposta.style.maxHeight = '0px';
                    }
                }
            });
        });
    }

    // --- LÓGICA PARA OS FILTROS DA PÁGINA INICIAL ---
    const filtroTipoIndex = document.getElementById('filtro-tipo');
    const filtroValorIndex = document.getElementById('filtro-valor');
    const gridCartasIndex = document.getElementById('cartas-disponiveis-grid');

    if (filtroTipoIndex && filtroValorIndex && gridCartasIndex) {
        const todasAsCartas = gridCartasIndex.querySelectorAll('.carta-card');
        const mensagemNenhumaCarta = document.getElementById('nenhuma-carta');

        function aplicarFiltrosIndex() {
            const tipoSelecionado = filtroTipoIndex.value;
            const valorSelecionado = filtroValorIndex.value;
            let cartasVisiveis = 0;

            gridCartasIndex.setAttribute('aria-busy', 'true');
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
                    carta.setAttribute('aria-hidden', 'false');
                    cartasVisiveis++;
                } else {
                    carta.style.display = 'none';
                    carta.setAttribute('aria-hidden', 'true');
                }
            });

            if (mensagemNenhumaCarta) {
                 if (cartasVisiveis === 0) {
                    mensagemNenhumaCarta.classList.remove('hidden');
                    mensagemNenhumaCarta.setAttribute('aria-hidden', 'false');
                } else {
                    mensagemNenhumaCarta.classList.add('hidden');
                    mensagemNenhumaCarta.setAttribute('aria-hidden', 'true');
                }
            }

            gridCartasIndex.setAttribute('aria-busy', 'false');
        }

        filtroTipoIndex.addEventListener('change', aplicarFiltrosIndex);
        filtroValorIndex.addEventListener('change', aplicarFiltrosIndex);
        aplicarFiltrosIndex();
    }
});
