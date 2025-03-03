import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

//Function to get all categories
export const getAllCategories = async () => {
    const ALL_CATEGORIES_QUERY = defineQuery(`
            *[_type == "category"] | order(name asc)
        `);

        try{
            //Use sanityFetch to send the query
            const products = await sanityFetch({
                query: ALL_CATEGORIES_QUERY,
            });

            //Return the list of products, or an empty array if none are found
            return products.data || [];
        } catch(error) {
            console.error("Error fetching all products:", error);
            return[];
        }
}