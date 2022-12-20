import * as Three from 'three'
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';

// Set up the scene
const scene = new Three.Scene();

// Set up the camera
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// Set up the renderer
const renderer = new Three.WebGLRenderer({ canvas: document.getElementById("myCanvas") });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up the blue sphere
const geometry = new Three.SphereGeometry(1, 32, 32);
const material = new Three.MeshPhongMaterial({
    color: 0x0000ff
});
const sphere = new Three.Mesh(geometry, material);
scene.add(sphere);
console.log(sphere.position);



// Create a light and set its position
const light = new Three.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);

// Add the light to the scene
scene.add(light);

// Set up the camera controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;

// Set up the render loop
const animate = function() {
    requestAnimationFrame(animate);

    controls.update();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
};

animate();