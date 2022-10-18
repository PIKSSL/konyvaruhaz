import KonyvekView from "../View/KonyvekView.js";
import KonyvekPublicView from "../View/KonyvekPublicView.js";
import KonyvModel from "../Model/KonyvModel.js";



class KonyvController {
    constructor() {
        const konyvmodel = new KonyvModel();
        $("#admin").on("click",()=>{
            konyvmodel.adatBe("../adat.json", this.konyvAdatok);

        });
        $("#public").on("click",()=>{
            konyvmodel.adatBe("../adat.json", this.konyvPublicAdatok);

        });

        
        $(window).on("modosit",(event)=>{
            konyvmodel.adatModosit(event.detail);
        });
        $(window).on("torol",(event)=>{
            konyvmodel.adatTorol(event.detail);
        })
        $(window).on("kosarba",(event)=>{
            konyvmodel.kosarba(event.detail);
        })



    }

    konyvAdatok(tomb) {
        const szuloElem=$('main');
        new KonyvekView(tomb, szuloElem);
    }

    konyvPublicAdatok(tomb){
        const szuloElem=$('article');
        new KonyvekPublicView(tomb, szuloElem);
    }
}

export default KonyvController;