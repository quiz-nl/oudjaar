// Quiz vragen en antwoorden database
const quizData = {
    ronde1: {
        titel: "Terugblik op het oude jaar",
        vragen: [
            {
                vraag: "Welke voormalige Amerikaanse president won in 2024 opnieuw de presidentsverkiezingen?",
                opties: ["Joe Biden", "Donald Trump", "Ron DeSantis", "Nikki Haley"],
                antwoord: 1
            },
            {
                vraag: "Welke Nederlandse politicus trad in 2024 af na 14 jaar als premier te hebben gediend?",
                opties: ["Mark Rutte", "Sigrid Kaag", "Wopke Hoekstra", "Hugo de Jonge"],
                antwoord: 0
            },
            {
                vraag: "Welke Nederlandse artiest werd in mei 2024 gediskwalificeerd tijdens het Eurovisie Songfestival?",
                opties: ["Duncan Laurence", "S10", "Joost Klein", "Davina Michelle"],
                antwoord: 2
            },
            {
                vraag: "Welke film, uitgebracht in 2024, is het vervolg op de succesvolle sciencefictionfilm 'Dune'?",
                opties: ["Dune: Part Two", "Avatar 3", "Blade Runner 2049", "Star Wars: Episode X"],
                antwoord: 0
            },
            {
                vraag: "Welke Nederlandse atlete behaalde in 2024 goud op de Olympische Spelen?",
                opties: ["Sifan Hassan", "Dafne Schippers", "Femke Bol", "Lieke Klaver"],
                antwoord: 2
            }
        ],
        tijdslimiet: 15
    },
    ronde2: {
        titel: "Nostalgie en trivia",
        vragen: [
            {
                vraag: "Wat eten Nederlanders traditioneel tijdens Oud & Nieuw?",
                opties: ["Oliebollen", "Stamppot", "Erwtensoep", "Poffertjes"],
                antwoord: 0
            },
            {
                vraag: "Welke stad staat bekend om het grootste Oud & Nieuw vuurwerk ter wereld?",
                opties: ["New York", "Dubai", "Sydney", "Tokyo"],
                antwoord: 2
            },
            {
                vraag: "Wat is de Spaanse traditie om middernacht op Oudjaarsavond?",
                opties: [
                    "Het eten van 12 druiven bij elke klokslag",
                    "Het dragen van rode sokken",
                    "Het breken van borden",
                    "Het springen in zee"
                ],
                antwoord: 0
            },
            {
                vraag: "In welk land springen mensen van een stoel af om middernacht voor geluk?",
                opties: ["Zweden", "Noorwegen", "Finland", "Denemarken"],
                antwoord: 3
            },
            {
                vraag: "Welke kleur ondergoed dragen mensen in Italië tijdens Oud & Nieuw voor geluk?",
                opties: ["Wit", "Rood", "Goud", "Groen"],
                antwoord: 1
            }
        ],
        tijdslimiet: 15
    },
    ronde3: {
        titel: "Het nieuwe jaar voorspellen",
        vragen: [
            {
                vraag: "Welke technologie werd in 2024 uitgeroepen tot de grootste technologische doorbraak?",
                opties: ["Kunstmatige intelligentie", "Quantum computing", "Virtual Reality", "5G netwerken"],
                antwoord: 1
            },
            {
                vraag: "Welke app werd in 2024 het meest gebruikt voor het streamen van films?",
                opties: ["Netflix", "Disney+", "HBO Max", "Amazon Prime"],
                antwoord: 0
            },
            {
                vraag: "Welke stad werd in 2024 gekozen als locatie voor de Olympische Spelen van 2032?",
                opties: ["Brisbane", "Doha", "Istanbul", "Madrid"],
                antwoord: 0
            }
        ],
        tijdslimiet: 20
    },
    ronde4: {
        titel: "Doe-opdrachten",
        opdrachten: [
            {
                type: "upload",
                beschrijving: "Upload een feestelijke foto die jouw Oud & Nieuw viering van 2024 weergeeft.",
                instructies: "Klik op de knop hieronder om een foto te uploaden"
            },
            {
                type: "audio",
                beschrijving: "Spreek een korte nieuwjaarswens in en deel deze met de groep.",
                instructies: "Klik op de microfoon om je boodschap op te nemen"
            }
        ],
        tijdslimiet: 10
    },
    ronde5: {
        titel: "De uitdaging",
        vragen: [
            {
                vraag: "Welke Europese stad kondigde in 2024 aan dat het het eerste volledig CO2-neutrale stadscentrum ter wereld wil worden tegen 2030?",
                opties: ["Oslo", "Amsterdam", "Kopenhagen", "Stockholm"],
                antwoord: 2
            },
            {
                vraag: "Wat is de naam van de nieuwe AI-tool die in 2024 werd uitgeroepen tot de meest innovatieve technologie van het jaar?",
                opties: ["ChatGPT-5", "Gemini AI", "Claude 3", "DALL-E 3"],
                antwoord: 1
            },
            {
                vraag: "In welk land wordt Oud & Nieuw gevierd met een traditie genaamd 'First-Footing'?",
                opties: ["Ierland", "Wales", "Schotland", "Engeland"],
                antwoord: 2
            },
            {
                vraag: "In 2024 werd een ruimtevaartuig gelanceerd dat een bemande missie naar Mars moet voorbereiden. Wat is de naam van dit programma?",
                opties: ["SpaceX Mars", "Artemis III", "Orion", "Perseverance II"],
                antwoord: 1
            },
            {
                vraag: "Welke kleur kaarsen worden traditioneel aangestoken in Mexico op Oudjaarsavond?",
                opties: ["Rood en wit", "Blauw en zilver", "Goud en groen", "Paars en geel"],
                antwoord: 2
            },
            {
                vraag: "Welke Aziatische stad werd in 2024 uitgeroepen tot de meest bezochte toeristische bestemming ter wereld?",
                opties: ["Singapore", "Tokyo", "Bangkok", "Seoul"],
                antwoord: 2
            },
            {
                vraag: "Welk land vierde in 2024 zijn 250-jarig bestaan als onafhankelijke staat?",
                opties: ["Canada", "Mexico", "De Verenigde Staten", "Brazilië"],
                antwoord: 2
            },
            {
                vraag: "Tijdens Oud & Nieuw in Griekenland speelt men vaak een traditioneel kaartspel. Wat is de naam van dit spel?",
                opties: ["Basíliko", "Souvlaki", "Metaxa", "Ouzo"],
                antwoord: 0
            },
            {
                vraag: "In welk jaar werd de Gregoriaanse kalender officieel ingevoerd?",
                opties: ["1492", "1582", "1600", "1700"],
                antwoord: 1
            },
            {
                vraag: "In welke stad vond in 2024 de grootste drone-lichtshow plaats tijdens de jaarwisseling?",
                opties: ["Shanghai", "Las Vegas", "Dubai", "Sydney"],
                antwoord: 2
            }
        ],
        tijdslimiet: 15
    },
    finale: {
        titel: "De grote aftelronde",
        vragen: [
            {
                vraag: "Hoeveel seconden telt men traditioneel af naar het nieuwe jaar?",
                opties: ["5 seconden", "10 seconden", "15 seconden", "20 seconden"],
                antwoord: 1
            },
            {
                vraag: "Welke datum markeert het begin van het nieuwe jaar in de Gregoriaanse kalender?",
                opties: ["31 december", "1 januari", "30 december", "2 januari"],
                antwoord: 1
            }
        ],
        tijdslimiet: 5
    }
};

