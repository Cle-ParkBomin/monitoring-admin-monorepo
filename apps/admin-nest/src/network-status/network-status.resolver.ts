import { CreateNetworkStatusInput } from '@/network-status/dto/create-network-status.input';
import { UpdateNetworkStatusInput } from '@/network-status/dto/update-network-status.input';
import { NetworkStatus } from '@/network-status/entities/network-status.entity';
import { NetworkStatusService } from '@/network-status/network-status.service';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => NetworkStatus)
export class NetworkStatusResolver {
  constructor(private readonly networkStatusService: NetworkStatusService) {}

  @Mutation(() => NetworkStatus)
  createNetworkStatus(
    @Args('createNetworkStatusInput') createNetworkStatusInput: CreateNetworkStatusInput,
  ) {
    return this.networkStatusService.create(createNetworkStatusInput);
  }

  @Query(() => [NetworkStatus], {
    name: 'networkStatusList',
    description: '모든 Network Status 목록 조회',
  })
  findAll() {
    return this.networkStatusService.findAll();
  }

  @Query(() => NetworkStatus, {
    name: 'networkStatusDetail',
    description: '특정 ID의 Network Status 정보 조회',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.networkStatusService.findOne(id);
  }

  @Mutation(() => NetworkStatus)
  updateNetworkStatus(
    @Args('updateNetworkStatusInput') updateNetworkStatusInput: UpdateNetworkStatusInput,
  ) {
    return this.networkStatusService.update(updateNetworkStatusInput.id, updateNetworkStatusInput);
  }

  @Mutation(() => NetworkStatus)
  removeNetworkStatus(@Args('id', { type: () => Int }) id: number) {
    return this.networkStatusService.remove(id);
  }
}
