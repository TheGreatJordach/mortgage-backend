import { Test, TestingModule } from "@nestjs/testing";
import { ParsersService } from "./parsers.service";
import {
  Mortgage,
  MortgageType,
} from "../../../src/mortgage/entities/mortgage.entity";

describe("ParsersService", () => {
  let service: ParsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParsersService],
    }).compile();

    service = module.get<ParsersService>(ParsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should convert Mortgage to JSON", () => {
    const mortgage = new Mortgage({
      loanAmount: 100000,
      annualInterestRate: 5,
      type: MortgageType.REPAYMENT,
    });

    const convertedJson = service.toJson(mortgage);
    const parseMortgage = service.fromJson(convertedJson);

    expect(parseMortgage).toEqual(mortgage);
  });

  // handles empty JSON string gracefully
  // handles empty JSON string gracefully
  it("should throw error when given empty JSON string", () => {
    const json = "";
    expect(() => service.fromJson(json)).toThrow(SyntaxError);
  });
});
