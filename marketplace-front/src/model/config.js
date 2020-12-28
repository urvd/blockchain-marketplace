
export const MenuTitle = {
    DEFAULT:"Identification",
    HOME:"Voir des biens immobiliers",
    ACHATS:"Gerer ses achats",
    VENTES:"Gerer ses ventes"
};

export const MenuFunc = {
    DEFAULT:"Identification",
    HOME:"home",
    ACHATS:"achats",
    ACHATS_Panier:"panier",
    ACHATS_Archive:"histo",
    VENTES:"ventes"
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

export function DatasBiensImmoMock(){
    return [
        {
            nom: "Bord de plage",
            prix: 12,
            adresse: '126, Avenu Promenade des anglais, 71020 Nice',
            Pays: 'France',
            detail: 'Maison de bord de blabla Dum haec in oriente aguntur, Arelate hiemem agens Constantius \
            post theatralis ludos atque circenses ambitioso editos apparatu diem sextum idus Octobres, qui imperii \
            <eius annum tricensimum terminabat, insolentiae pondera gravius librans, siquid dubium deferebatur \
            aut falsum, pro liquido accipiens et conperto, inter alia excarnificatum Gerontium Magnentianae \
            comitem partis exulari maerore multavit.',
            vendeur: 'amon',
            images: null,
            achat_status: 'Disponible',
            acheteur: null,
            archiver: false
        },
        {
            nom: "Antanapolis",
            prix: 15,
            adresse: null,
            Pays: 'Grêce',
            detail: 'Se situe sur une montagne au dessus d\'ancienne ruine de l\'anfithéatre grec. Du balcon \
            on a une vu sur toute la ville, et des vestige du passé.',
            vendeur: 'iscouk',
            images: null,
            achat_status: 'Encours',
            acheteur: "chupa",
            archiver: false
        },
        {
            nom: "East-Hamptons",
            prix: 21,
            adresse: '5627 exotic Hill Hamptons, NY 11706',
            Pays: 'Etat-Unis',
            detail: null,
            vendeur: 'chupa',
            images: null,
            achat_status: 'Disponible',
            acheteur: null,
            archiver: false
        },
        {
            nom: "St-Martin",
            prix: 21,
            adresse: '45 rue de la villa dansehall, St-Martin 32854',
            Pays: 'St-Martin',
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat \
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            vendeur: 'amon',
            images: null,
            achat_status: 'Acheter',
            acheteur: "chupa",
            archiver: true
        },
    ];
}

export default DatasBiensImmoMock;