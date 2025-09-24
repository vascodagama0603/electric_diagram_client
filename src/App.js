
import axios from "axios";
import { Box } from "@mui/material";
import React, { useCallback, useState } from "react";
//import { RemoveCircle } from "@mui/ateicons-mrial";
import styled from "@emotion/styled";
//import styled from "styled-components"
//import ListIcon from "../public/S00287b.svg";
const MAKE_CONTACT = "S00227"
const BREAK_CONTACT = "S00229"
const MAKE_CONTACT_DELAYED_CLOSING = "S00243"
const MAKE_CONTACT_DELAYED_OPENING = "S00244"
const BREAK_CONTACT_DELAYED_OPENING = "S00245"
const BREAK_CONTACT_DELAYED_CLOSING = "S00246"
const MAKE_CONTACT_DELAYED = "S00247"
const BREAK_CONTACT_DELAYED = "S00247a"
const MAKE_MANUAL_CONTACT = "S00250"
const BREAK_MANUAL_CONTACT = "S00250a"
const MAKE_PUSH_BUTTON = "S00254"
const BREAK_PUSH_BUTTON = "S00254a"
const MAKE_PULL_BUTTON = "S00255"
const MAKE_TWIST_BUTTON = "S00256"
const BREAK_EMERGENCY_STOP = "S00258"
const MAKE_LIMIT = "S00259"
const BREAK_LIMIT = "S00260"
const MAKE_CONTACTOR = "S00284"
const BREAK_CONTACTOR = "S00286"
const CIRCUIT_BREAKER = "S00287"
const CIRCUIT_2P_BREAKER = "S00287a"
const CIRCUIT_3P_BREAKER = "S00287b"
    
