import React from 'react';
import { useUserMetadata } from '../hooks/useUserMetadata';
import { useMeUserQuery } from '../hooks/hooks';


function Me() {
  const { data: UserMetadataFromAuth0 } = useUserMetadata();
  const { data: UserMetadataFromServer } = useMeUserQuery();

  return <pre style={{ color: 'white' }}>{JSON.stringify({
    UserMetadataFromAuth0,
    UserMetadataFromServer
  }, null, 4)}</pre>;
}

export default Me;
