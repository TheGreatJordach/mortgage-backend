import { Injectable } from "@nestjs/common";
import { Mortgage } from "../../../src/mortgage/entities/mortgage.entity";
import { AbstractParser } from "@app/parsers/abstract-parsert";

@Injectable()
export class ParsersService extends AbstractParser<Mortgage> {
  fromJson(json: string): Mortgage {
    const data = JSON.parse(json);
    return new Mortgage({
      loanAmount: data.loanAmount,
      annualInterestRate: data.annualInterestRate,
      termYears: data.termYears,
      type: data.type,
    });
  }

  toJson(mortgage: Mortgage): string {
    return JSON.stringify({
      loanAmount: mortgage.loanAmount,
      annualInterestRate: mortgage.annualInterestRate,
      termYears: mortgage.termYears,
      type: mortgage.type,
    });
  }
}
