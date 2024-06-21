/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Licor de leite",
    authors: "Rayssa Machado, Marcos Paulo, Mariana Fragoso e Thais",
    conferences: "Preparação realizada na aula de Nutrição e Higiene dos Alimento orientada pela professora Carla Keiko",
    researchYr: 07 - 10 - 2023,
    citebox: "popup1",
    image: "images/Licor.jpeg",
    citation: {
      vancouver:
        "Leite 2 It/nAçúcar 400 g/nSal 1 colher (café) de sal 'dissolvido em água'/nBicarbonato de sódio 1 colher (café) de sal 'dissolvido em água'Canela em pau Qb/nCravo Qb/nNoz moscada Qb/nErva doce Qb/nGengibre fresco Qb/nCachaça 400 ml (pode fazer mais forte ou mais fraco na cachaça) ",   
    },
      abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "Caldeirada",
    authors: "Rayssa Machado, Nayrim Pinheiro, Stephanie Lemes, Murilo Yuki ",
    conferences: "Preparação realizada na aula de Produções Gastronômicas orientada pelos professores Luigi Rea e Danielle Massa ",
    researchYr: 2020,
    citebox: "popup2",
    image: "images/caldeirada.jpg",
    citation: {
      vancouver:
        "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
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
      vancouver: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract: "This is currently left empty and this can be considered as a dummy data 3",
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
        "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 4",
    absbox: "absPopup4",
  },

  {
    title: "Dual Super-Resolution Learning for Semantic Segmentation",
    authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup5",
    image: "assets/images/research-page/semanticSegmentation.png",
    citation: {
      vancouver:
        "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 5",
    absbox: "absPopup5",
  },

  {
    title: "Deep Unfolding Network for Image Super-Resolution",
    authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup6",
    image: "assets/images/research-page/deepNetwork.png",
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
      "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
    authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup7",
    image: "assets/images/research-page/imageDecomposition.png",
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
      "Forward and Backward Information Retention for Accurate Binary Neural Networks",
    authors:
      "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup8",
    image: "assets/images/research-page/neuralNetworks.jpg",
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
