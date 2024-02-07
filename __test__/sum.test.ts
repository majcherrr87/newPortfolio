import { sum } from '../src/sum';
import { describe, it, expect } from 'vitest';

describe('#sum', () => {
  it('return 0 with no numbers', () => {
    expect(sum()).toBe(0);
  });
  it('return current value', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
