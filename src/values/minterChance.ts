//common uncommon rare epic legendary
export const mintChance = {
  "common-common": [100, 0, 0, 0, 0],
  "common-uncommon": [50, 49, 1, 0, 0],
  "common-rare": [50, 0, 49, 1, 0],
  "common-epic": [50, 0, 0, 49, 1],
  "common-legendary": [50, 0, 0, 0, 50],
  "uncommon-uncommon": [0, 98, 2, 0, 0],
  "uncommon-rare": [0, 49, 50, 1, 0],
  "uncommon-epic": [0, 49, 1, 49, 1],
  "uncommon-legendary": [0, 49, 1, 0, 50],
  "rare-rare": [0, 0, 98, 2, 0],
  "rare-epic": [0, 0, 49, 50, 1],
  "rare-legendary": [0, 0, 49, 1, 50],
  "epic-epic": [0, 0, 0, 98, 2],
  "epic-legendary": [0, 0, 0, 49, 51],
  "legendary-legendary": [0, 0, 0, 0, 100],
};

//common uncommon rare epic legendary
export const shoeBoxChance = {
  common: [97, 3, 0, 0, 0],
  uncommon: [25, 73, 2, 0, 0],
  rare: [0, 27, 71, 2, 0],
  epic: [0, 0, 30, 68, 2],
  legendary: [0, 0, 0, 35, 65],
};

//
export const shoeType = {
  "walker-walker": [85, 6, 6, 3],
  "walker-jogger": [45, 45, 7, 3],
  "walker-runner": [45, 7, 45, 3],
  "walker-trainer": [80, 6, 6, 8],
  "jogger-jogger": [6, 85, 6, 3],
  "jogger-runner": [7, 45, 45, 3],
  "jogger-trainer": [6, 80, 6, 8],
  "runner-runner": [6, 6, 85, 3],
  "runner-trainer": [6, 6, 80, 8],
  "trainer-trainer": [25, 25, 25, 25],
};
