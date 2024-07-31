type TInteraction = {
  /**
   * Telegram user id
   */
  user: number;
  /**
   * Type of interaction with the event
   */
  interaction: (typeof interactions)[number];
};

export const interactions = [
  "partecipate",
  "maybe",
  "not partecipate",
] as const;

export default TInteraction;
