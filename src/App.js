import './App.css';
import styled from 'styled-components';

import Box from "./components/Box";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";  // for animate a box



export default function App(){
  return(
    <Wrapper>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1} />
        <Box />
      </Canvas>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    background: #1f1144;

    canvas{
      height:500px;
      background:red;
    }
`;



















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
