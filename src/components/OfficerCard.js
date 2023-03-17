function OfficerCard({name, position, picture})
{
    return (
        <div className='card-outline'>
            <img src={picture} alt={position} className="profile-pic"/>
            <h1>{name}</h1>
            <h2>{position}</h2>
        </div>
    );
}

export default OfficerCard;