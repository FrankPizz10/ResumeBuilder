import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/generate-bullet-points', async (req, res) => {
    const { jobTitle, responsibilities } = req.body;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: `Generate resume bullet points for a ${jobTitle} with the following responsibilities: ${responsibilities}`
                    }
                ],
                max_tokens: 150,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        const bulletPoints = response.data.choices[0].message.content;
        res.json({ bulletPoints });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating bullet points');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
