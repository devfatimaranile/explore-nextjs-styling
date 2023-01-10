import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section<{ nightMode: boolean }>`
  ${({ nightMode }) => {
    if (nightMode) {
      return `
        background: white;
        :hover {
          background: gray;
        }
      `;
    } else {
      return `
        background: papayawhip;
        :hover {
          background: pink;
        }
      `;
    }
  }};
  padding: 4em;
`;

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1<{ nightMode: boolean }>`
  ${({ nightMode }) => {
    if (nightMode) {
      return `
        color: black;
        :hover {
          color: white;
        }
      `;
    } else {
      return `
        color: palevioletred;
        :hover {
          color: purple;
        }
      `;
    }
  }};

  font-size: 1.5em;
  text-align: center;
`;
