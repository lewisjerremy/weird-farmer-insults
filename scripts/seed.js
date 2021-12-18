const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const words = [
  { word: "bring it", type: "introduction" },
  { word: "buck off", type: "introduction" },
  { word: "get ready for a whooping", type: "introduction" },
  { word: "get wrecked", type: "introduction" },
  { word: "give it up", type: "introduction" },
  { word: "get fencing", type: "introduction" },
  { word: "go plow", type: "introduction" },
  { word: "skedaddle", type: "introduction" },
  { word: "take a snooze", type: "introduction" },
  { word: "we're gonna mess you up", type: "introduction" },
  { word: "yeehaw somewheres else", type: "introduction" },
  { word: "cabbage hittin'", type: "adjective" },
  { word: "coal rollin'", type: "adjective" },
  { word: "dern tootin'", type: "adjective" },
  { word: "honky tonkin'", type: "adjective" },
  { word: "howdy doin'", type: "adjective" },
  { word: "scouring", type: "adjective" },
  { word: "unsexy tractor drivin'", type: "adjective" },
  { word: "7-second", type: "adjective" },
  { word: "all-hat-no-cattle", type: "adjective" },
  { word: "broke down", type: "adjective" },
  { word: "chicken-hearted", type: "adjective" },
  { word: "cow-handed", type: "adjective" },
  { word: "dry", type: "adjective" },
  { word: "dusty", type: "adjective" },
  { word: "foundered", type: "adjective" },
  { word: "greasy", type: "adjective" },
  { word: "green broke", type: "adjective" },
  { word: "high cotton", type: "adjective" },
  { word: "incompetent", type: "adjective" },
  { word: "ornery", type: "adjective" },
  { word: "pitter-patterin", type: "adjective" },
  { word: "rotten footed", type: "adjective" },
  { word: "smelly", type: "adjective" },
  { word: "texas-sized", type: "adjective" },
  { word: "tore up", type: "adjective" },
  { word: "uppity", type: "adjective" },
  { word: "buckle bunny", type: "verb" },
  { word: "manure spreader", type: "verb" },
  { word: "milk man", type: "verb" },
  { word: "milksop", type: "verb" },
  { word: "mini horse cowboy", type: "verb" },
  { word: "old cow", type: "verb" },
  { word: "poo scooper", type: "verb" },
  { word: "redneck", type: "verb" },
  { word: "shop hand", type: "verb" },
  { word: "tire iron", type: "verb" },
  { word: "top result on farmersonly.com", type: "verb" },
  { word: "varmint", type: "verb" },
  { word: "yodel", type: "verb" },
  { word: "rodeo clown", type: "verb" },
  { word: "pighead", type: "verb" }
];

async function seed() {
  for (const { word, type } of words) {
    await prisma.word.create({ data: { word, type } });
  }
}

seed();
