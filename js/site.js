"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const root = document.getElementById("pdsCarousel");
  if (root) {
    const track = root.querySelector(".carousel-track");
    const slides = [...root.querySelectorAll(".carousel-slide")];
    const prevBtn = root.querySelector(".carousel-btn.prev");
    const nextBtn = root.querySelector(".carousel-btn.next");
    const dotsWrap = root.querySelector(".carousel-dots");
    if (track && slides.length && prevBtn && nextBtn && dotsWrap) {
      let index = 0;
      let timer = null;
      let startX = null;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      dotsWrap.innerHTML = "";
      const dots = slides.map((_, i) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "carousel-dot";
        button.setAttribute("aria-label", `Ir a la imagen ${i + 1}`);
        button.addEventListener("click", () => goto(i, true));
        dotsWrap.append(button);
        return button;
      });

      function render() {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
          dot.setAttribute("aria-current", i === index ? "true" : "false");
        });
      }
      function stop() {
        if (timer !== null) window.clearInterval(timer);
        timer = null;
      }
      function start() {
        stop();
        if (!reduceMotion && !document.hidden && !root.matches(":hover") && !root.contains(document.activeElement)) {
          timer = window.setInterval(() => goto(index + 1, false), 6500);
        }
      }
      function goto(next, manual = true) {
        index = (next + slides.length) % slides.length;
        render();
        if (manual) start();
      }
      prevBtn.addEventListener("click", () => goto(index - 1));
      nextBtn.addEventListener("click", () => goto(index + 1));
      root.addEventListener("mouseenter", stop);
      root.addEventListener("mouseleave", start);
      root.addEventListener("focusin", stop);
      root.addEventListener("focusout", () => window.requestAnimationFrame(start));
      document.addEventListener("visibilitychange", start);
      root.addEventListener("touchstart", event => {
        if (event.target.closest("a, button, input, video")) return;
        startX = event.touches[0].clientX;
        stop();
      }, { passive: true });
      root.addEventListener("touchend", event => {
        if (startX === null) return;
        const delta = event.changedTouches[0].clientX - startX;
        startX = null;
        if (Math.abs(delta) > 45) goto(index + (delta < 0 ? 1 : -1));
        start();
      }, { passive: true });
      render();
      start();
    }
  }

  // On the trial form, each group only offers its own real schedule.
  const trialGroup = document.getElementById("cp_grupo");
  const trialSchedule = document.getElementById("cp_horario");
  if (trialGroup && trialSchedule) {
    const initialGroupNodes = [...trialSchedule.querySelectorAll("optgroup")].map(node => node.cloneNode(true));
    function updateSchedule() {
      const selection = trialGroup.value;
      trialSchedule.querySelectorAll("optgroup").forEach(node => node.remove());
      for (const group of initialGroupNodes) {
        if (selection.includes("Ballet") && group.label.startsWith("Ballet")) {
          trialSchedule.append(group.cloneNode(true));
        } else if (selection.includes("Jazz") && group.label.startsWith("Jazz")) {
          trialSchedule.append(group.cloneNode(true));
        }
      }
      trialSchedule.selectedIndex = 0;
      trialSchedule.disabled = !selection;
    }
    trialGroup.addEventListener("change", updateSchedule);
    updateSchedule();
  }

  // Hide unavailable discipline checkbox groups and prevent an empty selection.
  const registration = document.querySelector("#matricula form");
  const registrationGroup = document.getElementById("m_grupo");
  if (registration && registrationGroup) {
    const scheduleBlocks = [...registration.querySelectorAll(".schedule-form-block")];
    function updateRegistrationGroups() {
      const selection = registrationGroup.value;
      scheduleBlocks.forEach(block => {
        const ballet = block.querySelector("h4")?.textContent?.includes("Ballet");
        const visible = !selection || selection.includes(" + ") || (ballet ? selection.includes("Ballet") : selection.includes("Jazz"));
        block.hidden = !visible;
        if (!visible) block.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
      });
    }
    registrationGroup.addEventListener("change", updateRegistrationGroups);
    registration.addEventListener("submit", event => {
      const any = [...registration.querySelectorAll('input[name="Horarios[]"]')].some(cb => cb.checked);
      if (!any) {
        event.preventDefault();
        const visible = [...registration.querySelectorAll('input[name="Horarios[]"]')].find(cb => !cb.closest("[hidden]"));
        window.alert("Seleccioná al menos un horario disponible para continuar con la matrícula.");
        visible?.focus();
      }
    });
    updateRegistrationGroups();
  }
});
