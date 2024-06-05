import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import TWEEN from '@tweenjs/tween.js';
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Viewer = () => {
  const viewerRef = useRef();
  const controlsRef = useRef();
  const cameraRef = useRef();
  let modelCenter = new THREE.Vector3();

  useEffect(() => {
    const container = viewerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#000000'); // Set background to black

    const camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 1, 500);
    camera.position.set(0, 0, 100);
    cameraRef.current = camera;

    const ambientLight = new THREE.AmbientLight(0x606060);
    scene.add(ambientLight);

    const directionalLights = [
      [1, 0, 1],
      [-1, 0, 1],
      [1, 0, -1],
      [-1, 0, -1],
    ];

    directionalLights.forEach((pos) => {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(...pos).normalize();
      scene.add(directionalLight);
    });

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.enableRotate = true;
    controlsRef.current = controls;

    const stlLoader = new STLLoader();
    const urlParams = new URLSearchParams(window.location.search);
    const fileName = urlParams.get('file');
    const stlFilePath = `${import.meta.env.BASE_URL}${fileName}`; // Assumes files are in the public folder

    stlLoader.load(stlFilePath, (geometry) => {
      const material = new THREE.MeshPhongMaterial({ color: 0xff5533, specular: 0x111111, shininess: 200 });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const boundingBox = new THREE.Box3().setFromObject(mesh);
      modelCenter = boundingBox.getCenter(new THREE.Vector3());
      zoomAndCenterModel(camera, controls, boundingBox);

      document.getElementById('file-header').innerText = 'STAI GUARDANDO: ' + fileName;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  const zoomAndCenterModel = (camera, controls, boundingBox) => {
    const size = boundingBox.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
    cameraZ *= 1.5;
    camera.position.z = cameraZ;

    controls.target.set(modelCenter.x, modelCenter.y, modelCenter.z);
    controls.update();
  };

  const setCameraView = (vector, lookAt) => {
    new TWEEN.Tween(cameraRef.current.position)
      .to({ x: vector.x, y: vector.y, z: vector.z }, 600)
      .easing(TWEEN.Easing.Cubic.Out)
      .onUpdate(() => cameraRef.current.updateProjectionMatrix())
      .start();

    new TWEEN.Tween(controlsRef.current.target)
      .to({ x: lookAt.x, y: lookAt.y, z: lookAt.z }, 600)
      .easing(TWEEN.Easing.Cubic.Out)
      .onUpdate(() => controlsRef.current.update())
      .start();
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-3xl font-extrabold p-4 rounded-lg z-10 text-center uppercase" id="file-header"></div>
      <div className="relative" id="stl-viewer" ref={viewerRef} style={{ width: '100%', height: '100vh' }}></div>
      <div className="absolute right-10 bottom-10 flex flex-col z-10" id="view-controls">
        <button className="bg-gray-900 p-2 m-1 rounded-lg border border-gray-700 cursor-pointer opacity-75 hover:opacity-100" id="view-top" title="Top View" onClick={() => setCameraView({ x: 0, y: 40, z: 0 }, modelCenter)}>
          <FaArrowUp />
        </button>
        <button className="bg-gray-900 p-2 m-1 rounded-lg border border-gray-700cursor-pointer opacity-75 hover:opacity-100" id="view-front" title="Front View" onClick={() => setCameraView({ x: 0, y: 0, z: 40 }, modelCenter)}>
          <FaArrowDown />
        </button>
        <button className="bg-gray-900 p-2 m-1 rounded-lg border border-gray-700 cursor-pointer opacity-75 hover:opacity-100" id="view-left" title="Left View" onClick={() => setCameraView({ x: -40, y: 0, z: 0 }, modelCenter)}>
          <FaArrowLeft />
        </button>
        <button className="bg-gray-900 p-2 m-1 rounded-lg border border-gray-700 cursor-pointer opacity-75 hover:opacity-100" id="view-right" title="Right View" onClick={() => setCameraView({ x: 40, y: 0, z: 0 }, modelCenter)}>
          <FaArrowRight />
        </button>
        <button className="bg-gray-900 p-2 m-1 rounded-lg border border-gray-700 cursor-pointer opacity-75 hover:opacity-100" id="view-isometric" title="Isometric View" onClick={() => setCameraView({ x: 40, y: 40, z: 40 }, modelCenter)}>
          ISO
        </button>
      </div>
    </div>
  );
};

export default Viewer;
