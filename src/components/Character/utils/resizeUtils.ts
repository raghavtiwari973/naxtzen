import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  let canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  if (window.innerWidth > 1024) {
    camera.position.x = 2.2;
  } else {
    camera.position.x = 0;
  }
  camera.updateProjectionMatrix();
  ScrollTrigger.getAll().forEach((trigger) => {
    const id = trigger.vars?.id as string | undefined;
    if (id?.startsWith("char-") || id === "stats-cards" || id === "process-steps") {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
  setAllTimeline();
}
