import * as S from "./PersonalInfo.styles";
import { Fragment, useState, useContext } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../UI/Modal/Modal";
import { StoreContext } from "../../../store/store";

const PersonalInfo = () => {
  const [passwordModalOpen, changePasswordModalOpen] = useState(false);
  const [state, dispatch] = useContext(StoreContext);
  const [file, setFile] = useState();

  const passwordModalHandler = () => {
    changePasswordModalOpen(!passwordModalOpen);
  };

  const submitProfileChanges = () => {
    const profileData = new FormData();
    profileData.append("profile-picture", file);
    fetch("http://localhost:5000/api/upload-profile-picture", {
      method: "POST",
      body: profileData,
    });
  };

  return (
    <Fragment>
      <S.PersonalInfoWrap>
        <S.InfoText>Add Your Personal Information</S.InfoText>
        <TextField label="Your Name" variant="outlined" />
        <TextField label="Your Last Name" variant="outlined" />

        <Button variant="contained" onClick={passwordModalHandler}>
          Change Password
        </Button>
      </S.PersonalInfoWrap>
      <S.AdressWrap>
        <S.InfoText>Add Your Adress</S.InfoText>
        <S.AdressField label="Your Adress" variant="outlined" />
        <TextField label="City" variant="outlined" />
        <FormControl variant="outlined">
          <InputLabel>State</InputLabel>
          <Select label="State" MenuProps={{ style: { maxHeight: "400px" } }}>
            <MenuItem value="AK">Alaska</MenuItem>
            <MenuItem value="AL">Alabama</MenuItem>
            <MenuItem value="AZ">Arizona</MenuItem>
            <MenuItem value="AR">Arkansas</MenuItem>
            <MenuItem value="CA">California</MenuItem>
            <MenuItem value="CO">Colorado</MenuItem>
            <MenuItem value="CT">Connecticut</MenuItem>
            <MenuItem value="DE">Delaware</MenuItem>
            <MenuItem value="DC">District Of Columbia</MenuItem>
            <MenuItem value="FL">Florida</MenuItem>
            <MenuItem value="GA">Georgia</MenuItem>
            <MenuItem value="HI">Hawaii</MenuItem>
            <MenuItem value="ID">Idaho</MenuItem>
            <MenuItem value="IL">Illinois</MenuItem>
            <MenuItem value="IN">Indiana</MenuItem>
            <MenuItem value="IA">Iowa</MenuItem>
            <MenuItem value="KS">Kansas</MenuItem>
            <MenuItem value="KY">Kentucky</MenuItem>
            <MenuItem value="LA">Louisiana</MenuItem>
            <MenuItem value="ME">Maine</MenuItem>
            <MenuItem value="MD">Maryland</MenuItem>
            <MenuItem value="MA">Massachusetts</MenuItem>
            <MenuItem value="MI">Michigan</MenuItem>
            <MenuItem value="MN">Minnesota</MenuItem>
            <MenuItem value="MS">Mississippi</MenuItem>
            <MenuItem value="MO">Missouri</MenuItem>
            <MenuItem value="MT">Montana</MenuItem>
            <MenuItem value="NE">Nebraska</MenuItem>
            <MenuItem value="NV">Nevada</MenuItem>
            <MenuItem value="NH">New Hampshire</MenuItem>
            <MenuItem value="NJ">New Jersey</MenuItem>
            <MenuItem value="NM">New Mexico</MenuItem>
            <MenuItem value="NY">New York</MenuItem>
            <MenuItem value="NC">North Carolina</MenuItem>
            <MenuItem value="ND">North Dakota</MenuItem>
            <MenuItem value="OH">Ohio</MenuItem>
            <MenuItem value="OK">Oklahoma</MenuItem>
            <MenuItem value="OR">Oregon</MenuItem>
            <MenuItem value="PA">Pennsylvania</MenuItem>
            <MenuItem value="RI">Rhode Island</MenuItem>
            <MenuItem value="SC">South Carolina</MenuItem>
            <MenuItem value="SD">South Dakota</MenuItem>
            <MenuItem value="TN">Tennessee</MenuItem>
            <MenuItem value="TX">Texas</MenuItem>
            <MenuItem value="UT">Utah</MenuItem>
            <MenuItem value="VT">Vermont</MenuItem>
            <MenuItem value="VA">Virginia</MenuItem>
            <MenuItem value="WA">Washington</MenuItem>
            <MenuItem value="WV">West Virginia</MenuItem>
            <MenuItem value="WI">Wisconsin</MenuItem>
            <MenuItem value="WY">Wyoming</MenuItem>
          </Select>
        </FormControl>
        <TextField label="ZIP/postal" variant="outlined" />
      </S.AdressWrap>
      <S.PhotoWrap>
        <S.PhotoTextWrap>
          <S.InfoText>Profile Image</S.InfoText>
          <S.PhotoTextExplanation>
            This is the first photo pet owners will see. Build trust! Well-lit,
            clear frontal face photos (no sunglasses) are recommended.
          </S.PhotoTextExplanation>
          <S.UploadButton
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </S.PhotoTextWrap>
        <S.UserImage
          src={`${process.env.SITTERSCAPE_API_URL}/static/images/default-user.png`}
        />
      </S.PhotoWrap>
      <Button onClick={submitProfileChanges} variant="contained">
        Save
      </Button>
      <S.StyledLink to="/profile/change-password">
        Want to become a sitter?
      </S.StyledLink>
      <Modal onClose={passwordModalHandler} showModal={passwordModalOpen}>
        <S.ModalCancel
          icon={faTimes}
          size="2x"
          onClick={passwordModalHandler}
        />
        <S.PasswordModalWrap>
          <TextField label="Old password" variant="outlined" />
          <TextField label="New password" variant="outlined" />
          <TextField label="Re-enter new password" variant="outlined" />
          <Button variant="contained">Save</Button>
        </S.PasswordModalWrap>
      </Modal>
    </Fragment>
  );
};

export default PersonalInfo;