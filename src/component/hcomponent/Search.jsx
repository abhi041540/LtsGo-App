import React, { useEffect } from "react";
import $ from "jquery";
function Search() {

    useEffect(()=>{
        var v=0;
        $(".lenguage").on("click",()=>{
            if(v===0)
            {
                $(".lenguage").css({
                    "box-shadow":" rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                });
                v=1;
            }
            else
            {
                $(".lenguage").css({
                    "box-shadow":"none"
                }); 
                v=0;
            }
           
            });
            $(".lenguage").css({
                "--bs-navbar-toggler-focus-width": "none",
                "border":"1px solid #e0472c",
            });

    },[]);
    return (
        <nav class="navbar bg-body-secondary">
            <div class="container-fluid">
            <select class="form-select lenguage">
                <option value="1" selected>En</option>
            </select>
                <form class="d-flex" role="search">
                    <input class="form-control me-2 input" type="search" placeholder="Search" aria-label="Search" required style={{ borderRadius: "0px", padding: "0 auto" }} />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};
export default Search;