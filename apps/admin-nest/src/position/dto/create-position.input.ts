import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePositionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
