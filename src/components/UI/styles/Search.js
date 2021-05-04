import styled from "styled-components";

const SearchWrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 10px;
  width: 400px;

  input {
    height: 30px;
    width: 60%;
    border: 1px solid #adb5bd; /* gray */
    border-radius: 10px;
    padding-left: 10px;
    margin-right: 20px;

    font-family: "Zen Dots", cursive;
    font-size: 11px;
    font-weight: 200;
    letter-spacing: 0.2em;
  }

  input:focus {
    outline: none;
  }

  button {
    border: 1px solid #0d21a1; /* blue */
    border-radius: 5px;
    background: #fff;
    color: #0d21a1; /* blue */
    cursor: pointer;
    padding: 8px 12px;
    transition: all ease-in-out 150ms;

    font-family: "Zen Dots", cursive;
  }

  button:hover {
    background: #0d21a1; /* blue */
    color: #fff;
  }

  button:focus {
    outline: none;
  }
`;

export default SearchWrapper;
