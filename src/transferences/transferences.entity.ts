import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum SourceName {
  SALARY = 'Salary',
  ACCOUNT = 'Account',
  CREDIT_CARD = 'Credit Card',
}

export enum CategoryName {
  FOOD = 'Food',
  TRAVEL = 'Travel',
  TAX = 'Tax',
  COMBUSTIBLE = 'Combustible',
  GAMES = 'Games',
  HEALTH = 'Health',
}
@Entity()
export class Transference {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
  @Column({ type: 'int' })
  amount: number;
  @Column({ type: 'enum', enum: SourceName })
  source: SourceName;
  @Column({ type: 'timestamp' })
  date: Date;
  @Column({ type: 'enum', enum: CategoryName })
  category: CategoryName;
  @ManyToOne(() => User, (user) => user.transferences, { nullable: false })
  user: User;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;
}

export class Source {
  id: number;
  @ApiProperty()
  name: SourceName;
  description: string;
}

export const SOURCES: Record<SourceName, Source> = {
  [SourceName.ACCOUNT]: {
    id: 1,
    name: SourceName.ACCOUNT,
    description: 'Transferences from account',
  },
  [SourceName.CREDIT_CARD]: {
    id: 2,
    name: SourceName.CREDIT_CARD,
    description: 'Transferences from a credit card',
  },
  [SourceName.SALARY]: {
    id: 3,
    name: SourceName.SALARY,
    description: 'Transferences from salary',
  },
};

export class Category {
  id: number;
  @ApiProperty()
  name: CategoryName;
  description: string;
}

export const CATEGORIES: Record<CategoryName, Category> = {
  [CategoryName.FOOD]: {
    id: 1,
    name: CategoryName.FOOD,
    description: 'Everything related to food',
  },
  [CategoryName.COMBUSTIBLE]: {
    id: 2,
    name: CategoryName.COMBUSTIBLE,
    description: 'Everything related to combustible',
  },
  [CategoryName.GAMES]: {
    id: 3,
    name: CategoryName.GAMES,
    description: 'Everything related to games',
  },
  [CategoryName.HEALTH]: {
    id: 4,
    name: CategoryName.HEALTH,
    description: 'Everything related to health',
  },
  [CategoryName.TAX]: {
    id: 5,
    name: CategoryName.TAX,
    description: 'Everything related to tax',
  },
  [CategoryName.TRAVEL]: {
    id: 6,
    name: CategoryName.TRAVEL,
    description: 'Everything related to travel',
  },
};
