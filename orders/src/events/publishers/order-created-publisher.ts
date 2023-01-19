import { Publisher, Subjects, OrderCreatedEvent } from "@rubin530-tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}