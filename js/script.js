(function () {
  "use strict";

  var mascaras = {
    cpf: function (v) {
      v = v.replace(/\D/g, "").slice(0, 11);
      return v.replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    },
    telefone: function (v) {
      v = v.replace(/\D/g, "").slice(0, 11);
      if (v.length > 10) return v.replace(/(\d{2})(\d{5})(\d{1,4})/, "($1) $2-$3");
      if (v.length > 6) return v.replace(/(\d{2})(\d{4})(\d{1,4})/, "($1) $2-$3");
      if (v.length > 2) return v.replace(/(\d{2})(\d+)/, "($1) $2");
      return v ? "(" + v : v;
    },
    cep: function (v) {
      v = v.replace(/\D/g, "").slice(0, 8);
      return v.replace(/(\d{5})(\d{1,3})/, "$1-$2");
    }
  };

  function cpfValido(cpf) {
    var n = cpf.replace(/\D/g, "");
    if (n.length !== 11 || /^(\d)\1+$/.test(n)) return false;
    for (var t = 9; t < 11; t++) {
      var soma = 0;
      for (var i = 0; i < t; i++) soma += Number(n[i]) * (t + 1 - i);
      if (((soma * 10) % 11) % 10 !== Number(n[t])) return false;
    }
    return true;
  }

  function soDigitos(campo) {
    campo.addEventListener("keypress", function (e) {
      if (e.key.length === 1 && !/\d/.test(e.key) && !e.ctrlKey && !e.metaKey) e.preventDefault();
    });
  }

  function aplicarMascara(campo, tipo) {
    campo.addEventListener("input", function () {
      campo.value = mascaras[tipo](campo.value);
    });
    soDigitos(campo);
  }

  function mensagem(campo) {
    var v = campo.validity;
    if (v.customError) return campo.validationMessage;
    if (v.valueMissing) return "Preencha este campo.";
    if (v.tooShort) return "Digite pelo menos " + campo.minLength + " caracteres.";
    if (v.typeMismatch) return "Informe um valor válido.";
    if (v.patternMismatch) return campo.dataset.erro || "Formato inválido.";
    if (v.rangeUnderflow || v.rangeOverflow) return "Valor fora do permitido.";
    return campo.validationMessage;
  }

  function mostrarErro(campo) {
    var alvo = document.getElementById(campo.id + "-erro");
    var bloco = campo.closest(".campo");
    var opcionalVazio = !campo.required && !campo.value;
    var valido = campo.checkValidity();
    campo.setAttribute("aria-invalid", !opcionalVazio && !valido ? "true" : "false");
    campo.classList.toggle("tocado", !opcionalVazio);
    if (alvo) alvo.textContent = valido ? "" : mensagem(campo);
    if (bloco) {
      bloco.classList.toggle("invalido", !opcionalVazio && !valido);
      bloco.classList.toggle("valido", !opcionalVazio && valido);
    }
  }

  function closeToast(toast) {
    toast.classList.add("saindo");
    setTimeout(function () { toast.remove(); }, 300);
  }

  function getToastArea() {
    var area = document.getElementById("toast-area");
    if (!area) {
      area = document.createElement("div");
      area.id = "toast-area";
      area.className = "toast-area";
      area.setAttribute("aria-live", "polite");
      document.body.appendChild(area);
    }
    return area;
  }

  function showToast(texto) {
    var area = getToastArea();
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    var msg = document.createElement("span");
    msg.textContent = texto;
    var fechar = document.createElement("button");
    fechar.type = "button";
    fechar.setAttribute("aria-label", "Fechar notificação");
    fechar.textContent = "×";
    fechar.addEventListener("click", function () { closeToast(toast); });
    toast.appendChild(msg);
    toast.appendChild(fechar);
    area.appendChild(toast);
    setTimeout(function () { if (toast.isConnected) closeToast(toast); }, 5000);
  }

  var modal = document.getElementById("modal");
  var gatilho = null;

  function openModal(botao) {
    gatilho = botao;
    document.getElementById("modal-titulo").textContent = botao.dataset.titulo;
    document.getElementById("modal-texto").textContent = botao.dataset.texto;
    modal.hidden = false;
    document.body.classList.add("sem-rolagem");
    requestAnimationFrame(function () { modal.classList.add("aberto"); });
    modal.querySelector(".modal-fechar").focus();
  }

  function closeModal() {
    modal.classList.remove("aberto");
    document.body.classList.remove("sem-rolagem");
    setTimeout(function () { modal.hidden = true; }, 250);
    if (gatilho) gatilho.focus();
  }

  function initModal() {
    if (!modal) return;
    Array.prototype.forEach.call(document.querySelectorAll("[data-texto]"), function (b) {
      b.addEventListener("click", function () { openModal(b); });
    });
    Array.prototype.forEach.call(modal.querySelectorAll("[data-fechar]"), function (b) {
      b.addEventListener("click", closeModal);
    });
    modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;
      if (e.key === "Escape") { closeModal(); return; }
      if (e.key !== "Tab") return;
      var itens = modal.querySelectorAll("button, a[href]");
      var primeiro = itens[0], ultimo = itens[itens.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
    });
  }

  var form = document.getElementById("form-cadastro");
  initModal();
  if (!form) return;
  getToastArea();

  var cpf = form.elements["cpf"];
  aplicarMascara(cpf, "cpf");
  aplicarMascara(form.elements["telefone"], "telefone");
  aplicarMascara(form.elements["cep"], "cep");
  soDigitos(form.elements["numero"]);
  form.elements["nascimento"].max = new Date().toISOString().split("T")[0];

  var campos = form.querySelectorAll("input[type=text],input[type=email],input[type=tel],input[type=date],input[type=number],select,textarea");
  Array.prototype.forEach.call(campos, function (c) {
    c.addEventListener("blur", function () { mostrarErro(c); });
    c.addEventListener("input", function () { if (c.classList.contains("tocado")) mostrarErro(c); });
  });

  cpf.addEventListener("input", function () { cpf.setCustomValidity(""); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    cpf.setCustomValidity("");
    if (cpf.value && !cpf.validity.patternMismatch && !cpfValido(cpf.value)) {
      cpf.setCustomValidity("CPF inválido. Confira os números digitados.");
    }
    Array.prototype.forEach.call(campos, mostrarErro);

    var alertaErro = document.getElementById("alerta-erro");
    var aviso = document.getElementById("mensagem-sucesso");
    aviso.hidden = true;
    if (!form.checkValidity()) {
      alertaErro.hidden = false;
      form.querySelector(":invalid").focus();
      return;
    }
    alertaErro.hidden = true;
    var botao = form.querySelector("button[type=submit]");
    botao.disabled = true;
    botao.textContent = "Enviando...";
    setTimeout(function () {
      form.reset();
      Array.prototype.forEach.call(campos, function (c) {
        c.classList.remove("tocado");
        c.removeAttribute("aria-invalid");
        var bloco = c.closest(".campo");
        if (bloco) bloco.classList.remove("valido", "invalido");
        var alvo = document.getElementById(c.id + "-erro");
        if (alvo) alvo.textContent = "";
      });
      botao.disabled = false;
      botao.textContent = "Enviar cadastro";
      aviso.hidden = false;
      aviso.focus();
      showToast("Cadastro enviado com sucesso!");
    }, 900);
  });
})();