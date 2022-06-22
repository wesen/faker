import { afterEach, describe, expect, it } from 'vitest';
import { faker } from '../src';
import { seededRuns } from './support/seededRuns';

const functionNames = [
  'bear',
  'bird',
  'cat',
  'cetacean',
  'cow',
  'crocodilia',
  'dog',
  'fish',
  'horse',
  'insect',
  'lion',
  'rabbit',
  'snake',
  'type',
];

describe('animal', () => {
  afterEach(() => {
    faker.locale = 'en';
  });

  for (const seed of seededRuns) {
    describe(`seed: ${seed}`, () => {
      for (const functionName of functionNames) {
        it(`${functionName}()`, () => {
          faker.seed(seed);

          const actual = faker.animal[functionName]();

          expect(actual).toMatchSnapshot();
        });
      }
    });
  }

  describe(`random seeded tests for seed ${JSON.stringify(
    faker.seed()
  )}`, () => {
    for (const functionName of functionNames) {
      describe(`${functionName}()`, () => {
        it(`should return random value from ${functionName} array`, () => {
          const actual = faker.animal[functionName]();
          expect(faker.definitions.animal[functionName]).toContain(actual);
        });
      });
    }
  });
});
