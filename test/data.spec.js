import { orderBy ,posters, vehicleFilter, currentValue } from 'data-lovers/src/data';
import data from 'data-lovers/test/data/ghibli'
//import dataOrderByAZ from './data/ghibliOrderByAZ.js'


describe('orderBy', () => {
  it('is a function', () => {
    expect(typeof orderBy).toBe('function');
  });

  it('deberia retornar un arreglo ordenado (AZ)', () => {
    const result = orderBy(data, 'AZ')
    expect(result).toEqual(data[0],data[3],data[2], data[1], data[4]);
  });

});

test('obtener poster', () => {
  expect(data()).toContain('poster');
});

describe('posters', () => {
  
  it('deberia retornar el arreglo de posters', () => {
    expect(typeof posters).toBe('function')
   // expect(Array.isArray(result)).toBe(true)
  });

  it('deberia retornar el arreglo de posters', () => {
    const result = posters(data)
    expect(typeof result).toBe('array')
   // expect(Array.isArray(result)).toBe(true)
  });

});

describe('vehicleFilter', () => {
  const expected = vehicleFilter('castillo vagabundo',data);

  it('matches if the actual array does not contain the expected elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(
      expect.not.arrayContaining(expected),
    );
  });
});


describe('getUniqueValues', () => {
  const expected = currentValue;

  it('should not return the first element of every index', () => {
    for(let i = 0; i<expected.length;i++)
      for(let j = 0; j<expected.length;j++)
      expect(expected[i]).not.toEqual(expected[j])
  });
});

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/
