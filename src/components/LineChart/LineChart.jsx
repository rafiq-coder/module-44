import { LineChart as LChart, Line, XAxis,YAxis } from 'recharts';

const LineChart = () => {


    const subjectMarksData = [
        { "id": 1, "name": "Alice", "math": 85, "physics": 78, "chemistry": 88 },
        { "id": 2, "name": "Bob", "math": 78, "physics": 85, "chemistry": 80 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 90, "chemistry": 94 },
        { "id": 4, "name": "David", "math": 74, "physics": 70, "chemistry": 76 },
        { "id": 5, "name": "Eva", "math": 88, "physics": 82, "chemistry": 84 },
        { "id": 6, "name": "Frank", "math": 80, "physics": 79, "chemistry": 83 },
        { "id": 7, "name": "Grace", "math": 91, "physics": 89, "chemistry": 92 },
        { "id": 8, "name": "Hannah", "math": 95, "physics": 94, "chemistry": 90 },
        { "id": 9, "name": "Ivy", "math": 77, "physics": 75, "chemistry": 78 },
        { "id": 10, "name": "Jack", "math": 84, "physics": 80, "chemistry": 85 }
      ];


    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;