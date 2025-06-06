import { describe, it, expect } from 'vitest';
import { heroesData, findHero, createHeroNameMap } from '../src/heroes';

describe('Heroes Data Structure', () => {
  it('should have correct number of initial heroes', () => {
    expect(heroesData.length).toBe(5);
  });

  it('should create a case-insensitive hero map', () => {
    const heroMap = createHeroNameMap();
    
    // Simplified test cases
    const testCases = [
      'spider-man', 
      'SPIDER-MAN', 
      'spiderman', 
      'peter parker'
    ];

    testCases.forEach(variant => {
      const hero = heroMap.get(variant);
      
      // Debug information
      console.log(`Variant: ${variant}, Hero:`, hero);
      
      expect(hero).toBeDefined();
      expect(hero?.name).toBe('Spider-Man');
      expect(hero?.alterEgo).toBe('Peter Parker');
    });
  });

  it('should find hero by name (case-insensitive)', () => {
    const testCases = [
      'Spider-Man', 
      'spider-man', 
      'SPIDER-MAN', 
      'spiderman'
    ];

    testCases.forEach(name => {
      const hero = findHero(name);
      
      // Debug information
      console.log(`Name: ${name}, Hero:`, hero);
      
      expect(hero).toBeDefined();
      expect(hero?.name).toBe('Spider-Man');
    });
  });

  it('should find hero by alter ego (case-insensitive)', () => {
    const testCases = [
      'Peter Parker', 
      'peter parker', 
      'PETER PARKER', 
      'peterparker'
    ];

    testCases.forEach(name => {
      const hero = findHero(name);
      
      // Debug information
      console.log(`Name: ${name}, Hero:`, hero);
      
      expect(hero).toBeDefined();
      expect(hero?.alterEgo).toBe('Peter Parker');
    });
  });

  it('should return undefined for non-existent hero', () => {
    const nonExistentHeroes = [
      'Non-Existent Hero', 
      'Random Name', 
      '', 
      '   '
    ];

    nonExistentHeroes.forEach(name => {
      const hero = findHero(name);
      expect(hero).toBeUndefined();
    });
  });
});