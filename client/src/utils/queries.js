import { gql } from '@apollo/client';

export const USER_REQUEST = gql `
{
    me {    _id, username, email    }
    }
  }
`;
