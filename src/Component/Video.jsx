import ReactPlayer from 'react-player';

function Video(){
    return (
        <div>
            <h1>video</h1>
        
        <div>
            <div className='viedo'>
            <ReactPlayer url="https://youtu.be/EY3gC0QLEl8" width="300px" height="200px"/>
            <ReactPlayer url="https://youtu.be/IKcbLtGok3w" width="300px" height="200px"/>
            <ReactPlayer url="https://youtu.be/MiDx9OEAjCs" width="300px" height="200px"/>
            </div>

            <div className='viedo'>
            <ReactPlayer url="https://youtu.be/fGoRKTplBzo" width="300px" height="200px"/>
            <ReactPlayer url="https://youtu.be/vWM6Ji-hcLc" width="300px" height="200px"/>
            <ReactPlayer url="https://youtu.be/UQkV6pOJiDM" width="300px" height="200px"/>
            </div>

            <div className='viedo'>
            <ReactPlayer url="https://youtu.be/iK4KxXKR3BY" width="300px" height="200px"/>
            <ReactPlayer url="https://youtu.be/gnFmCnkp5F4" width="300px" height="200px"/>
            <ReactPlayer url="https://youtu.be/5H169xAe5J4" width="300px" height="200px"/>
            </div>
            
            </div>
            </div>
    )
    }
    export default Video