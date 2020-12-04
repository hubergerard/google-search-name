const keywords = "lead dev"
const searchUrl = 'https://www.google.fr/search?q='
const startIndex = 0; // (monter de 20 en 20)

function handleFileSelect(evt) {
    const files = evt.target.files; 
    for (let i = startIndex + 20, f = files[i] ; i < 1 ; i--) {

        const reader = new FileReader();
        reader.onload = (function (file) {
            return function (e) {
                const prospects = $.csv.toObjects(e.target.result);
                for (prospect of prospects) {
                    window.open(searchUrl + prospect.Prenom + '+' + prospect.Nom + '+' + prospect.Profil.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('+'), '_blank');
                }
            };
        })(f);
        reader.readAsText(f);
    }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);