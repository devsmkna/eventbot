import TInteraction from "./interaction";

type TEvent = {
  /**
   * Unique identifier of the event
   */
  id: string;
  /**
   * Telegram user id of the creator of the event
   */
  creator: number;
  /**
   * Name of the event
   * @minLenght 5
   * @maxLenght 50
   */
  name: string;
  /**
   * Description of the event, markdown formatted
   * @maxLenght 140
   */
  description?: string;
  /**
   * List of coordinates of the event
   */
  locations?: Array<[number, number]>;
  /**
   * List of Telegram user ids with the interaction to the event
   */
  participants: Array<TInteraction>;
  /**
   * List of dates of the event
   */
  dates: Array<[Date] | [Date, Date]>;
  /**
   * Date of creation of the event
   */
  createdAt: Date;
  /**
   * Date of update of the event
   */
  updatedAt: Date;
};

export type MockTEvent = Omit<TEvent, "id" | "createdAt" | "updatedAt">;
export default TEvent;
