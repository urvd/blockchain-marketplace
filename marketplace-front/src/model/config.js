
const MenuTitle = {
    DEFAULT:"Identification",
    HOME:"Voir des biens immobiliers",
    ACHATS:"Gerer ses achats",
    VENTES:"Gerer ses ventes"
};

// interface BienImmo {
//     nom: string;
//     prix: number;
//     adresse: string;
//     detail: string;
//     vendeur: string;
//     images: Array;
//     achat_status: 'Disponible'|'Indisponible'|'Encours'|'Acheter';
//     Acheteur: string;
//     archiver: boolean;
// }

class BienImmoModel {
    constructor(){
        this.nom = null;
        this.prix = 0;
        this.adresse = null;
        this.detail = null;
        this.vendeur = null;
        this.images = null;
        this.achat_status = 'Disponible'|'Indisponible'|'Encours'|'Acheter';
        this.acheteur = null;
        this.archiver = false;
    }
	
}

export default MenuTitle;