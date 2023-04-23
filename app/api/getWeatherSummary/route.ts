import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(req: Request) {
    const {weatherData} = await req.json();
    
    
    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: `Pretend you're a weather news presenter presenting LIVE on television. Be energetic and full of
                charisma. Introduce yourself as Sasha and say you are LIVE from Ukraine. State the city you are providing
                a summary for. Than give a summary of todays weather only. Make it easy for the viewer to understand
                and know what to do to prepare for those weather conditions such as wear SPF if the UV is high etc.
                Use the uv_index data provides to provide UV advice. Provide a joke regarding the weather. Assume the 
                data came from your team at the news office and not the user.`
            }, {
                role: `user`,
                content: `Hi there, can i get a summary of the todays weather, use the following info to get the weather
                data: ${JSON.stringify(weatherData)}`
            }
        ]
    })

    const {data} = res

    return NextResponse.json(data.choices[0].message)
    
}