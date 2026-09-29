import * as three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new three.Scene();
scene.background=new three.Color(0x000000);

const camera = new three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1, 
    1000);

camera.position.set(0, 1, 5);

const renderer = new three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new three.BoxGeometry(1.5, 1.5, 1.5);
const material = new three.MeshStandardMaterial({ color: 0xE8431C });
const cube = new three.Mesh(geometry, material);
scene.add(cube);

const light = new three.AmbientLight(0xffffff, 2.5);
scene.add(light);

const dirLight = new three.DirectionalLight(0xffffff, 2.5);
scene.add(dirLight);

const control = new OrbitControls(camera, renderer.domElement);

function animate() {

    requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    control.update();
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}); 


