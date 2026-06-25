import { useState } from "react";

export const useAuthentication = () => 
{
    const [isAuthenticated, setAuthenticated] = useState(false)
    return isAuthenticated;
}
