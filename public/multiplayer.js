// Multiplayer functionaliteit
const socket = io(); // Zorg dat je Socket.IO hebt toegevoegd aan je HTML

const teamState = {
    teamId: null,
    teamNaam: '',
    spelers: [],
    isLeider: false
};

function maakTeam() {
    const teamNaam = prompt('Voer een teamnaam in:');
    if (teamNaam) {
        socket.emit('maakTeam', { teamNaam });
        teamState.teamNaam = teamNaam;
        teamState.isLeider = true;
    }
}

function deelneemTeam() {
    const teamCode = prompt('Voer de team code in:');
    if (teamCode) {
        const spelerNaam = prompt('Voer je naam in:');
        socket.emit('deelneemTeam', { teamCode, spelerNaam });
    }
}

socket.on('teamUpdate', (teamData) => {
    teamState.teamId = teamData.teamId;
    teamState.spelers = teamData.spelers;
    updateTeamWeergave();
});

socket.on('antwoordUpdate', (data) => {
    if (data.teamId === teamState.teamId) {
        updateTeamScore(data.score);
        toonTeamAntwoord(data.speler, data.correct);
    }
});

function updateTeamWeergave() {
    const teamDisplay = document.getElementById('team-display');
    teamDisplay.innerHTML = `
        <div class="team-info">
            <h3>Team: ${teamState.teamNaam}</h3>
            <p>Code: ${teamState.teamId}</p>
            <div class="spelers-lijst">
                ${teamState.spelers.map(speler => 
                    `<div class="speler">${speler.naam} (${speler.score})</div>`
                ).join('')}
            </div>
        </div>
    `;
} 