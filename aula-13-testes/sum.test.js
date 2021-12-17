const { sum,  sub, verdade}  = require('./func');

lista = [2,4,6,8];
resp = [4,6,8,10];
listacompras = ['maça', 'banana', 'melancia']
test('somando 2 + itemlista', () => {
    lista.forEach((item,index) => {
        expect(sum(2, item)).toBe(resp[index]);
    });
});

test('subtrair 6 com 4 espero 2', () => {
    expect(sub(6, 4)).toBe(2);
});

test('teste de verdadeiro ou falso', () => {
  expect(verdade(true)).not.toBeNull();
  expect(verdade(true)).toBeDefined();
  expect(verdade(true)).not.toBeUndefined();
  expect(verdade(false)).not.toBeTruthy();
  expect(verdade(false)).toBeFalsy();
})

test('teste de numeros', () => {
  expect(4).toBeGreaterThan(3);
  expect(3).toBeGreaterThanOrEqual(3);
  expect(4).toBeLessThan(5);
  expect(4.5).toBeLessThanOrEqual(4.5);
})

test('se a lista contem', () => {
    expect(listacompras).toContain('banana');
});