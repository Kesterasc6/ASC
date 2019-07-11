const games = ['GOW4',
'Dead Space 3', 
'COD 4',
'Saint Row 4',
'Resident Evil'
];

console.log('the length is...', games.length);

games.push('Last of Us');

console.log('the new length is...', games.length);

console.log('the third game is...', games[2])

games[2] = 'Dino Crisis';

console.log('the new third game is...', games.length);

games.push('halo');

console.log(games)