import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum MortgageType {
  REPAYMENT = "repayment",
  INTEREST_ONLY = "interest-only",
}

@Entity({ name: "Mortgage" })
export class Mortgage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  loanAmount: number;

  @Column()
  annualInterestRate: number;

  @Column()
  termYears: number;

  @Column({
    type: "enum",
    default: MortgageType.INTEREST_ONLY,
  })
  type: MortgageType;

  constructor(newMortgage: Partial<Mortgage>) {
    Object.assign(this, newMortgage);
  }
}
