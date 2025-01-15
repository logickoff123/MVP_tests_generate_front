import { AuthProvider } from "./hooks/AuthContext";
import Registration from "./pages/Registration";
import Login from './pages/Login';

function App() {
    return (
        <AuthProvider>
            <Registration/>
            <Login />
        </AuthProvider>
    );
}
