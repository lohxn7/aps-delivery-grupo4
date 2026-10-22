// DeliveryExpress - regras de login, senha, frete e cupom

function autenticar(usuarios, email, senha) {
  const usuario = usuarios.find((u) => u.email === email);

  if (!usuario) return false;
  if (usuario.senha !== senha) return false;

  // conta desativada não entra, mesmo acertando a senha
  return usuario.ativo === true;
}

function forcaSenha(senha) {
  if (senha.length < 8) return 'fraca';

  // conta quantos tipos diferentes de caractere a senha tem
  let tipos = 0;
  if (/[a-z]/.test(senha)) tipos++;
  if (/[A-Z]/.test(senha)) tipos++;
  if (/[0-9]/.test(senha)) tipos++;
  if (/[^a-zA-Z0-9]/.test(senha)) tipos++;

  return tipos >= 3 ? 'forte' : 'media';
}

function podeLogar(usuario) {
  // é < e não <= porque na 3ª falha a conta já fica bloqueada
  return usuario.status === 'ativo' && usuario.falhas < 3;
}

function calcularFrete(distanciaKm) {
  if (distanciaKm <= 0) {
    throw new Error('Distância inválida');
  }

  const taxaFixa = 5;
  if (distanciaKm <= 3) return taxaFixa;

  const kmExcedente = distanciaKm - 3;
  return taxaFixa + kmExcedente * 1.5;
}

function aplicarCupom(valor, cupom) {}

module.exports = { autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom };
