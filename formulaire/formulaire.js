function affichePassword(){
    // Je vais sélectionner l'élément sur lequel je dois intervenir
    let champs = document.getElementById('motdepasse1');
    // je récup le type courant
    let type = champs.getAttribute('type');

    if(type == 'password') {
        // si c'est password je passe en texte pr afficher le mdp
        champs.setAttribute('type,text');
    } else {
        //Sinn je pass en password pour le cacher
        champs.setAttribute('type','password');
    }
}