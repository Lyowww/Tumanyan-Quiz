import { QuizState, QuizResult, Character, Question } from "@/types";
import { characters } from "@/data/characters";
import { questions } from "@/data/questions";

/**
 * Maximum possible score per character (sum of best weight per question).
 * Used for confidence percentage so result is not random.
 */
/** Max possible score per character = sum over questions of (max weight in that question's options). */
function getMaxPossibleScores(): { [characterId: string]: number } {
  const out: { [characterId: string]: number } = {};
  characters.forEach((c) => {
    out[c.id] = 0;
  });
  questions.forEach((q) => {
    characters.forEach((c) => {
      let best = 0;
      q.options.forEach((opt) => {
        const w = opt.traits[c.id];
        if (w != null && w > best) best = w;
      });
      out[c.id] += best;
    });
  });
  return out;
}

const maxPossibleByCharacter = getMaxPossibleScores();

/**
 * Weighted scoring: each answer adds that option's trait weight for each character.
 */
export function calculateScores(answers: { [questionId: string]: string }): {
  [characterId: string]: number;
} {
  const scores: { [characterId: string]: number } = {};

  characters.forEach((char) => {
    scores[char.id] = 0;
  });

  Object.entries(answers).forEach(([questionId, answerId]) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const answer = question.options.find((opt) => opt.id === answerId);
    if (!answer) return;

    Object.entries(answer.traits).forEach(([characterId, weight]) => {
      if (scores[characterId] !== undefined) {
        scores[characterId] += weight;
      }
    });
  });

  return scores;
}

/**
 * Get the best match and confidence percentage (based on weighted score vs max possible).
 */
export function getResult(scores: { [characterId: string]: number }): QuizResult {
  const sorted = Object.entries(scores)
    .filter(([, s]) => s > 0)
    .sort((a, b) => b[1] - a[1]);

  const [characterId, maxScore] = sorted[0] ?? [characters[0].id, 0];
  const character = characters.find((c) => c.id === characterId) || characters[0];
  const maxPossible = maxPossibleByCharacter[characterId] || 1;
  const percentage = Math.round((maxScore / maxPossible) * 100);

  return {
    character,
    score: maxScore,
    percentage: Math.min(Math.max(percentage, 0), 100),
  };
}

/**
 * Get quiz progress percentage
 */
export function getProgress(currentIndex: number): number {
  return Math.round(((currentIndex + 1) / questions.length) * 100);
}

/**
 * Check if quiz is complete
 */
export function isQuizComplete(answers: { [questionId: string]: string }): boolean {
  return Object.keys(answers).length === questions.length;
}

/**
 * Get current question
 */
export function getCurrentQuestion(index: number): Question | null {
  return questions[index] || null;
}

/**
 * Get total questions count
 */
export function getTotalQuestions(): number {
  return questions.length;
}
