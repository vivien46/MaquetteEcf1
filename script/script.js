const imgPrincipal = document.querySelector('#principal img');
const vignettes = document.querySelectorAll('#vignettes img');

for( let i = 0; i < vignettes.length; i++){
    vignettes[i].addEventListener('click',function(){

        let urlImage = this.getAttribute('src');
        let altImage = this.getAttribute('alt');
        //console.log(urlImage);
        imgPrincipal.setAttribute('src',urlImage);
        imgPrincipal.setAttribute('alt',altImage);

    });
}

// let patternMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{5,15}$/;
let patternMail = /^(?=.*[@]{5,15})$/;
let mail = document.querySelector('#mail');
let checkMail = document.querySelector('#checkMail');
let mailOK = false;

mail.addEventListener('input',function(){
    
checkMail.innerHTML ="";
    if(this.value !== '@'){
    
    if (!patternMail.test(this.value)){
        checkMail.innerHTML = "Il manque le '@' ";
        checkMail.classList.add('error');
        mailOK = false;
    }
    else{
        checkMail.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkMail.classList.remove('error');
        checkMail.classList.add('ok');
        mdpOK = true;
    }
}
else{
    mailOK = false;
}
    validControles();
});