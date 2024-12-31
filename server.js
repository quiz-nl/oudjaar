const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Statische bestanden serveren
app.use(express.static('public'));

// Teams database (in memory voor dit voorbeeld)
const teams = new Map();
const activeGames = new Map();

// Genereer een unieke team code
function generateTeamCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

io.on('connection', (socket) => {
    console.log('Nieuwe verbinding:', socket.id);

    // Team aanmaken
    socket.on('maakTeam', ({ teamNaam }) => {
        const teamCode = generateTeamCode();
        teams.set(teamCode, {
            naam: teamNaam,
            spelers: [],
            score: 0,
            leider: socket.id
        });
        
        socket.join(teamCode);
        socket.emit('teamGemaakt', { teamCode, teamNaam });
    });

    // Deelnemen aan team
    socket.on('deelneemTeam', ({ teamCode, spelerNaam }) => {
        const team = teams.get(teamCode);
        if (team) {
            team.spelers.push({
                id: socket.id,
                naam: spelerNaam,
                score: 0
            });
            
            socket.join(teamCode);
            io.to(teamCode).emit('teamUpdate', {
                teamId: teamCode,
                teamNaam: team.naam,
                spelers: team.spelers
            });
        } else {
            socket.emit('error', { message: 'Team niet gevonden' });
        }
    });

    // Team antwoord verwerken
    socket.on('teamAntwoord', ({ teamId, speler, correct, punten }) => {
        const team = teams.get(teamId);
        if (team) {
            const spelerIndex = team.spelers.findIndex(p => p.naam === speler);
            if (spelerIndex !== -1) {
                team.spelers[spelerIndex].score += punten;
                team.score += punten;
                
                io.to(teamId).emit('antwoordUpdate', {
                    teamId,
                    speler,
                    correct,
                    nieuweScore: team.score,
                    spelerScore: team.spelers[spelerIndex].score
                });
            }
        }
    });

    // Synchroniseer quiz status
    socket.on('syncQuiz', ({ teamId, rondeNummer, vraagNummer }) => {
        io.to(teamId).emit('quizSync', { rondeNummer, vraagNummer });
    });

    // Verwerk disconnect
    socket.on('disconnect', () => {
        teams.forEach((team, teamCode) => {
            const spelerIndex = team.spelers.findIndex(p => p.id === socket.id);
            if (spelerIndex !== -1) {
                team.spelers.splice(spelerIndex, 1);
                io.to(teamCode).emit('teamUpdate', {
                    teamId: teamCode,
                    teamNaam: team.naam,
                    spelers: team.spelers
                });
            }
        });
    });
});

// Start server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server draait op poort ${PORT}`);
}); 