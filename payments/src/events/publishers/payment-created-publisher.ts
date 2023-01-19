import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from "@rubin530-tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
