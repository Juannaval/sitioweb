$(document).ready(function(){
      // Al cargar la página, ocultamos las cortinas
      $('.left-curtain').css('width', '0%');
      $('.right-curtain').css('width', '0%');

       // Función para crear un corazón animado
  function createHeart() {
    const heart = $('<div class="heart-animation">&#10084;</div>');
    $('body').append(heart);

    // Configura la posición inicial del corazón
    const startPositionX = Math.random() * $(window).width();
    const startPositionY = -20;
    heart.css({
      left: startPositionX,
      top: startPositionY,
      fontSize: Math.floor(Math.random() * 20) + 10 + 'px', // Tamaño aleatorio entre 10px y 30px
      color: '#e01911', // Color rojo
    });

    // Animación de caída del corazón
    heart.animate(
      {
        top: $(window).height(),
        opacity: 0,
      },
      3000, // Duración de la animación en milisegundos
      function () {
        // Elimina el corazón del DOM después de la animación
        $(this).remove();
      }
    );
  }

  // Función para iniciar la lluvia de corazones
  function startHeartRain() {
    setInterval(createHeart, 100); // Crea un nuevo corazón cada 500 milisegundos
  }
    
      $('.valentines-day').click(function(){
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
        $('.envelope').fadeOut(800, function() {
          // Ocultar elementos dentro de .valentines-day
          $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
          
    // Configuración del confeti
    particlesJS("confetti", {
      particles: {
        number: {
          value: 80,
        },
        shape: {
          type: "heart",
        },
        size: {
          value: 10,
        },
        color: {
          value: "#e01911",
        },
        move: {
          speed: 4,
        },
      },
    });

    // Mostrar el confeti
    $('#confetti').css('visibility', 'visible');

          // Hacer visible la carta con una animación ondulante
          $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
          $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
            var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
            $(this).css('transform', 'scale(' + scale + ')');
          }}); // Animación de ondulación
          // Iniciar la lluvia de corazones
      startHeartRain();
        });
      });
    });
    