import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { GridDataModel } from "../../contract/grid-contract";
import {
    changeShowModalAction,
    editSelectedItemAction
} from "../../features/grid/grid-slice";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";

import "./modal.css";

const ModalPopup = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { showModal, selectedItem } = useSelector((state: RootState) => state.gridReducer);
    const [ selectedTitle, setSelectedTitle] = useState("");

    const closeModal = () => {
        dispatch(changeShowModalAction(false));
    }

    const save = () => {
        const item = { ...selectedItem, title: selectedTitle } as GridDataModel;
        dispatch(editSelectedItemAction(item));
        closeModal();
    }

    useEffect (()=> {
        setSelectedTitle(selectedItem?.title || "");
    }, [selectedItem?.title]);

    return (
        <Modal isOpen={showModal} onClose={closeModal} size="md">
            <ModalOverlay />
            <ModalContent mt="40">
                <ModalHeader>ویرایش کاربر {selectedItem?.userId}</ModalHeader>
                <ModalBody>
                    <span className="modal-span">عنوان</span>
                    <input type="text" className="modal-input" value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                    <button onClick={save} className="button" style={{ background: "green" }}>
                        ذخیره
                    </button>
                    <button onClick={closeModal} className="button" style={{ background: "red" }}>
                        بستن
                    </button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default ModalPopup;