const initialPictures = [
  {
    id: 1,
    text:MAKE_CONTACT,
    search:"a接点,a,make,メーク",
    caption:"a接点",
    subcaption:"JIS " + MAKE_CONTACT,
    src:
      "/"+MAKE_CONTACT+".svg"
  },
  {
    id: 2,
    text:BREAK_CONTACT,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_CONTACT,
    src:
      "/"+BREAK_CONTACT+".svg"
  },
  {
    id: 3,
    text:MAKE_CONTACT_DELAYED_CLOSING,
    search:"b接点,b,break,ブレイク",
    caption:"a接点(ディレイ)",
    subcaption:"JIS " + MAKE_CONTACT_DELAYED_CLOSING,
    src:
      "/"+MAKE_CONTACT_DELAYED_CLOSING+".svg"
  },
  {
    id: 4,
    text:MAKE_CONTACT_DELAYED_OPENING,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + MAKE_CONTACT_DELAYED_OPENING,
    src:
      "/"+MAKE_CONTACT_DELAYED_OPENING+".svg"
  },
  {
    id: 5,
    text:BREAK_CONTACT_DELAYED_OPENING,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_CONTACT_DELAYED_OPENING,
    src:
      "/"+BREAK_CONTACT_DELAYED_OPENING+".svg"
  },
  {
    id: 6,
    text:BREAK_CONTACT_DELAYED_CLOSING,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_CONTACT_DELAYED_CLOSING,
    src:
      "/"+BREAK_CONTACT_DELAYED_CLOSING+".svg"
  },
  {
    id: 7,
    text:MAKE_CONTACT_DELAYED,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + MAKE_CONTACT_DELAYED,
    src:
      "/"+MAKE_CONTACT_DELAYED+".svg"
  },
  {
    id: 8,
    text:BREAK_CONTACT_DELAYED,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_CONTACT_DELAYED,
    src:
      "/"+BREAK_CONTACT_DELAYED+".svg"
  },
  {
    id: 9,
    text:MAKE_MANUAL_CONTACT,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + MAKE_MANUAL_CONTACT,
    src:
      "/"+MAKE_MANUAL_CONTACT+".svg"
  },
  // {
  //   id: 10,
  //   text:BREAK_MANUAL_CONTACT,
  //   src:
  //     "/"+BREAK_MANUAL_CONTACT+".svg"
  // },
  {
    id: 11,
    text:MAKE_PUSH_BUTTON,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + MAKE_PUSH_BUTTON,
    src:
      "/"+MAKE_PUSH_BUTTON+".svg"
  },
  {
    id: 12,
    text:BREAK_PUSH_BUTTON,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_PUSH_BUTTON,
    src:
      "/"+BREAK_PUSH_BUTTON+".svg"
  },
  {
    id: 13,
    text:MAKE_PULL_BUTTON,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + MAKE_PULL_BUTTON,
    src:
      "/"+MAKE_PULL_BUTTON+".svg"
  },
  {
    id: 14,
    text:MAKE_TWIST_BUTTON,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + MAKE_TWIST_BUTTON,
    src:
      "/"+MAKE_TWIST_BUTTON+".svg"
  },
  {
    id: 15,
    text:BREAK_EMERGENCY_STOP,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_EMERGENCY_STOP,
    src:
      "/"+BREAK_EMERGENCY_STOP+".svg"
  },
  {
    id: 16,
    text:MAKE_LIMIT,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + MAKE_LIMIT,
    src:
      "/"+MAKE_LIMIT+".svg"
  },
  {
    id: 17,
    text:BREAK_LIMIT,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_LIMIT,
    src:
      "/"+BREAK_LIMIT+".svg"
  },
  {
    id: 18,
    text:MAKE_CONTACTOR,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + MAKE_CONTACTOR,
    src:
      "/"+MAKE_CONTACTOR+".svg"
  },
  {
    id: 19,
    text:BREAK_CONTACTOR,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_CONTACTOR,
    src:
      "/"+BREAK_CONTACTOR+".svg"
  },
  {
    id: 20,
    text:CIRCUIT_BREAKER,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + CIRCUIT_BREAKER,
    src:
      "/"+CIRCUIT_BREAKER+".svg"
  },
  {
    id: 21,
    text:CIRCUIT_2P_BREAKER,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + CIRCUIT_2P_BREAKER,
    src:
      "/"+CIRCUIT_2P_BREAKER+".svg"
  },
  {
    id: 22,
    text:CIRCUIT_3P_BREAKER,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + CIRCUIT_3P_BREAKER,
    src:
      "/"+CIRCUIT_3P_BREAKER+".svg"
  },
];
const SERVER = process.env.SERVER_ADDRESS
function App() {
	const svg_url = SERVER+"/svg/";
	const dxf_url = SERVER+"/dxf/";
	const pdf_url = SERVER+"/pdf/";

  const [pictures, setPictures] = useState(initialPictures);
  const [hoveredPictureId, setHoveredPictureId] = useState(null);
  const [onHover, setOnHover] = useState(false);

  const isHoveredOnPicture = useCallback(
    (pictureId) => {
      if (hoveredPictureId === null) return false;

      return onHover && hoveredPictureId === pictureId;
    },
    [onHover, hoveredPictureId]
  );

  const downloadDxf = async (pictureText) => {
    try {
      const response = await axios.get(dxf_url+ pictureText, {
        responseType: 'blob', 
      });
      const blob = new Blob([response.data], { type: 'image/vnd.dxf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = pictureText+'.dxf'; // The default filename for the download
      document.body.appendChild(link); // Append to the document body
      link.click();
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);

    } catch (error) {
      console.error('Error downloading the DXF file:', error);
    }
  };
  const downloadSvg = async (pictureText) => {
    try {
      const response = await axios.get(svg_url + pictureText, {
        responseType: 'blob', 
      });
      const blob = new Blob([response.data], { type: 'image/svg+xml' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = pictureText+'.svg'; // The default filename for the download
      document.body.appendChild(link); // Append to the document body
      link.click();
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);

    } catch (error) {
      console.error('Error downloading the DXF file:', error);
    }
  };

  const downloadPdf = async () => {
    try {
      const response = await axios.get(pdf_url, {
        responseType: 'blob', 
      });
      const blob = new Blob([response.data], { type: 'aplication/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'test.pdf'; // The default filename for the download
      document.body.appendChild(link); // Append to the document body
      link.click();
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);

    } catch (error) {
      console.error('Error downloading the DXF file:', error);
    }
  };
    

	return (
		<div>
      <StyledImageArea>
        {pictures.map((picture) => (
          <SignalBox
            key={picture.id}
            sx={{ position: "relative" }}
            onMouseEnter={() => {
              setHoveredPictureId(picture.id);
              setOnHover(true);
            }}
            onMouseLeave={() => {
              setHoveredPictureId(null);
              setOnHover(false);
            }}
          >
            <StyledImage src={picture.src} />
            {isHoveredOnPicture(picture.id) && (
              <StyledOnImageButton
              >
                <SvgButton
                  onClick={() => downloadSvg(picture.text)}
                  //onKeyDown={() => handleRemovePicture(picture.id)}
                  tabIndex={0}
                >SVG</SvgButton>
                <DxfButton
                  onClick={() => downloadDxf(picture.text)}
                  //onKeyDown={() => handleRemovePicture(picture.id)}
                  tabIndex={0}
                >DXF</DxfButton>
              </StyledOnImageButton>
            )}
            <StyledComment>{picture.caption}</StyledComment>
            <StyledSubComment>{picture.subcaption}</StyledSubComment>
          </SignalBox>
        ))}
      </StyledImageArea>
		</div>
	);
}

const StyledTitle = styled.h1`
  text-align: center;
`;

const StyledComment = styled.p`
  text-align: center;
  margin: -3% auto 1%;
`;

const StyledSubComment = styled.p`
  text-align: center;
  margin: -3% auto 1%;
`;

const StyledImageArea = styled.div`
  margin: 0.5em auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledImage = styled.img`

  object-fit: contain;
  margin: 10px;

  max-width: 200px;
  height: 200px;
`;

const StyledOnImageButton = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: 15px;
  color: #fff;
`;

const SvgButton = styled.div`
  width: 40px;
  height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: skyblue;
  border: 2px solid skyblue;
  &:hover {
    background: #fff;
  color: skyblue;
  }
`;

const DxfButton = styled.div`
  width: 40px;
  height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: orange;
  border: 2px solid orange;
  &:hover {
    background: #fff;
  color: orange;
  }
  margin-top:5px;
`;

const SignalBox = styled(Box)`

  &:hover {
    box-shadow: 0px 12px 24px #0b5dae63;
    transform: translateY(-4px);
}
`;
export default App;