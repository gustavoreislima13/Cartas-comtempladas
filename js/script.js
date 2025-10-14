document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DE ANIMAÇÃO AO ROLAR ---
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    if (elementsToAnimate.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Opcional: para a animação acontecer só uma vez
                }
            });
        }, {
            threshold: 0.1
        });
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }


    // --- LÓGICA PARA OS FILTROS DAS CARTAS DE CRÉDITO ---
    const filtroTipo = document.getElementById('filtro-tipo');
    const filtroValor = document.getElementById('filtro-valor');
    const gridCartas = document.getElementById('cartas-disponiveis-grid');
    const mensagemNenhumaCarta = document.getElementById('nenhuma-carta');
    
    // Verifica se os elementos de filtro existem na página antes de adicionar os listeners
    if (filtroTipo && filtroValor && gridCartas) {
        const todasAsCartas = gridCartas.querySelectorAll('.carta-card');

        function aplicarFiltros() {
            const tipoSelecionado = filtroTipo.value;
            const valorSelecionado = filtroValor.value;
            let cartasVisiveis = 0;

            todasAsCartas.forEach(carta => {
                const tipoDaCarta = carta.dataset.tipo;
                const valorDaCarta = parseInt(carta.dataset.valor, 10);

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
    
    // --- LÓGICA PARA O FORMULÁRIO DE LOGIN (FRONT-END) ---
    // Nota: Uma funcionalidade de login completa requer um backend para validar os usuários.
    // Este código apenas simula a submissão do formulário.
    const loginForm = document.getElementById('login-form');
    if(loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real do formulário
            const email = document.getElementById('email').value;
            
            // Aqui você adicionaria a lógica para enviar os dados para um servidor (backend)
            // e aguardar a resposta para autenticar o usuário.
            
            alert(`Tentativa de login com o email: ${email}. Funcionalidade de backend não implementada.`);
            
            // Exemplo: Redirecionar para uma página de painel após login (simulação)
            // window.location.href = '/dashboard.html'; 
        });
    }
});