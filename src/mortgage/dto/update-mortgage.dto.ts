import { PartialType } from "@nestjs/mapped-types";
import { CreateMortgageDto } from "./create-mortgage.dto";

export class UpdateMortgageDto extends PartialType(CreateMortgageDto) {}
