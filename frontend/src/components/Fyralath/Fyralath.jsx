import React, { useState, useEffect } from 'react';
import './Fyralath.css';
import { getFyralath, getFyralathChart } from '../../API/useAPI';
import LineChart from '../../utils/charts/LineChart';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";


const Fyralath = () => {

    const [tabledata, setTabledata] = useState([
        { name: 19019, value: "loading" },
    ]);
    const [data, setData] = useState([]);

    const [chartData,SetChartData] = useState({
        labels: ["11-29","12-01"],
        datasets: [
            {
                label:"Price",
                data:[350,334,332,325,202,210,12,201],
                backgroundColor:[
                    "rgba(75,192,192,1)"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });
    

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFyralath();
                if (data && data.IDs && data.itemprices && data.IDs.length === data.itemprices.length) {
                    let obj = [];
                    for (let i = 0; i < data.IDs.length; i++) {
                        obj.push({ ID: data.IDs[i], value: data.itemprices[i],amounts:data.amounts[i] });
                    }
                    setData(data);
                    setTabledata(obj);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();
    }, []);
    

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFyralathChart();
                SetChartData({
                    labels: data.data.slice().reverse().map(item => item.update),
                    datasets: [
                        {
                            label:"Price",
                            data:data.data.slice().reverse().map(item => item.gold),
                            backgroundColor:[
                                "rgba(75,192,192,1)"
                            ],
                            borderColor: "black",
                            borderWidth: 2
                        }
                    ]
                }

                )
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchData();
    }, []);


    useEffect(() => {
        const whTooltips = {
            colorLinks: true,
            iconizeLinks: true,
            renameLinks: true,
            iconSize: 'small',
            stickyTooltips: false,
            delayInitial: 200
        };
        window.whTooltips = whTooltips;

        const script = document.createElement('script');
        script.innerHTML = `var whTooltips = ${JSON.stringify(whTooltips)}`;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://wow.zamimg.com/js/tooltips.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [data]);


    

    Chart.register(CategoryScale);

    




    return (
        <div className="fyralath-container">
            <table className="fiery-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {tabledata?.map((item,index) => (
                        <tr key={index}>
                            <td>
                                <a href={`https://www.wowhead.com/item=${item.ID}`} className="">[Fyr'alath the Dreamrender]</a>
                            </td>
                            <td>{item.amounts}</td>

                            <td>{Math.floor(item.value)}<img src="/gold.png" width={"8px"} height={"8px"}/> {Math.round(item.value % 1 *10) }<img src="/silver.png" width={"8px"} height={"8px"}/></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div className="price-summation">
            <a href={`https://www.wowhead.com/item=206448`} className="">[Fyr'alaath the Dreamrender]</a>: {data["gold"]?.toLocaleString()}<img src="/gold.png" width={"8px"} height={"8px"}/>
            <p style={{color:"black"}}>Last updated: {data["update"]} UTC-02:00</p>

            </div>
            <div style={{width:"1000px",height:"800px"}}>
                <LineChart chartData={chartData} options={{ maintainAspectRatio: false }}/>
            </div>
            
        </div>
    );
};

export default Fyralath;
