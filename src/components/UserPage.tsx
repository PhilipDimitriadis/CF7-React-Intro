import {useEffect} from "react";
import {useParams} from "react-router";

const UserPage = () => {
    const {userId} = useParams();

    useEffect(() => {
        document.title = `CF7 User id: ${userId}`;
    }, [userId]);

    return (
        <>
            <h1>User with id: 12</h1>
        </>
    )
}

export default UserPage;