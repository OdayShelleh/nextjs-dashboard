import {fetchCardData} from '../lib/data';

export async function GET(request: Request) {
    const cardData = await fetchCardData();
    return Response.json(cardData);
}