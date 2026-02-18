// Character types — only real heroes from specific Tumanyan works
export interface Character {
  id: string;
  name: string;
  nameEn: string;
  /** Which Tumanyan work they are from (Armenian) */
  workTitle: string;
  /** 3–5 sentence explanation why user matches (Armenian) */
  explanation: string;
  description: string;
  personality: string[];
  strengths: string[];
  weaknesses: string[];
  traits: {
    [key: string]: number; // Trait name -> weight (for reference)
  };
  color: string;
  gradient: string;
  /** Image path for the hero character */
  image?: string;
}

// Question types
export interface Question {
  id: string;
  text: string;
  options: AnswerOption[];
}

export interface AnswerOption {
  id: string;
  text: string;
  traits: {
    [characterId: string]: number; // Character ID -> score weight
  };
}

// Quiz state
export interface QuizState {
  currentQuestionIndex: number;
  answers: {
    [questionId: string]: string; // Question ID -> Answer ID
  };
  scores: {
    [characterId: string]: number;
  };
}

// Result
export interface QuizResult {
  character: Character;
  score: number;
  percentage: number;
}
