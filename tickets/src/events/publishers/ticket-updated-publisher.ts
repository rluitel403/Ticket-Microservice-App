import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@rubin530-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
