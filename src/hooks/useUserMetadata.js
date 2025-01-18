import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';

export function useUserMetadata() {
  const { getAccessTokenSilently, user } = useAuth0();
  const domain = "dev-qyax2072h48uwzrg.us.auth0.com";

  return useQuery({
    queryKey: ['current_user', user?.sub],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          scope: "read:current_user",
        },
      });

      const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

      const metadataResponse = await fetch(userDetailsByIdUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const fullUser = await metadataResponse.json();
      if (fullUser.error) throw new Error(fullUser.error)
      return fullUser;
    }
  });
}
