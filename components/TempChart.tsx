"use client"
import { AreaChart, Card, Title } from '@tremor/react'
import React from 'react'

interface TempChartProps {
    results: Root
}

const TempChart = ({ results }: TempChartProps) => {
    const hourly = results.hourly.time.map((time) => new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false
    })).slice(0, 24)

    const data = hourly.map((hour, i) => ({
        time: Number(hour),
        "UV Index": results.hourly.uv_index[i],
        "Temperature (C)": results.hourly.temperature_2m[i]
    }))

    const dataFormatted = (number: number) => `${number}°`
    return (
        <Card>
            <Title>Temperature & UV Index</Title>
            <AreaChart
                data={data}
                className='mt-6'
                showLegend
                index='time'
                categories={["Temperature (C)", "UV Index"]}
                colors={["yellow", "rose"]}
                minValue={0}
                valueFormatter={dataFormatted}
                yAxisWidth={40}
            />
        </Card>
    )
}

export default TempChart
