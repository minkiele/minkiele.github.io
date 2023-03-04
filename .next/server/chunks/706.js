"use strict";
exports.id = 706;
exports.ids = [706];
exports.modules = {

/***/ 7706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UT": () => (/* binding */ pronunciaNumero),
/* harmony export */   "sk": () => (/* binding */ pronunciaDataOra)
/* harmony export */ });
/* unused harmony exports pronunciaOra, pronunciaData */
/**
 * Pronuncia numeri da 0 a 9, con parametro per mettere l'accento sul 3
 * Se stiamo stampando un numero che finisce per 3 allora aggiungi l'accento
 * @param unità
 * @returns
 */ const pronunciaUnità = (unità)=>{
    switch(unità){
        case 1:
            return "uno";
        case 2:
            return "due";
        case 3:
            return "tre";
        case 4:
            return "quattro";
        case 5:
            return "cinque";
        case 6:
            return "sei";
        case 7:
            return "sette";
        case 8:
            return "otto";
        case 9:
            return "nove";
        default:
            return "";
    }
};
/**
 * Pronuncia le centinaia da 100 a 900
 * @param centinaia
 * @returns
 */ const pronunciaCentinaia = (centinaia)=>{
    switch(centinaia){
        case 0:
            return "";
        case 1:
            return "cento";
        default:
            return `${pronunciaUnità(centinaia)}cento`;
    }
};
/**
 * Dato che 1 e 8 cominciano per una vocale omettiamo l'ultima vocale della decina
 * @param vocale
 * @param unità
 * @returns
 */ const aggiungiUltimaVocale = (vocale, unità)=>unità === 1 || unità === 8 ? "" : vocale;
