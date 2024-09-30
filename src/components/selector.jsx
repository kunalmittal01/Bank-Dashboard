import Slider from '@mui/material/Slider';
import {styled} from '@mui/material/styles'

const SparklingSlider = styled(Slider)(({ theme }) => ({
    position: 'relative',
    height: 8,
    '& .MuiSlider-thumb': {
      width: 24,
      height: 24,
      backgroundColor: '#fff',
      boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5), 0px 0px 20px rgba(255, 255, 255, 0.2)',
      border: '2px solid currentColor',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        animation: 'sparkle 1s infinite linear',
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
        top: '-5px',
        left: '-5px',
      },
    },
    '@keyframes sparkle': {
      '0%': {
        transform: 'scale(1)',
        opacity: 1,
      },
      '50%': {
        transform: 'scale(1.5)',
        opacity: 0.5,
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 1,
      },
    },
    '& .MuiSlider-track': {
      border: 'none',
      backgroundColor: '#82b1ff',
    },
    '& .MuiSlider-rail': {
      opacity: 0.8,
      backgroundColor: '#bdbdbd',
    },
  }));
  

const Selector = (props)=>{
    return (
        <div className="select">
            <p className="text-lg font-semibold">{props.name}</p>
            <p className="text-2xl mt-2 font-medium">{props.symbol} {props.amount}</p>
            <div className="select-range w-full md:w-1/2">
                {/* <input className="w-full" type="range" min={`${props.minrange}`} max={`${props.maxrange}`} onChange={props.onChange}  /> */}
                <SparklingSlider aria-label="Custom marks" min={props.minrange} max={props.maxrange}  valueLabelDisplay="auto"  onChange={props.onChange} />
                <p className="flex justify-between"><span>$ {props.minrange}</span><span>$ {props.maxrange}</span></p>
            </div>
        </div>
    )
}

export default Selector;