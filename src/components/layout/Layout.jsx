
import { Outlet } from "react-router-dom"
import Saidbar from "../component/saidbar/Saidbar"
function Layout(){
	return(
		<>
			<Saidbar />
			<Outlet />
		</>
	)
}
export default Layout