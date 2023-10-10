import { toast } from "react-toastify"
import FontLoader from 'react-google-font-loader';

const SuccessToast = (val , positions = "top-right") => {
    const Checktheme = localStorage.getItem("selected-theme");
    <FontLoader fonts={[{ font: 'Roboto', weights: [400, 700] }]}>
    {toast.success(<h4 style={{fontFamily: 'Roboto' ,fontWeight : "bolder" , fontSize : "18px"}}>{val}</h4> , {theme : Checktheme === "dark" ? "dark" : "light" , position : positions})}
       </FontLoader>
    // toast.success(val)
};
const ErrorToast = (val  , positions = "top-right") => {
    const Checktheme = localStorage.getItem("selected-theme");
    <FontLoader fonts={[{ font: 'Roboto', weights: [400, 700] }]}>
    {toast.error(<h4 style={{fontFamily: 'Roboto' ,fontWeight : "bolder" , fontSize : "18px"}}>{val}</h4> , {theme : Checktheme === "dark" ? "dark" : "light" , position : positions})}
       </FontLoader>
}
const InfoToast = (val, positions = "top-right" ) => {
    const Checktheme = localStorage.getItem("selected-theme");
    <FontLoader fonts={[{ font: 'Roboto', weights: [400, 700] }]}>
    {toast.info(<h4 style={{fontFamily: 'Roboto' ,fontWeight : "bolder" , fontSize : "18px"}}>{val}</h4> , {theme : Checktheme === "dark" ? "dark" : "light" , position : positions})}
   </FontLoader>
}
const WarningToast = (val, positions = "top-right" ) => {
    const Checktheme = localStorage.getItem("selected-theme");
    <FontLoader fonts={[{ font: 'Roboto', weights: [400, 700] }]}>
    {toast.warn(<h4 style={{fontFamily: 'Roboto' ,fontWeight : "bolder" , fontSize : "18px"}}>{val}</h4> , {theme : Checktheme === "dark" ? "dark" : "light", position : positions })}
   </FontLoader>
}
export {SuccessToast , ErrorToast , InfoToast , WarningToast}