import { ICategoryItem } from "../types/RequestData";
import { ICard } from "../types/Card";

export const BASE_URL =
  "https://englio-default-rtdb.europe-west1.firebasedatabase.app";

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/categories.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function getWelcome() {
  const response = await fetch(`${BASE_URL}/welcome.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function getCards(category: string) {
  const response = await fetch(`${BASE_URL}/${category}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const cardsData: ICard[] = [];

  for (const key in data) {
    const favoritesObj = {
      ...data[key],
      id: key
    };

    cardsData.push(favoritesObj);
  }

  return cardsData;
}

export async function getFavorites() {
  const response = await fetch(`${BASE_URL}/favorites.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function getFavoritesByCategory(category: string) {
  const response = await fetch(`${BASE_URL}/favorites/${category}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function removeFromFavorites(
  category: string,
  id: number | string
) {
  await fetch(`${BASE_URL}/favorites/${category}/list/${id}.json`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return null;
}

export async function addToFavorite(
  favoriteData: ICategoryItem,
  category: string | number
) {
  console.log(`${BASE_URL}/favorites/${category}/list.json`);

  const response = await fetch(`${BASE_URL}/favorites/${category}/list.json`, {
    method: "POST",
    body: JSON.stringify(favoriteData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function getNotifications() {
  const response = await fetch(`${BASE_URL}/notifications.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}
