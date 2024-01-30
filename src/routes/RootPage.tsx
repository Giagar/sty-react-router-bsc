import { Outlet } from "react-router-dom"

export default function RootPage() {
    return(
        <>
            <h1>Root Page</h1>
            <div>Sidebar</div>
            <div>{<Outlet />}</div>
        </>
    )
}