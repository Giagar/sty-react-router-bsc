import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function RootPage() {
    return(
        <>
            <h1>Root Page</h1>
            <div><Sidebar /></div>
            <div>{<Outlet />}</div>
        </>
    )
}