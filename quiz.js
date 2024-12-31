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
let huidigeRonde = 0;
let huidigeVraag = 0;
let score = 0;
let correcteAntwoorden = 0;

// DOM elementen ophalen
const quizContent = document.getElementById('quiz-content');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');

// Event listeners toevoegen
document.addEventListener('DOMContentLoaded', () => {
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', volgendeVraag);
});

function startQuiz() {
    huidigeRonde = 1;
    huidigeVraag = 0;
    score = 0;
    correcteAntwoorden = 0;
    startBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    toonVraag();
}

function toonVraag() {
    const rondeData = quizData[`ronde${huidigeRonde}`];
    if (!rondeData) {
        toonEindResultaat();
        return;
    }

    const vraag = rondeData.vragen[huidigeVraag];
    if (!vraag) {
        huidigeRonde++;
        huidigeVraag = 0;
        toonVraag();
        return;
    }

    quizContent.innerHTML = `
        <div class="vraag animate__animated animate__fadeIn">
            <h2>Ronde ${huidigeRonde}: ${rondeData.titel}</h2>
            <p>${vraag.vraag}</p>
            <div class="opties">
                ${vraag.opties.map((optie, index) => `
                    <button class="optie-btn" onclick="controleerAntwoord(${index})">
                        ${optie}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function controleerAntwoord(gekozenIndex) {
    const rondeData = quizData[`ronde${huidigeRonde}`];
    const juisteAntwoord = rondeData.vragen[huidigeVraag].antwoord;
    
    if (gekozenIndex === juisteAntwoord) {
        score += 10;
        correcteAntwoorden++;
        toonFeedback(true);
    } else {
        toonFeedback(false);
    }
}

function toonFeedback(isCorrect) {
    const optieBtns = document.querySelectorAll('.optie-btn');
    optieBtns.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        quizContent.innerHTML += `
            <div class="feedback correct animate__animated animate__bounceIn">
                <p>Correct! +10 punten</p>
            </div>
        `;
    } else {
        quizContent.innerHTML += `
            <div class="feedback incorrect animate__animated animate__shakeX">
                <p>Helaas, dat is niet correct.</p>
            </div>
        `;
    }
    
    nextBtn.disabled = false;
}

function volgendeVraag() {
    huidigeVraag++;
    nextBtn.disabled = true;
    toonVraag();
}

function toonEindResultaat() {
    quizContent.innerHTML = `
        <div class="eind-resultaat animate__animated animate__fadeIn">
            <h2>Quiz Voltooid!</h2>
            <p>Je score: ${score}</p>
            <p>Correcte antwoorden: ${correcteAntwoorden}</p>
            <button onclick="startQuiz()" class="btn">Opnieuw Spelen</button>
        </div>
    `;
    nextBtn.style.display = 'none';
} 
