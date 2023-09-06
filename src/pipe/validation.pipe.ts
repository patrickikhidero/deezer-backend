import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class ObjectValidationPipe implements PipeTransform {
  constructor(private readonly schema: ObjectSchema) {}
  async transform(data: any): Promise<void> {
    try {
      const value = await this.schema.unknown(false).validateAsync(data, { stripUnknown: true });
      return value;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}