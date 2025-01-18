import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function Masala1() {
    function getData() {
        return axios.get("https://jsonplaceholder.typicode.com/posts");
    }
    const { isError, isLoading, data } = useQuery({
        queryKey: ["data"],
        queryFn: getData,
    });
    if (isLoading) {
        return <h1 className="text-center font-bold text-[40px]">LOADING..</h1>;
    }
    if (isError) {
        return (
            <h1 className="font-bold text-center">
                Erorr plese refresh or problem with network
            </h1>
        );
    }

    return (
        <div className="pt-10 pb-10">
            <div className="container">
                <h1 className="text-blue-400 text-center text-[30px] font-bold">1-Masala: API’dan ma’lumotni olish va ko‘rsatish</h1>
                <div className="flex flex-col gap-4 mt-6">
                    {data?.data?.length > 0 &&
                        data.data.map((value, index) => {
                            return (
                                <div className="w-full p-2 text-white bg-blue-400 rounded-lg" key={index}>
                                    <h1>{value.body}</h1>
                                    <h1>{value.title}</h1>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Masala1;
