import { orderBy  } from '../src/data.js';
import data from './data/ghibli.js'
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
/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
