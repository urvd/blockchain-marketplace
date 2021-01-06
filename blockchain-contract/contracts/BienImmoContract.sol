pragma solidity >=0.4.0 <=0.8.0;
pragma experimental ABIEncoderV2;
import './UsersContract.sol';
import './outside/token.sol';
import './outside/utils.sol';
contract BienImmoContract is UsersContract {

    struct Immobien {
        uint id;
        string nom;
        uint prix;
        string adress;
        string detail;
        string vendeur;
        string achat_status;
        string acheteur;
        bool archiver;
        string image1;
        string image2;
        string image3;
        string image4;
        string image5;
    }
    
    uint nbImmobiens;
    Immobien[] private bienImmobiliers;
    mapping(address => uint) userImmobiens;

    // dataTemporaire: Mock des biens immo

    constructor() UsersContract() public {
        nbImmobiens = 0;
    }

    //interne
    string private STATUS_INDISPO = 'Indisponible';
    string private STATUS_DISPO = 'Disponible';
    string private STATUS_ENCOURS = 'Encours';
    string private STATUS_ACHETER = 'Acheter';
    
    // Accesseur:  ajout
    event ImmoBaddEvent(uint _id, string _user, string _nom, uint _prix, string _adress);
    function addBienImmo(string memory _nom, uint _prix, string memory _immo_address, 
    string memory _detail) public restricted {
        bienImmobiliers.push(Immobien(nbImmobiens, _nom, _prix, _immo_address, _detail,
         usersMap[owner], STATUS_DISPO, '', false, '','','','',''));    
        nbImmobiens = nbImmobiens + 1;

        emit ImmoBaddEvent(nbImmobiens - 1, usersMap[owner], _nom, _prix, _immo_address);
    }
    // Accesseur: lecture
    function ImmoBListread()  public view restricted returns (Immobien[] memory) {
        return bienImmobiliers;
    }
    // Accesseur: lecture des bien appartenant au proprietaire
    // function ImmoBListread(string memory _vendeur)  public view restricted returns (Immobien[] memory) {
    //     Immobien[] storage listReduitparVendeur;
    //      for (uint i = 0; i < bienImmobiliers.length-1; i++) {
    //          if( Utils.equals(bienImmobiliers[i].vendeur, _vendeur)) {
    //              listReduitparVendeur.push(bienImmobiliers[i]);
    //          }
    //      }

    //     return listReduitparVendeur;
    // }

    // modificateur
    // modificateur: modeifier le champs d'un bien
    function ImmoBChangeNom(uint _id, string memory _new_name) public restricted {
        require(Utils.equals(bienImmobiliers[_id].nom, _new_name));
        bienImmobiliers[_id].nom = _new_name;
    }
    function ImmoBChangeDetail(uint _id, string memory _new_detail) public restricted {
        require(Utils.equals(bienImmobiliers[_id].detail, _new_detail));
        bienImmobiliers[_id].detail = _new_detail;
    }
    function ImmoBChangePrix(uint _id, uint _new_prix) public restricted {
        require(bienImmobiliers[_id].prix != _new_prix);
        bienImmobiliers[_id].prix = _new_prix;
    }
    function ImmoBChangeAdress(uint _id, string memory _new_adress) public restricted {
        require(Utils.equals(bienImmobiliers[_id].adress, _new_adress));
        bienImmobiliers[_id].adress = _new_adress;
    }
    function ImmoBChangeImage(uint _id, uint _imageNb, string memory _new_image) public restricted {
        if(_imageNb == 1){
            bienImmobiliers[_id].image1 = _new_image;
        }
        if(_imageNb == 2){
            bienImmobiliers[_id].image2 = _new_image;
        }
        if(_imageNb == 3){
            bienImmobiliers[_id].image3 = _new_image;
        }
        if(_imageNb == 4){
            bienImmobiliers[_id].image4 = _new_image;
        }
        if(_imageNb == 5){
            bienImmobiliers[_id].image5 = _new_image;
        }
    }
    // modificateur: supression d'un bien
    function ImmoBDelete(uint _id) public restricted {
        require(_id >= bienImmobiliers.length);

        for (uint i = _id; i < bienImmobiliers.length-1; i++){
            bienImmobiliers[i] = bienImmobiliers[i+1];
            bienImmobiliers[i].id--;
        }
        delete bienImmobiliers[bienImmobiliers.length-1];
        //bienImmobiliers.length--;
        nbImmobiens--;
    }

    // modificateur: desactivation et activation d'un bien
    function ImmoBSetIndispo(uint _id) public restricted {
        bienImmobiliers[_id].achat_status = STATUS_INDISPO;
    }

    function ImmoBSetDispo(uint _id) public restricted {
        bienImmobiliers[_id].achat_status = STATUS_DISPO;
    }

    // modificateur: mettre dans panier
    function ImmoBSetEnCours(uint _id, string memory _acheteur) public restricted {
        bienImmobiliers[_id].achat_status = STATUS_ENCOURS;
        bienImmobiliers[_id].acheteur = _acheteur;
    }

    // modificateur:enlever du panier
      // => this.ImmoBSetDispo({id})

    // modificateur: acheter et transaction d'achat
    function ImmoBSetAcheter(uint _id) public restricted {
        require(Utils.equals(usersMap[owner], bienImmobiliers[_id].acheteur));
        // transaction d'achat
        bienImmobiliers[_id].achat_status = STATUS_ACHETER;
    }

    // modificateur: archiver
    function ImmoBPutIntoHistorique(uint _id) public restricted {
        require(Utils.equals(bienImmobiliers[_id].achat_status, STATUS_ACHETER));
        bienImmobiliers[_id].archiver = true;
    }

}