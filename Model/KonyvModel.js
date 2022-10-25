class KonyvModel {
    #konyvekTomb = [];
    #konyvekTombB = [];
    constructor() {

    }

    adatModosit(data) {
        
    }
    adatTorol(i) {
        this.index=0;
        for (const item of this.#konyvekTomb) {
            
            if(parseInt(i) != parseInt(item.id)){
                this.#konyvekTombB.push(item);
            }
            
        }
        this.#konyvekTomb = this.#konyvekTombB;
        this.#konyvekTombB=[];
        
    }

    getKonyvek(){
        return this.#konyvekTomb;
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                
                this.#konyvekTomb = data.konyv;
                
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default KonyvModel;