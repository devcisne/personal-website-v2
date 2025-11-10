import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export type UserRole = 'student' | 'instructor' | 'admin';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  passwordHash: string;

  @Column({
    type: 'simple-enum',
    enum: ['student', 'instructor', 'admin'],
    default: 'student',
  })
  role: UserRole;

  @Column({ nullable: true })
  bio?: string;

  @Column({ nullable: true })
  qualifications?: string;

  @Column('integer', { nullable: true })
  hourlyRateCents?: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
