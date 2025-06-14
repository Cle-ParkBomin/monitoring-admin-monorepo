import { RamStatusService } from '@/ram_status/ram_status.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RamStatusService', () => {
  let service: RamStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RamStatusService],
    }).compile();

    service = module.get<RamStatusService>(RamStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
