// Reviewer Notes Properties

export interface ReviewerNotes {
  initial: { reviewer: string | null; notes: string | null };
  interview: { reviewer: string | null; notes: string | null };
  final: { reviewer: string | null; notes: string | null };
}
