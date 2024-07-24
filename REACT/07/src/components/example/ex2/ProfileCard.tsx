const ProfileCard = (props: {
    bgImg: string;
    userImg: string;
    userName: string;
    userId: string;
    onFollow: () => void;
}) => {
    return (
        <>
            <article className="card">
                <div>
                    <img
                        className="card-img"
                        src={props.bgImg}
                        alt="background-pic"
                    />
                </div>
                <div className="profile">
                    <img
                        className="prof-img"
                        src={props.userImg}
                        alt="profile-pic"
                    />
                    <h3 className="alias">{props.userName}</h3>
                    <p className="username">{props.userId}</p>
                    <button onClick={props.onFollow}>Follow</button>
                </div>
            </article>
        </>
    );
};
export default ProfileCard;
