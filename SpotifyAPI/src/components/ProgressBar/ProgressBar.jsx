import "../ProgressBar/index.scss"

const ProgressBar = ({ progressBarRef, audioRef, currentTime, duration }) => {
    const formatTime = (time) => {
        if (!isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
        return '0:00';
    };

    return (
        <div className="progress">
            <input
                type="range"
                ref={progressBarRef}
                defaultValue={currentTime} // Use defaultValue instead of value
                max={duration}
                readOnly // Make the input read-only to prevent manual changes
            />
            <div className="progress--child">
                <div>
                    <span className="time current">{formatTime(currentTime)}</span>
                </div>
                <div>
                    <span className="time">{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );
};


export default ProgressBar;