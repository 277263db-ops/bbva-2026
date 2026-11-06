const salir = ()=>location.href = "https://www.provincial.com/personas.html";
const facebook = ()=>window.open("https://www.facebook.com/BBVAProvincial.Venezuela", "_blank");
const twitter = ()=>window.open("https://twitter.com/bbvaprovincial", "_blank");
const instagram = ()=>window.open("https://www.instagram.com/bbvaprovincial/", "_blank");
const linke = ()=>window.open("https://ve.linkedin.com/company/bbva-banco-provincial", "_blank");
const youtube = ()=>window.open("https://www.youtube.com/user/venezuelabbva?feature=mhsn", "_blank");

// =========================================================
// FUNCIÃ“N ESPECÃFICA PARA EL SELECT (DROPDOWN)
// =========================================================
function inicializarSelectPersonalizado() {
    
    var $trigger = $('#custom-select-trigger');
    var $menu = $('#custom-options-container');
    var $hiddenSelect = $('#select_doc');
    var $wrapper = $('.custom-select-wrapper');

    // 1. INICIALIZAR VALOR (Importante para "Recordar Usuario")
    // Si el select oculto ya tiene un valor, actualizamos el texto visual
    var valorInicial = $hiddenSelect.val();
    if(valorInicial) {
        var textoInicial = $hiddenSelect.find("option[value='" + valorInicial + "']").text();
        if(textoInicial) {
            $('.selected-value').text(textoInicial);
            $wrapper.addClass('has-value');
        }
    }

    // 2. ABRIR / CERRAR MENÃš (Click en el botÃ³n)
    $trigger.off('click').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        if ($menu.is(':visible')) {
            $menu.hide();
            $trigger.removeClass('active'); // Rota la flecha hacia abajo
        } else {
            $menu.show();
            $trigger.addClass('active'); // Rota la flecha hacia arriba
        }
    });

    // 3. SELECCIONAR UNA OPCIÃ“N
    $('.custom-option').off('click').on('click', function() {
        var value = $(this).data('value');
        var text = $(this).text();

        // Actualizar UI
        $('.selected-value').text(text);
        $menu.hide();
        $trigger.removeClass('active');
        $wrapper.addClass('has-value');

        // Actualizar Select Oculto
        $hiddenSelect.val(value);

        // Disparar eventos de cambio (Ãºtil si tienes otras validaciones)
        if(typeof Cambio === 'function'){ 
            Cambio(); 
        } else { 
            $hiddenSelect.trigger('change'); 
        }
    });

    // 4. CERRAR AL HACER CLIC AFUERA
    $(document).on('click', function(e) {
        if (!$wrapper.is(e.target) && $wrapper.has(e.target).length === 0) {
            $menu.hide();
            $trigger.removeClass('active');
        }
    });
}