// Voeg toe aan het begin van het bestand, na de quizData declaratie
const puntenSchema = {
    ronde1: {
        basis: 10,
        moeilijkheidsBonus: {
            0: 5,  // Trump vraag (makkelijk)
            1: 10, // Rutte vraag (gemiddeld)
            2: 15, // Eurovisie vraag (gemiddeld)
            3: 10, // Dune vraag (gemiddeld)
            4: 15  // Olympische vraag (moeilijker)
        }
    },
    ronde2: {
        basis: 10,
        moeilijkheidsBonus: {
            0: 5,  // Oliebollen (makkelijk)
            1: 10, // Sydney vuurwerk (gemiddeld)
            2: 15, // Spaanse traditie (moeilijker)
            3: 20, // Denemarken traditie (moeilijk)
            4: 20  // Italiaanse traditie (moeilijk)
        }
    },
    ronde3: {
        basis: 15,
        moeilijkheidsBonus: {
            0: 15, // Technologie (moeilijk)
            1: 10, // Streaming app (gemiddeld)
            2: 20  // Olympische stad (moeilijk)
        }
    },
    ronde4: {
        basis: 20, // Creatieve opdrachten
        uploadBonus: 10,
        audioBonus: 15
    },
    ronde5: {
        basis: 25,
        moeilijkheidsBonus: {
            0: 25, // CO2-neutraal (expert)
            1: 20, // AI-tool (moeilijk)
            2: 15, // First-Footing (moeilijk)
            3: 20, // Ruimtevaart (moeilijk)
            4: 15, // Mexicaanse traditie (gemiddeld)
            5: 15, // Toeristische stad (gemiddeld)
            6: 20, // VS jubileum (moeilijk)
            7: 25, // Grieks kaartspel (expert)
            8: 20, // Gregoriaanse kalender (moeilijk)
            9: 15  // Drone show (gemiddeld)
        }
    },
    finale: {
        basis: 30,
        moeilijkheidsBonus: {
            0: 20, // Aftellen (gemiddeld)
            1: 10  // Datum (makkelijk)
        }
    }
};

