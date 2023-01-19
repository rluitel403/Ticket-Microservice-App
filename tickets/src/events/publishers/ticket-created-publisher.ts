import { Publisher, Subjects, TicketCreatedEvent } from "@rubin530-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}