/**
 * Pronuncia i numeri da 1 a 99, con l'elisione dell'ultima vocale della decina se cozzano
 * @param decine
 * @param unità
 * @returns
 */ const pronunciaDecineEdUnità = (decine, unità)=>{
    switch(decine){
        // Numeri da 1 a 9
        case 0:
            return pronunciaUnità(unità);
        // I numeri da 10 a 19 sono dei casi unici
        case 1:
            switch(unità){
                case 0:
                    return "dieci";
                case 1:
                    return "undici";
                case 2:
                    return "dodici";
                case 3:
                    return "tredici";
                case 4:
                    return "quattordici";
                case 5:
                    return "quindici";
                case 6:
                    return "sedici";
                case 7:
                    return "diciassette";
                case 8:
                    return "diciotto";
                case 9:
                    return "diciannove";
                default:
                    return "";
            }
        // E questo è il modo standard di comporre i numeri da 20 a 99
        case 2:
            return `vent${aggiungiUltimaVocale("i", unità)}${pronunciaUnità(unità)}`;
        case 3:
            return `trent${aggiungiUltimaVocale("a", unità)}${pronunciaUnità(unità)}`;
        case 4:
            return `quarant${aggiungiUltimaVocale("a", unità)}${pronunciaUnità(unità)}`;
        case 5:
            return `cinquant${aggiungiUltimaVocale("a", unità)}${pronunciaUnità(unità)}`;
        case 6:
            return `sessant${aggiungiUltimaVocale("a", unità)}${pronunciaUnità(unità)}`;
        case 7:
            return `settant${aggiungiUltimaVocale("a", unità)}${pronunciaUnità(unità)}`;
        case 8:
            return `ottant${aggiungiUltimaVocale("a", unità)}${pronunciaUnità(unità)}`;
        case 9:
            return `novant${aggiungiUltimaVocale("a", unità)}${pronunciaUnità(unità)}`;
        // Typescript vuole il caso di default
        default:
            return "";
    }
};
/**
 * La pronuncia della potenza è ricorsiva, e ci serve un caso speciale se stiamo
 * maneggiando potenze di 10 da 1000 in su
 * @param potenzaDiMille
 * @param casoSpecialeUno
 * @returns
 */ const pronunciaPotenza = (potenzaDiMille, casoSpecialeUno = false)=>{
    switch(potenzaDiMille){
        case 0:
            return "";
        case 1:
            return casoSpecialeUno ? " mille" : "mila ";
        case 2:
            return casoSpecialeUno ? " un milione" : " milioni ";
        case 3:
            return casoSpecialeUno ? " un miliardo" : " miliardi ";
        default:
            {
                // E qui richiamo la pronuncia della potenza con una ricorsione di coda
                const parole = [
                    "",
                    pronunciaPotenza(potenzaDiMille - 3),
                    "miliardi",
                    ""
                ];
                // Se la potenza è superiore a 4 stiamo ragionando su
                // numeri sul milione o miliardo di miliardi e quindi
                // serve la preposizione "di" fra le parole
                if (potenzaDiMille > 4) {
                    parole.splice(2, 0, "di");
                }
                return parole.join(" ");
            }
    }
};
/**
 * Pronuncia numeri tra 1 e 999999999
 * @param sottogruppo
 * @param potenzaDi1000
 * @returns
 */ const pronunciaSottogruppo = (sottogruppo, potenzaDi1000)=>{
    const centinaia = parseInt(sottogruppo[0]);
    const decine = parseInt(sottogruppo[1]);
    const unità = parseInt(sottogruppo[2]);
    const parole = [];
    // Salta la pronuncia se tutto un sottogruppo è 0
    if (sottogruppo === "000") {
        return "";
    }
    // Se il numero è una potenza di 10 >= 1000
    // Allora è sufficiente pronunciare la potenza
    // per il caso speciale
    if (sottogruppo === "001" && potenzaDi1000 > 0) {
        parole.push(pronunciaPotenza(potenzaDi1000, true));
    } else {
        parole.push(pronunciaCentinaia(centinaia));
        // Pronuncia il 3 accentato solo se sono nel gruppo finale
        parole.push(pronunciaDecineEdUnità(decine, unità));
        parole.push(pronunciaPotenza(potenzaDi1000));
    }
    return parole.join("");
};
/**
 * In Italiano la pronuncia dei numeri è raggruppata a potenze di 10^9
 * (dopo 999999999 si ripete però esplicitando la potenza di 10 del gruppo alla fine)
 * @param gruppo
 * @param potenzaDi1000
 * @returns
 */ const pronunciaGruppo = (gruppo, potenzaDi1000)=>{
    // Se il gruppo completo è un 1 e non si tratta del primo allora è sufficiente
    // pronunciare la potenza di 10 con il caso particolare 1,
    // sapendo che per un gruppo di 3 è necessario triplicarla
    if (gruppo.length === 1 && gruppo[0] === "001" && potenzaDi1000 > 0) {
        return pronunciaPotenza(potenzaDi1000 * 3, true);
    } else {
        const parole = [];
        // Pronuncio ogni sottogruppo e li unisco in una parola separata da spazi
        parole.push(gruppo.map((sottogruppo, indice)=>pronunciaSottogruppo(sottogruppo, gruppo.length - indice - 1)).join(" "));
        // Se l'intero gruppo è fatto di zeri allora salta la pronuncia della potenza
        if (!gruppo.every((sottogruppo)=>sottogruppo === "000")) {
            // Altrimenti pronuncia la potenza,
            // sapendo che per un gruppo di 3 è necessario triplicarla
            parole.push(pronunciaPotenza(potenzaDi1000 * 3));
        }
        return parole.join("");
    }
};
/**
 * Ritorna una stringa di zeri
 * @param quanti
 * @returns
 */ const aggiungiZeri = (quanti)=>Array(quanti).fill(0).join("");