const streakBonus = {
    3: 15,  // 3 goede antwoorden op rij
    5: 25,  // 5 goede antwoorden op rij
    10: 50  // 10 goede antwoorden op rij
};

const achievements = {
    speedRunner: { naam: "Speed Runner", punten: 50, voorwaarde: "Ronde binnen 50% van de tijd afgerond" },
    perfectionist: { naam: "Perfectionist", punten: 100, voorwaarde: "Alle vragen in een ronde goed" },
    quizMaster: { naam: "Quiz Master", punten: 200, voorwaarde: "Totaalscore boven 1000 punten" }
};

const teamMultipliers = {
    solo: 1.5,      // Speelt alleen
    duo: 1.2,       // Speelt met z'n tweeën
    team: 1.0       // Speelt in een team
};

// Quiz status bijhouden
let huidigeRonde = 1;
let score = 0;
let timer;

// Voeg deze variabelen toe aan de quiz status
let correcteAntwoorden = 0;
let totalePunten = 0;
let maxPunten = 0;
let currentStreak = 0;
let maxStreak = 0;
let behaaldeAchievements = new Set();
let startTijd;

// DOM elementen
const quizContainer = document.getElementById('quiz-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');

// Woordzoeker data
const woordzoekerWoorden = [
    'OLIEBOL', 'VUURWERK', 'CHAMPAGNE', 'AFTELLEN', 
    'NIEUWJAAR', 'FEEST', 'GELUK', 'TRADITIE'
];

