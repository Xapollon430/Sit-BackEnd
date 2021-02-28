import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const ProfileWrap = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 120px 0px 100px 0px;
  background-color: #eaebed;
`;

export const FormWrap = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-gap: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
`;

export const PersonalInfoWrap = styled.div`
  display: grid;
  grid-template-rows: 40px 50px 50px 50px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 600px) {
    grid-template-rows: repeat(6, 50px);
    grid-template-columns: 1fr;
  }
`;

export const InfoText = styled.h3`
  grid-column: 1/-1;
  align-self: center;
`;

export const AdressWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40px 50px 50px;
  grid-gap: 20px;
`;

export const AdressField = styled(TextField)`
  grid-column: 1/-1;
`;

export const PhotoWrap = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  justify-items: center;
  @media (max-width: 600px) {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }
`;

export const PhotoTextExplanation = styled.div`
  color: #66727c;
`;

export const UserImage = styled.img`
  width: 200px;
  @media (max-width: 600px) {
    margin-top: 15px;
    max-width: 150px;
  }
`;

export const PhotoTextWrap = styled.div``;

export const UploadButton = styled.input`
  margin-top: 20px;
`;