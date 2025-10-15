document.addEventListener('DOMContentLoaded', () => {
    // Apenas executa se estiver na página de cartas
    const gridCartasPage = document.getElementById('cartas-page-grid');
    if (gridCartasPage) {

        // --- DADOS COMPLETOS DAS CARTAS (PDFs + Originais) ---
        const cartasData = [
            // Cartas Originais
            { administradora: "GLR Financeira", tipo: "veiculo", valor: 85000, parcela: 1150, entrada: 25000, parcelasTexto: "72x R$ 1.150,00" },
            { administradora: "GLR Financeira", tipo: "imovel", valor: 350000, parcela: 2400, entrada: 70000, parcelasTexto: "180x R$ 2.400,00" },
            { administradora: "GLR Financeira", tipo: "imovel", valor: 600000, parcela: 3950, entrada: 120000, parcelasTexto: "200x R$ 3.950,00" },
            { administradora: "GLR Financeira", tipo: "veiculo", valor: 150000, parcela: 1980, entrada: 45000, parcelasTexto: "80x R$ 1.980,00" },
            { administradora: "GLR Financeira", tipo: "servico", valor: 50000, parcela: 950, entrada: 10000, parcelasTexto: "60x R$ 950,00" },

            // Cartas Extraídas dos PDFs
            { administradora: "LUME", tipo: "veiculo", valor: 18750, parcela: 404, entrada: 7000, parcelasTexto: "46x R$ 404,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 18800, parcela: 399, entrada: 6500, parcelasTexto: "48x R$ 399,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 18950, parcela: 399, entrada: 7000, parcelasTexto: "48x R$ 399,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 19170, parcela: 390, entrada: 6800, parcelasTexto: "50x R$ 390,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 22950, parcela: 872, entrada: 7500, parcelasTexto: "26x R$ 872,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 23040, parcela: 812, entrada: 7500, parcelasTexto: "28x R$ 812,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 23200, parcela: 1046, entrada: 5200, parcelasTexto: "24x R$ 1.046,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 23460, parcela: 820, entrada: 7000, parcelasTexto: "29x R$ 820,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 24390, parcela: 220, entrada: 13700, parcelasTexto: "66x R$ 220,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 26000, parcela: 983, entrada: 8400, parcelasTexto: "26x R$ 983,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 26200, parcela: 732, entrada: 10500, parcelasTexto: "30x R$ 732,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 26420, parcela: 1143, entrada: 6800, parcelasTexto: "25x R$ 1.143,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 26500, parcela: 762, entrada: 9500, parcelasTexto: "33x R$ 762,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 27140, parcela: 999, entrada: 8300, parcelasTexto: "27x R$ 999,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 27200, parcela: 994, entrada: 7500, parcelasTexto: "28x R$ 994,00" },
            { administradora: "HS", tipo: "veiculo", valor: 29000, parcela: 511, entrada: 13000, parcelasTexto: "50x R$ 511,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 30360, parcela: 871, entrada: 8000, parcelasTexto: "38x R$ 871,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 30600, parcela: 1073, entrada: 9500, parcelasTexto: "31x R$ 1.073,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 32800, parcela: 1099, entrada: 9200, parcelasTexto: "30x R$ 1.099,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 34100, parcela: 575, entrada: 13000, parcelasTexto: "70x R$ 575,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 34480, parcela: 1239, entrada: 9900, parcelasTexto: "27x R$ 1.239,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 35000, parcela: 478, entrada: 15000, parcelasTexto: "82x R$ 478,00" },
            { administradora: "ANCORA", tipo: "veiculo", valor: 35450, parcela: 475, entrada: 21500, parcelasTexto: "43x R$ 475,00" },
            { administradora: "ANCORA", tipo: "veiculo", valor: 35930, parcela: 1194, entrada: 20000, parcelasTexto: "16x R$ 1.194,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 36100, parcela: 1474, entrada: 11000, parcelasTexto: "28x R$ 1.474,00" },
            { administradora: "ANCORA", tipo: "veiculo", valor: 36170, parcela: 543, entrada: 21000, parcelasTexto: "39x R$ 543,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 36200, parcela: 1115, entrada: 11100, parcelasTexto: "39x R$ 1.115,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 36600, parcela: 1198, entrada: 11500, parcelasTexto: "32x R$ 1.198,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 36860, parcela: 1138, entrada: 11300, parcelasTexto: "33x R$ 1.138,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 37100, parcela: 1202, entrada: 18000, parcelasTexto: "25x R$ 1.202,00" },
            { administradora: "ANCORA", tipo: "veiculo", valor: 37200, parcela: 704, entrada: 18500, parcelasTexto: "37x R$ 704,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 37650, parcela: 1191, entrada: 18500, parcelasTexto: "25x R$ 1.191,00" },
            { administradora: "ANCORA", tipo: "veiculo", valor: 37830, parcela: 839, entrada: 21000, parcelasTexto: "26x R$ 839,00" },
            { administradora: "ANCORA", tipo: "veiculo", valor: 38260, parcela: 747, entrada: 19500, parcelasTexto: "38x R$ 747,00" },
            { administradora: "BRADESCO", tipo: "veiculo", valor: 39000, parcela: 1119, entrada: 22000, parcelasTexto: "27x R$ 1.119,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 40250, parcela: 1194, entrada: 19900, parcelasTexto: "25x R$ 1.194,00" },
            { administradora: "ANCORA", tipo: "veiculo", valor: 41190, parcela: 824, entrada: 19900, parcelasTexto: "35x R$ 824,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 45480, parcela: 1792, entrada: 17200, parcelasTexto: "22x R$ 1.792,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 46390, parcela: 1969, entrada: 19000, parcelasTexto: "19x R$ 1.969,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 47830, parcela: 1569, entrada: 15900, parcelasTexto: "27x R$ 1.569,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 52000, parcela: 1269, entrada: 23600, parcelasTexto: "32x R$ 1.269,00" },
            { administradora: "MYCON", tipo: "veiculo", valor: 52140, parcela: 652, entrada: 23500, parcelasTexto: "62x R$ 652,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 52850, parcela: 1861, entrada: 18000, parcelasTexto: "25x R$ 1.861,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 55000, parcela: 1004, entrada: 29500, parcelasTexto: "37x R$ 1.004,00" },
            { administradora: "ITAU", tipo: "imovel", valor: 58600, parcela: 460, entrada: 27400, parcelasTexto: "154x R$ 460,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 58740, parcela: 2167, entrada: 18900, parcelasTexto: "24x R$ 2.167,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 61450, parcela: 1551, entrada: 26500, parcelasTexto: "32x R$ 1.551,00" },
            { administradora: "RODOBENS", tipo: "veiculo", valor: 61500, parcela: 1009, entrada: 19500, parcelasTexto: "68x R$ 1.009,00" },
            { administradora: "EMBRACON", tipo: "veiculo", valor: 63210, parcela: 919, entrada: 23900, parcelasTexto: "74x R$ 919,00" },
            { administradora: "ITAU", tipo: "imovel", valor: 67000, parcela: 398, entrada: 32900, parcelasTexto: "143x R$ 398,00" },
            { administradora: "MYCON", tipo: "veiculo", valor: 67317, parcela: 1052, entrada: 25000, parcelasTexto: "63x R$ 1.052,00" },
            { administradora: "SANTANDER", tipo: "imovel", valor: 67560, parcela: 357, entrada: 29400, parcelasTexto: "205x R$ 357,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 68000, parcela: 823, entrada: 27000, parcelasTexto: "92x R$ 823,00" },
            { administradora: "PORTO", tipo: "veiculo", valor: 68740, parcela: 743, entrada: 32000, parcelasTexto: "83x R$ 743,00" },
            { administradora: "ITAU", tipo: "imovel", valor: 69320, parcela: 481, entrada: 32900, parcelasTexto: "134x R$ 481,00" },
            { administradora: "SANTANDER", tipo: "imovel", valor: 69835, parcela: 517, entrada: 31400, parcelasTexto: "132x R$ 517,00" },
            { administradora: "PORTO", tipo: "imovel", valor: 70100, parcela: 416, entrada: 38000, parcelasTexto: "187x R$ 416,00" },
            { administradora: "ITAU", tipo: "imovel", valor: 71000, parcela: 479, entrada: 33900, parcelasTexto: "134x R$ 479,00" },
            { administradora: "UNICOOB", tipo: "veiculo", valor: 71000, parcela: 1074, entrada: 37000, parcelasTexto: "50x R$ 1.074,00" },
            { administradora: "ITAU", tipo: "veiculo", valor: 73381, parcela: 3023, entrada: 22000, parcelasTexto: "25x R$ 3.023,00" },
            { administradora: "SANTANDER", tipo: "imovel", valor: 73850, parcela: 392, entrada: 32900, parcelasTexto: "227x R$ 392,00" },
            { administradora: "PORTO", tipo: "imovel", valor: 80500, parcela: 563, entrada: 42500, parcelasTexto: "142x R$ 563,00" },
            { administradora: "BRADESCO", tipo: "veiculo", valor: 86094, parcela: 2118, entrada: 39650, parcelasTexto: "30x R$ 2.118,00" },
            { administradora: "ITAU", tipo: "imovel", valor: 87500, parcela: 572, entrada: 40400, parcelasTexto: "135x R$ 572,00" },
            { administradora: "PORTO", tipo: "imovel", valor: 93762, parcela: 661, entrada: 55000, parcelasTexto: "130x R$ 661,00" },
            { administradora: "EMBRACON", tipo: "imovel", valor: 94200, parcela: 971, entrada: 36000, parcelasTexto: "84x R$ 971,00" },
            { administradora: "ITAU", tipo: "imovel", valor: 96700, parcela: 788, entrada: 46900, parcelasTexto: "170x R$ 788,00" },
            { administradora: "CNP", tipo: "imovel", valor: 99100, parcela: 685, entrada: 38900, parcelasTexto: "130x R$ 685,00" },
            { administradora: "EMBRACON", tipo: "imovel", valor: 100000, parcela: 560, entrada: 38000, parcelasTexto: "222x R$ 560,00" },
            { administradora: "Caixa", tipo: "imovel", valor: 50000, parcela: 315, entrada: 23115, parcelasTexto: "190x R$ 315,72" },
            { administradora: "Caixa", tipo: "imovel", valor: 57200, parcela: 399, entrada: 30098, parcelasTexto: "156x R$ 399,00" },
            { administradora: "MyCon", tipo: "imovel", valor: 57244, parcela: 317, entrada: 28917, parcelasTexto: "172x R$ 317,88" },
            { administradora: "Caixa", tipo: "imovel", valor: 57500, parcela: 395, entrada: 28300, parcelasTexto: "158x R$ 395,00" },
            { administradora: "CNP", tipo: "imovel", valor: 58200, parcela: 775, entrada: 21700, parcelasTexto: "103x R$ 775,00" },
            { administradora: "CNP", tipo: "imovel", valor: 58500, parcela: 774, entrada: 21374, parcelasTexto: "100x R$ 774,00" },
            { administradora: "Caixa", tipo: "imovel", valor: 59000, parcela: 415, entrada: 30115, parcelasTexto: "152x R$ 415,00" },
            { administradora: "MyCon", tipo: "imovel", valor: 59172, parcela: 445, entrada: 29200, parcelasTexto: "157x R$ 445,68" },
            { administradora: "CNP", tipo: "imovel", valor: 59800, parcela: 799, entrada: 20799, parcelasTexto: "100x R$ 799,00" },
            { administradora: "HS", tipo: "imovel", valor: 61470, parcela: 495, entrada: 27300, parcelasTexto: "144x R$ 495,00" },
            { administradora: "Santander", tipo: "imovel", valor: 62000, parcela: 336, entrada: 30036, parcelasTexto: "227x R$ 336,41" },
            { administradora: "HS", tipo: "imovel", valor: 62720, parcela: 517, entrada: 26800, parcelasTexto: "141x R$ 517,00" },
            { administradora: "HS", tipo: "imovel", valor: 62836, parcela: 638, entrada: 26500, parcelasTexto: "131x R$ 638,00" },
            { administradora: "HS", tipo: "imovel", valor: 63030, parcela: 529, entrada: 26800, parcelasTexto: "153x R$ 529,00" },
            { administradora: "HS", tipo: "imovel", valor: 63145, parcela: 511, entrada: 27500, parcelasTexto: "144x R$ 511,00" },
            { administradora: "HS", tipo: "imovel", valor: 63800, parcela: 522, entrada: 27800, parcelasTexto: "139x R$ 522,00" },
            { administradora: "HS", tipo: "imovel", valor: 64096, parcela: 523, entrada: 27200, parcelasTexto: "147x R$ 523,00" },
            { administradora: "HS", tipo: "imovel", valor: 64877, parcela: 524, entrada: 27500, parcelasTexto: "152x R$ 524,00" },
            { administradora: "Itaú", tipo: "imovel", valor: 64900, parcela: 468, entrada: 33168, parcelasTexto: "139x R$ 468,38" },
            { administradora: "Itaú", tipo: "imovel", valor: 65000, parcela: 538, entrada: 31700, parcelasTexto: "142x R$ 538,04" },
            { administradora: "MyCon", tipo: "imovel", valor: 65162, parcela: 457, entrada: 31900, parcelasTexto: "165x R$ 457,12" },
            { administradora: "HS", tipo: "imovel", valor: 65513, parcela: 549, entrada: 28200, parcelasTexto: "134x R$ 549,00" },
            { administradora: "MyCon", tipo: "imovel", valor: 66095, parcela: 389, entrada: 32200, parcelasTexto: "167x R$ 389,79" },
            { administradora: "Caixa", tipo: "imovel", valor: 68500, parcela: 438, entrada: 36138, parcelasTexto: "160x R$ 438,00" },
            { administradora: "HS", tipo: "imovel", valor: 69376, parcela: 571, entrada: 29300, parcelasTexto: "131x R$ 571,00" },
            { administradora: "HS", tipo: "imovel", valor: 72664, parcela: 546, entrada: 32100, parcelasTexto: "171x R$ 546,00" },
            { administradora: "HS", tipo: "imovel", valor: 73097, parcela: 545, entrada: 31200, parcelasTexto: "172x R$ 545,00" },
            { administradora: "Caixa", tipo: "imovel", valor: 74000, parcela: 518, entrada: 33918, parcelasTexto: "154x R$ 518,40" },
            { administradora: "HS", tipo: "imovel", valor: 74483, parcela: 627, entrada: 32000, parcelasTexto: "156x R$ 627,00" },
            { administradora: "HS", tipo: "imovel", valor: 74523, parcela: 637, entrada: 33370, parcelasTexto: "121x R$ 637,00" },
            { administradora: "HS", tipo: "imovel", valor: 74606, parcela: 531, entrada: 35000, parcelasTexto: "168x R$ 531,00" },
            { administradora: "Caixa", tipo: "imovel", valor: 75000, parcela: 509, entrada: 38809, parcelasTexto: "156x R$ 509,00" },
            { administradora: "Caixa", tipo: "imovel", valor: 76000, parcela: 524, entrada: 38824, parcelasTexto: "156x R$ 524,00" },
            { administradora: "Embracon", tipo: "imovel", valor: 76406, parcela: 1376, entrada: 29676, parcelasTexto: "61x R$ 1.376,00" },
            { administradora: "HS", tipo: "imovel", valor: 76423, parcela: 609, entrada: 34000, parcelasTexto: "143x R$ 609,00" },
            { administradora: "HS", tipo: "imovel", valor: 77083, parcela: 619, entrada: 34000, parcelasTexto: "146x R$ 619,00" },
            { administradora: "HS", tipo: "imovel", valor: 77926, parcela: 594, entrada: 33500, parcelasTexto: "165x R$ 594,00" },
            { administradora: "HS", tipo: "imovel", valor: 78145, parcela: 599, entrada: 33600, parcelasTexto: "162x R$ 599,00" },
            { administradora: "HS", tipo: "imovel", valor: 78147, parcela: 624, entrada: 33500, parcelasTexto: "148x R$ 624,00" },
            { administradora: "HS", tipo: "imovel", valor: 78492, parcela: 662, entrada: 33226, parcelasTexto: "151x R$ 662,00" },
            { administradora: "HS", tipo: "imovel", valor: 79803, parcela: 702, entrada: 35500, parcelasTexto: "106x R$ 702,00" },
            { administradora: "HS", tipo: "imovel", valor: 80368, parcela: 693, entrada: 35000, parcelasTexto: "119x R$ 693,00" },
            { administradora: "HS", tipo: "imovel", valor: 80700, parcela: 637, entrada: 36000, parcelasTexto: "151x R$ 637,00" },
            { administradora: "HS", tipo: "imovel", valor: 82136, parcela: 678, entrada: 35000, parcelasTexto: "140x R$ 678,00" },
            { administradora: "HS", tipo: "imovel", valor: 82228, parcela: 786, entrada: 35000, parcelasTexto: "116x R$ 786,00" },
            { administradora: "Magalu", tipo: "imovel", valor: 82500, parcela: 530, entrada: 40300, parcelasTexto: "216x R$ 530,00" },
            { administradora: "MyCon", tipo: "imovel", valor: 83502, parcela: 572, entrada: 41500, parcelasTexto: "162x R$ 572,54" },
            { administradora: "Embracon", tipo: "imovel", valor: 83700, parcela: 613, entrada: 35813, parcelasTexto: "171x R$ 613,00" },
            { administradora: "HS", tipo: "imovel", valor: 83776, parcela: 870, entrada: 35235, parcelasTexto: "103x R$ 870,00" },
            { administradora: "Caixa", tipo: "imovel", valor: 84500, parcela: 747, entrada: 39647, parcelasTexto: "130x R$ 747,00" },
            { administradora: "HS", tipo: "imovel", valor: 85423, parcela: 652, entrada: 37200, parcelasTexto: "150x R$ 652,00" },
            { administradora: "MyCon", tipo: "imovel", valor: 85488, parcela: 639, entrada: 39900, parcelasTexto: "151x R$ 639,79" },
            { administradora: "Caixa", tipo: "imovel", valor: 86250, parcela: 607, entrada: 41614, parcelasTexto: "156x R$ 607,00" },
            { administradora: "MyCon", tipo: "imovel", valor: 86643, parcela: 560, entrada: 42700, parcelasTexto: "172x R$ 560,47" },
            { administradora: "Caixa", tipo: "imovel", valor: 86800, parcela: 607, entrada: 62907, parcelasTexto: "156x R$ 607,00" },
            { administradora: "HS", tipo: "imovel", valor: 87147, parcela: 833, entrada: 41000, parcelasTexto: "83x R$ 833,00" },
            { administradora: "Caixa", tipo: "imovel", valor: 87600, parcela: 603, entrada: 41503, parcelasTexto: "156x R$ 603,00" },
            { administradora: "Caixa", tipo: "imovel", valor: 88500, parcela: 614, entrada: 43914, parcelasTexto: "152x R$ 614,00" },
            { administradora: "HS", tipo: "imovel", valor: 88695, parcela: 696, entrada: 38000, parcelasTexto: "155x R$ 696,00" },
            { administradora: "HS", tipo: "imovel", valor: 88797, parcela: 1355, entrada: 36254, parcelasTexto: "61x R$ 1.355,00" },
            { administradora: "MyCon", tipo: "imovel", valor: 88799, parcela: 608, entrada: 44000, parcelasTexto: "156x R$ 608,62" },
            { administradora: "Embracon", tipo: "imovel", valor: 88800, parcela: 524, entrada: 36438, parcelasTexto: "231x R$ 524,00" },
            { administradora: "CNP", tipo: "imovel", valor: 89000, parcela: 1098, entrada: 28298, parcelasTexto: "100x R$ 1.098,00" },
            { administradora: "Embracon", tipo: "imovel", valor: 89207, parcela: 488, entrada: 39080, parcelasTexto: "228x R$ 488,00" },
            { administradora: "Embracon", tipo: "imovel", valor: 89366, parcela: 525, entrada: 39825, parcelasTexto: "229x R$ 525,00" },
            { administradora: "CNP", tipo: "imovel", valor: 90000, parcela: 970, entrada: 39300, parcelasTexto: "103x R$ 970,00" },
            { administradora: "HS", tipo: "imovel", valor: 91529, parcela: 791, entrada: 38500, parcelasTexto: "122x R$ 791,00" },
            { administradora: "HS", tipo: "imovel", valor: 92150, parcela: 785, entrada: 41000, parcelasTexto: "122x R$ 785,00" },
            { administradora: "MyCon", tipo: "imovel", valor: 93201, parcela: 615, entrada: 44400, parcelasTexto: "172x R$ 615,48" },
            { administradora: "HS", tipo: "imovel", valor: 93436, parcela: 1421, entrada: 39000, parcelasTexto: "65x R$ 1.421,00" },
            { administradora: "HS", tipo: "imovel", valor: 93752, parcela: 753, entrada: 42500, parcelasTexto: "133x R$ 753,00" },
            { administradora: "Porto Seguro", tipo: "imovel", valor: 93763, parcela: 650, entrada: 51400, parcelasTexto: "130x R$ 650,00" },
            { administradora: "Embracon", tipo: "imovel", valor: 93936, parcela: 524, entrada: 39100, parcelasTexto: "231x R$ 524,00" },
            { administradora: "HS", tipo: "imovel", valor: 95006, parcela: 1160, entrada: 40600, parcelasTexto: "81x R$ 1.160,00" },
            { administradora: "Porto Seguro", tipo: "imovel", valor: 95244, parcela: 616, entrada: 60916, parcelasTexto: "76x R$ 616,00" },
            { administradora: "MyCon", tipo: "imovel", valor: 95413, parcela: 361, entrada: 59400, parcelasTexto: "162x R$ 361,10" },
            { administradora: "HS", tipo: "imovel", valor: 99897, parcela: 1486, entrada: 41500, parcelasTexto: "62x R$ 1.486,00" },
            { administradora: "Bradesco", tipo: "imovel", valor: 100000, parcela: 727, entrada: 46500, parcelasTexto: "177x R$ 727,00" }
        ];

        // --- ELEMENTOS DOS FILTROS ---
        const filtroTipo = document.getElementById('filtro-tipo-page');
        const filtroValor = document.getElementById('filtro-valor-page');
        const valorSelecionado = document.getElementById('valor-selecionado');
        const filtroParcela = document.getElementById('filtro-parcela-page');
        const parcelaSelecionada = document.getElementById('parcela-selecionada');
        const filtroOrdenar = document.getElementById('filtro-ordenar');
        const mensagemNenhumaCarta = document.getElementById('nenhuma-carta-page');
        const totalCartasEl = document.getElementById('total-cartas');
        const melhorEntradaEl = document.getElementById('melhor-entrada');
        const maiorCreditoEl = document.getElementById('maior-credito');

        function formatarMoeda(valor) {
            if (isNaN(valor)) return 'R$ 0,00';
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
        }

        function calcularNovaEntrada(entradaOriginal) {
            const margemPercentual = entradaOriginal * 0.15;
            const margemMinima = 5000;
            const margemFinal = Math.max(margemPercentual, margemMinima);
            return Math.ceil((entradaOriginal + margemFinal) / 100) * 100;
        }

        function criarCardHTML(carta) {
            const iconClass = carta.tipo === 'imovel' ? 'fa-house' : (carta.tipo === 'veiculo' ? 'fa-car' : 'fa-briefcase');
            const novaEntrada = calcularNovaEntrada(carta.entrada);
            const numeroWhatsapp = "5599999999999"; // <-- COLOQUE SEU NÚMERO DE WHATSAPP AQUI
            const textoWhatsapp = `Olá! Tenho interesse na carta de crédito de ${formatarMoeda(carta.valor)} para ${carta.tipo} (Adm: ${carta.administradora}).`;
            const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(textoWhatsapp)}`;
            const tipoFormatado = carta.tipo.charAt(0).toUpperCase() + carta.tipo.slice(1);
            const descricaoCarta = `Carta ${tipoFormatado} de ${formatarMoeda(carta.valor)} administrada por ${carta.administradora}`;

            return `
                <article class="carta-card" role="listitem" aria-label="${descricaoCarta}">
                    <div class="carta-card-header">
                        <i class="fa-solid ${iconClass}"></i>
                        <h3>${tipoFormatado}</h3>
                    </div>
                    <div class="carta-card-body">
                        <p class="credito">Crédito: <strong>${formatarMoeda(carta.valor)}</strong></p>
                        <p>Entrada: <strong>${formatarMoeda(novaEntrada)}</strong></p>
                        <p>Parcelas: <strong>${carta.parcelasTexto}</strong></p>
                        <p class="administradora"><small>Adm: ${carta.administradora}</small></p>
                    </div>
                    <a href="${linkWhatsapp}" class="cta-button" target="_blank">Tenho Interesse</a>
                </article>
            `;
        }
        
        let cartasFiltradasAtuais = [];

        function aplicarFiltrosEOrdenar() {
            gridCartasPage.setAttribute('aria-busy', 'true');
            const tipo = filtroTipo.value;
            const valorMax = parseInt(filtroValor.value, 10);
            const parcelaMax = parseInt(filtroParcela.value, 10);

            let cartasFiltradas = cartasData.filter(carta => {
                const tipoMatch = (tipo === 'todos') || (carta.tipo === tipo);
                const valorMatch = carta.valor <= valorMax;
                const parcelaMatch = carta.parcela <= parcelaMax;
                return tipoMatch && valorMatch && parcelaMatch;
            });

            const ordem = filtroOrdenar.value;
            cartasFiltradas.sort((a, b) => {
                const entradaA = calcularNovaEntrada(a.entrada);
                const entradaB = calcularNovaEntrada(b.entrada);
                switch(ordem) {
                    case 'menor-credito': return a.valor - b.valor;
                    case 'menor-entrada': return entradaA - entradaB;
                    case 'maior-credito': default: return b.valor - a.valor;
                }
            });

            if (totalCartasEl) {
                totalCartasEl.textContent = cartasFiltradas.length > 0 ? `+${cartasFiltradas.length}` : '0';
            }

            if (melhorEntradaEl) {
                const entradasAtualizadas = cartasFiltradas.map(carta => calcularNovaEntrada(carta.entrada));
                const menorEntrada = entradasAtualizadas.length ? Math.min(...entradasAtualizadas) : 0;
                melhorEntradaEl.textContent = entradasAtualizadas.length ? formatarMoeda(menorEntrada) : 'R$ 0';
            }

            if (maiorCreditoEl) {
                const maiorCredito = cartasFiltradas.length ? Math.max(...cartasFiltradas.map(carta => carta.valor)) : 0;
                maiorCreditoEl.textContent = cartasFiltradas.length ? formatarMoeda(maiorCredito) : 'R$ 0';
            }

            cartasFiltradasAtuais = cartasFiltradas;

            if (cartasFiltradas.length > 0) {
                gridCartasPage.innerHTML = cartasFiltradas.map(criarCardHTML).join('');
                mensagemNenhumaCarta?.classList.add('hidden');
                mensagemNenhumaCarta?.setAttribute('aria-hidden', 'true');
            } else {
                gridCartasPage.innerHTML = '';
                mensagemNenhumaCarta?.classList.remove('hidden');
                mensagemNenhumaCarta?.setAttribute('aria-hidden', 'false');
            }

            gridCartasPage.setAttribute('aria-busy', 'false');
        }

        filtroValor.addEventListener('input', () => {
            valorSelecionado.textContent = `Até ${formatarMoeda(filtroValor.value)}`;
            aplicarFiltrosEOrdenar();
        });

        filtroParcela.addEventListener('input', () => {
            parcelaSelecionada.textContent = `Até ${formatarMoeda(filtroParcela.value)}`;
            aplicarFiltrosEOrdenar();
        });

        [filtroTipo, filtroOrdenar].forEach(filtro => {
            filtro.addEventListener('change', aplicarFiltrosEOrdenar);
        });

        const btnDownload = document.getElementById('btn-download-pdf');
        if (btnDownload) {
            btnDownload.addEventListener('click', () => {
                if (!window.jspdf || !window.jspdf.jsPDF) {
                    alert('Não foi possível gerar o PDF neste navegador.');
                    return;
                }

                if (!cartasFiltradasAtuais.length) {
                    alert('Ajuste os filtros para exibir cartas antes de gerar o PDF.');
                    return;
                }

                const doc = new window.jspdf.jsPDF({ unit: 'pt', format: 'a4' });
                const margemX = 40;
                let cursorY = 80;

                doc.setFont('helvetica', 'bold');
                doc.setFontSize(18);
                doc.text('Cartas de Crédito Disponíveis', margemX, cursorY);

                doc.setFont('helvetica', 'normal');
                doc.setFontSize(11.5);
                cursorY += 20;

                cartasFiltradasAtuais.forEach((carta, index) => {
                    if (cursorY > 760) {
                        doc.addPage();
                        cursorY = 60;
                    }

                    const tipoFormatado = carta.tipo.charAt(0).toUpperCase() + carta.tipo.slice(1);
                    doc.setFont('helvetica', 'bold');
                    doc.text(`${index + 1}. ${tipoFormatado} • ${carta.administradora}`, margemX, cursorY);
                    cursorY += 16;

                    doc.setFont('helvetica', 'normal');
                    doc.text(`Crédito: ${formatarMoeda(carta.valor)}  |  Entrada sugerida: ${formatarMoeda(calcularNovaEntrada(carta.entrada))}`, margemX, cursorY);
                    cursorY += 14;

                    doc.text(`Parcelas: ${carta.parcelasTexto}`, margemX, cursorY);
                    cursorY += 22;
                });

                doc.save('cartas-disponiveis.pdf');
            });
        }

        // --- CHAMADA INICIAL PARA POPULAR A PÁGINA ---
        aplicarFiltrosEOrdenar();
    }
});
