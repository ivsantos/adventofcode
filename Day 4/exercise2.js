// https://onlinetexttools.com/json-stringify-text
const BOARDS = "31 93 46 11 30\n 2 45 40 69 33\n82 21 37 99 86\n57 16 34 94 85\n60 49 28 14 65\n\n96  2 20 41 24\n29 15 27 83 48\n 7 93 99 82 26\n 3 91 66 35 85\n62 78 67  4 22\n\n10 87 50 84 40\n78  5 17 59 44\n38 88 15 46 32\n 8 72 74 90 23\n64 93 49 39 20\n\n25 41 32 30 39\n 6 66 38 95  5\n31 13 56 67 34\n69 18 64 44 96\n75 14 88 97 40\n\n39 62 50 10 68\n18  7 95 72 82\n83 23 19 70 71\n11 64 30  8  3\n 6 81 27 34 99\n\n40 52 66 20 49\n93 74 16 35 29\n97 88  6 98 81\n62 55 99 47 12\n83 76 57 75 22\n\n52 76 43 86 99\n58 26 61 36 42\n11 69 65  3 49\n33  7 71  8 25\n50 82 32 16 64\n\n45 38 88 96  8\n22 17  5 60 66\n87 12 61 59  2\n 0 37 18 15 98\n 7 62 23 56 92\n\n20  7 12 26 69\n81 63 89 57 19\n18 44 61 64 53\n47 27  8 30  0\n60 99 28  6 96\n\n70 50 63 56 26\n55 97 65  5 96\n72 68 29 91 61\n34  0 14 28  4\n45 53 78 80 47\n\n19 12 92 80 97\n22 37 38  9 82\n86 72 99 59 89\n73 18 21 87 46\n33 77 71 54 94\n\n66 99 10 44 48\n38 45  4 63 62\n50 27 88 56 89\n81 91 72 90 32\n76 29 17  6  7\n\n71 39 10 77 50\n97 95 90 98  4\n66 32 73 35 16\n 1 99  7 96 23\n74 31 94 37  5\n\n20 72 78  5 69\n88  8 55 80 30\n62 58  4 53 47\n45 13  7 14 52\n86 12 66 74 76\n\n95 53 59 68 37\n63 40 20 46 43\n 5 27 67 84 39\n99 51 12 76 50\n78 23 89 22 57\n\n 0 96  2 88 11\n98 52 70 28 22\n60 50 18 49 41\n97  6 68 21 47\n90 57 58 99 48\n\n 7  3 77 61 34\n57 69 64 68 58\n 8 49 33 22 15\n63 10  4 95 59\n28 20 71 44 75\n\n90 68 15 99 38\n16 80 56 70  3\n88 52 18  4 39\n40 85 89 84 44\n65 73 71 79  2\n\n66 43 12 10 70\n79 57 54 41  6\n46 73 40  3 52\n36 21 38  8 62\n 7 26 42 32  0\n\n57 51 69 34 43\n14  9 96 88 74\n90 22 83 30 71\n80 64 91 48 97\n54 38 89 66 16\n\n51  4 49  2 59\n53 40 33 54 45\n69 41 92 26 60\n93 72 94 90 35\n76  8 75 38 52\n\n 5 75 19 28 39\n14 80 27 64 78\n24 69 23 96 42\n 0 81 10 20 13\n36 57 17 76 52\n\n38 25  7 88 33\n24 41 96 85 64\n52 89 63 93 18\n94 20  0 98 28\n 9 30 27 79 83\n\n74 97 15 55 67\n92 28 24 11 38\n 8 70 65 63 45\n83 22 30 76 96\n21 85 29 59 36\n\n 1 79 29  0 75\n68 58 61 84 51\n85 74 46 69  3\n94 16 41 43 15\n57 21 48 22 42\n\n61  5  1 25 28\n50 40 74 14 94\n32  0 68 15 54\n60 45 51 31 97\n56 52  8  9 63\n\n20 36 72 74 83\n 4 88 35 62 24\n68 39 58 30 34\n61 41 42 93 66\n48 12 57  6 11\n\n89 52 47 66 64\n67 28 30 46 22\n44 79 23 86 80\n81 25 10 53 94\n56 87 74 60 75\n\n38 62 76 43 50\n83 53 64  4 44\n52 47 91 49  7\n 0 85 96 78 86\n32  8 81 87 90\n\n76 67 31 74 87\n15 70  9 83 78\n60 46 86 73 72\n71 53 82 89 28\n39 97 68 96 11\n\n88  7 32 40 94\n39 68 13  6  9\n20 55 72 49 25\n56 86 78 12 18\n27 34 19 48 44\n\n88 19 29 87 28\n53 47 40 74 77\n 3 93 14 38 33\n78 39 26 32 22\n75  0  2 95 54\n\n52 35 43 77 79\n53 56 93 92 12\n15 23 16 10 66\n63 96 58 60 94\n 6 55 76 21 89\n\n55 11 26 37 18\n77 80  0 30 58\n 2 97 13 27 98\n68 40 91 56 20\n78 42 45 87 24\n\n62 71 79 12 66\n 9 73 30 70 88\n18 72 27  5 75\n49  3 47 33  6\n55 63 98 15 21\n\n20 52 46 33 27\n80  2 48 29 62\n 9 32  5 41 53\n74 39 87 12 73\n96 79 61 63 22\n\n30 48 26 21 83\n56 94 39 47 99\n93 66 25 76 57\n60 96 62 13 84\n71 42 28 31 20\n\n30 77 49 36 34\n53 75 11 38 61\n41 72  4 58 92\n91 10 21 51 31\n89 43 14 23 45\n\n30 76 12  1 21\n31  0 82  2  8\n26 28 61 32 99\n65 46 16 39 74\n60 63  5 50 42\n\n31 90 72 81  8\n17 94 45 20 38\n30 28 68  0 25\n84 10 37 61 83\n87 70 32 64 99\n\n21 28 99 30  2\n86 64 53 54 84\n82 13 79 96 55\n76  3 12 92 98\n27 89 10 37 95\n\n74 38 98 18 55\n62 82 93 85 46\n43  3 26 84 86\n97  1 19 12 67\n94 72 68 88  0\n\n41 97 88  0 40\n20  5 51 42 87\n38  9 11 50  6\n35 25 54 12 81\n75 58 57 94 26\n\n 2 30 22 48 88\n60 86 69 31 57\n97 58 95 47 71\n85 63 81 80 73\n25 92 62 11 83\n\n 3 93 20 74 86\n21 31 73 35 91\n41 28 25  4 92\n19  5 38 52 59\n37 16 48 85 68\n\n26 32 66 93 68\n74 90 70 41 57\n99 94 51  3 46\n 1 24 17 54 39\n53 60 50 96 49\n\n50 27 72 42 84\n82 62 39 33 31\n99  4 20  3 70\n11 28 57 55 12\n61 29 14 60 90\n\n60 23 66 99  3\n 6 24 42 51 45\n41 39 53 25 72\n32 57  5 74  4\n78 44 67  7 50\n\n 8 39  4 42 50\n27 25 77 94 90\n52 45 59 60 84\n 0 78 36 86 22\n56  1 71 82 29\n\n78 11 49 67 93\n99 76 12 37  1\n17 35 19 92 91\n22 54 31 72 36\n61 96 63 26 33\n\n 1 69 71 21 72\n87 92 32 29 80\n40 39 52 42 75\n26 24 11 44 23\n10 99 62 36 98\n\n60 47 49 24 66\n 2 19 38 57 94\n54 22 17 33 42\n65 80 48 86 20\n53 27 59 30 11\n\n 3 81 64 69 82\n93 80 71 51 46\n76  7 38 57 91\n37 88  8 65 54\n36 25  1 95 77\n\n75 56 19 21 34\n15  7 24 41 86\n68 29 85 80 88\n18 58 81 44 62\n 0 52 89 47 59\n\n49 98 57 90 46\n76 88 84 60  6\n38 78 77 83 99\n79 48  5 63 74\n66 30 37  4 47\n\n56 37 93 43 11\n81 87 85 52 94\n64 91 36 97 27\n18 31 26 22 78\n50 54 32 69 96\n\n73 20 51 50 30\n48 83 22 76 85\n26  3 63 67 92\n97  0 87 88  1\n18 33 86 77 52\n\n 1 18 50  7 22\n11 96 47 94 67\n58 36 43 65  6\n91 53 23 34 44\n81 30 83 86 55\n\n 1 36 10 84 90\n55 35 74 23 26\n29 53 76 40 85\n89 77 16 17 93\n11 19 65  5 49\n\n99 48 88 10 79\n84 75 66 74 58\n 3 26 92 91 86\n87 98 52 45 21\n56 51  0 85 69\n\n53 45 75  5 82\n44 90 11  2 85\n69 19 46 89 47\n 4 22 16 84 52\n81  1 39  9 38\n\n18 57 15 30 35\n 9 32 52 44 25\n69 43 61  3 51\n 2  8 80 85 33\n72 13 45 10 87\n\n52 24 26 74 49\n 0 37 61 91 54\n70 96 60 80 39\n11 75 85 46 18\n16 90 20 66 67\n\n13 74 92 11  7\n59 46 41 12 55\n27 77 89 70 96\n81  5 29 32 51\n84 75 33 63 99\n\n87 58 84  6 68\n65  9 75 48 90\n41 94 89 64 21\n95 81 72 32 30\n83 17 63 52 97\n\n89  0 61 92 16\n44 65 25 66 20\n29 27 37 94 68\n10 63 12 48 77\n 6 32 82  4 40\n\n 1 20 69 80 45\n 8  7 15 27 19\n40 87  2 98 32\n35 79 84 71 14\n24 43 23 29  6\n\n59 62 32 74 58\n78 61 85  4 75\n40 30 24 31 46\n89 39 23 63 37\n45 29 44 21 19\n\n88 44 39 81 43\n26 18 10 73  3\n62 63 74 53 60\n 0 65 84 54 21\n14 25 76 13  2\n\n61 57 77  0 92\n12 27 68 89 72\n86 21 44 43 40\n41 74 26 73 66\n 9 59 32  3  8\n\n20 93 99 67 28\n53 52 19 72 23\n31 65 25 88 10\n61 37 43  9 76\n60 33 87  3 96\n\n83 15 46 70 80\n90 69  1  6 64\n43 33 17 99 53\n98 25 30  8 31\n66 94 13 12 75\n\n18 52 83  3 19\n41 51 60 13 54\n33  5 69 99  8\n27 44 31 34  4\n17 25  1 68 79\n\n92 23 93 26 75\n50 28 30 42 25\n77 83 56 95 34\n57 13 27 65 81\n 7 71 40 94  9\n\n16 28  3 39 82\n 7 99 44 69  8\n49 51 93 34  6\n60 84  0 92  2\n76 88 38 68 24\n\n23 99 47 36 77\n20 90  4 78 93\n71 88 52 28 92\n97 31 25 95 39\n 6 21 68 45 53\n\n 0 51 69 75 56\n10 47 12 52  6\n65 87 77 85 42\n98 23 25 97 30\n84 86 67 35 22\n\n24 36 70 99 98\n94  1 59 67 35\n81 25  6 61 68\n72 53  9 40 92\n97 73 91 41 10\n\n 1 78  3 66 15\n39 29 24 76 98\n10 25 90 30 55\n41 96 83 72 51\n46 87 42 26 44\n\n20 60 59  4 21\n50 71 45 31  1\n49 75 37 54 28\n84 46 98 24  2\n96 16 51 79 35\n\n59 46 65 39 95\n92  5 10 63 36\n16 90 56 89 70\n83 45 24 64 74\n55 27 54  2 51\n\n16 23 63 62 57\n17 26 58 83 60\n39 68 22 98 48\n65 50 76  3 14\n24 75 25  7 86\n\n35 26 74 81 56\n62 84 34 30 33\n 5 73 21 15 93\n78 77 69 49 43\n44 11 54 51 87\n\n56 78 74 24 39\n70 85  6 84  9\n97 65 16 82  5\n 2 12 20 79 42\n14 37 15 69 26\n\n42 31 88 46 71\n65 97 11 34 48\n85 96 27  0  7\n41  9  5 72 53\n37 93 98 57 64\n\n 1 10 55 57 99\n61 92 82 86 56\n19 16 43 84 87\n42  6 79 46 17\n51 44 64 73 35\n\n17  0 84 15 34\n57 92 41 82 40\n 8 38 16 35  4\n 6 33 79 97 96\n52 11 21 10 73\n\n89  2 81 22 34\n77 87 84 11 80\n85 67 96 49 40\n19  3 76 98 16\n29  1 20 35 82\n\n 4 57 84 91  6\n 8 16 69  1  0\n73  2 41 20  5\n98 40 96 82 93\n12 51 23 68 83\n\n64 52 50  1 94\n97 58 24 90  5\n 9 75  3 61 37\n84 91 34 29  8\n30 74  4 18 45\n\n92 63 96 34  9\n14 25 89  4 98\n23 67 90 74 77\n61  3 93 55 82\n51 65 48 36  8\n\n70 65 20 76 50\n17  1 33 15 22\n 3 98 44 91 55\n59 83  2 67 87\n14 63 56 86 37\n\n61 53 45 88 36\n96 74 15 39 42\n32 55 44 46 86\n79 94 27 54 57\n65  3 21 17 75\n\n14 26 18 54 20\n24 22 90  0 16\n70 28 33 12 27\n45 95 30 65 75\n19 81 39  2 84\n\n48 23 67 75 86\n40 46 87 27 93\n79 44 13  3 53\n24 98 54 34  8\n49  1 39 28 35\n\n 3 29 16  5 80\n86 50  6 45 88\n22 71 73 34 94\n81 28 68 20 30\n33 37 95 35 57\n\n49  1  6 26 30\n56  5 63 79 15\n34 52 87 19 66\n59 96 80 42 58\n50 32 72 38 74\n\n83 90 18 23 64\n87 89 62 31 66\n81 49  9  8 56\n51 85 63 32 50\n95 47 11 98 17\n\n68 83 80 25 48\n72 39  7 20 30\n32 38 12 66 64\n29 10 44 23 45\n58 15 91 81 95\n\n90 67 30 22 58\n35 50 63 59 19\n54  4 41 38 65\n43 47 56 96 20\n87 57 33 37 49".replace(/\s+/g, ' ').replaceAll(' ', ',').split(',').map(Number);

