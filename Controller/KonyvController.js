import KonyvekView from "../View/KonyvekView.js";
import KonyvekPublicView from "../View/KonyvekPublicView.js";
import KonyvModel from "../Model/KonyvModel.js";



class KonyvController {
    #adatok = [];
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
            new KonyvekView(konyvmodel.getKonyvek(),$('article'));  
            
        })




    }

    konyvAdatok(tomb) {

        const szuloElem=$('article');
        new KonyvekView(tomb, szuloElem);
    }

    konyvPublicAdatok(tomb){

        const szuloElem=$('article');
        new KonyvekPublicView(tomb, szuloElem);
    }
}

export default KonyvController;