function maakWoordzoeker() {
    const grootte = 12;
    const grid = Array(grootte).fill().map(() => Array(grootte).fill(''));
    const geplaatsteWoorden = [];
    const richtingen = [[0, 1], [1, 0], [1, 1], [-1, 1]]; // horizontaal, verticaal, diagonaal

    // Woorden plaatsen
    woordzoekerWoorden.forEach(woord => {
        let geplaatst = false;
        let pogingen = 0;
        
        while (!geplaatst && pogingen < 100) {
            const richting = richtingen[Math.floor(Math.random() * richtingen.length)];
            const startX = Math.floor(Math.random() * grootte);
            const startY = Math.floor(Math.random() * grootte);
            
            if (kanWoordPlaatsen(grid, woord, startX, startY, richting)) {
                plaatsWoord(grid, woord, startX, startY, richting);
                geplaatsteWoorden.push({
                    woord,
                    startX,
                    startY,
                    richting
                });
                geplaatst = true;
            }
            pogingen++;
        }
    });

    // Vul lege plekken met random letters
    for (let i = 0; i < grootte; i++) {
        for (let j = 0; j < grootte; j++) {
            if (grid[i][j] === '') {
                grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
        }
    }

    return { grid, geplaatsteWoorden };
}

function kanWoordPlaatsen(grid, woord, x, y, [dx, dy]) {
    const grootte = grid.length;
    
    for (let i = 0; i < woord.length; i++) {
        const nieuwX = x + (dx * i);
        const nieuwY = y + (dy * i);
        
        if (nieuwX < 0 || nieuwX >= grootte || nieuwY < 0 || nieuwY >= grootte) {
            return false;
        }
        
        if (grid[nieuwX][nieuwY] !== '' && grid[nieuwX][nieuwY] !== woord[i]) {
            return false;
        }
    }
    
    return true;
}

function plaatsWoord(grid, woord, x, y, [dx, dy]) {
    for (let i = 0; i < woord.length; i++) {
        grid[x + (dx * i)][y + (dy * i)] = woord[i];
    }
}

// Ronde navigatie
function toonRonde(rondeNummer) {
    document.querySelectorAll('.quiz-section').forEach(section => {
        section.style.display = 'none';
    });
    
    const rondeElement = document.getElementById(`ronde${rondeNummer}`);
    if (rondeElement) {
        rondeElement.style.display = 'block';
        laadVragen(rondeNummer);
    }
    startTijd = Date.now();
}

// Vragen laden
function laadVragen(rondeNummer) {
    const rondeData = quizData[`ronde${rondeNummer}`];
    const quizContent = document.querySelector(`#ronde${rondeNummer} .quiz-content`);
    
    if (rondeNummer === 2) {
        // Voeg woordzoeker toe voor ronde 2
        const { grid, geplaatsteWoorden } = maakWoordzoeker();
        let woordzoekerHTML = `
            <div class="woordzoeker-container animate__animated animate__fadeIn">
                <h3>Woordzoeker: Vind de Oud & Nieuw woorden!</h3>
                <div class="woordzoeker-grid">
        `;
        
        grid.forEach((rij, i) => {
            woordzoekerHTML += '<div class="woordzoeker-rij">';
            rij.forEach((letter, j) => {
                woordzoekerHTML += `
                    <div class="woordzoeker-cel" data-x="${i}" data-y="${j}">
                        ${letter}
                    </div>
                `;
            });
            woordzoekerHTML += '</div>';
        });
        
        woordzoekerHTML += `
                </div>
                <div class="woordenlijst">
                    <h4>Te zoeken woorden:</h4>
                    <ul>
                        ${woordzoekerWoorden.map(woord => `<li>${woord}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        quizContent.innerHTML = woordzoekerHTML;
        
        // Voeg event listeners toe voor woordselectie
        initWoordzoekerEvents();
    } else {
        // Normale vragen laden voor andere rondes
        let vragenHTML = `<h3>${rondeData.titel}</h3>`;
        rondeData.vragen.forEach((vraag, index) => {
            vragenHTML += `
                <div class="vraag animate__animated animate__fadeIn">
                    <p>${index + 1}. ${vraag.vraag}</p>
                    <div class="opties">
                        ${vraag.opties.map((optie, i) => `
                            <label class="optie-label">
                                <input type="radio" name="vraag${index}" value="${i}">
                                ${optie}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        quizContent.innerHTML = vragenHTML;
    }
}

// Timer functionaliteit
function startTimer(minuten) {
    let tijd = minuten * 60;
    timer = setInterval(() => {
        const minutes = Math.floor(tijd / 60);
        const seconds = tijd % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (--tijd < 0) {
            clearInterval(timer);
            timerElement.textContent = "Tijd is op!";
            eindigRonde();
        }
    }, 1000);
}

// Event listeners
nextBtn.addEventListener('click', () => {
    if (huidigeRonde < 6) {
        huidigeRonde++;
        toonRonde(huidigeRonde);
    }
});

prevBtn.addEventListener('click', () => {
    if (huidigeRonde > 1) {
        huidigeRonde--;
        toonRonde(huidigeRonde);
    }
});

// Initialisatie
document.addEventListener('DOMContentLoaded', () => {
    toonRonde(1);
    startTimer(15); // 15 minuten voor eerste ronde
});

// Extra CSS voor de nieuwe elementen
const style = document.createElement('style');
style.textContent = `
    .vraag {
        margin-bottom: 2rem;
    }
    
    .opties {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .optie-label {
        display: block;
        padding: 1rem;
        background-color: #f8f9fa;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    
    .optie-label:hover {
        background-color: #e9ecef;
    }
`;
document.head.appendChild(style);

// Voeg deze functie toe voor confetti effect
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 50%)`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Voeg deze functie toe voor het controleren van antwoorden
function controleerAntwoord(element, vraagIndex, rondeData) {
    const gekozenAntwoord = parseInt(element.value);
    const juisteAntwoord = rondeData.vragen[vraagIndex].antwoord;
    const rondeNummer = huidigeRonde === 6 ? 'finale' : `ronde${huidigeRonde}`;
    
    // Bereken basis punten
    let punten = puntenSchema[rondeNummer].basis;
    punten += puntenSchema[rondeNummer].moeilijkheidsBonus[vraagIndex];
    
    // Pas team multiplier toe
    if (teamState.teamId) {
        punten *= teamMultipliers[teamState.spelers.length > 2 ? 'team' : 
                                teamState.spelers.length === 2 ? 'duo' : 'solo'];
    }
    
    if (gekozenAntwoord === juisteAntwoord) {
        // Stuur antwoord naar team
        if (teamState.teamId) {
            socket.emit('teamAntwoord', {
                teamId: teamState.teamId,
                speler: spelerNaam,
                correct: true,
                punten: punten
            });
        }
        
        element.parentElement.classList.add('correct-answer');
        correcteAntwoorden++;
        totalePunten += punten;
        currentStreak++;
        updateScore();
        createConfetti();
        
        // Check achievements
        checkAchievements();
    } else {
        if (teamState.teamId) {
            socket.emit('teamAntwoord', {
                teamId: teamState.teamId,
                speler: spelerNaam,
                correct: false,
                punten: 0
            });
        }
        
        currentStreak = 0;
        element.parentElement.classList.add('wrong-answer');
    }
}

// Voeg deze functie toe voor het updaten van de score
function updateScore() {
    const scoreElement = document.getElementById('score-display');
    if (!scoreElement) {
        const scoreDisplay = document.createElement('div');
        scoreDisplay.id = 'score-display';
        scoreDisplay.className = 'score-container animate__animated animate__fadeIn';
        document.querySelector('#quiz-container').prepend(scoreDisplay);
    }
    
    const scoreHTML = `
        <div class="score-info">
            <p>Correcte antwoorden: ${correcteAntwoorden}</p>
            <p>Totale punten: ${totalePunten}</p>
        </div>
    `;
    document.getElementById('score-display').innerHTML = scoreHTML;
}

// Voeg deze functie toe voor de doe-opdrachten in ronde 4
function laadDoeOpdrachten() {
    const quizContent = document.querySelector('#ronde4 .quiz-content');
    let html = `
        <div class="doe-opdrachten animate__animated animate__fadeIn">
            <div class="foto-upload">
                <h3>Foto Upload</h3>
                <p>${quizData.ronde4.opdrachten[0].beschrijving}</p>
                <input type="file" accept="image/*" class="upload-input">
                <div class="preview-container"></div>
            </div>
            
            <div class="audio-opname">
                <h3>Nieuwjaarswens</h3>
                <p>${quizData.ronde4.opdrachten[1].beschrijving}</p>
                <button class="btn record-btn">
                    <i class="fas fa-microphone"></i> Start Opname
                </button>
                <div class="audio-preview"></div>
            </div>
        </div>
    `;
    quizContent.innerHTML = html;
    
    initDoeOpdrachtenEvents();
}

// Voeg deze CSS toe voor de doe-opdrachten
const style = document.createElement('style');
style.textContent = `
    .doe-opdrachten {
        display: grid;
        gap: 2rem;
    }

    .foto-upload, .audio-opname {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .preview-container {
        margin-top: 1rem;
        max-width: 300px;
    }

    .preview-container img {
        width: 100%;
        border-radius: 5px;
    }

    .record-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .audio-preview {
        margin-top: 1rem;
    }
`;
document.head.appendChild(style); 

function berekenTijdsBonus(gebruikteTijd, maxTijd) {
    const tijdOver = maxTijd - gebruikteTijd;
    return tijdOver > 0 ? Math.floor(tijdOver * 2) : 0;
} 

// Functie voor het tonen van streak berichten
function toonStreakMessage(streak) {
    const message = document.createElement('div');
    message.className = 'streak-message animate__animated animate__bounceIn';
    message.innerHTML = `
        <div class="streak-bonus">
            <span class="streak-count">${streak}x</span>
            <span class="streak-text">STREAK!</span>
            <span class="bonus-points">+${streakBonus[streak]} punten</span>
        </div>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('animate__bounceOut');
        setTimeout(() => message.remove(), 1000);
    }, 2000);
}