const NUMBERS = [84,28,29,75,58,71,26,6,73,74,41,39,87,37,16,79,55,60,62,80,64,95,46,15,5,47,2,35,32,78,89,90,96,33,4,69,42,30,54,85,65,83,44,63,20,17,66,81,67,77,36,68,82,93,10,25,9,34,24,72,91,88,11,38,3,45,14,56,22,61,97,27,12,48,18,1,31,98,86,19,99,92,8,43,52,23,21,0,7,50,57,70,49,13,51,40,76,94,53,59];

const BOARD
const BOARD_LENGTH = 5 * 5;
const NUM_BOARDS = Math.round(BOARDS.length / BOARD_LENGTH);

const BOARD_WINNERS = [];
const WINNERS = [];
const WINNER_NUMS = [];

const checkNumber = (number, board, direction, position) => {
  let finds = [];
  const COPY = [];
  while (board.length) COPY.push(board.splice(0, 5));

  for (let i = 0; i < 5; i++) {
    let winner = true;
    finds = [];
    for (let j = 0; j < 5; j++) {
      const current = direction === 'row' ? COPY[i][j] : COPY[j][i];
      finds.push(current);
      if (current !== '') {
        if (current !== number) {
          winner = false;
          continue;
        }
        BOARDS.splice(position + COPY.flat().findIndex((el) => el === current), 1, '');
        finds.splice(-1, 1, '');
      }
      if (winner && finds.length === 5 && finds.every(el => el === '')) {
        console.log(`Tablero ${BOARDS.slice(position, position + 25)} GANADOR!!! Número: ${number}.`);
        if (!WINNERS.includes(position)) {
          WINNERS.push(position);
          BOARD_WINNERS.push(BOARDS.slice(position, position + 25));
          WINNER_NUMS.push(number);
        }
        break;
      }
      if (winner && finds.length === 5 && finds.every(el => el === '')) {
        console.log(`BOARD ${winnerBoard} WINNER!!! NUMBER: ${number}.`);
        if (!WINNERS.includes(position)) {
          WINNERS.push(position);
          BOARD_WINNERS.push(BOARDS.slice(position, position + 25));
          WINNER_NUMS.push(number);
        }
      }
    } 
  }
};

for (let i = 0; i < NUMBERS.length; i++) {
  for (let j = 0; j < NUM_BOARDS; j++) {
    checkNumber(NUMBERS[i], BOARDS.slice(BOARD_LENGTH * j, BOARD_LENGTH * (j + 1)), 'row', j * BOARD_LENGTH);
    checkNumber(NUMBERS[i], BOARDS.slice(BOARD_LENGTH * j, BOARD_LENGTH * (j + 1)), 'column', j * BOARD_LENGTH);
  }
}

console.log(`WINNER BOARD: ${BOARD_WINNERS.slice(-1)[0]}`);
console.log(`WINNER NUM: ${WINNER_NUMS.slice(-1)[0]}`);

const result = BOARD_WINNERS.slice(-1)[0].map(Number).reduce((acc, curr) => acc + curr, 0) * WINNER_NUMS.slice(-1)[0];
throw new Error(`Last Winner found. Result: ${result}`);