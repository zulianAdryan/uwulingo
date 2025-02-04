import { lessons, units } from "@/db/schema";
import UnitBanner from "./unit-banner";
import LessonButton from "./lesson-button";

interface Props {
  id: number;
  order: number;
  description: string;
  title: string;
  lessons: Array<typeof lessons.$inferSelect & { completed: boolean }>;
  activeLesson:
    | (typeof lessons.$inferSelect & { unit: typeof units.$inferSelect })
    | undefined;
  activeLessonPercentage: number;
}

const Unit: React.FC<Props> = ({
  id,
  activeLessonPercentage,
  description,
  lessons,
  activeLesson,
  order,
  title,
}) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex flex-col items-center relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={`lesson-${index}`}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};

export default Unit;
