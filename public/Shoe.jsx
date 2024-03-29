/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 shoe.gltf 
*/

import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/shoe.gltf");
  console.log(props.colorPicker);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.colorPicker.laces.box6}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.colorPicker.mesh.box1}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.colorPicker.mesh.box2}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.colorPicker.mesh.box3}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.colorPicker.mesh.box4}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.colorPicker.mesh.box5}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.colorPicker.mesh.box7}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.colorPicker.mesh.box8}
      />
    </group>
  );
}

useGLTF.preload("/shoe.gltf");
