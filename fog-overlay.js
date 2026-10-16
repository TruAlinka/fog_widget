// fog-overlay.js
(function(){
var overlayId = 'fog-overlay';
function ensureOverlay(){
var el = document.getElementById(overlayId);
if (!el){
el = document.createElement('div');
el.id = overlayId;
el.className = 'fog-overlay';
document.body.appendChild(el);
}
return el;
}

// Публичная функция: показать туман на ms миллисекунд
window.showFog = function(ms){
var fog = ensureOverlay();
fog.classList.add('visible');
// безопасная установка длительности
fog.style.setProperty('--fog-overlay-alpha', '0.92');
setTimeout(function(){
fog.classList.remove('visible');
}, (typeof ms === 'number' ? ms : 2000));
};

// Делегирование кликов: если клик по неправильному варианту — показываем туман
document.addEventListener('click', function(e){
var target = e.target.closest('[data-status="incorrect"], .incorrect-option');
if (target){
// длительность можно менять по желанию; по умолчанию 2500 мс
window.showFog(2500);
}
}, true); // схватка на стадии захвата, чтобы перехватить до обычных обработчиков
})();
