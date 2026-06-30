import { CONFIG } from "./config.js";

export async function askGemini(prompt) {

    try {

        const response = await fetch(
            `${CONFIG.API_URL}?key=${CONFIG.API_KEY}`,
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    contents: [

                        {

                            parts: [

                                {
                                    text: prompt
                                }

                            ]

                        }

                    ]

                })

            }
        );

        if (!response.ok) {

            throw new Error("API request failed.");

        }

        const data = await response.json();

        return data.candidates[0].content.parts[0].text;

    }

    catch (error) {

        console.error(error);

        return "Sorry, something went wrong. Please try again.";

    }

}