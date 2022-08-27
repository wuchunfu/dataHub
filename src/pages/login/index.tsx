import { useRef } from 'react';
// import * as Three from 'three';

const Login:React.FC = () => {
  const elementRef = useRef<any>();
  // const scene = useRef(new Three.Scene()).current;
  // const camera = useRef(new Three.PerspectiveCamera()).current;
  // const renderer = useRef(new Three.WebGLRenderer()).current;
  //     const geometry = useRef(new Three.BoxGeometry()).current;
  //     const material = useRef(new Three.MeshBasicMaterial( { color: 0xff0000 })).current;
  //     const cube = useRef(new Three.Mesh( geometry, material)).current;
  //   const animate = () => {
  //     requestAnimationFrame(animate);
	// 			cube.rotation.x += 0.01;
	// 			cube.rotation.y += 0.01;
	// 			renderer.render( scene, camera );
  //   }
  //   const initCamera = () => {
  //     camera.fov = 3;
  //     camera.aspect = elementRef.current.offsetHeight/ elementRef.current.offsetHeight;
  //     camera.near = 0.1;
  //     camera.far = 100;
  //     camera.position.z= 5;
  //     // camera.lookAt(0,0,0);
  //     // camera.updateProjectionMatrix();
  //   }
  //   useEffect(() => {
  //     elementRef.current?.appendChild(renderer.domElement);
  //     initCamera();
  //     renderer.setSize(elementRef.current?.offsetWidth,elementRef.current?.offsetHeight);
  //     renderer.shadowMap.enabled = true;
      
  //     scene.add(cube);
  //     animate();
  //     return () => {
  //       renderer.dispose();
  //     }
  // },[]);
  

  return (
    <div>
      <div ref={elementRef} style={{width:500,height:300}}></div>
      <div>进入首页</div>
    </div>
    
  )
}

export default Login;