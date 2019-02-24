var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// variables
var cantDePixeles = 1750;
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById('indicador-de-color');
var colorPersonalizado = document.getElementById('color-personalizado');
var mouseApretado = false;

//Genera la paleta de colores en pantalla
//Selecciona un color de la paleta y lo muestra en el indicador de color
function paletaDeColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = (nombreColores[i]);
    colorDiv.className = "color-paleta";
    paleta.appendChild(colorDiv);
  }
}

//Crea la grilla de pixeles
function grillaDePixeles() {
  for (var i = 0; i < cantDePixeles; i++) {
    var pixel = i;
    pixel = document.createElement('div');
    grillaPixeles.appendChild(pixel);
  }
}

// Muestra en el indicador de color, el color seleccionado
paleta.addEventListener('click', colorIndicador);

function colorIndicador(e) {
  indicadorDeColor.style.backgroundColor = e.target.style.backgroundColor;
}

// pintar un pixel de la grilla
grillaPixeles.addEventListener('click', pintar);

function pintar(e) {
  e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
}

// elegir un color personalizado
colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;
  })
);

// Detecta si el Mouse está Apretado o no
grillaPixeles.addEventListener('mousedown', mantenerClick);
grillaPixeles.addEventListener('mouseup', soltarMouse);
grillaPixeles.addEventListener('mouseover', mouseMoviendo);

function mantenerClick(e) {
  mouseApretado = true;
}

function soltarMouse(e) {
  mouseApretado = false;
}

function mouseMoviendo(e) {
  if (mouseApretado) {
    pintar(e);
  }
}

//borrar la pantalla apretando un botón
$('#borrar').click(function () {
  $('#grilla-pixeles div').animate({
    backgroundColor: 'white'
  }, 2250);
})

// Cargar a los superhéroes en forma de píxeles
function seleccionarSuperheroe() {
  var superheroe = $(this).attr('id');

  switch (superheroe) {
    case 'batman':
      cargarSuperheroe(batman);
      break;

    case 'wonder':
      cargarSuperheroe(wonder);
      break;

    case 'flash':
      cargarSuperheroe(flash);
      break;

    case 'invisible':
      cargarSuperheroe(invisible);
      break;

    default:
      break;
  }
}

$('.imgs img').click(seleccionarSuperheroe);

// descargar dibujo
$('#guardar').click(function () {
  guardarPixelArt();
})

window.onload = function () {
  paletaDeColores();
  grillaDePixeles();
}