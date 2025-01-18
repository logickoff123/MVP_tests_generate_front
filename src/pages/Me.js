import React from 'react';
import { useUserMetadata } from '../hooks/useUserMetadata';
import { useMeUserQuery } from '../hooks/hooks';
import { useAuth0 } from '@auth0/auth0-react';


function Me() {
  const { user: UserMetadataFromAuth0Hook } = useAuth0();
  const { data: UserMetadataFromAuth0ManualRequest } = useUserMetadata();
  const { data: UserMetadataFromServer } = useMeUserQuery();

  return <pre style={{ color: 'white' }}>{JSON.stringify({
    UserMetadataFromAuth0Hook,
    UserMetadataFromAuth0ManualRequest,
    UserMetadataFromServer
  }, null, 4)}</pre>;
}

export default Me;
