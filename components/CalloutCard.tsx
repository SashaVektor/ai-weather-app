"use client"
import { Callout } from '@tremor/react'
import {CheckCircleIcon, ExclamationIcon} from "@heroicons/react/solid"


interface CalloutCardProps {
    message: string
    warning?: boolean
}

const CalloutCard = ({message, warning}: CalloutCardProps) => {
  return (
    <Callout 
    title={message}
    icon={warning ? ExclamationIcon : CheckCircleIcon}
    color={warning ? "rose" : "teal"}
    />
  )
}

export default CalloutCard
