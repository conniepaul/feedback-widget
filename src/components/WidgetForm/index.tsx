import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/Bug.svg";
import ideaImageUrl from "../../assets/Idea.svg";
import thoughtImageUrl from "../../assets/Thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Issue',
        image: {
            source: bugImageUrl,
            alt: 'Image of a Bug'
        },
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Image of a Light Bulb'
        },
    },
    OTHER: {
        title: 'Other',
        image: {
            source: thoughtImageUrl,
            alt: 'Image of a Thought Balloon'
        },
    },

};

export type FeedbackType = keyof typeof feedbackTypes;

/* Object.entries(feedbackTypes) -> Array of arrays. Title and characteristics
[
    ['BUG, {...}],
    ['IDEA', {...}],
    ['THOUGHT', {...}]
]

*/

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return(
        <div className = 'bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'> 
          
          {!feedbackType ? (
              <FeedbackTypeStep  onFeedbackTypeChanged = {setFeedbackType} />
          ) : (
              <FeedbackContentStep 
              feedbackType = {feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              />
          )}
            <footer className = "text-xs text-neutral-400">
                Made with love by <a className = "underline underline-offset-2" href="https://github.com/conniepaul">  Connie Paula </a>
            </footer>
        </div>
    );
}