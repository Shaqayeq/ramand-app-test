import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { changeSearchTermAction } from "../../features/grid/grid-slice";
import "./header.css";

const HeaderPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {searchTerm, totalPage }  = useSelector((state: RootState) => state.gridReducer);
    const username   = useSelector((state: RootState) => state.userReducer.username);

    const changeSearchTerm = (term: string) => {
        dispatch(changeSearchTermAction(term));
    }

    return (
        <div className="header">
            <span className="total-span"> تعداد ردیف : {totalPage} </span>
            <span className="user-welcome"> کاربر {username} به سیستم خوش آمدید </span>
            <input 
                type="text" 
                className="search-box" 
                value={searchTerm} 
                onChange={(e) => changeSearchTerm(e.target.value)}
                placeholder="عبارت جستجو را وارد نمایید"
            />
        </div>
    )
}

export default HeaderPage;