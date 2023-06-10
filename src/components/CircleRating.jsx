/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleRating = ({rating}) => {
    return (
        <div className="w-10 h-10 rounded-[50%] p-[2px] absolute -bottom-2 bg-white font-semibold">
        <CircularProgressbar
            value={rating}
            maxValue={10}
            text={rating}
            styles={buildStyles({
                pathColor:
                    rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                    textColor: 'black',
                    textSize: '38px',
            })}
        />
    </div>
    )
}

export default CircleRating