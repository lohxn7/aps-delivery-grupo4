// DeliveryExpress - regras de login, senha, frete e cupom

function autenticar(usuarios, email, senha) {
  const usuario = usuarios.find((u) => u.email === email);

  if (!usuario) return false;
  if (usuario.senha !== senha) return false;

  // conta desativada não entra, mesmo acertando a senha
  return usuario.ativo === true;
}

function forcaSenha(senha) {}
function podeLogar(usuario) {}
function calcularFrete(distanciaKm) {}
function aplicarCupom(valor, cupom) {}

module.exports = { autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom };
