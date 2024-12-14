import * as THREE from "three";

const canvas = document.querySelector('canvas');
if (canvas) {

    const w = 650;
    const h = 650
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

    const stoneGroup = new THREE.Group();
    stoneGroup.rotation.z = -23.4 * Math.PI / 180;
    scene.add(stoneGroup);

    const detail = 12;
    const loader = new THREE.TextureLoader();
    const geometry = new THREE.IcosahedronGeometry(1, detail);
    const material = new THREE.MeshPhongMaterial({
        map: loader.load("img/textures/mramor.png"),
        specularMap: loader.load("img/textures/mramor.png"),
        bumpMap: loader.load("img/textures/mramor.png"),
        bumpScale: 0.04,
    });

    const stoneMesh = new THREE.Mesh(geometry, material);
    stoneGroup.add(stoneMesh);

    const scale = 3
    stoneMesh.scale.x = scale;
    stoneMesh.scale.y = scale;
    stoneMesh.scale.z = scale;



    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(-2, 0.5, 1.5);
    scene.add(sunLight);

    function animateStones() {
        requestAnimationFrame(animateStones);

        stoneMesh.rotation.y += 0.002;
        // glowMesh.rotation.y += 0.002;
        renderer.render(scene, camera);
    }

    animateStones();

    function handleWindowResize() {
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);

    }
    window.addEventListener('resize', handleWindowResize, false);
}
