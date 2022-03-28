var renderer = new Renderer(document.getElementById("webgl-canvas"));
renderer.setClearColor(100, 149, 237);
var gl = renderer.getContext();

var objects = [];

var objeto = Mesh.load(gl, "assets/car.obj", "assets/diffuse.png");

objeto.then(function (mesh) {
  propertiesMesh(mesh);
  objects.push(mesh);
});

ShaderProgram.load(gl, "shaders/basic.vert", "shaders/basic.frag").then(
  function (shader) {
    renderer.setShader(shader);
  }
);

// divide to zoom in, multiply to zoom out
var camera = new Camera();
camera.setOrthographic(32, 20, 20);
var light = new Light();

// camera.position = camera.position.translate(0, 0, 0);

propertiesCamera(camera);

drawScene();

function drawScene() {
  renderer.render(camera, light, objects);
  // camera.position = camera.position.rotateY(-Math.PI / 120);
  camera.position = camera.position.scale(1, 1, 1);
  // camera.position = camera.position.translate(-0.1, 0, 0);
  // propertiesCamera(objeto.then((data) => data));
  objeto.then((data) => propertiesMesh(data));
  requestAnimationFrame(drawScene);
}

function toradians(grados) {
  var radians = grados * (Math.PI / 180);
  return radians;
}

function propertiesCamera(camera) {
  camera.position = camera.position.rotateY(toradians(50));
  //camera.position = camera.position.rotateX(toradians(60));
}

function propertiesMesh(mesh) {
  //mesh.position = mesh.position.rotateX(toradians(1));
  mesh.position = mesh.position.rotateY(toradians(1));
  //mesh.position = mesh.position.scale(0.5, 0.5, 0.5);
}
