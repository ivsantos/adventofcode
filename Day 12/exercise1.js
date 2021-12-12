// This should return 10 paths.
// const input = ['start-A', 'start-b', 'A-c', 'A-b', 'b-d', 'A-end', 'b-end'];
// This should return 19 paths.
// const input = [
//   'dc-end',
//   'HN-start',
//   'start-kj',
//   'dc-start',
//   'dc-HN',
//   'LN-dc',
//   'HN-end',
//   'kj-sa',
//   'kj-HN',
//   'kj-dc',
// ];
// This should return 226 paths.
// const input = [
//   'fs-end',
//   'he-DX',
//   'fs-he',
//   'start-DX',
//   'pj-DX',
//   'end-zg',
//   'zg-sl',
//   'zg-pj',
//   'pj-he',
//   'RW-he',
//   'fs-DX',
//   'pj-RW',
//   'zg-RW',
//   'start-pj',
//   'he-WI',
//   'zg-he',
//   'pj-fs',
//   'start-RW',
// ];
const input = [
  'lg-GW',
  'pt-start',
  'pt-uq',
  'nx-lg',
  've-GW',
  'start-nx',
  'GW-start',
  'GW-nx',
  'pt-SM',
  'sx-GW',
  'lg-end',
  'nx-SM',
  'lg-SM',
  'pt-nx',
  'end-ve',
  've-SM',
  'TG-uq',
  'end-SM',
  'SM-uq',
];

const paths = [];

const entries = [];
for (let i = 0; i < input.length; i++) {
  const entry = input[i].split('-');
  // Get 'start-X' path if it starts with 'X-start'.
  if (entry[1] === 'start' && !input.includes(`start-${entry[0]}`)) {
    entries.push(['start', entry[0]]);
    continue;
    // Get 'X-end' path if it starts with 'end-X'.
  } else if (entry[0] === 'end' && !input.includes(`${entry[1]}-end`)) {
    entries.push([entry[1], 'end']);
    continue;
    // Get 'Y-X' path if path is 'X-Y'.
  } else if (
    entry[0] !== 'start' &&
    entry[1] !== 'start' &&
    entry[0] !== 'end' &&
    entry[1] !== 'end' &&
    !input.includes(`${entry[1]}-${entry[0]}`)
  ) {
    entries.push([entry[1], entry[0]]);
  }
  // Get the rest of paths ('X-Y').
  entries.push(entry);
}

const getPathsStartingWith = (startPoint, locations) =>
  locations.filter((entry) => entry[0] === startPoint);

const removeLocation = (location, locations) => {
  const idx = locations.findIndex((loc) => loc[0] === location[0] && loc[1] === location[1]);
  if (idx > -1) {
    locations.splice(idx, 1);
  }
};

// Recursively compute the possible path from start to end
// stored in `partialPath` to be later stored in `paths` array.
const computePath = (location, locations, partialPath) => {
  removeLocation(location, locations);
  if (location[1] === 'end') {
    paths.push(partialPath);
    return;
  }
  const possibilities = getPathsStartingWith(location[1], locations);
  for (let possibility of possibilities) {
    // If both locations are lower case (small caverns) and destination
    // only contains one possible way (which is backwards) is a forbidden path.
    // Also, it is forbidden to return to a lower case location (small cavern).
    if (
      (possibility[0] === possibility[0].toLowerCase() &&
        possibility[1] === possibility[1].toLowerCase() &&
        getPathsStartingWith(possibility[1], locations).length === 1) ||
      (possibility[1] === possibility[1].toLowerCase() &&
        partialPath.includes(`,${possibility[1]},`))
    ) {
      continue;
    }
    // We must make a copy of locations to pass it by value and not by reference
    // to properly remove locations.
    const newLocations = [...locations];
    computePath(possibility, newLocations, `${partialPath},${possibility[1]}`);
  }
};

const startPaths = getPathsStartingWith('start', entries);
for (let i = 0; i < startPaths.length; i++) {
  const locations = [...entries];
  computePath(startPaths[i], locations, startPaths[i].join(','));
}

console.log(`Result: ${paths.length}`);
