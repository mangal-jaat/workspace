import { Button } from "@mui/material";
import styled from "styled-components/macro";
import { styled as styledMUI } from "@mui/material/styles";
import { NoEncryption } from "@mui/icons-material";

export const Container = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.myDivider};
  height: var(--header-height);
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;

  width: 100%;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 24px;
  text-transform: uppercase;

  margin-right: 20px;
  span {
    color: ${({ theme }) => theme.primary.main};
  }
`;

export const ProjectTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  max-width: 300px;

  padding-left: 30px;
`;

export const ProjectTitleInput = styled.input`
  font-size: 14px;
  width: 100%;

  &::-moz-selection {
    background: ${({ theme }) => theme.primary.main};
  }

  &::selection {
    background: ${({ theme }) => theme.primary.main};
  }
`;

export const SignIn = styled.button`
font-size: 14px;
text-transform: none;
color: ${({ theme }) => theme.white.primary};;
background-color: ${({ theme }) => theme.primary.main};
box-shadow: none;
height: 25px;
padding: 4px 10px;
&:hover{
  box-shadow: none;
  background-color: ${({ theme }) => theme.primary.dark};
}
&:active{
  box-shadow: none;
  background-color: ${({ theme }) => theme.primary.dark};
}
`;

export const Run = styled.button`
font-size: 14px;
text-transform: none;
color: ${({ theme }) => theme.white.primary};;
background-color: ${({ theme }) => theme.common.green.primary};
box-shadow: none;
height: 25px;
padding: 4px 10px;
margin-right: 4px;
&:hover{
  box-shadow: none;
  background-color: ${({ theme }) => theme.common.green.secondary};
}
&:active{
  box-shadow: none;
  background-color: ${({ theme }) => theme.common.green.secondary};
}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .MuiFormControl-root {
    margin-bottom: 15px;

    &:last-of-type {
      margin-bottom: 30px;
    }
  }
`;


/**
 * export const SignIn = styledMUI(Button)(({ theme }) => ({
  borderRadius: "0px",
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontSize: 14,
  boxShadow: "none",
  height: "27px",
  padding: "5px 10px",
  "&:hover": {
    boxShadow: "none",
    backgroundColor: theme.palette.primary.dark
  },
  "&:active": {
    boxShadow: "none"
  },
  "&:focus": {
    boxShadow: "none"
  }
}));

export const Run = styledMUI(Button)(({ theme }) => ({
  borderRadius: "none",
  marginRight: "4px",
  textTransform: "none",
  backgroundColor: theme.palette.common.green.primary,
  fontSize: 14,
  boxShadow: "none",
  height: "27px",
  padding: "4px 10px",
  "&:hover": {
    boxShadow: "none",
    backgroundColor: theme.palette.common.green.secondary
  },
  "&:active": {
    boxShadow: "none"
  },
  "&:focus": {
    boxShadow: "none"
  }
}));

 */