import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@rubin530-tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
