import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

function Masala2() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function takeData() {
        return axios.get("http://localhost:3000/posts");
    }

    const { isLoading, isError, data } = useQuery({
        queryKey: ["data"],
        queryFn: takeData,
    });
    const queryClient = useQueryClient();

    const mutation = useMutation(
        (post) => axios.post("http://localhost:3000/posts", post),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["data"]);
            },
        }
    );

    function validate() {
        if (title === "") {
            alert("Title is not valid");
            return false;
        }
        if (body === "") {
            alert("body is not valid!");
            return false;
        }
        return true;
    }
    function handlePost() {
        const isValid = validate();
        if (!isValid) {
            return;
        }
        const post = {
            id: Date.now(),
            title,
            body,
        };
        mutation.mutate(post);
        setTitle("");
        setBody("");
    }

    if (isLoading) {
        return <h1>LOADING...</h1>;
    }
    if (isError) {
        return <h1>No data</h1>;
    }

    return (
        <div className="pt-10 pb-10">
            <div className="container">
                <h1 className="text-center text-[40px] text-blue-400 ">
                    2.Mutation
                </h1>
                <div className="form w-[700px] mx-auto mt-4 bg-blue-400 p-3 pb-8 text-black rounded-lg">
                    <h1 className="text-[40px] text-center mb-4">FORM</h1>
                    <input
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        className="w-full p-2 mb-3 rounded-lg"
                        type="text"
                        placeholder="Enter the title"
                    />
                    <input
                        value={body}
                        onChange={(e) => {
                            setBody(e.target.value);
                        }}
                        className="w-full p-2 mb-3 rounded-lg"
                        type="text"
                        placeholder="Enter the body"
                    />
                    <div className="text-center">
                        <button
                            onClick={handlePost}
                            className="w-[150px] bg-black text-white px-3 py-1 rounded-lg active:scale-90 transition-all"
                        >
                            ADD THE POST
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                    {data?.data?.length > 0 &&
                        data.data.map((value, index) => {
                            return (
                                <div
                                    className="w-full p-3 text-white bg-black rounded-lg"
                                    key={value.id}
                                >
                                    <li>{value.title}</li>
                                    <li>{value.body}</li>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Masala2;
