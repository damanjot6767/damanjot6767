import React from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';

interface DoughnutChartProps {
    labels?: string[],
    children?: React.ReactNode,
    data: number[]
}

const DoughnutChart:React.FC<DoughnutChartProps> = ({labels,data,children}) => {
  const chartData = {
    labels: ['1','2','3'],
    datasets: [{
      label: 'My First Dataset',
      data: data,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    },],
  };

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Doughnut Chart',
        color: 'black'
      },
    },
    responsive: true,
     maintainAspectRatio: false
  };
  


  return (
    <div className='w-[300px] h-[300px]'>
   
      <Doughnut data={chartData} options={chartOptions}/>
    </div>
  );
};

export default DoughnutChart;
