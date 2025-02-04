"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { ClassValue } from "clsx";
import { useState } from "react";
import Header from "./header";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";

interface Props {
  className?: ClassValue;
  initialLessonId?: number;
  initialLessonChallenges: Array<
    typeof challenges.$inferSelect & {
      completed: boolean;
      challengeOptions: Array<typeof challengeOptions.$inferSelect>;
    }
  >;
  initialHearts: number;
  initialPercentage: number;
  userSubscriptions: any;
}

export const Quiz = ({
  initialHearts,
  initialLessonChallenges,
  initialPercentage,
  userSubscriptions,
  className,
  initialLessonId,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    );
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const challenge = challenges[activeIndex];
  const options = challenge.challengeOptions ?? [];

  const title =
    challenge.type === "ASSIST"
      ? "Select the correct meaning"
      : challenge.question;

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscriptions?.isActive}
      />
      <div className="flex-1">
        <div className="h-full flex items-center justify-center">
          <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
              {title}
            </h1>
            <div>
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={challenge.question} />
              )}
              <Challenge
                options={options}
                onSelect={() => {}}
                status="none"
                selectedOption={undefined}
                disabled={false}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
