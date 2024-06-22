/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Licor de leite",
    authors: "Rayssa Machado, Marcos Paulo, Mariana Fragoso e Thais",
    conferences: "Preparação realizada na aula de Nutrição e Higiene dos Alimento orientada pela professora Carla Keiko",
    researchYr: 2023,
    citebox: "popup1",
    image: "images/Licor.jpeg",
    citation: {
      vancouver:"<h6>Modo de preparo</h6><li>Misture todos os ingredientes menos a cachaça.</li> <li>Leve ao fogo, mexendo até iniciar a fervura.</li><li>Coloque dentro da panela um pires pequeno de porcelana ou de refratário, para que o leite não derrame.</li><li>Cozinhe até dar o ponto cremoso, espere esfriar junte a cachaça, coe e guarde em garrafas esterilizadas.</li>",
         },
      
    abstract: "<h6>Ingredientes</h6><li>Leite 2 IL</li> <li>Açúcar 400 g</li><li>Sal 1 colher (café) de sal 'dissolvido em água'</li><li>Bicarbonato de sódio 1 colher (café) de sal 'dissolvido em água'</li><li>Canela em pau Qb</li> <li>Cravo Qb</li> <li>Noz moscada Qb</li><li>Erva doce Qb </li><li>Gengibre fresco Qb</li><li>Cachaça 400 ml (pode fazer mais forte ou mais fraco na cachaça) </li>",   
 
      
    absbox: "absPopup1",
  },

  {
    title: "Caldeirada",
    authors: "Rayssa Machado, Nayrim Pinheiro, Stephanie Lemes, Murilo Yuki ",
    conferences: "Preparação realizada na aula de Produções Gastronômicas orientada pelos professores Luigi Rea e Danielle Massa ",
    researchYr: 2024,
    citebox: "popup2",
    image: "images/caldeirada.jpg",
    citation: {
      vancouver:
        "<h6>Modo de preparo</h6><li>Corte o peixe em pedaços médios e tempere com sal e pimenta Corte o tomate, a cebola, o alho e o pimentão em rodelas.</li><li>Descasque as batatas, corte em rodelas grossas e branqueie.</li><li>Refogue a cebola o tomate, o alho e o pimentão, acrescente o cheiro verde, por cima disponha o peixe, cuidadosamente.</li><li>Acrescente a água e deixe cozinhar por cerca de 20 minutos. Acrescente a batata, cozinhe por mais 5 minutos e por fim os ovos (cozidos e cortados ao meio)</li><li>OBs. Servir com arroz branco</li>",  
    },
    abstract:
      "<h6>Ingredientes</h6><li>Filhote (ou outro peixe em filė) 500g</li><li>Ovo (cozido) 4 Unidades </li><li>Cheiro verde 1 Maço</li><li>Pimenta de cheiro 2 Unidade</li><li>Tomate 2 Unidade</li><li>Pimentão verde 1 Unidade</li><li>Óleo 50ml</li><li>Alho 2 Dentes</li><li>Cebola 1 Unidade</li><li>Batata 300g</li><li>Sal Quanto Baste</li><li>Pimenta Quanto Baste</li><li>Água 200 ml</li>",
    absbox: "absPopup2",
  },

  {
    title: "Muffin de canela com cobertura de chocolate",
    authors: "Rayssa Machado, Mariana Fragoso, Marcos Paulo e Thais ",
    conferences: "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2023,
    citebox: "popup3",
    image: "images/muffin.jpg",
    citation: {
      vancouver: " <h6>Modo de preparo</h6><li>Bater as claras em neve, quando estiverem bem espumosas, juntar 1/3 do açúcar, bater ate ficar bem brilhante.</li><li>Retirar da batedeira e reservar.</li><li>Na batedeira juntar a manteiga e o restante do açúcar, quando tiver um creme homogêneo, juntar as gemas, bater até ter um creme homogêneo.</li><li>Retirar da batedeira, juntar a farinha peneirada com o fermento, o óleo e o leite.</li><li>Misturar bem.</li><li>Juntar as claras em neve, misturar delicadamente até incorporar, com cuidado para não perder a aeração.</li><li>Assar em forma untada em forno aquecido a 160°C até ficar dourado.</li><li>Para fazer bolo de laranja, substituir o leite por suco de laranja e acrescentar raspas de laranja a massa.</li>",
    },
    abstract: " <h6>Ingredientes</h6><li>Açúcar 160g</li><li>Farinha de trigo 155g</li><li>Fermento químico 7g</li><li>Manteiga sem sal 100g</li><li>Leite 100g</li><li>Ovo 110g</li><li>Óleo 40g</li>",
    absbox: "absPopup3",
  },

  {
    title: "Massa Génoise com cobertura e recheio de coco com abacaxi",
    authors: "Rayssa Machado, Marcos Paulo, Mariana Fragoso e Thais",
    conferences:
      "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2023,
    citebox: "popup4",
    image: "images/bolo.jpg",
    citation: {
      vancouver:
        "<h6>Modo de preparo</h6><li>Bater os ovos com o açúcar na batedeira até obter um creme fofo e claro. Retirar a mistura da batedeira, com auxílio de um fouet, juntar os secos peneirados, delicadamente, misturando de baixo pra cima. Por último acrescentar a gordura derretida misturar.</li><li>Assar em assadeira untada e polvilhada com farinha de trigo, ou papel manteiga em forno a 160°C</li>",  },
    abstract:
      "<h6>Ingredientes</h6><li>Açúcar 190g</li><li>Clara 210g</li><li>Farinha de trigo 190g</li><li>Gema 120g</li><li>Manteiga 40g</li>",
    absbox: "absPopup4",
  },

  {
    title: "Frango com Quiabo",
    authors: "Rayssa Machado, Nayrim Pinheiro, Stephanie Lemes, Murilo Yuki",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2024,
    citebox: "popup5",
    image: "images/frango.jpg",
    citation: {
      vancouver:
        "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 5",
    absbox: "absPopup5",
  },

  {
    title: "Rabada com agrião",
    authors: "Rayssa Machado, Nayrim Pinheiro, Stephanie Lemes, Murilo Yuki",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2024,
    citebox: "popup6",
    image: "images/rabada.jpg",
    citation: {
      vancouver:
        "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 6",
    absbox: "absPopup6",
  },

  {
    title:
      "Carne de sol com farofa de dendê",
    authors: "Rayssa Machado, Nayrim Pinheiro, Stephanie Lemes, Murilo Yuki",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2024,
    citebox: "popup7",
    image: "images/carneseca.jpg",
    citation: {
      vancouver:
        "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 7",
    absbox: "absPopup7",
  },
  {
    title:
      "Carpaccio de vegetais",
    authors:
      "Rayssa Machado, Nayrim Pinheiro, Stephanie Lemes, Murilo Yuki e Mariana Fragoso",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2024,
    citebox: "popup8",
    image: "images/salada.jpg",
    citation: {
      vancouver:
        "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 8",
    absbox: "absPopup8",
  },
{
    title:
      "Pudim de Chia",
    authors:
      "Rayssa Machado, Nayrim Pinheiro, Stephanie Lemes, Murilo Yuki e Mariana Fragoso",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2024,    citebox: "popup8",
    image: "images/pudim.jpg",
    citation: {
      vancouver:
        "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 8",
    absbox: "absPopup8",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
