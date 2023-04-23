import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";


export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#394f68] to-[#183b7e] p-10 flex flex-col justify-center items-center'>
      <Card>
        <Text className='text-6xl text-bold text-center mb-10'>
          Weather AI
        </Text>
        <Subtitle className='text-xl text-center'>
          Powered by OpenAI, NextJS 13.3, Tailwind CSS, Tremor 2.0 + More!
        </Subtitle>
        <Divider className='my-10' />
        <Card className='bg-gradient-to-br from-[#394f68] to-[#183b7e]'>
          <CityPicker />
        </Card>
      </Card>
    </div>
  )
}
