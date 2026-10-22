function autenticar(usuarios, email, senha) {
  for (const u of usuarios) {
    if (u.email === email && u.senha === senha && u.ativo) {
      return true;
    }
  }
  return false;
}

function forcaSenha(senha) {
  if (senha.length < 8) {
    return 'fraca';
  }

  let tipos = 0;
  if (/[a-z]/.test(senha)) tipos++;
  if (/[A-Z]/.test(senha)) tipos++;
  if (/[0-9]/.test(senha)) tipos++;
  if (/[^a-zA-Z0-9]/.test(senha)) tipos++; // simbolo

  if (tipos >= 3) {
    return 'forte';
  }
  return 'media';
}

function podeLogar(usuario) {
  if (usuario.status !== 'ativo') {
    return false;
  }
  return usuario.falhas < 3; // com 3 falhas ja bloqueia
}

function calcularFrete(distanciaKm) {
  if (distanciaKm <= 0) {
    throw new Error('Distância inválida');
  }
  if (distanciaKm <= 3) {
    return 5;
  }
  return 5 + (distanciaKm - 3) * 1.5;
}

function aplicarCupom(valor, cupom) {
  if (!cupom) {
    return valor;
  }

  let desconto;
  if (cupom === 'PRIMEIRA10') {
    desconto = 10;
  } else if (cupom === 'VIP20') {
    desconto = 20;
  } else {
    throw new Error('Cupom inválido');
  }

  const total = valor - (valor * desconto) / 100;
  return Math.round(total * 100) / 100;
}

module.exports = { autenticar, forcaSenha, podeLogar, calcularFrete, aplicarCupom };
