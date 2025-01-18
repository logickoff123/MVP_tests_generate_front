import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';

export const useQuestionQuery = () => {
    return useQuery({
        queryKey: ['generate_question'],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/generate_question', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "topic": "math",
                    "difficulty": "easy",
                    "amount": 10
                })
            }
            );
            return await response.json();
        }
    });
}

export const useMeUserQuery = () => {
    const { getAccessTokenSilently } = useAuth0();
    return useQuery({
        queryKey: ['user/me'],
        queryFn: async () => {
            const accessToken = await getAccessTokenSilently({
                authorizationParams: {
                    scope: "read:current_user",
                },
            });
            const response = await fetch('http://127.0.0.1:8000/users/me', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                // body: JSON.stringify({
                //     "topic": "math",
                //     "difficulty": "easy",
                //     "amount": 10
                // })
            }
            );
            return await response.json();
        }
    });
}

export const useAnswersQuery = () => {
    return useQuery({
        queryKey: ['get_my_answers'],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/get_my_answers', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "topic": "math",
                    "difficulty": "easy",
                    "amount": 10
                })
            }
            );
            return await response.json();
        }
    });
}
/*
export const useProductsQuery = () => {
    return useQuery({
        queryKey: ['all_product'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3001/api/product/all`);
            return await response.json();
        }
    });
}
export const useSpecificProductQuery = (productId) => {
    return useQuery({
        queryKey: ['specific_product', productId],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3001/api/product/${productId}`);
            return await response.json();
        }
    });
}

export const useCategoriesQuery = () => {
    return useQuery({
        queryKey: ['all_category'],
        /** @returns {Promise<{ asd: 'asd' }>} */
/*
        queryFn: async () => {
            const response = await fetch(`http://localhost:3001/api/category/all`);
            return await response.json();
        }
    });
}
*/

export const useAllAnswersQuery = () => {
    return useQuery({
        queryKey: ['my_answers'],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/my_answers', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            );
            return await response.json();
        }
    });
}
