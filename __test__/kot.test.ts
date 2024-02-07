import { kot } from '../src/sum';
import { describe, it, expect } from 'vitest';

describe('test kota ', () => {
  it('return 0 with no numbers', () => {
    expect(kot()).toBe(0);
  });
  it('return current value', () => {
    expect(kot(1, 2, 3)).toBe(6);
  });
});
