const keywords = "lead dev"
const searchUrl = 'https://www.google.fr/search?q='
const startIndex = 0; 
const maxTabs = 5; 

function handleFileSelect(evt) {
    const files = evt.target.files; 
    for (let i = 0, f ; f = files[i] ; i++) {
        const reader = new FileReader();
        reader.onload = (function (file) {
            return function (e) {
                const prospects = $.csv.toObjects(e.target.result).slice(startIndex, startIndex + maxTabs);
                for (prospect of prospects) {
                    window.open(searchUrl + prospect.Prenom + '+' + prospect.Nom + '+' + prospect.Profil.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('+'), '_blank');
                }
            };
        })(f);
        reader.readAsText(f);
    }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);