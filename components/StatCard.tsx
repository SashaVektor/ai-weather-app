"use client"
import React from 'react'
import { Card, Metric, Text } from '@tremor/react'
import { Color } from '@tremor/react';

interface StatCardProps {
    title: string;
    metric: string;
    color?: Color
}

const StatCard = ({ metric, title, color }: StatCardProps) => {
    return (
        <Card decorationColor={color} decoration='top'>
            <Text>{title}</Text>
            <Metric>{metric}</Metric>
        </Card>
    )
}

export default StatCard
