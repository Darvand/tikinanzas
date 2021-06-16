import { ApiProperty } from '@nestjs/swagger';

export class Source {
  id: number;
  @ApiProperty()
  name: SourceName;
  description: string;
}

enum SourceName {
  SALARY = 'Salary',
  ACCOUNT = 'Account',
  CREDIT_CARD = 'Credit Card',
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

enum CategoryName {
  FOOD = 'Food',
  TRAVEL = 'Travel',
  TAX = 'Tax',
  COMBUSTIBLE = 'Combustible',
  GAMES = 'Games',
  HEALTH = 'Health',
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
