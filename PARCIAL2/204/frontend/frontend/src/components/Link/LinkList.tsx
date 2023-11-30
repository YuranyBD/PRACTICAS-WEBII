import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Link {

}
const LinkList = ()=> {

    const [links, setLinks] = useState ([])

    const loadLinks =async () => {
        const res = await axios.get ('http://localhost:4000/links')
        setLinks(res.data);
    }

    useEffect(() => {
        loadLinks()
        
    }, [])
    


    return (
        <div>
         
        </div>
    )
}
export default LinkList