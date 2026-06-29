import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import { useAuthenticationRequestConfig } from '../hooks/authentication';
function Dash() {
    const [pageData, setDataView] = useState([])
    const fetched = useRef(false);
    //Todo: replace above fetch + refcheck with a on-route data load.
    useEffect(() => {
        if (fetched.current) return;
        fetched.current = true;
        axios.get("/api/data/orders", useAuthenticationRequestConfig())
            .then((res) => {
                console.log(res);
                setDataView(res.data);
            })
    })
    const dataViewItems = pageData.map((item, idx) => <div key={idx}>{item}</div>)
    return ( <div className='p-2'>Dashboard
        <div>{dataViewItems}</div> 
    </div> );
}
export default Dash;
