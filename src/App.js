
import axios from "axios";
import { Box } from "@mui/material";
import React, { useCallback, useState } from "react";
import { RemoveCircle } from "@mui/icons-material";
import styled from "@emotion/styled";
//import styled from "styled-components"
//import ListIcon from "../public/S00287b.svg";
const initialPictures = [
  {
    id: 1,
    src:
      "/S00287b.svg"
  },
  {
    id: 2,
    src:
      "/S00287b.svg"
  },
  {
    id: 3,
    src:
      "/S00287b.svg"
  }
];

function App() {
	const svg_url = "http://127.0.0.1:8000/svg/S00287b";
	const dxf_url = "http://127.0.0.1:8000/dxf/S00287b";
	const pdf_url = "http://127.0.0.1:8000/pdf/S00287b";

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

  const handleRemovePicture = useCallback((pictureId) => {
    setPictures((prev) => prev.filter((p) => p.id !== pictureId));
  }, []);


  const downloadDxf = async () => {
    try {
      const response = await axios.get(dxf_url, {
        responseType: 'blob', 
      });
      const blob = new Blob([response.data], { type: 'image/vnd.dxf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'test.dxf'; // The default filename for the download
      document.body.appendChild(link); // Append to the document body
      link.click();
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);

    } catch (error) {
      console.error('Error downloading the DXF file:', error);
    }
  };
  const downloadSvg = async () => {
    try {
      const response = await axios.get(svg_url, {
        responseType: 'blob', 
      });
      const blob = new Blob([response.data], { type: 'image/svg+xml' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'test.svg'; // The default filename for the download
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
			{<button onClick={downloadSvg}>svgデータを取得</button>}
			{<button onClick={downloadDxf}>dxfデータを取得</button>}
			{<button onClick={downloadPdf}>pdfデータを取得</button>}
      <StyledImageArea>
        {pictures.map((picture) => (
          <Box
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
                onClick={() => handleRemovePicture(picture.id)}
                onKeyDown={() => handleRemovePicture(picture.id)}
                tabIndex={0}
              >
                <RemoveCircle color="inherit" />
              </StyledOnImageButton>
            )}
          </Box>
        ))}
      </StyledImageArea>
		</div>
	);
}

const StyledTitle = styled.h1`
  text-align: center;
`;

const StyledComment = styled.p`
  text-align: right;
  margin: -3% auto 1%;
`;

const StyledImageArea = styled.div`
  margin: 0.5em auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  cursor: pointer;
  object-fit: contain;
  margin: 10px;

  max-width: 180px;
  max-height: 200px;
`;

const StyledOnImageButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  color: #da0000;
`;


export default App;