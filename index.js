const SEARCH_URL = 'https://www.google.fr/search?q='
const START_INDEX = 0; 
const MAX_TABS = 10; 
const KEYWORDS = 'lead dev'

const FIRST_NAME_FIELD = 'Prenom';
const LAST_NAME_FIELD = 'Nom';
const JOB_FIELD = 'Profil';

function handleFileSelect(evt) {
    const files = evt.target.files; 
    for (let i = 0, f ; f = files[i] ; i++) {
        const reader = new FileReader();
        reader.onload = readFileAndOpenTabs(f);
        reader.readAsText(f);
    }
}

function readFileAndOpenTabs () {
    return (event) => {
        const prospects = $.csv.toObjects(event.target.result).slice(START_INDEX, START_INDEX + MAX_TABS);
        for (prospect of prospects) {
            openTab(prospect);
        }
    }
}

function openTab(prospect) {
    window.open(SEARCH_URL + prospect[FIRST_NAME_FIELD] + '+' + prospect[LAST_NAME_FIELD] + '+' + prospect[JOB_FIELD].replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('+'), '_blank');
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);