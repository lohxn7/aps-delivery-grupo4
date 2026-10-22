const {
  autenticar,
  forcaSenha,
  podeLogar,
  calcularFrete,
  aplicarCupom,
} = require('./delivery');

// base usada nos testes de login (F1), igual à do enunciado
const usuarios = [
  { email: 'ana@delivery.com', senha: 'Ana12345', ativo: true },
  { email: 'bruno@delivery.com', senha: 'Bruno#2024', ativo: false },
];

describe('F1 - autenticar', () => {
  test('CT-01: e-mail e senha corretos de conta ativa autentica', () => {
    expect(autenticar(usuarios, 'ana@delivery.com', 'Ana12345')).toBe(true);
  });

  test('CT-02: senha errada não autentica', () => {
    expect(autenticar(usuarios, 'ana@delivery.com', 'senhaerrada')).toBe(false);
  });

  test('CT-03: e-mail que não existe não autentica', () => {
    expect(autenticar(usuarios, 'ninguem@delivery.com', 'Ana12345')).toBe(false);
  });

  test('CT-04: conta inativa não autentica mesmo com a senha certa', () => {
    expect(autenticar(usuarios, 'bruno@delivery.com', 'Bruno#2024')).toBe(false);
  });
});

describe('F2 - forcaSenha', () => {
  test('CT-05: senha com menos de 8 caracteres é fraca', () => {
    expect(forcaSenha('Ab1')).toBe('fraca');
  });

  test('CT-06: 8 caracteres só com dígitos é media', () => {
    expect(forcaSenha('12345678')).toBe('media');
  });

  test('CT-07: 8 caracteres com minúsculas e maiúsculas é media', () => {
    expect(forcaSenha('Abcdefgh')).toBe('media');
  });

  test('CT-08: 8 caracteres com os 4 tipos é forte', () => {
    expect(forcaSenha('Abcdef1!')).toBe('forte');
  });
});
