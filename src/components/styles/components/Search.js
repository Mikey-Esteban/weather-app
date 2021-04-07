import styled from "styled-components";

const SearchWrapper = styled.div`
  margin-top: 200px;
  max-width: 400px;

  input {
    height: 30px;
    width: 60%;
    border: 1px solid #adb5bd; /* gray */
    border-radius: 10px;
    padding-left: 10px;
    margin-right: 20px;
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
