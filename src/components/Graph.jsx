import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = ({chartData,payment}) => {
    return (
        <div className="chart-cont w-3/4 mt-10 mx-auto flex flex-col items-center md:mx-0 h-96 md:mt-0">
            <p className="text-xl font-semibold">Monthly Payment: ${Math.round(payment*100)/100}</p>
            <Pie data={chartData} />
        </div>
    )
}

export default Graph;