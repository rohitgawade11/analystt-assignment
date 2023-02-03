import React, { useState, useEffect,useMemo } from 'react'
import UserDetailes from './UserDetailes';

export default function User() {
    const [user, setUser] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [page,setPage] = useState(0);
    const [data,setData] = useState([]);

    const numberOfItems = 3;

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line 
    }, []);

    const memo = useMemo(()=>pagination(data,page,numberOfItems),[page]);

    async function fetchData() {
        const fetchApi = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await fetchApi.json();
        setTotalPages(Math.ceil(usersData.length/numberOfItems));
        setData(usersData)
        pagination(usersData, page, numberOfItems)
    }

    function pagination(data, pageIndex, pageSize) {
        var endIndex = Math.min((pageIndex + 1) * pageSize, data.length);
        setUser(data.slice(Math.max(endIndex - pageSize, 0), endIndex));   
    }
  


// for printing page numbers
    const pageNumbers = ()=>{
        let page = [];
        for(let i = 0; i < totalPages; i++){
            page.push(
                <li className="page-item"><button onClick={()=>{setPage(i)}} className="page-link" key={i}>{i + 1}</button></li>
            )
        };
        return page

    }

    return (
        <div className="container mt-5">
            {user.map((data) => {
                return <UserDetailes data={data} key={data.id} />
            })}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${page <= 0 ? 'disabled' :''}`}>
                        <button className={` page-link ${page <= 0 ? 'disabled' :''}`} disabled={page <= 0} onClick={()=>{setPage(page - 1)}}  aria-disabled="true">&larr;</button>
                    </li>
                    {pageNumbers()}
                    <li className={`page-item ${totalPages - 1 <= page ? 'disabled' :''}`}>
                        <button className="page-link" disabled={totalPages - 1 <= page} onClick={()=>{setPage(page + 1)}}>&rarr;</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
