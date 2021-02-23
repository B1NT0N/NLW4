export function ExperienceBar(){
    return(
        <header className="experience-bar">
            <span>0 Xp</span>
            <div>
                <div style= {{width:'60%'}}/>
                <span className="current-experience" style={{left:'60%'}} >
                360 Xp
                </span>
            </div>
            <span>600 Xp</span>
        </header>
    );
}