/**
 * Mettiamo insieme i pezzi
 * @param numero
 * @returns
 */ const pronunciaNumero = (numero)=>{
    // Converto il numero in stringa (se non lo era già prima)
    numero = numero.toString();
    // Verifico se c'è il meno
    const haMeno = numero[0] === "-";
    // Tolgo il segno dal numero
    const numeroSenzaSegno = numero.replace("-", "");
    // Se il numero è 0 allora cortocircuita e pronuncia zero (senza segno)
    if (numeroSenzaSegno === "0") {
        return "zero";
    }
    // Trovo di quanti sottogruppi è composto il numero
    const quantiSottogruppi = Math.ceil(numeroSenzaSegno.length / 9);
    // Capisco quandi zeri aggiungere al numero in modo da poterlo dividere in gruppi da 9 (e sottogruppi da 3)
    const quantiZeriMancano = quantiSottogruppi * 9 - numeroSenzaSegno.length;
    // Aggiungo gli zeri mancanti
    const numeroConZeri = `${aggiungiZeri(quantiZeriMancano)}${numeroSenzaSegno}`;
    // Divido il numero in sottogruppi di 3 cifre, ogni 3 sottogruppi verranno raggruppati in un gruppo
    const gruppi = numeroConZeri.match(/\d{3}/g)?.reduce((gruppi, sottogruppo, indice)=>{
        const indiceGruppo = Math.floor(indice / 3);
        // Creo il nuovo gruppo
        if (gruppi[indiceGruppo] == null) {
            gruppi[indiceGruppo] = [];
        }
        // La condizione al contrario è meglio: se sono nel primo gruppo e non ho ancora inserito sottogruppi
        // e il sottogruppo che sto osservando in questo momento è zero allora non lo aggiungo, altrimenti
        // vengono pronunciati sottogruppi che non servono prima dell'inizio del numero vero e proprio
        if (indiceGruppo > 0 || gruppi[indiceGruppo].length > 0 || sottogruppo !== "000") {
            gruppi[indiceGruppo].push(sottogruppo);
        }
        return gruppi;
    }, []);
    // Pronuncio ogni gruppo per avere il numero totale senza segno
    const parole = gruppi?.map((gruppo, indice, gruppi)=>pronunciaGruppo(gruppo, gruppi?.length - indice - 1)) ?? [];
    // Aggiungo il meno se ce l'ha
    if (haMeno) {
        parole.unshift("meno");
    }
    // Unisco tutto, rimuovo gli spazi in più
    const numeroInParole = parole.join(" ").trim();
    if (numeroSenzaSegno !== "3" && /3$/.test(numeroSenzaSegno)) {
        return numeroInParole.replace(/tre$/, "tr\xe9");
    }
    return numeroInParole;
};
const pronunciaOra = (data)=>{
    const ore = data.getHours();
    const minuti = data.getMinutes();
    const secondi = data.getSeconds();
    const parole = [];
    parole.push(ore === 0 || ore === 1 || ore === 12 ? "\xe8" : "sono le");
    switch(ore){
        case 0:
            parole.push("mezzanotte");
            break;
        case 1:
            parole.push("l'una");
            break;
        case 12:
            parole.push("mezzogiorno");
            break;
        default:
            parole.push(pronunciaNumero(ore));
            break;
    }
    if (minuti > 0 && secondi > 0) {
        parole.push(",");
    } else if (minuti > 0) {
        parole.push("e");
    }
    switch(minuti){
        case 0:
            break;
        case 1:
            parole.push("un minuto");
            break;
        default:
            parole.push(`${pronunciaNumero(minuti)} minuti`);
            break;
    }
    if (secondi > 0) {
        parole.push("e");
    }
    switch(secondi){
        case 0:
            break;
        case 1:
            parole.push("un secondo");
            break;
        default:
            parole.push(`${pronunciaNumero(secondi)} secondi`);
            break;
    }
    return parole.join(" ").replace(" ,", ",");
};
const pronunciaGiorno = (giorno)=>{
    switch(giorno){
        case 0:
            return "Domenica";
        case 1:
            return "Luned\xec";
        case 2:
            return "Marted\xec";
        case 3:
            return "Mercoled\xec";
        case 4:
            return "Gioved\xec";
        case 5:
            return "Venerd\xec";
        case 6:
            return "Sabato";
        default:
            return "";
    }
};
const pronunciaMese = (mese)=>{
    switch(mese){
        case 0:
            return "Gennaio";
        case 1:
            return "Febbraio";
        case 2:
            return "Marzo";
        case 3:
            return "Aprile";
        case 4:
            return "Maggio";
        case 5:
            return "Giugno";
        case 6:
            return "Luglio";
        case 7:
            return "Agosto";
        case 8:
            return "Settembre";
        case 9:
            return "Ottobre";
        case 10:
            return "Novembre";
        case 11:
            return "Dicembre";
        default:
            return "";
    }
};
const pronunciaData = (date)=>{
    const parole = [
        "oggi \xe8",
        pronunciaGiorno(date.getDay()),
        pronunciaNumero(date.getDate()),
        pronunciaMese(date.getMonth()),
        pronunciaNumero(date.getFullYear()).replace(/\s+/, "")
    ];
    return parole.join(" ");
};
const pronunciaDataOra = (date)=>{
    const parole = [
        pronunciaData(date),
        pronunciaOra(date)
    ];
    const oraCorrente = date.getHours();
    parole.splice(1, 0, `e${oraCorrente < 2 || oraCorrente === 12 ? "d" : ""}`);
    return parole.join(" ");
};


/***/ })

};
;