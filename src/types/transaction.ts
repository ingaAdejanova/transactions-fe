export type Values<T> = T[keyof T];

export const TransactionStatusEnum = {
  Rejected: "REJECTED",
  Pending: "PENDING",
  Completed: "COMPLETED",
  Reversed: "REVERSED",
} as const;

export type TransactionStatus = Values<typeof TransactionStatusEnum>;

export const RejectionReasonEnum = {
  NotPermitted: "NOT_PERMITTED",
  InsufficientFunds: "INSUFFICIENT_FUNDS",
  CardMonthlyLimitReached: "CARD_MONTHLY_LIMIT_REACHED",
  CardDailyLimitReached: "CARD_DAILY_LIMIT_REACHED",
  CardExpired: "CARD_EXPIRED",
  CardSuspended: "CARD_SUSPENDED",
  CardNotActive: "CARD_NOT_ACTIVE",
  IncorrectPin: "INCORRECT_PIN",
} as const;

export type RejectionReason = Values<typeof RejectionReasonEnum>;

export type Transaction = {
  id: string;
  userId: string;
  smeId: string;
  transactionTime: string;
  merchantIconUrl: string;
  merchantName: string;
  amount: string;
  currency: "EUR" | "USD";
  status: TransactionStatus;
  rejectionReason: RejectionReason | null;
};
