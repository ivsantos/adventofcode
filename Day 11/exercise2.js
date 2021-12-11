// const input = [
//   "5483143223",
//   "2745854711",
//   "5264556173",
//   "6141336146",
//   "6357385478",
//   "4167524645",
//   "2176841721",
//   "6882881134",
//   "4846848554",
//   "5283751526",
// ];
const input = [
  "4112256372",
  "3143253712",
  "4516848631",
  "3783477137",
  "3746723582",
  "5861358884",
  "4843351774",
  "2316447621",
  "6643817745",
  "6366815868",
];

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split('').map(Number);
}

// Recursively do the action of flash and increment adjacent ones.
const flash = (flashes) => {
  if (flashes.length) {
    const newFlashes = [];
    for (let i = 0; i < flashes.length; i++) {
      const [y, x] = flashes[i];
      const directions = [
        [y - 1, x - 1],
        [y - 1, x],
        [y - 1, x + 1],
        [y, x - 1],
        [y, x + 1],
        [y + 1, x - 1],
        [y + 1, x],
        [y + 1, x + 1],
      ];
      for ([row, col] of directions) {
        if (input[row]?.[col]) {
          input[row][col] += 1;
          if (input[row][col] === 10) {
            newFlashes.push([row, col]);
          }
        }
      }
    }
    flash(newFlashes);
  }
};

let totalFlashes = 0;
let flashSyncStep = null;
let step = 1;
while (flashSyncStep === null) {
  const flashes = [];
  // Action 1 - Increment energy by 1.
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      input[i][j] += 1;
      if (input[i][j] === 10) {
        flashes.push([i, j]);
      }
    }
  }
  // Action 2 - Flashes for energies above 9.
  flash(flashes);

  // Action 3 - Reset energy if it is above 9.
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] > 9) {
        input[i][j] = 0;
        totalFlashes += 1;
      }
    }
  }

  // Action 4 - Check flash synchronization.
  if (input.flat().every((el) => el === 0)) {
    flashSyncStep = step;
  }
  step++;
}

console.log(`Result: ${totalFlashes}`);
console.log(`Flashes synced at step: ${flashSyncStep}`);