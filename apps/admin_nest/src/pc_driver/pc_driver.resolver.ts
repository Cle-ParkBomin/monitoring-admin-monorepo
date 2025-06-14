import { CreatePcDriverInput } from '@/pc_driver/dto/create-pc_driver.input';
import { UpdatePcDriverInput } from '@/pc_driver/dto/update-pc_driver.input';
import { PcDriver } from '@/pc_driver/entities/pc_driver.entity';
import { PcDriverService } from '@/pc_driver/pc_driver.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => PcDriver)
export class PcDriverResolver {
  constructor(private readonly pcDriverService: PcDriverService) {}

  @Mutation(() => PcDriver)
  createPcDriver(@Args('createPcDriverInput') createPcDriverInput: CreatePcDriverInput) {
    return this.pcDriverService.create(createPcDriverInput);
  }

  @Query(() => [PcDriver], { name: 'pcDriverList', description: '모든 PC Driver 목록 조회' })
  findAll() {
    return this.pcDriverService.findAll();
  }

  @Query(() => PcDriver, { name: 'pcDriverDetail', description: '특정 ID의 PC Driver 정보 조회' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pcDriverService.findOne(id);
  }

  @Mutation(() => PcDriver)
  updatePcDriver(@Args('updatePcDriverInput') updatePcDriverInput: UpdatePcDriverInput) {
    return this.pcDriverService.update(updatePcDriverInput.id, updatePcDriverInput);
  }

  @Mutation(() => PcDriver)
  removePcDriver(@Args('id', { type: () => Int }) id: number) {
    return this.pcDriverService.remove(id);
  }
}
