"use client"
import { AreaChart, Card, Title } from '@tremor/react'
import React from 'react'

interface RainChartProps {
    results: Root
}

const RainChart = ({ results }: RainChartProps) => {
    const hourly = results.hourly.time.map((time) => new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false
    })).slice(0, 24)

    const data = hourly.map((hour, i) => ({
        time: Number(hour),
        "Rain (%)": results.hourly.precipitation_probability[i],
    }))

    const dataFormatted = (number: number) => `${number} %`
    return (
        <Card>
            <Title>Chances of Rain</Title>
            <AreaChart
                data={data}
                className='mt-6'
                showLegend
                index='time'
                categories={["Rain (%)"]}
                colors={["blue"]}
                minValue={0}
                maxValue={100}
                valueFormatter={dataFormatted}
                yAxisWidth={40}
            />
        </Card>
    )
}

export default RainChart
