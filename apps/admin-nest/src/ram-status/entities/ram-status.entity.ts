import { Pc } from '@/pc/entities/pc.entity';
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class RamStatus {
  @Field(() => Int, { description: '고유번호 ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { description: 'PC 고유 ID (외래 키)' })
  @Column({ unique: true })
  pcId: number;

  @Field(() => Pc, { description: '관련 PC 정보 (관계 필드)' })
  @OneToOne(() => Pc, (pc) => pc.ramStatus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'pcId' })
  pc: Pc;

  @Field(() => Float, { description: 'RAM 총 용량' })
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true }) // 예시: 전체 5자리, 소수점 2자리
  total?: number;

  @Field(() => Float, { description: 'RAM 최근 사용량' })
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true }) // 예시: 전체 5자리, 소수점 2자리
  current?: number;

  @Field(() => Float, { description: 'RAM 평균 사용량' })
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true }) // 예시: 전체 5자리, 소수점 2자리
  average?: number;

  @Field(() => Float, { description: 'RAM 최저 사용량' })
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true }) // 예시: 전체 5자리, 소수점 2자리
  lowest?: number;

  @Field(() => Float, { description: 'RAM 최고 사용량' })
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true }) // 예시: 전체 5자리, 소수점 2자리
  highest?: number;

  @Field(() => String, { description: 'CPU 사용량 단위: GB' })
  @Column({ default: 'GB' })
  unit: string;

  @Field({ description: '생성 일시' })
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;

  @Field({ description: '업데이트 일시' })
  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: string;
}
