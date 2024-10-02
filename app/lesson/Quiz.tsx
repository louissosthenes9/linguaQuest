"use client";
import { challengeOptions, challenges } from "@/db/schema";
import React, { useState } from "react";
import Header from "./Header";
import QuestionBubble from "./QuestionBubble";
import Challenge from "./Challenge";
import Footer from "./Footer";

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: any;
};

const Quiz = ({
  initialHearts,
  initialLessonId,
  initialPercentage,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const [challenges, setChallenges] = useState(initialLessonChallenges);
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex((challenge) => {
      !challenge.completed;
    });

    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });
  // current challenge
  const [status, setStatus] = useState<"correct" | "none" | "wrong">("none");
  const challenge = challenges[activeIndex];
  const title =
    challenge.type === "ASSIST"
      ? "Select the corrent meaning"
      : challenge.question;
  const [selectedOption, setSelectedOption] = useState<number>();
  const options = challenge?.challengeOptions ?? [];

  const onSelect = (id: number) => {
    if (status !== "none") return;

    setSelectedOption(id);
  };

  const onNext = () => {
    setActiveIndex((current)=>current + 1)
  }

  const onContinue = ()=>{
      if(!selectedOption) return;

      if(status === "wrong"){
        setStatus("none");
        setSelectedOption(undefined)
        return
      }

      if(status === "correct"){
        onNext()
        setStatus("none");
        setSelectedOption(undefined)
        return
      }

      const correctOption = options.find((option)=> option.correct)
      if(!correctOption){
        return;
      }
      if(correctOption && correctOption.id === selectedOption){
           alert("you are awe")
      }else{
            alert("oops")
      }




     
  }

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
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
            </div>

            <Challenge
              options={options}
              onSelect={onSelect}
              status={status}
              selectedOption={selectedOption}
              disabled={false}
              type={challenge.type}
            />
          </div>
        </div>
      </div>
      <Footer
        disabled={!selectedOption}
        status={status}
        onCheck={onContinue}
        lessonId={false}
      >

      </Footer>
    </>
  );
};

export default Quiz;
