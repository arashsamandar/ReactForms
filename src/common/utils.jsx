import {useNavigate} from 'react-router-dom';

export default function GetNav(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        // 👇️ navigate programmatically
        navigate(props.address);
    };

    return (
        <div>
            <button onClick={handleClick}>{props.address}</button>
        </div>
    );
}