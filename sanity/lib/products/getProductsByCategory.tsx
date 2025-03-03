import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live";

export const getProductsByCategory = async (categorySlug: string) => {
    const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
        *[
            _type == "product"
            && references(*[_type == "category" && slug.current == $categorySlug]._id)
        ] | order(name asc)
        `);

        try{
            //Use sanityFetch to send the query and pass the search parameter with a wildcard
            const product = await sanityFetch({
                query: PRODUCTS_BY_CATEGORY_QUERY,
                params: { categorySlug },
            });

            //Return the product data or null if not found
            return product.data || [];
        } catch(error) {
            console.error("Error fetching product by ID:", error);
            return [];
        }
}