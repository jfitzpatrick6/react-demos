import { useState } from "react";

const Profile = () => {
    const [profile, setProfile] = useState({name: 'Jake', age: 24});
    const onNameChangeHandler = (event) => setProfile({...profile, name: event.target.value});
    const onAgeChangeHandler = (event) => setProfile({...profile, age: event.target.value});
    return (
	<div>
	    <h1>{profile.name}</h1>
	    <input onChange={onNameChangeHandler} placeholder='Enter Name' value={profile.name}/>
	    <p>{profile.age}</p>
	    <input onChange={onAgeChangeHandler} placeholder='Enter Age' value={profile.age}/>
	</div>
    )
}

export default Profile;
