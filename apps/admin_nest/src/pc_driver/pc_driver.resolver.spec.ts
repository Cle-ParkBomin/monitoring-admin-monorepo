import { PcDriverResolver } from '@/pc_driver/pc_driver.resolver';
import { PcDriverService } from '@/pc_driver/pc_driver.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('PcDriverResolver', () => {
  let resolver: PcDriverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcDriverResolver, PcDriverService],
    }).compile();

    resolver = module.get<PcDriverResolver>(PcDriverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
