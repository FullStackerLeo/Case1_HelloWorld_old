import BottomButton from './BottomButton'
import { ShowWhat } from "./VisibilityFilters";

const Footer = ({filter, setFilter})=>{
    return (
    <>
        <span>Show:</span>
        <BottomButton active={ShowWhat.SHOW_ALL===filter} onClick={()=>setFilter(ShowWhat.SHOW_ALL)}>All</BottomButton>
        <BottomButton active={ShowWhat.SHOW_ACTIVE===filter} onClick={()=>setFilter(ShowWhat.SHOW_ACTIVE)}>Active</BottomButton>
        <BottomButton active={ShowWhat.SHOW_COMPLETED===filter} onClick={()=>setFilter(ShowWhat.SHOW_COMPLETED)}>Completed</BottomButton>
    </>
    )
}

export default Footer;