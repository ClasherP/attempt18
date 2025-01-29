import Geometries from 'three/src/renderers/common/Geometries.js';
import './style.css';
import * as THREE from 'three'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.x = -0.012
camera.position.y = 1.3993922364457602e-15
camera.position.z = 4.94
renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshStandardMaterial({wireframe: true, color: 0xA6324});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight( 0xffffff,500);
pointLight.position.set(5,0,20)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight,pointLight)


const controls = new OrbitControls(camera,renderer.domElement);

function checkOrientation() {
  //const warningScreen = document.getElementById("warning-screen");
  //const content = document.getElementById("main-content");

  if (window.innerHeight > window.innerWidth) {
      // Portrait mode
      //warningScreen.style.display = "flex"; // Show warning
      //content.style.display = "none"; // Hide content

      alert("Please switch to landscape mode and reload the page")

  } else {
      // Landscape mode
      //warningScreen.style.display = "none"; // Hide warning
      //content.style.display = "block"; // Show content
      console.log("potraitn")

  }
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Run on load
checkOrientation();

// Listen for orientation changes
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

function addStars(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff})
  const star = new THREE.Mesh(geometry, material)

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x,y,z);
  scene.add(star)
}

Array(400).fill().forEach(addStars)

const spaceTexture = new THREE.TextureLoader().load("https://i.imgur.com/uPAhPyQ.jpeg")
scene.background = spaceTexture;

const meTexture = new THREE.TextureLoader().load("https://i.imgur.com/tJyjrh4.jpeg")
const me = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial( {map: meTexture})
);

const moonTexture = new THREE.TextureLoader().load("https://i.imgur.com/znAOnpp_d.webp?maxwidth=760&fidelity=grand");
const normalTexture = new THREE.TextureLoader().load("https://i.imgur.com/Ky7BaYj.jpeg");
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial( {map: moonTexture, normalMap: normalTexture})
);

scene.add(me)
scene.add(moon)

moon.position.z = 30;
moon.position.setX(-10);

me.position.setX(3);
torus.position.setX(3);
function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.025;
  moon.rotation.y += 0.014;
  moon.rotation.z += 0.05;

  me.rotation.y += 0.05;
  me.rotation.z += 0.05;

  camera.position.z = 5+(t * -0.01);
  camera.position.x = (t * -0.002);
  camera.rotation.y = (t * -0.002);
}

document.body.onscroll = moveCamera
function animate(){

  requestAnimationFrame( animate );

  torus.rotation.x = torus.rotation.x + 0.01;
  torus.rotation.y = torus.rotation.y + 0.0005;
  torus.rotation.z = torus.rotation.z + 0.01;

  controls.update();

  renderer.render(scene,camera);

}
animate()
