import React, {useState, useEffect} from "react"
import styled from "styled-components"
import CodeEditor from '@uiw/react-textarea-code-editor';
import generate from "./generate_svg";
import SVG from 'react-inlinesvg'
import PinchZoomPan from "react-image-zoom-pan";

const theme = {
  global: {
    colors: {
      brand: '#2b3353',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  button: {
    border:{
      width:'0px',
      radius:'0px',
    },
    background:"#123456"
  },
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'medium' }}
    style={{ zIndex: '1' }}
    {...props}
  />
)

export function App() {

  const [config, setConfig] = useState("")
  const [svg_out, setSVGOut] = useState('<svg></svg>')
  const [genError, setGenError] = useState(null)

  function onCodeChange(code){
    setConfig(code)
    const svg_gen = generate(code)
    console.log(svg_gen)
    if(svg_gen.error){
      setGenError(svg_gen.error_message)
    } else {
      setGenError(null)
      setSVGOut(svg_gen.output)
    }
  }

  return(
    <MainContainer>
      <TopBar>
        <h1>Keyboard PCB Generator</h1>
      </TopBar>
      <PageContent>
        <CodeBox>
          <CodeBoxHeading><CodeBoxHeadingText>config.json</CodeBoxHeadingText></CodeBoxHeading>
          <CodeEditorContainer>
            <CodeEditor
              language="json"
              value={config}
              onChange={(e)=>{onCodeChange(e.target.value)}}
              placeholder="enter json config"
              padding={10}
              style={{
                fontSize: 12,
                backgroundColor: "transparent",
                fontFamily:'Roboto Mono',
                color:'black',
              }}
            />
          </CodeEditorContainer>
          <GenerateButton>Generate</GenerateButton>
        </CodeBox>
        <SVGBoxContainer>
          <CodeBoxHeading>
            <CodeBoxHeadingText>
              output
            </CodeBoxHeadingText>
          </CodeBoxHeading>
          <div style={{height:'800px'}}>
            {svg_out != null&&
              <PinchZoomPan
                minScale={0.1}
                maxScale={2}
                position="center"
              >
                <img src={`data:image/svg+xml;utf8,${svg_out}`} />
              </PinchZoomPan>
            }
            </div>
          {genError != null&&
          <ErrorIndicator>
            {genError}
          </ErrorIndicator>
          }
        </SVGBoxContainer>
      </PageContent>
    </MainContainer>
  )
}

const MainContainer = styled.div`
`

const PageContent = styled.div`
  padding-left:15px;
  padding-right:15px;
  margin-top:-15px;
  display:flex;
  flex-wrap:wrap;
`

const TopBar = styled.div`
  padding-left:30px;
`

const CodeBox = styled.div`
  min-width:500px;
  max-width:700px;
  border-radius:10px;
  overflow:hidden;
  margin:15px;
`

const CodeEditorContainer = styled.div`
  height:800px;
  overflow-y:scroll;
  background-color:white;
`

const CodeBoxHeading = styled.div`
  width:100%;
  background-color:#2b3353;
  color:white;
  border:none;
  height:50px;
  text-align:center;
`

const CodeBoxHeadingText = styled.p`
  margin:0;
  padding:12px;
  font-size:15px;
`

const GenerateButton = styled.button`
  width:100%;
  padding:10px;
  background-color:#2b3353;
  color:white;
  border:none;
  height:50px;
  font-size:20px;
  cursor:pointer;
  &:hover{
    background-color:#39436c;
  }
`

const SVGBoxContainer = styled.div`
  height:900px; 
  margin:15px;
  width:0px;
  min-width:600px;
  flex-grow:1;
  background-color:#0000004f;
  border-radius:10px;
  overflow:hidden;
`

const ErrorIndicator = styled.div`
  margin:0;
  padding:12px;
  font-size:15px;
  background-color:#6e3f3f;
  border-radius:10px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`
