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
    struct StoreImmob {
        Immobien[] immobs; 
        uint count;
    }
    StoreImmob immobStored;
    uint IMMO_LENGTH = 10;
    
    Immobien last_add_immob;
    mapping(address => uint) ownerImmob;
    mapping(uint => address) immobToOwner;

    constructor() public {
        immobStored.count = 0;
    }


    //interne
    string private STATUS_INDISPO = 'Indisponible';
    string private STATUS_DISPO = 'Disponible';
    string private STATUS_ENCOURS = 'Encours';
    string private STATUS_ACHETER = 'Acheter';
    
    // Accesseur:  ajout
    event ImmoBaddEvent(uint _id, string _user, string _nom, uint _prix, string _adress);

    function addBienImmo(uint _ownerId, string memory _nom, uint _prix, string memory _immo_address, 
    string memory _detail) public onlyOwnerOf(_ownerId) {
        uint taille = immobStored.immobs.length;
        immobStored.immobs.push( Immobien(_ownerId, _nom, _prix, _immo_address, _detail, idName[_ownerId], STATUS_DISPO, '', false, '','','','',''));
        immobStored.count++;
        // immobStored = StoreImmob({
        //     immobs: _createImmob(_ownerId, _nom, _prix, _immo_address, _detail),
        //     count: taille + 1 
        // });
        emit ImmoBaddEvent(_ownerId, idName[_ownerId], _nom, _prix, _immo_address);
    }
    // function _createImmob(uint _ownerId, string memory _nom, uint _prix, string memory _immo_address, string memory _detail) 
    //     private returns(Immobien storage) {
    //     return Immobien(_ownerId, _nom, _prix, _immo_address, _detail, idName[_ownerId], STATUS_DISPO, '', false, '','','','','');
    // }
    // Accesseur: lecture
    function ImmoBListread()  public view returns (Immobien[] memory) {
        return immobStored.immobs;
    }
    // Accesseur: lecture des bien appartenant au proprietaire
    function search(uint _indexP) private returns(Immobien memory) {
        return immobStored.immobs[_indexP];
    }

    // modificateur
    // modificateur: modeifier le champs d'un bien
    function ImmoBChangeNom(uint _id, string memory _actual_name, string memory _new_name) public onlyOwnerOf(_id) {
        for (uint i = 0; i < immobStored.count-1; i++) {
            Immobien storage immo = immobStored.immobs[i];
            if(Utils.equals(immo.nom, _actual_name)) {
                immo.nom = _new_name;
                immobStored.immobs[i] = immo;
                break;
            }
        }
    }
    function ImmoBChangeDetail(uint _id, string memory _actual_detail, string memory _new_detail) public onlyOwnerOf(_id) {
        for (uint i = 0; i < immobStored.count-1; i++) {
            Immobien storage immo = immobStored.immobs[i];
            if(Utils.equals(immo.detail, _actual_detail)) {
                immo.detail = _new_detail;
                immobStored.immobs[i] = immo;
                break;
            }
        }
    }
    function ImmoBChangePrix(uint _id,  uint _actual_prix, uint _new_prix) public onlyOwnerOf(_id) {
        for (uint i = 0; i <  immobStored.count-1; i++) {
             Immobien storage immo = immobStored.immobs[i];
            if(immo.prix == _actual_prix) {
                immo.prix = _new_prix;
                immobStored.immobs[i] = immo;
                break;
            }
        }
    }
    function ImmoBChangeAdress(uint _id, string memory _actual_adress, string memory _new_adress) public onlyOwnerOf(_id) {
        for (uint i = 0; i <  immobStored.count-1; i++) {
             Immobien storage immo = immobStored.immobs[i];
            if(Utils.equals(immo.adress, _actual_adress)) {
                immo.adress = _new_adress;
                immobStored.immobs[i] = immo;
                break;
            }
        }
    }
    function ImmoBChangeImage(uint _id, uint _imageNb,  string memory _actual_image, string memory _new_image) public onlyOwnerOf(_id) {
        
        for (uint i = 0; i < immobStored.count-1; i++) {
            Immobien storage immo = immobStored.immobs[i];
            if(_imageNb == 1 && Utils.equals(immo.image1, _actual_image)){
                immo.image1 = _new_image;
                break;
            }
            if(_imageNb == 2 && Utils.equals(immo.image2, _actual_image)){
                immo.image2 = _new_image;
                break;
            }
            if(_imageNb == 3 && Utils.equals(immo.image3, _actual_image)){
                immo.image3 = _new_image;
                break;
            }
            if(_imageNb == 4 && Utils.equals(immo.image4, _actual_image)){
                immo.image4 = _new_image;
                break;
            }
            if(_imageNb == 5 && Utils.equals(immo.image5, _actual_image)){
                immo.image5 = _new_image;
                break;
            }
        }

    }
    // modificateur: supression d'un bien
    function ImmoBDelete(uint _id, uint _index) public onlyOwnerOf(_id) {

        bool turnover = false;
        for(uint i = 0; i < immobStored.count-1 ; i++){
            Immobien storage immo = immobStored.immobs[i];
            if(i == _index || turnover){
                immobStored.immobs[i] = immobStored.immobs[i + 1];
                turnover = true;
            }
        }
        delete immobStored.immobs[immobStored.immobs.length - 1];
        immobStored.count--;
        //immobStored[_id] = immo_copy;
    }
    // modificateur: desactivation et activation d'un bien
    function ImmoBSetIndispo(uint _id, uint _index) public onlyOwnerOf(_id) {
        Immobien storage immo = immobStored.immobs[_index];
        immo.achat_status = STATUS_INDISPO;
        immobStored.immobs[_index] = immo;
    }

    function ImmoBSetDispo(uint _id, uint _index) public onlyOwnerOf(_id) {
        Immobien storage immo = immobStored.immobs[_index];
        immo.achat_status = STATUS_DISPO;
        immobStored.immobs[_id] = immo;
    }

    // modificateur: mettre dans panier
    function ImmoBSetEnCours(uint _id, uint _index, string memory _acheteur) public onlyOwnerOf(_id) {
        Immobien storage immo = immobStored.immobs[_index];
        immo.achat_status = STATUS_ENCOURS;
        immo.acheteur = _acheteur;
        immobStored.immobs[_index] = immo;
    }

    // modificateur:enlever du panier
      // => this.ImmoBSetDispo({id})

    // modificateur: acheter et transaction d'achat
    function ImmoBSetAcheter(uint _id, uint _index) public onlyOwnerOf(_id) {
        // transaction d'achat
        Immobien storage immo =  immobStored.immobs[_index];
        immo.achat_status = STATUS_ACHETER;
        immobStored.immobs[_index] = immo;
    }

    // modificateur: archiver
    function ImmoBPutIntoHistorique(uint _id, uint _index) public onlyOwnerOf(_id) {
        Immobien storage immo =  immobStored.immobs[_index];
        immo.archiver = true;
        immobStored.immobs[_index] = immo;
    }

}