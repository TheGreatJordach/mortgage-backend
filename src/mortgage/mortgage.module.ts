import { Module } from "@nestjs/common";
import { MortgageService } from "./mortgage.service";
import { MortgageController } from "./mortgage.controller";

@Module({
  controllers: [MortgageController],
  providers: [MortgageService],
})
export class MortgageModule {}
