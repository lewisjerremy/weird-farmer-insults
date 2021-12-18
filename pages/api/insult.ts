import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Word } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const insult = await getInsult();
  res.status(200).json({ insult });
}

function pickWord(items: Word[]) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

async function getInsult() {
  const words = await prisma.word.findMany();

  const introductions = words.filter((word) => word.type == "introduction");
  const adjectives = words.filter((word) => word.type == "adjective");
  const verbs = words.filter((word) => word.type == "verb");

  const [introduction, adjective, verb] = [
    pickWord(introductions),
    pickWord(adjectives),
    pickWord(verbs)
  ];

  const insult = `${introduction.word} you ${adjective.word} ${verb.word}`;

  await prisma.insult.create({
    data: {
      insultText: insult,
      words: {
        connect: [
          { id: introduction.id },
          { id: adjective.id },
          { id: verb.id }
        ]
      }
    },
    include: {
      words: true
    }
  });

  return insult;
}
