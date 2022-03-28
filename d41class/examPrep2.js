"use strict";
/*eslint-disable */

const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] }
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] }
const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] }
const teamStats = [player1, player2, player3];

const higherJersey = teamStats.filter(item => item.jersey > 10);
const allJerseys = teamStats.map(item => item.jersey);
const player3Total = player3.stats.reduce((previousValue, currentValue) => previousValue + currentValue.points, 0);

function findHighScores(arr) {
    return arr.map(item => {
        let playerRecord = {};
        playerRecord.jersey = item.jersey;
        playerRecord.high = item.stats.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue.points), 0)
        return playerRecord;
    })
}

function orderHighScores(arr) {

}

console.log(findHighScores(teamStats));

let arr = [1, 2, 3, 4, 5];
arr.forEach(item => console.log(item * 2));