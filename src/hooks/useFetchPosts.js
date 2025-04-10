
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchPosts = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url).then((res) => setData(res.data));
    }, [url]);
    return data;
};