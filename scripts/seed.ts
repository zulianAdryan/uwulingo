import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      { id: 1, title: "English", imageSrc: "/flags/uk.svg" },
      { id: 2, title: "Indonesia", imageSrc: "/flags/id.svg" },
      { id: 3, title: "Japanese", imageSrc: "/flags/jp.svg" },
      // { id: 4, title: "Italy", imageSrc: "/flags/it.svg" },
      // { id: 5, title: "Spanish", imageSrc: "/flags/es.svg" },
      // { id: 6, title: "Korean", imageSrc: "/flags/kr.svg" },
      // { id: 7, title: "Germany", imageSrc: "/flags/gr.svg" },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 3, // japanese
        title: "Unit 1",
        description: "Learn the basics of Japanese",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1 learn the basics of ...
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1, // Unit 1 learn the basics of ...
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1, // Unit 1 learn the basics of ...
        order: 3,
        title: "Verbs",
      },
      {
        id: 4,
        unitId: 1, // Unit 1 learn the basics of ...
        order: 4,
        title: "Verbs",
      },
      {
        id: 5,
        unitId: 1, // Unit 1 learn the basics of ...
        order: 5,
        title: "Verbs",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the man"?',
      },
      {
        id: 2,
        lessonId: 1, // Nouns
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 3,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 3,
        question: 'Which one of these is "the woman"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // Which one of these is "the man"?
        imageSrc: "/characters/man_1.svg",
        correct: true,
        text: "男",
        audioSrc: "/characters/audio/jp/man_1.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/characters/woman_1.svg",
        correct: false,
        text: "女",
        audioSrc: "/characters/audio/jp/woman_1.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/characters/robot_1.svg",
        correct: false,
        text: "ロボット",
        audioSrc: "/characters/audio/jp/robot_1.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/characters/zombie_1.svg",
        correct: false,
        text: "ゾンビ",
        audioSrc: "/characters/audio/jp/zombie_1.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        correct: false,
        text: "ロボット",
        audioSrc: "/characters/audio/jp/robot_1.mp3",
      },
      {
        challengeId: 2, // "the man"
        correct: true,
        text: "男",
        audioSrc: "/characters/audio/jp/man_1.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "ゾンビ",
        audioSrc: "/characters/audio/jp/zombie_1.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "女",
        audioSrc: "/characters/audio/jp/woman_1.mp3",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, // Which one of these is "the woman"?
        imageSrc: "/characters/robot_1.svg",
        correct: false,
        text: "ロボット",
        audioSrc: "/characters/audio/jp/robot_1.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/characters/zombie_1.svg",
        correct: false,
        text: "ゾンビ",
        audioSrc: "/characters/audio/jp/zombie_1.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/characters/woman_1.svg",
        correct: true,
        text: "女",
        audioSrc: "/characters/audio/jp/woman_1.mp3",
      },
      {
        challengeId: 3,
        imageSrc: "/characters/man_1.svg",
        correct: false,
        text: "男",
        audioSrc: "/characters/audio/jp/man_1.mp3",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the man"?',
      },
      {
        id: 5,
        lessonId: 2, // Nouns
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 6,
        lessonId: 2, // Nouns
        type: "SELECT",
        order: 3,
        question: 'which one of these is "the woman"?',
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
