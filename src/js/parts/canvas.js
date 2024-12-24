import * as THREE from "three";
import { gsap } from 'gsap'


const canvas = document.querySelector('.catalog canvas');
if (canvas && window.innerWidth > 1024) {
    const stones = document.querySelectorAll('.catalog ul a');

    let w = window.innerWidth / 3 ?? 650;
    let h = window.innerWidth / 3 ?? 650;
    const scale = 3
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    })

    renderer.setSize(w, h);
    // THREE.ColorManagement.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.setClearColor(0xffffff, 0);
    
    const stoneGroup = new THREE.Group();
    stoneGroup.rotation.z = -23.4 * Math.PI / 180;
    scene.add(stoneGroup);

    const detail = 12;
    const loader = new THREE.TextureLoader();
    const geometry = new THREE.IcosahedronGeometry(1, detail);

    let stoneMeshes = []
    stones.forEach(item => {
        const texture = item.dataset.texture

        const material = new THREE.MeshPhongMaterial({
            map: loader.load(texture),
            specularMap: loader.load(texture),
            bumpMap: loader.load(texture),
            bumpScale: 0.04,
        });

        const mesh = new THREE.Mesh(geometry, material);
        stoneGroup.add(mesh);

        mesh.scale.x = scale;
        mesh.scale.y = scale;
        mesh.scale.z = scale;

        stoneMeshes.push(mesh);

        mesh.material.transparent = true;
        mesh.material.opacity = 0;


        item.addEventListener('mouseenter', () => {
            canvas.style.opacity = 1;

            gsap.to(mesh.material, {
                opacity: 1,
            })
        })

        item.addEventListener('mouseleave', () => {
            canvas.style.opacity = 0;

            gsap.to(mesh.material, {
                opacity: 0,
            })
        })
    })


    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(-2, 0.5, 1.5);
    scene.add(sunLight);

    function animateStones() {
        requestAnimationFrame(animateStones);

        stoneMeshes.forEach(item => {
            item.rotation.y += 0.002;
        })
        // glowMesh.rotation.y += 0.002;
        renderer.render(scene, camera);
    }

    animateStones();

    function handleWindowResize() {
        w = window.innerWidth / 3 ?? 650;
        h = window.innerWidth / 3 ?? 650;

        camera.updateProjectionMatrix();
        console.log(w);

        renderer.setSize(w, h);
    }
    window.addEventListener('resize', handleWindowResize, false);
}
