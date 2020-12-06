import { Fragment, useEffect, useRef, useContext } from "react";
import { StoreContext } from "../../store/store";
import * as S from "./SearchSitter.styles";
import * as actions from "../../store/actions";
import L from "leaflet";
import Modal from "../../UI/Modal/Modal";
import AuthModal from "../Auth/AuthModal";
import Header from "./Header/Header";

const SearchSitter = () => {
  const [state, dispatch] = useContext(StoreContext);
  const mapRef = useRef(null);

  const closeAuthModal = () => {
    dispatch(actions.changeIsModalOpen(false));
  };

  useEffect(() => {
    const mymap = L.map(mapRef.current).setView([51.505, -0.09], 13);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    ).addTo(mymap);
  }, []);

  return (
    <Fragment>
      <Header />
      <Modal showModal={state.isModalOpen} onClose={closeAuthModal}>
        <AuthModal onClose={closeAuthModal} />
      </Modal>
      <S.ContentWrap>
        <S.LeafletMap ref={mapRef}></S.LeafletMap>
        <S.SittersWrap>sa</S.SittersWrap>
      </S.ContentWrap>
    </Fragment>
  );
};

export default SearchSitter;