// Functie voor het checken van achievements
function checkAchievements() {
    // Speed Runner achievement
    const gebruikteTijd = (Date.now() - startTijd) / 1000;
    const maxTijd = quizData[`ronde${huidigeRonde}`].tijdslimiet;
    if (gebruikteTijd < maxTijd * 0.5 && !behaaldeAchievements.has('speedRunner')) {
        behaaldAchievement('speedRunner');
    }
    
    // Perfectionist achievement
    const rondeVragen = quizData[`ronde${huidigeRonde}`].vragen.length;
    if (correcteAntwoorden % rondeVragen === 0 && !behaaldeAchievements.has('perfectionist')) {
        behaaldAchievement('perfectionist');
    }
    
    // Quiz Master achievement
    if (totalePunten > 1000 && !behaaldeAchievements.has('quizMaster')) {
        behaaldAchievement('quizMaster');
    }
}

// Functie voor het tonen van behaalde achievements
function behaaldAchievement(achievementId) {
    const achievement = achievements[achievementId];
    behaaldeAchievements.add(achievementId);
    
    const achievementElement = document.createElement('div');
    achievementElement.className = 'achievement animate__animated animate__slideInUp';
    achievementElement.innerHTML = `
        <div class="achievement-content">
            <h3>${achievement.naam}</h3>
            <p>${achievement.voorwaarde}</p>
            <span class="achievement-points">+${achievement.punten} punten!</span>
        </div>
    `;
    document.body.appendChild(achievementElement);
    
    totalePunten += achievement.punten;
    updateScore();
    createConfetti();
    
    setTimeout(() => {
        achievementElement.classList.add('animate__slideOutUp');
        setTimeout(() => achievementElement.remove(), 1000);
    }, 3000);
} 